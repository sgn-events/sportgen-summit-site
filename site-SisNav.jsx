/* [SGN] INVESTMENT SUMMIT, top nav (Machina-style: links · centred wordmark · CTAs) */
const { useState: useSisNavState, useEffect: useSisNavEffect } = React;

const SIS_BUY_URL = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
const SIS_CALL_URL = 'https://meetings-eu1.hubspot.com/aurelien-linyer/discovery-call?uuid=b569f199-9acb-4240-9d21-5907804ca26b';

/* Left-of-logo quick links. A third tuple element = dropdown sub-items (same shape as the
   SPORT[GEN] nav, see NAV_LEFT in site-Nav.jsx). */
const SIS_LINKS = [
  ['Speakers', '#/speakers'],
  ['Media', '#/media'],
  ['Sponsor', '#/sponsor', [
    ['Sponsor with SGN Invest', '#/sponsor'],
    ['Book a call', SIS_CALL_URL],
    ['Download our brochure', '#/get-in-touch'],
  ]],
];

/* Billetterie masquee (aout 2026) : le bouton "Tickets" devient "Register Interest"
   vers le formulaire Get in Touch de SGN Invest. Retablir pour rouvrir :
   const SIS_TICKETS_HREF = '#/tickets'; */
const SIS_CTA_HREF = '#/get-in-touch';

function SisNav() {
  const [route, setRoute] = useSisNavState(window.location.hash.replace('#', '') || '/');
  const [open, setOpen] = useSisNavState(false);
  const [openGroup, setOpenGroup] = useSisNavState(null); // mobile accordion
  useSisNavEffect(() => {
    const onHash = () => { setRoute(window.location.hash.replace('#', '') || '/'); setOpen(false); setOpenGroup(null); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const nav = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const isActive = (href) => route === href.replace('#', '');
  /* Anything that is not an in-page hash route leaves the SIS app (other site or external). */
  const isExternal = (href) => !href.startsWith('#');
  const subLink = ([label, href]) => (
    isExternal(href)
      ? <a key={href + label} href={href} target={href.startsWith('index.html') ? undefined : '_blank'} rel="noopener">{label}</a>
      : <a key={href + label} href={href} onClick={(e) => nav(e, href)}>{label}</a>
  );

  return (
    <React.Fragment>
      <nav className="sis-nav">
        <div className="sis-nav__inner">
          <div className="sis-nav__left">
            {SIS_LINKS.map(([label, href, sub]) => (
              sub ? (
                <div className="sis-nav__qdrop" key={label}>
                  <button className="sis-nav__link" type="button" aria-haspopup="true">{label}</button>
                  <div className="sis-nav__qdrop-panel">{sub.map(subLink)}</div>
                </div>
              ) : (
                <a key={href} className={'sis-nav__link' + (isActive(href) ? ' is-active' : '')}
                   href={href} onClick={(e) => nav(e, href)}>{label}</a>
              )
            ))}
          </div>

          {/* Nav : logo empile (Invest en dessous) ; le lockup horizontal est reserve au hero. */}
          <a className="sis-nav__brand" href="#/" onClick={(e) => nav(e, '#/')}>
            <img src="assets/brand/sgn-investment-summit.png" alt="[SGN] Invest" />
          </a>

          <div className="sis-nav__right">
            <a className="sis-nav__btn sis-nav__btn--outline" href="index.html">
              <span>Explore SGN</span>
              <svg className="sis-nav__btn-icon" width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
                <rect x="0" y="0" width="6" height="6" rx="1.5" fill="currentColor"></rect>
                <rect x="9" y="0" width="6" height="6" rx="1.5" fill="currentColor"></rect>
                <rect x="0" y="9" width="6" height="6" rx="1.5" fill="currentColor"></rect>
                <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor"></rect>
              </svg>
            </a>
            <a className="sis-nav__btn sis-nav__btn--gold" href={SIS_CTA_HREF} onClick={(e) => nav(e, SIS_CTA_HREF)}>Register Interest</a>
            <button className="sis-nav__burger" type="button" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={'sis-mobile' + (open ? ' is-open' : '')}>
        {SIS_LINKS.map(([label, href, sub]) => (
          sub ? (
            <div className="sis-mobile__group" key={label}>
              <button className="sis-mobile__trigger" type="button"
                      onClick={() => setOpenGroup(openGroup === label ? null : label)}>
                {label}<span aria-hidden="true">{openGroup === label ? '−' : '+'}</span>
              </button>
              {openGroup === label ? <div className="sis-mobile__sub">{sub.map(subLink)}</div> : null}
            </div>
          ) : (
            <a key={href} href={href} onClick={(e) => nav(e, href)}>{label}</a>
          )
        ))}
        <div className="sis-mobile__btns">
          <a className="sis-nav__btn sis-nav__btn--outline" href="index.html">Explore SGN</a>
          <a className="sis-nav__btn sis-nav__btn--gold" href={SIS_CTA_HREF} onClick={(e) => nav(e, SIS_CTA_HREF)}>Register Interest</a>
        </div>
      </div>
    </React.Fragment>
  );
}

window.SisNav = SisNav;
