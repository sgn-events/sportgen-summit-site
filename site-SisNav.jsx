/* [SGN] INVESTMENT SUMMIT, top nav (Machina-style: links · centred wordmark · CTAs) */
const { useState: useSisNavState, useEffect: useSisNavEffect } = React;

const SIS_BUY_URL = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';

const SIS_LINKS = [
  ['Speakers', '#/speakers'],
  ['Media', '#/media'],
  ['Sponsor', '#/sponsor'],
];

const SIS_TICKETS_HREF = '#/tickets';

function SisNav() {
  const [route, setRoute] = useSisNavState(window.location.hash.replace('#', '') || '/');
  const [open, setOpen] = useSisNavState(false);
  useSisNavEffect(() => {
    const onHash = () => { setRoute(window.location.hash.replace('#', '') || '/'); setOpen(false); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const nav = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const isActive = (href) => route === href.replace('#', '');

  return (
    <React.Fragment>
      <nav className="sis-nav">
        <div className="sis-nav__inner">
          <div className="sis-nav__left">
            {SIS_LINKS.map(([label, href]) => (
              <a key={href} className={'sis-nav__link' + (isActive(href) ? ' is-active' : '')}
                 href={href} onClick={(e) => nav(e, href)}>{label}</a>
            ))}
          </div>

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
            <a className="sis-nav__btn sis-nav__btn--gold" href={SIS_TICKETS_HREF} onClick={(e) => nav(e, SIS_TICKETS_HREF)}>Tickets</a>
            <button className="sis-nav__burger" type="button" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={'sis-mobile' + (open ? ' is-open' : '')}>
        {SIS_LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={(e) => nav(e, href)}>{label}</a>
        ))}
        <div className="sis-mobile__btns">
          <a className="sis-nav__btn sis-nav__btn--outline" href="index.html">Explore SGN</a>
          <a className="sis-nav__btn sis-nav__btn--gold" href={SIS_TICKETS_HREF} onClick={(e) => nav(e, SIS_TICKETS_HREF)}>Tickets</a>
        </div>
      </div>
    </React.Fragment>
  );
}

window.SisNav = SisNav;
