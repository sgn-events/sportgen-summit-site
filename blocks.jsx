/* SPORT[GEN], shared, reusable page blocks (composed across all routes) */

// Generic page hero: eyebrow + two-tone H1 + subtitle + optional CTA, on a gold-streak plate (or a photo via bgImage).
function PageHero({ eyebrow, titleWhite, titleGold, sub, ctaLabel, ctaHref, variant, bgImage, stacked, art, goldFirst, heroClass }) {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    if (/^https?:/i.test(href || '')) return; // external links navigate normally
    e.preventDefault(); window.location.hash = (href || '#/').replace('#', '');
  };
  return (
    <section className={'page-hero' + (variant === 'tall' ? ' page-hero--tall' : '') + (heroClass ? ' ' + heroClass : '')}>
      <div className={'page-hero__bg' + (art ? ' page-hero__bg--' + art : '')} aria-hidden="true" />
      {bgImage ? <img className="page-hero__img" src={bgImage} alt="" aria-hidden="true" /> : null}
      {bgImage ? <div className="page-hero__shade" aria-hidden="true" /> : null}
      <div className="sg-container page-hero__inner">
        {eyebrow ? <span className="sg-eyebrow sg-eyebrow--gold">{eyebrow}</span> : null}
        {goldFirst
          ? <h1 className="page-hero__title"><span className={'sg-gold-text' + (stacked ? ' page-hero__gold-line' : '')}>{titleGold}</span> {titleWhite}</h1>
          : <h1 className="page-hero__title">{titleWhite} {titleGold ? <span className={'sg-gold-text' + (stacked ? ' page-hero__gold-line' : '')}>{titleGold}</span> : null}</h1>}
        {sub ? <p className="page-hero__sub">{sub}</p> : null}
        {ctaLabel ? <div className="page-hero__cta"><Button variant="primary" size="lg" href={ctaHref} onClick={(e) => go(e, ctaHref)}>{ctaLabel}</Button></div> : null}
      </div>
    </section>
  );
}

// Section heading: eyebrow (+rule) and a ghost two-tone heading.
function SectionHead({ eyebrow, eyebrowGold, ghost, white, gold, lead, center }) {
  const { GhostHeading, Eyebrow } = window.SPORTGENDesignSystem_882f1e;
  return (
    <div className={'section__head reveal' + (center ? ' section__head--center' : '')}>
      {eyebrow ? <Eyebrow rule={!center} gold={!!eyebrowGold}>{eyebrow}</Eyebrow> : null}
      <GhostHeading ghost={ghost} align={center ? 'center' : 'left'}>{white} {gold ? <span className="sg-gold-text">{gold}</span> : null}</GhostHeading>
      {lead ? <p className="section__lead">{lead}</p> : null}
    </div>
  );
}

function StatBand() {
  const { StatTile } = window.SPORTGENDesignSystem_882f1e;
  const { stats } = window.SGData;
  return (
    <section className="section section--stats">
      <div className="sg-container">
        <div className="stat-grid reveal">
          {stats.map((s) => <StatTile key={s.label} number={s.number} suffix={s.suffix} label={s.label} progress={s.progress ?? null} />)}
        </div>
      </div>
    </section>
  );
}

function SpeakerGrid({ speakers, footer, cols }) {
  const { SpeakerCard, Button, IconButton } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  return (
    <React.Fragment>
      <div className={'speaker-grid' + (cols ? ' speaker-grid--' + cols : '')}>
        {speakers.map((s, i) => (
          <div className="reveal" style={{ transitionDelay: (i % 5) * 50 + 'ms' }} key={s.name + i}>
            <SpeakerCard photo={s.photo} logo={s.logo} name={s.name} role={s.role} org={s.org} href={s.link}
              imgStyle={(s.name === 'Bex Smith' || s.name === 'Rebecca Smith') ? { transform: 'scale(1.35)', objectPosition: 'center 20%' } : undefined} />
          </div>
        ))}
      </div>
      {footer ? (
        <div className="section__foot">
          <a className="section__foot-link" href="#/speakers" onClick={(e) => go(e, '#/speakers')}>See All 2026 Speakers <IconButton label="See all speakers" /></a>
          <hr className="sg-rule" />
          <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get Your Ticket</Button>
        </div>
      ) : null}
    </React.Fragment>
  );
}

