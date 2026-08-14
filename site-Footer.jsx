/* SPORT[GEN], Footer */
const { useState: useFootState, useEffect: useFootEffect } = React;
function Footer() {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const [route, setRoute] = useFootState(window.location.hash.replace('#', '') || '/');
  useFootEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const isInv = route.startsWith('/investment-summit');  // SGN Investment Summit: graphite art-direction
  return (
    <footer className={'footer' + (isInv ? ' footer--inv' : '')}>
      <div className="footer__bg" aria-hidden="true" />
      <div className="sg-container footer__inner">
        <div className="footer__top">
          {isInv ? (
            <img className="footer__logo footer__logo--sgn" src="assets/brand/sgn-investment-summit.png" alt="[SGN] Invest" />
          ) : (
            <img className="footer__logo" src="assets/brand/sportgen-logo-official.png" alt="SPORT[GEN]" />
          )}
          <div className="footer__top-right">
            <div className="footer__meta"><span>26 &amp; 27 May 2027</span><span>Paris, France</span></div>
            <Button variant="primary" size="lg" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get Your Ticket</Button>
          </div>
        </div>

        <div className="footer__follow">
          <span className="footer__follow-label">Follow us on</span>
          <div className="footer__social">
            <a href="https://www.linkedin.com/company/sportgen-summit/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.96H5.56v8.38h2.78zM6.95 8.81a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.39 9.53v-4.59c0-2.45-1.31-3.59-3.06-3.59a2.64 2.64 0 0 0-2.39 1.31h-.04V9.96H10.1v8.38h2.78v-4.15c0-1.09.21-2.15 1.56-2.15 1.34 0 1.36 1.25 1.36 2.22v4.08h2.54z"/></svg>
            </a>
            <a href="https://www.instagram.com/sportgensummit/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        <nav className="footer__links">
          <a href="#/get-in-touch" onClick={(e) => go(e, '#/get-in-touch')}>Get In Touch</a>
          <a href="#/speakers" onClick={(e) => go(e, '#/speakers')}>2026 Speakers</a>
          <a href="#/partner" onClick={(e) => go(e, '#/partner')}>Partner</a>
          <a href="#/faq" onClick={(e) => go(e, '#/faq')}>FAQ</a>
          {/* Pas de lien vers #/sitemap : la route reste servie, mais on n'y accede
              qu'avec l'URL. La retirer de ROUTES la casserait. */}
        </nav>

        <div className="footer__bar">
          <span>© 2026 SPORT[GEN] Summit · sportgensummit.com</span>
          <span>
            All copyrights ·{' '}
            <a href="#/terms-and-conditions" onClick={(e) => go(e, '#/terms-and-conditions')}>Terms and Conditions</a> ·{' '}
            <a href="#/privacy" onClick={(e) => go(e, '#/privacy')}>Privacy policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
