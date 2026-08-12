/* <BrevoForm variant="navy" | "invest" /> — mounts a Brevo embedded sign-up form.

   Brevo ships its embed as static HTML + a script that binds itself on load. In this SPA
   the form appears on a route change, long after that script would have run, so the markup
   is injected first and main.js is (re)loaded afterwards, once per mount. */
const { useEffect: useBrevoEffect, useRef: useBrevoRef, useState: useBrevoState } = React;

const BREVO_MAIN_JS = 'https://sibforms.com/forms/end-form/build/main.js';
const BREVO_STYLES = 'https://sibforms.com/forms/end-form/build/sib-styles.css';

/* Brevo's stylesheet + base rules belong in <head>; add them the first time a form mounts. */
function brevoEnsureHead() {
  if (!document.getElementById('brevo-sib-styles')) {
    const link = document.createElement('link');
    link.id = 'brevo-sib-styles';
    link.rel = 'stylesheet';
    link.href = BREVO_STYLES;
    document.head.appendChild(link);
  }
  if (!document.getElementById('brevo-base-css')) {
    const style = document.createElement('style');
    style.id = 'brevo-base-css';
    style.textContent = window.BREVO_BASE_CSS;
    document.head.appendChild(style);
  }
}

function BrevoForm({ variant, onSuccess }) {
  const hostRef = useBrevoRef(null);
  const [failed, setFailed] = useBrevoState(false);
  const doneRef = useBrevoRef(false);

  /* Brevo signals the outcome by toggling `sib-form-message-panel--active` on its two panels.
     Those panels sit at the TOP of the form: after clicking Submit at the bottom of a long
     form the confirmation lands off-screen, so bring it into view. Brevo's own scrollTo only
     moves the window, which does nothing when the form lives in a scrollable panel. */
  useBrevoEffect(() => {
    const host = hostRef.current;
    if (!host || !window.MutationObserver) return undefined;
    const mo = new MutationObserver(() => {
      const ok = host.querySelector('#success-message.sib-form-message-panel--active');
      const ko = host.querySelector('#error-message.sib-form-message-panel--active');
      const panel = ok || ko;
      if (panel) panel.scrollIntoView({ block: 'nearest' });
      if (ok && !doneRef.current) {
        doneRef.current = true;
        if (onSuccess) onSuccess();
      }
    });
    mo.observe(host, { attributes: true, attributeFilter: ['class'], subtree: true });
    return () => mo.disconnect();
  }, [variant, onSuccess]);

  useBrevoEffect(() => {
    brevoEnsureHead();
    window.brevoSetGlobals();
    // A fresh <script> node each mount: same URL, but re-executed so it binds this form.
    const prev = document.getElementById('brevo-main-js');
    if (prev) prev.remove();
    const s = document.createElement('script');
    s.id = 'brevo-main-js';
    s.src = BREVO_MAIN_JS;
    s.onerror = () => setFailed(true);
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, [variant]);

  return (
    <div className={'brevo brevo--' + variant} ref={hostRef}>
      <div dangerouslySetInnerHTML={{ __html: window.brevoFormHTML(variant) }} />
      {failed ? (
        <p className="brevo__note">
          Form not loading? <a href={window.BREVO_FORMS[variant].action} target="_blank" rel="noopener noreferrer">Open it in a new tab →</a>
        </p>
      ) : null}
    </div>
  );
}

Object.assign(window, { BrevoForm });