// "They will be at", every category stacked, each with a label + auto-scrolling logo marquee
function LogoWalls({ groups }) {
  return (
    <div className="walls">
      <div className="walls__head reveal">
        <span className="walls__head-eyebrow">They were at</span>{' '}
        <span className="walls__head-main">Sport Gen Summit in 2026</span>
      </div>
      <div className="walls__stack">
        {groups.map((g, i) => (
          <div className="walls__row reveal" key={g.label} style={{ transitionDelay: i * 80 + 'ms' }}>
            <span className="walls__row-label">{g.label}</span>
            <div className="wmq">
              <div className="wmq__track" style={{ animationDuration: (28 + g.logos.length) + 's', animationDirection: i % 2 ? 'reverse' : 'normal' }}>
                {g.logos.concat(g.logos).map((l, j) => (
                  <div className={'wmq__item' + (l.cls ? ' ' + l.cls : '')} key={j} style={{ animationDelay: ((j % 6) * 0.55 + (i % 2) * 0.3).toFixed(2) + 's' }}>
                    <img src={l.src} alt={j < g.logos.length ? l.alt : ''} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* `items` / `heading` / `id` permettent de rejouer la meme grille pour SGN Invest sur la
   page Tickets; sans eux on retombe sur la grille principale, telle qu'appelee ailleurs. */
function TicketsBlock({ first, items, heading, id, plain, wide, theme }) {
  const { tickets } = window.SGData;
  const list = items || tickets;
  const BUY_URL = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
  return (
    <section className={'section section--tickets' + (first ? ' section--first' : '') + (plain ? ' section--tickets-plain' : '')} id={id || 'tickets'}>
      {plain ? null : <div className="section--tickets__bg" aria-hidden="true" />}
      <div className="sg-container sg-container--wide">
        {heading || <h2 className="tkx-head reveal">Secure your 2027 <span className="tkx-head__gold">Super Early Birds</span></h2>}
        <div className={'tkx-grid' + (wide ? ' tkx-grid--4' : '')}>
          {list.map((t, i) => (
            <div className={'tkx-card reveal tkx-card--' + t.tier.toLowerCase().replace(/\s+/g, '-') + (t.featured ? ' tkx-card--vip' : '') + (theme === 'inv' ? ' tkx-card--inv' : '')} style={{ transitionDelay: i * 70 + 'ms' }} key={t.tier}
              onMouseEnter={t.featured ? (e) => { const v = e.currentTarget.querySelector('.tkx-vid'); if (v) { try { v.currentTime = 0; } catch (_) {} const p = v.play(); if (p && p.catch) p.catch(() => {}); } e.currentTarget.classList.add('tkx-card--playing'); } : undefined}
              onMouseLeave={t.featured ? (e) => { const v = e.currentTarget.querySelector('.tkx-vid'); if (v) { v.pause(); try { v.currentTime = 0; } catch (_) {} } e.currentTarget.classList.remove('tkx-card--playing'); } : undefined}>
              {t.featured ? (
                <div className="tkx-vidwrap" aria-hidden="true">
                  <video className="tkx-vid" src="assets/vip-aftermovie.mp4" muted loop playsInline preload="none"></video>
                  <span className="tkx-vidscrim"></span>
                </div>
              ) : null}
              <h3 className="tkx-card__tier">{t.tier}</h3>
              <div className="tkx-card__price">
                <span className="tkx-card__amount">{t.price}</span>
                {t.freePass ? null : <span className="tkx-card__vat">+VAT</span>}
              </div>
              <a className="tkx-btn" href={BUY_URL} target="_blank" rel="noopener">{t.cta || 'Buy Ticket'}</a>
              <div className="tkx-card__rule" aria-hidden="true"></div>
              {/* Bloc partenaire mis en avant, logo en grand (Startup x PSG Labs). */}
              {t.feature ? (
                <div className="tkx-card__feat">
                  <img className="tkx-card__feat-logo" src={t.feature.logo} alt={t.feature.logoAlt || ''} loading="lazy" />
                  <span className="tkx-card__feat-body">
                    <span className="tkx-card__feat-label">{t.feature.label}</span>
                    <span className="tkx-card__feat-text">{t.feature.text}</span>
                  </span>
                </div>
              ) : null}
              <p className="tkx-card__intro">{t.intro}</p>
              {t.lede ? <p className="tkx-card__lede">{t.lede}</p> : null}
              <ul className="tkx-list">
                {t.perks.map((p) => {
                  const ci = p.indexOf(': ');
                  const hasLabel = ci > 0 && ci < 28;
                  return (
                  <li key={p}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"></path></svg>
                    <span>{hasLabel ? <React.Fragment><strong className="tkx-list__label">{p.slice(0, ci)}</strong>{p.slice(ci + 1)}</React.Fragment> : p}</span>
                  </li>
                  );
                })}
              </ul>
              {t.note ? (() => {
                const ci = t.note.indexOf(': ');
                return <p className="tkx-card__note">{ci > 0 ? <React.Fragment><strong className="tkx-list__label">{t.note.slice(0, ci)}</strong>{t.note.slice(ci + 1)}</React.Fragment> : t.note}</p>;
              })() : null}
              {t.highlight ? (
                <div className="tkx-card__hl">
                  <span className="tkx-card__hl-label">{t.highlight.label}</span>
                  {t.highlight.logo ? <img className="tkx-card__hl-logo" src={t.highlight.logo} alt={t.highlight.logoAlt || ''} loading="lazy" /> : null}
                  <span className="tkx-card__hl-text">{t.highlight.text}</span>
                  {t.highlight.footnote ? <span className="tkx-card__hl-note">{t.highlight.footnote}</span> : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SGN Week : les deux voies d'acces qui ne passent pas par la billetterie. */
function AccessPathways() {
  const { accessPathways } = window.SGData;
  const go = (e, href) => {
    if (!href || href.charAt(0) !== '#') return;
    e.preventDefault(); window.location.hash = href.replace('#', '');
  };
  return (
    <section className="section section--pathways" id="access-pathways">
      <div className="sg-container sg-container--wide">
        <div className="tkx-sechead reveal">
          <span className="sg-eyebrow sg-eyebrow--gold">SGN Week</span>
          <h2 className="tkx-head tkx-head--sub">Access <span className="tkx-head__gold">pathways</span></h2>
        </div>
        <div className="tkx-duo">
          {accessPathways.map((p, i) => (
            <div className="tkx-path reveal" style={{ transitionDelay: i * 70 + 'ms' }} key={p.tier}>
              <h3 className="tkx-card__tier tkx-path__tier">{p.tier}</h3>
              <p className="tkx-path__note">{p.note}</p>
              <ul className="tkx-list">
                {p.perks.map((x) => (
                  <li key={x}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"></path></svg>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <a className="tkx-btn tkx-path__cta" href={p.href} onClick={(e) => go(e, p.href)}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Live photo-card grid (shared by Opportunities + Startup page)
function OppCards({ cards }) {
  const { oppStar } = window.SGData;
  return (
    <div className="oppx-grid">
      {cards.map((o, i) => (
        <div className="opp-card reveal" key={o.title} style={{ transitionDelay: i * 70 + 'ms' }}>
          <img className="opp-card__bg" src={o.photo} alt="" loading="lazy" />
          <div className="opp-card__shade" aria-hidden="true"></div>
          <div className="opp-card__content">
            <h3 className="opp-card__title">{o.title}</h3>
            <ul className="opp-card__list">
              {o.items.map((it) => (
                <li key={it}><img src={oppStar} alt="" loading="lazy" /><span>{it}</span></li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// "A summit full of opportunities", live design: full-photo cards, title + gold star bullets at top
function Opportunities() {
  const { opportunities } = window.SGData;
  return (
    <section className="section">
      <div className="sg-container">
        <div className="opps-head reveal">
          <h2 className="opps-head__line">A summit</h2>
          <h2 className="opps-head__line opps-head__line--gold">full of opportunities</h2>
        </div>
        <OppCards cards={opportunities} />
      </div>
    </section>
  );
}

// Live stat band: big 62px counters + 28px labels, count-up on scroll
function CounterBandItem({ on, number, suffix, prefix, label }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!on) return;
    const t0 = performance.now(); const dur = 1600; let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(number * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, number]);
  const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F');
  return (
    <div className="cband__item">
      <span className="cband__num">{prefix}{fmt(val)}{suffix}</span>
      <h4 className="cband__label">{label}</h4>
    </div>
  );
}

function CounterBand() {
  const { stats } = window.SGData;
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section className="section section--cband section--cband-streaks">
      <h2 className="cband-head reveal">SPORT <span className="cband-head__bracket">&#91;GEN&#93;</span> <span className="cband-head__gold">2026 Figures</span></h2>
      <div className="cband cband--gold-labels" ref={ref}>
        {stats.map((s) => <CounterBandItem key={s.label} on={on} number={s.number} suffix={s.suffix} label={s.label} />)}
      </div>
    </section>
  );
}

// Home "Our 2026 Speakers", swipeable cover-flow reel carousel (one reel in front, arrows + dots), one shared CTA
function SpeakersReel() {
  const { reels } = window.SGData;
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const n = reels.length;
  const [idx, setIdx] = React.useState(1);
  const [muted, setMuted] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const stageRef = React.useRef(null);
  const activeVideoRef = React.useRef(null);
  const fsVideoRef = React.useRef(null);
  const visibleRef = React.useRef(false);
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  // Verrou anti double-saut : une action = un seul cran, le temps de la transition (0,5s).
  const animatingRef = React.useRef(false);
  const lock = React.useCallback(() => {
    animatingRef.current = true;
    setTimeout(() => { animatingRef.current = false; }, 480);
  }, []);
  const goTo = React.useCallback((target) => {
    if (animatingRef.current) return;
    lock();
    setIdx(((target % n) + n) % n);
  }, [n, lock]);
  const step = React.useCallback((dir) => {
    if (animatingRef.current) return;
    lock();
    setIdx((i) => (i + dir + n) % n);
  }, [n, lock]);
  const prev = React.useCallback(() => step(-1), [step]);
  const next = React.useCallback(() => step(1), [step]);
  // Clic sur la vidéo active : pause / reprise.
  const togglePlay = React.useCallback(() => {
    const v = activeVideoRef.current; if (!v) return;
    if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); setPaused(false); }
    else { v.pause(); setPaused(true); }
  }, []);
  // Clic sur la vidéo en plein écran : pause / reprise (élément distinct de la vidéo inline).
  const toggleFsPlay = React.useCallback(() => {
    const v = fsVideoRef.current; if (!v) return;
    if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    else { v.pause(); }
  }, []);
  const toggleMute = React.useCallback(() => {
    setMuted((m) => { const nm = !m; const v = activeVideoRef.current; if (v) v.muted = nm; return nm; });
  }, []);

  // Le réel ne se lit que lorsqu'il est à l'écran. On pilote la lecture directement dans
  // l'observer (pas via un état React) avec une hystérésis pour éviter tout flapping play/pause.
  React.useEffect(() => {
    const el = stageRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      const r = e.intersectionRatio;
      const v = activeVideoRef.current;
      if (!visibleRef.current && r >= 0.45) {
        visibleRef.current = true;
        if (v) { try { v.currentTime = 0; } catch (_) {} const p = v.play(); if (p && p.catch) p.catch(() => {}); }
        setPaused(false);
      } else if (visibleRef.current && r <= 0.1) {
        visibleRef.current = false;
        if (v) { v.pause(); try { v.currentTime = 0; } catch (_) {} }
      }
    }, { threshold: [0, 0.1, 0.45, 0.7, 1] });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // Changement de réel : s'il est visible, on (re)démarre le nouveau depuis le début.
  React.useEffect(() => {
    setPaused(false);
    const v = activeVideoRef.current; if (!v || !visibleRef.current) return;
    try { v.currentTime = 0; } catch (_) {}
    const p = v.play(); if (p && p.catch) p.catch(() => {});
  }, [idx]);

  // Drag / touch swipe
  const drag = React.useRef({ x: null });
  const onDown = (x) => { drag.current.x = x; };
  const onUp = (x) => {
    if (drag.current.x == null) return;
    const dx = x - drag.current.x; drag.current.x = null;
    if (dx > 45) prev(); else if (dx < -45) next();
  };

  // Keyboard arrows when the carousel is on screen
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const el = stageRef.current; if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) return;
      if (e.key === 'ArrowLeft') prev(); else next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const [reelFs, setReelFs] = React.useState(false);
  const [reelBox, setReelBox] = React.useState(null);
  const [playing, setPlaying] = React.useState(null);
  // Sur swipe : le réel central se lance immédiatement (s'il est à l'écran).
  React.useEffect(() => {
    if (!visibleRef.current) { setPlaying(null); return; }
    const center = reels[idx]; if (center) setPlaying(center.name);
  }, [idx]);
  // Auto-lecture du réel central : dès que la section entre dans l'écran (0s).
  // Quand on quitte la section, le réel se coupe ; il repart du début au retour.
  const idxRef = React.useRef(idx); idxRef.current = idx;
  React.useEffect(() => {
    const el = stageRef.current; if (!el) return;
    let timer = null;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && e.intersectionRatio >= 0.5) {
        if (timer) clearTimeout(timer);
        const center = reels[idxRef.current];
        if (center) setPlaying(center.name);
      } else {
        if (timer) { clearTimeout(timer); timer = null; }
        setPlaying(null);
      }
    }, { threshold: [0, 0.5, 1] });
    io.observe(el);
    return () => { io.disconnect(); if (timer) clearTimeout(timer); };
  }, []);
  // Classic full screen for the active reel (native if available, else fixed overlay fallback
  // Classic full screen for the active reel — rendered as a portal overlay on <body> so it is
  // never nested under transformed ancestors (carousel track, scroll-reveal). Pure overlay, no
  // native fullscreen (blocked in the preview iframe and it corrupts the page on exit).
  const fsReel = React.useCallback(() => { setReelFs((f) => !f); }, []);
  React.useEffect(() => {
    if (!reelFs) return;
    // Plein écran ouvert : on met la vidéo inline en pause pour ne pas avoir deux lectures/sons en même temps.
    const inline = activeVideoRef.current;
    if (inline) inline.pause();
    const onKey = (e) => { if (e.key === 'Escape') setReelFs(false); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prevOverflow;
      // Retour à la carte : on relance la vidéo inline si la section est toujours visible.
      const v = activeVideoRef.current;
      if (v && visibleRef.current) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    };
  }, [reelFs]);
  const fsIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3"></path>
    </svg>
  );
  const closeIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18"></path>
    </svg>
  );

  const soundIcon = muted ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5L6 9H2v6h4l5 4z"></path><line x1="22" y1="9" x2="16" y2="15"></line><line x1="16" y1="9" x2="22" y2="15"></line>
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5L6 9H2v6h4l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path>
    </svg>
  );
  const ytIcon = (
    <svg className="spk2-yt__icon" viewBox="0 0 28 20" aria-hidden="true">
      <rect className="spk2-yt__badge" width="28" height="20" rx="5"></rect>
      <path className="spk2-yt__play" d="M11 6l7 4-7 4z"></path>
    </svg>
  );
  const chevron = (d) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d}></path></svg>
  );

  return (
    <section className="section spk2" id="our-speakers">
      <div className="sg-container sg-container--wide">
        <h2 className="home-h2 reveal">Relive <span className="home-h2__gold">[SGN] 2026</span></h2>
        <p className="spk2-sub reveal">Hear them in 60 seconds, swipe through the latest reels.</p>
        <div className="reelx reveal">
          <button className="reelx-arrow reelx-arrow--prev" onClick={prev} aria-label="Réel précédent">{chevron('M15 5l-7 7 7 7')}</button>
          <div className="reelx-stage" ref={stageRef}
            onMouseDown={(e) => onDown(e.clientX)} onMouseUp={(e) => onUp(e.clientX)}
            onTouchStart={(e) => onDown(e.touches[0].clientX)} onTouchEnd={(e) => onUp(e.changedTouches[0].clientX)}>
            {reels.map((r, i) => {
              let off = i - idx;
              if (off > n / 2) off -= n;
              if (off < -n / 2) off += n;
              const abs = Math.abs(off);
              if (abs > 1) return null;
              const active = off === 0;
              const isPlaying = active && (!r.staticCard || playing === r.name);
              const showInfo = isPlaying || (!active && !r.staticCard);
              return (
                <div className={'reelx-card' + (active ? ' reelx-card--active' : '') + (r.staticCard ? ' reelx-card--wide' : '')} key={r.name}
                  style={{ '--off': off, '--abs': abs, zIndex: 3 - abs }}
                  aria-hidden={!active} onClick={() => !active && goTo(i)}>
                  <div className={'reelx-card__frame' + (r.staticCard ? ' reelx-card__frame--wide' : '')}>
                    {r.staticCard
                      ? ((active && playing === r.name)
                        ? <video className="reelx-card__media reelx-card__media--playing" src={r.src} poster={r.poster} autoPlay playsInline muted={muted} onClick={togglePlay} onDoubleClick={(e) => { e.preventDefault(); fsReel(); }} ref={(el) => { activeVideoRef.current = el; if (el) el.muted = muted; }}></video>
                        : <img className="reelx-card__media reelx-card__media--contain" src={r.poster} alt={r.name} loading="lazy" />)
                      : (active
                        ? <video className="reelx-card__media" src={r.src} poster={r.poster} autoPlay loop playsInline preload="auto" muted={muted} onClick={togglePlay} onDoubleClick={(e) => { e.preventDefault(); fsReel(); }} ref={(el) => { activeVideoRef.current = el; if (el) el.muted = muted; }}></video>
                        : <img className="reelx-card__media" src={r.poster} alt={r.name} loading="eager" />)}
                    {showInfo ? <div className="reelx-card__grad" aria-hidden="true"></div> : null}
                    {showInfo ? <div className={'reelx-card__info' + (isPlaying ? ' reelx-card__info--live' : '')}>
                      <span className="reelx-card__name">{r.name}</span>
                      <span className="reelx-card__meta">{r.role} · {r.org}</span>
                    </div> : null}
                    {(r.staticCard && playing !== r.name) ? <button className="reelx-card__watch" onClick={(e) => { e.stopPropagation(); if (active) { setPlaying(r.name); } else { goTo(i); } }} aria-label={'Watch ' + r.name + ' reel'}><img src="assets/watch-now.png" alt="Watch Now" /></button> : null}
                    {active ? <a className="reelx-card__yt" href={r.youtube} target="_blank" rel="noopener" aria-label={'Watch ' + r.name + ' on YouTube'}>{ytIcon}</a> : null}
                    {active && (!r.staticCard || playing === r.name) ? <button className="reelx-card__sound" onClick={(e) => { e.stopPropagation(); toggleMute(); }} aria-label={muted ? 'Activer le son' : 'Couper le son'}>{soundIcon}</button> : null}
                    {active && (!r.staticCard || playing === r.name) ? <button className="reelx-card__fs" onClick={(e) => { e.stopPropagation(); fsReel(); }} aria-label="Full screen">{fsIcon}</button> : null}
                  </div>
                </div>
              );
            })}
          </div>
          <button className="reelx-arrow reelx-arrow--next" onClick={next} aria-label="Next reel">{chevron('M9 5l7 7-7 7')}</button>
        </div>
        {reelFs && reels[idx] ? ReactDOM.createPortal(
          <div className="reelx-fs" onClick={(e) => { if (e.target === e.currentTarget) setReelFs(false); }}>
            <video className="reelx-fs__media" src={reels[idx].src} poster={reels[idx].poster} autoPlay loop playsInline muted={muted} onClick={toggleFsPlay} onDoubleClick={() => setReelFs(false)} ref={(el) => { fsVideoRef.current = el; }}></video>
            <button className="reelx-fs__btn reelx-fs__sound" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Unmute' : 'Mute'}>{soundIcon}</button>
            <button className="reelx-fs__btn reelx-fs__close" onClick={() => setReelFs(false)} aria-label="Exit full screen">{closeIcon}</button>
            <a className="reelx-fs__btn reelx-fs__yt" href={reels[idx].youtube} target="_blank" rel="noopener" aria-label={'Watch ' + reels[idx].name + ' on YouTube'}>{ytIcon}</a>
            <div className="reelx-fs__info">
              <span className="reelx-fs__name">{reels[idx].name}</span>
              <span className="reelx-fs__meta">{reels[idx].role} · {reels[idx].org}</span>
            </div>
          </div>, document.body) : null}
        <div className="reelx-dots reveal">
          {reels.map((r, i) => (
            <button key={r.name} className={'reelx-dot' + (i === idx ? ' is-active' : '')} onClick={() => goTo(i)} aria-label={'Reel ' + (i + 1) + ', ' + r.name}></button>
          ))}
        </div>
        <div className="spk2-foot reveal">
          <Button variant="primary" size="lg" href="#/speakers" onClick={(e) => go(e, '#/speakers')}>See all speakers</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PageHero, SectionHead, StatBand, CounterBand, CounterBandItem, SpeakerGrid, SpeakersReel, LogoWalls, TicketsBlock, AccessPathways, Opportunities, OppCards });
