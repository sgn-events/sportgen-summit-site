/* SPORT[GEN], sticky navigation: left link pills + right "Explore SGN" mega menu */
const { useState: useNavState, useEffect: useNavEffect } = React;

/* Left-of-logo quick links. A third tuple element = dropdown sub-items.
   Un href sans '#' quitte l'app (autre page du site, ex. sis.html). */
const NAV_LEFT = [
  ['SGN Invest', 'sis.html'],
  ['Sponsor', '#/sponsor', [
    ['Sponsor with SGN', '#/sponsor'],
    ['Book a call', 'https://meetings-eu1.hubspot.com/aurelien-linyer/discovery-call?uuid=b569f199-9acb-4240-9d21-5907804ca26b'],
    ['Download our brochure', '#/download-brochure'],
  ]],
];

/* "Explore SGN" mega menu, 3 columns */
const SGN_CDN = 'https://framerusercontent.com/images/';
const MEGA_COLS = [
  { heading: 'SGN Week', vignettes: true, items: [
    ['SGN Week', '#/side-events', SGN_CDN + 'YS423by22cxS7BAwz4vMTZoCQs.png', false, 'A full week of sport across Paris'],
    ['SGN Invest', 'sis.html', 'assets/sgn-investment-square.png', true, 'Where sport capital gets deployed'],
    ['The Gala', '#/vip-dinner', SGN_CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg', false, 'A private evening with industry leaders'],
    ['The Draft', '#/startup-competition', SGN_CDN + 'M8ZEBZWVvM9a4GcqTMeFXBk.png', false, '200+ startups pitch the future of sport'],
    ['Side Events', '#/half-time-drinks', 'assets/halftime-crowd.jpg', false, 'Golden-hour drinks to the final toast'],
  ] },
  { heading: 'Program', sub: '2026 Edition', items: [
    ['2026 Agenda', '#/agenda'], ['2026 Speakers', '#/speakers'], ['Why Attend', '#/why-attend'],
    ['Relive SGN 2026', '#/relive'],
  ] },
  { heading: 'Ecosystem', items: [
    ['Sponsors', '#/sponsor'], ['Media', '#/medias'], ['News', '#/news'], ['SGN App', '#/app'],
  ] },
];

function Nav() {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const [scrolled, setScrolled] = useNavState(false);
  const [open, setOpen] = useNavState(false);      // mobile drawer
  const [openCol, setOpenCol] = useNavState(null);  // mobile accordion
  const [route, setRoute] = useNavState(window.location.hash.replace('#', '') || '/');

  useNavEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onHash = () => { setRoute(window.location.hash.replace('#', '') || '/'); setOpen(false); setOpenCol(null); };
    window.addEventListener('hashchange', onHash);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('hashchange', onHash); };
  }, []);

  const navTo = (href) => { setOpen(false); setOpenCol(null); window.location.hash = href.replace('#', ''); };
  const isActive = (href) => route === href.replace('#', '');
  const isInv = route.startsWith('/investment-summit');  // SGN Investment Summit: graphite art-direction
  /* Billetterie masquee (aout 2026) : le CTA "2027 Tickets" devient "Register Interest"
     vers le formulaire Get in Touch. Retablir ticketsHref pour rouvrir la billetterie :
     const ticketsHref = isInv ? '#/investment-summit/tickets' : '#/tickets'; */
  const ctaHref = '#/get-in-touch';

  // Live-site pill animation: label slides up, gold rounded layer rises, twin label slides in
  const fx = (text) => (
    <React.Fragment>
      <span className="navfx__bg" aria-hidden="true"></span>
      <span className="navfx__l1">{text}</span>
      <span className="navfx__l2" aria-hidden="true">{text}</span>
    </React.Fragment>
  );

  // 2x2 dot grid icon for Explore SGN
  const gridIcon = (
    <svg className="sg-mega__icon" width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
      <rect x="0" y="0" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="9" y="0" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="0" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
    </svg>
  );

  return (
    <header className={'sg-nav' + (scrolled ? ' sg-nav--scrolled' : '') + (isInv ? ' sg-nav--inv' : '')}>
      <div className="sg-nav__inner">
        {/* LEFT, quick link pills */}
        <nav className="sg-nav__menus">
          {NAV_LEFT.map(([label, href, sub]) => (
            sub ? (
              <div className="sg-nav__qdrop" key={label}>
                <button className="sg-nav__quick" type="button" aria-haspopup="true">
                  {label}
                </button>
                <div className="sg-nav__qdrop-panel">
                  {sub.map(([l, h]) => {
                    const sext = !h.startsWith('#');
                    return sext
                      ? <a key={h + l} href={h} target="_blank" rel="noopener">{l}</a>
                      : <a key={h + l} href={h} onClick={(e) => { e.preventDefault(); navTo(h); }}>{l}</a>;
                  })}
                </div>
              </div>
            ) : (
              <a key={href}
                 className="sg-nav__quick"
                 href={href} onClick={href.startsWith('#') ? (e) => { e.preventDefault(); navTo(href); } : undefined}>{label}</a>
            )
          ))}
        </nav>

        {/* CENTER, brand */}
        <a className="sg-nav__brand" href="#/" onClick={(e) => { e.preventDefault(); navTo('#/'); }}>
          {isInv ? (
            <img className="sg-nav__brand-sgn" src="assets/brand/sgn-investment-summit.png" alt="[SGN] Invest" />
          ) : (
            <img src="assets/brand/sportgen-logo-official.png" alt="SPORT[GEN]" />
          )}
        </a>

        {/* RIGHT, register interest + Explore SGN mega menu */}
        <div className="sg-nav__cta">
          <Button variant="secondary" size="sm" className="sg-btn--nav-navy sg-btn--cta" href={ctaHref} onClick={(e) => { e.preventDefault(); navTo(ctaHref); }}>Register Interest</Button>
          <div className="sg-nav__mega">
            <button className="sg-nav__mega-trigger" aria-haspopup="true">
              <span>Explore SGN</span>{gridIcon}
            </button>
            <div className="sg-nav__mega-panel">
              {MEGA_COLS.map((col) => (
                <div className={'sg-mega__col' + (col.vignettes ? ' sg-mega__col--vig' : '')} key={col.heading}>
                  <h4 className="sg-mega__heading">{col.heading}</h4>
                  {col.sub ? <span className="sg-mega__subheading">{col.sub}</span> : null}
                  {col.vignettes ? (
                    <div className="sg-mega__vgrid">
                      {col.items.map(([label, href, img, dark, sub]) => {
                        const ext = !href.startsWith('#');
                        return (
                        <a key={href} href={href}
                           className={'sg-mega__vig' + (dark ? ' sg-mega__vig--dark' : '') + (isActive(href) ? ' is-active' : '')}
                           onClick={ext ? undefined : (e) => { e.preventDefault(); navTo(href); }}>
                          <span className="sg-mega__vig-thumb">
                            <img src={img} alt="" loading="lazy" />
                            {dark ? null : (
                              <span className="sg-mega__vig-badge" aria-hidden="true">
                                <img src="assets/sgn-wordmark.png" alt="" />
                              </span>
                            )}
                          </span>
                          <span className="sg-mega__vig-text">
                            <span className="sg-mega__vig-label">{label}</span>
                            {sub ? <span className="sg-mega__vig-sub">{sub}</span> : null}
                          </span>
                        </a>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="sg-mega__list">
                      {col.items.map(([label, href], i) => (
                        <a key={col.heading + i} href={href}
                           className={'sg-mega__link' + (isActive(href) ? ' is-active' : '')}
                           onClick={(e) => { e.preventDefault(); navTo(href); }}>{label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="sg-nav__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="sg-nav__mobile">
          {NAV_LEFT.map(([label, href, sub]) => (
            sub ? (
              <div className="sg-nav__mgroup" key={label}>
                <button className="sg-nav__mtrigger" onClick={() => setOpenCol(openCol === label ? null : label)}>
                  {label}<span aria-hidden="true">{openCol === label ? '−' : '+'}</span>
                </button>
                {openCol === label && (
                  <div className="sg-nav__msub">
                    {sub.map(([l, h]) => (
                      h.startsWith('#')
                        ? <a key={h + l} href={h} onClick={(e) => { e.preventDefault(); navTo(h); }}>{l}</a>
                        : <a key={h + l} href={h} target="_blank" rel="noopener">{l}</a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button key={href} className="sg-nav__mtrigger"
                onClick={() => { if (href.startsWith('#')) navTo(href); else window.location.href = href; }}>{label}</button>
            )
          ))}
          {MEGA_COLS.map((col) => (
            <div className="sg-nav__mgroup" key={col.heading}>
              <button className="sg-nav__mtrigger" onClick={() => setOpenCol(openCol === col.heading ? null : col.heading)}>
                {col.heading}<span aria-hidden="true">{openCol === col.heading ? '−' : '+'}</span>
              </button>
              {openCol === col.heading && (
                <div className="sg-nav__msub">
                  {col.items.map(([label, href], i) => {
                    const ext = !href.startsWith('#');
                    return <a key={col.heading + i} href={href} onClick={ext ? undefined : (e) => { e.preventDefault(); navTo(href); }}>{label}</a>;
                  })}
                </div>
              )}
            </div>
          ))}
          <div className="sg-nav__mcta">
            <Button variant="secondary" className="sg-btn--nav-navy sg-btn--cta" href={ctaHref} onClick={(e) => { e.preventDefault(); navTo(ctaHref); }}>Register Interest</Button>
          </div>
        </div>
      )}
    </header>
  );
}

Object.assign(window, { Nav });
