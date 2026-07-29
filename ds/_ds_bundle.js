/* @ds-bundle: {"format":4,"namespace":"SPORTGENDesignSystem_882f1e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GhostHeading","sourcePath":"components/core/GhostHeading.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"LogoChip","sourcePath":"components/showcase/LogoChip.jsx"},{"name":"SpeakerCard","sourcePath":"components/showcase/SpeakerCard.jsx"},{"name":"StatTile","sourcePath":"components/showcase/StatTile.jsx"},{"name":"TicketCard","sourcePath":"components/showcase/TicketCard.jsx"}],"sourceHashes":{"blocks.jsx":"9271b25c6afc","components/core/Badge.jsx":"2bf9bfc75b90","components/core/Button.jsx":"c0aaac163001","components/core/Eyebrow.jsx":"bdb303c967a2","components/core/GhostHeading.jsx":"4feada9174ac","components/core/GlassCard.jsx":"0dad22863c30","components/core/IconButton.jsx":"87ac5f209d3c","components/showcase/LogoChip.jsx":"0f229b57dea5","components/showcase/SpeakerCard.jsx":"706ebe1d1e06","components/showcase/StatTile.jsx":"9052e8221b3f","components/showcase/TicketCard.jsx":"110fdb2568c4","tweaks-panel.jsx":"4f181eb354cd","ui_kits/website/App.jsx":"afb88c1cc725","ui_kits/website/Footer.jsx":"5899432d1bdb","ui_kits/website/Hero.jsx":"400553310b01","ui_kits/website/InvestmentSummit.jsx":"11f3ddc8427e","ui_kits/website/Nav.jsx":"9089dc05ec76","ui_kits/website/News.jsx":"bcc6b9bebb6c","ui_kits/website/SisApp.jsx":"390f12086346","ui_kits/website/SisFooter.jsx":"96be32abed0e","ui_kits/website/SisNav.jsx":"e99e80df5027","ui_kits/website/SisPages.jsx":"62c20a881f41","ui_kits/website/blocks.jsx":"8499d422221a","ui_kits/website/data.js":"6dc00362c160","ui_kits/website/legal.js":"29e66f91c6f4","ui_kits/website/pages1.jsx":"e7a080e672e2","ui_kits/website/pages2.jsx":"b21ace3b1392","ui_kits/website/pages3.jsx":"10771a87687c","ui_kits/website/pages4.jsx":"2748656b8b15","ui_kits/website/pages5.jsx":"75468cfa725f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SPORTGENDesignSystem_882f1e = window.SPORTGENDesignSystem_882f1e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// blocks.jsx
try { (() => {
/* SPORT[GEN] — shared, reusable page blocks (composed across all routes) */

// Generic page hero: eyebrow + two-tone H1 + subtitle + optional CTA, on a gold-streak plate (or a photo via bgImage).
function PageHero({
  eyebrow,
  titleWhite,
  titleGold,
  sub,
  ctaLabel,
  ctaHref,
  variant,
  bgImage,
  stacked,
  art,
  goldFirst
}) {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    if (/^https?:/i.test(href || '')) return; // external links navigate normally
    e.preventDefault();
    window.location.hash = (href || '#/').replace('#', '');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: 'page-hero' + (variant === 'tall' ? ' page-hero--tall' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: 'page-hero__bg' + (art ? ' page-hero__bg--' + art : ''),
    "aria-hidden": "true"
  }), bgImage ? /*#__PURE__*/React.createElement("img", {
    className: "page-hero__img",
    src: bgImage,
    alt: "",
    "aria-hidden": "true"
  }) : null, bgImage ? /*#__PURE__*/React.createElement("div", {
    className: "page-hero__shade",
    "aria-hidden": "true"
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "sg-container page-hero__inner"
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, eyebrow) : null, goldFirst ? /*#__PURE__*/React.createElement("h1", {
    className: "page-hero__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'sg-gold-text' + (stacked ? ' page-hero__gold-line' : '')
  }, titleGold), " ", titleWhite) : /*#__PURE__*/React.createElement("h1", {
    className: "page-hero__title"
  }, titleWhite, " ", titleGold ? /*#__PURE__*/React.createElement("span", {
    className: 'sg-gold-text' + (stacked ? ' page-hero__gold-line' : '')
  }, titleGold) : null), sub ? /*#__PURE__*/React.createElement("p", {
    className: "page-hero__sub"
  }, sub) : null, ctaLabel ? /*#__PURE__*/React.createElement("div", {
    className: "page-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: ctaHref,
    onClick: e => go(e, ctaHref)
  }, ctaLabel)) : null));
}

// Section heading: eyebrow (+rule) and a ghost two-tone heading.
function SectionHead({
  eyebrow,
  eyebrowGold,
  ghost,
  white,
  gold,
  lead,
  center
}) {
  const {
    GhostHeading,
    Eyebrow
  } = window.SPORTGENDesignSystem_882f1e;
  return /*#__PURE__*/React.createElement("div", {
    className: 'section__head reveal' + (center ? ' section__head--center' : '')
  }, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, {
    rule: !center,
    gold: !!eyebrowGold
  }, eyebrow) : null, /*#__PURE__*/React.createElement(GhostHeading, {
    ghost: ghost,
    align: center ? 'center' : 'left'
  }, white, " ", gold ? /*#__PURE__*/React.createElement("span", {
    className: "sg-gold-text"
  }, gold) : null), lead ? /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, lead) : null);
}
function StatBand() {
  const {
    StatTile
  } = window.SPORTGENDesignSystem_882f1e;
  const {
    stats
  } = window.SGData;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-grid reveal"
  }, stats.map(s => /*#__PURE__*/React.createElement(StatTile, {
    key: s.label,
    number: s.number,
    suffix: s.suffix,
    label: s.label,
    progress: s.progress ?? null
  })))));
}
function SpeakerGrid({
  speakers,
  footer,
  cols
}) {
  const {
    SpeakerCard,
    Button,
    IconButton
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'speaker-grid' + (cols ? ' speaker-grid--' + cols : '')
  }, speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      transitionDelay: i % 5 * 50 + 'ms'
    },
    key: s.name + i
  }, /*#__PURE__*/React.createElement(SpeakerCard, {
    photo: s.photo,
    logo: s.logo,
    name: s.name,
    role: s.role,
    org: s.org,
    href: s.link
  })))), footer ? /*#__PURE__*/React.createElement("div", {
    className: "section__foot"
  }, /*#__PURE__*/React.createElement("a", {
    className: "section__foot-link",
    href: "#/speakers",
    onClick: e => go(e, '#/speakers')
  }, "See All 2026 Speakers ", /*#__PURE__*/React.createElement(IconButton, {
    label: "See all speakers"
  })), /*#__PURE__*/React.createElement("hr", {
    className: "sg-rule"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Get Your Ticket")) : null);
}

// "They will be at" — every category stacked, each with a label + auto-scrolling logo marquee
function LogoWalls({
  groups
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "walls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "walls__head walls__head--center reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "walls__head-eyebrow"
  }, "They will be at"), ' ', /*#__PURE__*/React.createElement("span", {
    className: "walls__head-main"
  }, "Sport Gen Summit in 2026")), /*#__PURE__*/React.createElement("div", {
    className: "walls__stack"
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    className: "walls__row reveal",
    key: g.label,
    style: {
      transitionDelay: i * 80 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "walls__row-label"
  }, g.label), /*#__PURE__*/React.createElement("div", {
    className: "wmq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wmq__track",
    style: {
      animationDuration: 28 + g.logos.length + 's',
      animationDirection: i % 2 ? 'reverse' : 'normal'
    }
  }, g.logos.concat(g.logos).map((l, j) => /*#__PURE__*/React.createElement("div", {
    className: "wmq__item",
    key: j
  }, /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: j < g.logos.length ? l.alt : '',
    loading: "lazy"
  })))))))));
}
function TicketsBlock({
  first
}) {
  const {
    tickets
  } = window.SGData;
  const BUY_URL = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
  return /*#__PURE__*/React.createElement("section", {
    className: 'section section--tickets' + (first ? ' section--first' : ''),
    id: "tickets"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section--tickets__bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tkx-head reveal"
  }, "Secure your 2027 ", /*#__PURE__*/React.createElement("span", {
    className: "tkx-head__gold"
  }, "Super Early Birds")), /*#__PURE__*/React.createElement("div", {
    className: "tkx-grid"
  }, tickets.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: 'tkx-card reveal tkx-card--' + t.tier.toLowerCase() + (t.featured ? ' tkx-card--vip' : ''),
    style: {
      transitionDelay: i * 70 + 'ms'
    },
    key: t.tier
  }, /*#__PURE__*/React.createElement("h3", {
    className: "tkx-card__tier"
  }, t.tier), /*#__PURE__*/React.createElement("div", {
    className: "tkx-card__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tkx-card__amount"
  }, t.price), /*#__PURE__*/React.createElement("span", {
    className: "tkx-card__vat"
  }, "+VAT")), /*#__PURE__*/React.createElement("a", {
    className: "tkx-btn",
    href: BUY_URL,
    target: "_blank",
    rel: "noopener"
  }, "Buy Ticket"), /*#__PURE__*/React.createElement("div", {
    className: "tkx-card__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "tkx-card__intro"
  }, t.intro), /*#__PURE__*/React.createElement("ul", {
    className: "tkx-list"
  }, t.perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5l5 5L20 6.5"
  })), /*#__PURE__*/React.createElement("span", null, p)))))))));
}

// Live photo-card grid (shared by Opportunities + Startup page)
function OppCards({
  cards
}) {
  const {
    oppStar
  } = window.SGData;
  return /*#__PURE__*/React.createElement("div", {
    className: "oppx-grid"
  }, cards.map((o, i) => /*#__PURE__*/React.createElement("div", {
    className: "opp-card reveal",
    key: o.title,
    style: {
      transitionDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "opp-card__bg",
    src: o.photo,
    alt: "",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "opp-card__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "opp-card__content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "opp-card__title"
  }, o.title), /*#__PURE__*/React.createElement("ul", {
    className: "opp-card__list"
  }, o.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("img", {
    src: oppStar,
    alt: "",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", null, it))))))));
}

// "A summit full of opportunities" — live design: full-photo cards, title + gold star bullets at top
function Opportunities() {
  const {
    opportunities
  } = window.SGData;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "A summit"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line opps-head__line--gold"
  }, "full of opportunities")), /*#__PURE__*/React.createElement(OppCards, {
    cards: opportunities
  })));
}

// Live stat band: big 62px counters + 28px labels, count-up on scroll
function CounterBandItem({
  on,
  number,
  suffix,
  label
}) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!on) return;
    const t0 = performance.now();
    const dur = 1600;
    let raf;
    const tick = t => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(number * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, number]);
  const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F');
  return /*#__PURE__*/React.createElement("div", {
    className: "cband__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cband__num"
  }, fmt(val), suffix), /*#__PURE__*/React.createElement("h4", {
    className: "cband__label"
  }, label));
}
function CounterBand() {
  const {
    stats
  } = window.SGData;
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--cband section--cband-streaks"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cband-head reveal"
  }, "SPORT ", /*#__PURE__*/React.createElement("span", {
    className: "cband-head__bracket"
  }, "[GEN]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "cband-head__gold"
  }, "2026 Figures")), /*#__PURE__*/React.createElement("div", {
    className: "cband cband--gold-labels",
    ref: ref
  }, stats.map(s => /*#__PURE__*/React.createElement(CounterBandItem, {
    key: s.label,
    on: on,
    number: s.number,
    suffix: s.suffix,
    label: s.label
  }))));
}

// Home "Our 2026 Speakers" — swipeable cover-flow reel carousel (one reel in front, arrows + dots), one shared CTA
function SpeakersReel() {
  const {
    reels
  } = window.SGData;
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const n = reels.length;
  const [idx, setIdx] = React.useState(0);
  const stageRef = React.useRef(null);
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const prev = React.useCallback(() => setIdx(i => (i - 1 + n) % n), [n]);
  const next = React.useCallback(() => setIdx(i => (i + 1) % n), [n]);

  // Drag / touch swipe
  const drag = React.useRef({
    x: null
  });
  const onDown = x => {
    drag.current.x = x;
  };
  const onUp = x => {
    if (drag.current.x == null) return;
    const dx = x - drag.current.x;
    drag.current.x = null;
    if (dx > 45) prev();else if (dx < -45) next();
  };

  // Keyboard arrows when the carousel is on screen
  React.useEffect(() => {
    const onKey = e => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) return;
      if (e.key === 'ArrowLeft') prev();else next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);
  const ytIcon = /*#__PURE__*/React.createElement("svg", {
    className: "spk2-yt__icon",
    viewBox: "0 0 28 20",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    className: "spk2-yt__badge",
    width: "28",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("path", {
    className: "spk2-yt__play",
    d: "M11 6l7 4-7 4z"
  }));
  const chevron = d => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "section spk2",
    id: "our-speakers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-h2 reveal"
  }, "Hear from our ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "leaders and visionaries")), /*#__PURE__*/React.createElement("p", {
    className: "spk2-sub reveal"
  }, "Hear them in 60 seconds, swipe through the latest reels."), /*#__PURE__*/React.createElement("div", {
    className: "reelx reveal"
  }, /*#__PURE__*/React.createElement("button", {
    className: "reelx-arrow",
    onClick: prev,
    "aria-label": "R\xE9el pr\xE9c\xE9dent"
  }, chevron('M15 5l-7 7 7 7')), /*#__PURE__*/React.createElement("div", {
    className: "reelx-stage",
    ref: stageRef,
    onMouseDown: e => onDown(e.clientX),
    onMouseUp: e => onUp(e.clientX),
    onTouchStart: e => onDown(e.touches[0].clientX),
    onTouchEnd: e => onUp(e.changedTouches[0].clientX)
  }, reels.map((r, i) => {
    let off = i - idx;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    const abs = Math.abs(off);
    if (abs > 2) return null;
    const active = off === 0;
    return /*#__PURE__*/React.createElement("div", {
      className: 'reelx-card' + (active ? ' reelx-card--active' : ''),
      key: r.name,
      style: {
        '--off': off,
        '--abs': abs,
        zIndex: 3 - abs
      },
      "aria-hidden": !active,
      onClick: () => !active && setIdx(i)
    }, /*#__PURE__*/React.createElement("div", {
      className: "reelx-card__frame"
    }, active ? /*#__PURE__*/React.createElement("video", {
      className: "reelx-card__media",
      src: r.src,
      poster: r.poster,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata"
    }) : /*#__PURE__*/React.createElement("img", {
      className: "reelx-card__media",
      src: r.poster,
      alt: r.name,
      loading: "lazy"
    }), /*#__PURE__*/React.createElement("div", {
      className: "reelx-card__grad",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "reelx-card__info"
    }, /*#__PURE__*/React.createElement("span", {
      className: "reelx-card__name"
    }, r.name), /*#__PURE__*/React.createElement("span", {
      className: "reelx-card__meta"
    }, r.role, " \xB7 ", r.org)), active ? /*#__PURE__*/React.createElement("a", {
      className: "reelx-card__yt",
      href: r.youtube,
      target: "_blank",
      rel: "noopener",
      "aria-label": 'Watch ' + r.name + ' on YouTube'
    }, ytIcon) : null));
  })), /*#__PURE__*/React.createElement("button", {
    className: "reelx-arrow",
    onClick: next,
    "aria-label": "R\xE9el suivant"
  }, chevron('M9 5l7 7-7 7'))), /*#__PURE__*/React.createElement("div", {
    className: "reelx-dots reveal"
  }, reels.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r.name,
    className: 'reelx-dot' + (i === idx ? ' is-active' : ''),
    onClick: () => setIdx(i),
    "aria-label": 'Réel ' + (i + 1) + ' — ' + r.name
  }))), /*#__PURE__*/React.createElement("div", {
    className: "spk2-foot reveal"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#/speakers",
    onClick: e => go(e, '#/speakers')
  }, "Voir tous les speakers"))));
}
Object.assign(window, {
  PageHero,
  SectionHead,
  StatBand,
  CounterBand,
  CounterBandItem,
  SpeakerGrid,
  SpeakersReel,
  LogoWalls,
  TicketsBlock,
  Opportunities,
  OppCards
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "blocks.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * SPORT[GEN] Badge — small pill label (founding partner, +70 speakers, tier).
 */
function Badge({
  variant = 'gold',
  // 'gold' | 'outline' | 'ghost' | 'eyebrow'
  className = '',
  children,
  ...rest
}) {
  const cls = ['sg-badge', `sg-badge--${variant}`, className].filter(Boolean).join(' ');
  return React.createElement('span', {
    className: cls,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const ArrowUpRight = () => React.createElement('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  'aria-hidden': true
}, React.createElement('path', {
  d: 'M7 17 17 7M9 7h8v8',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}));

/**
 * SPORT[GEN] Button — pill-shaped CTA in the brand's four treatments.
 */
function Button({
  variant = 'primary',
  // 'primary' | 'light' | 'secondary' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  href,
  arrow = false,
  // append a ↗ glyph
  className = '',
  children,
  ...rest
}) {
  const cls = ['sg-btn', `sg-btn--${variant}`, size !== 'md' ? `sg-btn--${size}` : '', className].filter(Boolean).join(' ');
  const content = [React.createElement('span', {
    key: 'label'
  }, children), arrow ? React.createElement('span', {
    key: 'arrow',
    className: 'sg-btn__arrow',
    style: {
      display: 'inline-flex',
      width: '1em',
      height: '1em'
    }
  }, React.createElement(ArrowUpRight)) : null];
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    className: cls,
    href,
    ...rest
  }, content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/**
 * SPORT[GEN] Eyebrow — uppercase tracked kicker label, optionally followed
 * by the thin hairline rule used above section headings.
 */
function Eyebrow({
  gold = false,
  rule = false,
  // append the trailing hairline rule
  className = '',
  children,
  ...rest
}) {
  const label = React.createElement('span', {
    className: ['sg-eyebrow', gold ? 'sg-eyebrow--gold' : '', className].filter(Boolean).join(' ')
  }, children);
  if (!rule) return label;
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem'
    },
    ...rest
  }, label, React.createElement('hr', {
    className: 'sg-rule',
    style: {
      flex: 1
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GhostHeading.jsx
try { (() => {
/**
 * SPORT[GEN] GhostHeading — the signature two-tone section heading with an
 * oversized, low-opacity "ghost" watermark word sitting behind/overlapping
 * the live heading. Put the live heading in `children`, wrapping the
 * emphasis word in <span className="sg-gold-text">…</span>.
 */
function GhostHeading({
  ghost,
  // the faded watermark word(s)
  as = 'h2',
  align = 'left',
  // 'left' | 'center'
  ghostOffset = '-0.35em',
  className = '',
  children,
  ...rest
}) {
  const wrapStyle = {
    position: 'relative',
    display: align === 'center' ? 'flex' : 'block',
    flexDirection: 'column',
    alignItems: align === 'center' ? 'center' : undefined,
    textAlign: align,
    isolation: 'isolate'
  };
  const ghostStyle = {
    position: 'absolute',
    top: ghostOffset,
    left: align === 'center' ? '50%' : '-0.04em',
    transform: align === 'center' ? 'translateX(-50%)' : 'none',
    fontSize: 'var(--fs-ghost)',
    zIndex: -1,
    whiteSpace: 'nowrap'
  };
  const headStyle = {
    position: 'relative',
    fontSize: 'var(--fs-display)',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: '-0.04em',
    lineHeight: 'var(--lh-tight)',
    margin: 0
  };
  return React.createElement('div', {
    className: ['sg-ghost-heading', className].filter(Boolean).join(' '),
    style: wrapStyle,
    ...rest
  }, ghost ? React.createElement('span', {
    className: 'sg-ghost',
    'aria-hidden': true,
    style: ghostStyle
  }, ghost) : null, React.createElement(as, {
    style: headStyle
  }, children));
}
Object.assign(__ds_scope, { GhostHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GhostHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
/**
 * SPORT[GEN] GlassCard — frosted translucent navy surface with a faint
 * light border. The signature container for text blocks, stat tiles and
 * feature cards. Optional warm gold glow from the bottom edge.
 */
function GlassCard({
  glow = false,
  // warm gold glow + gold border (speaker/ticket/VIP)
  hover = false,
  // lift + intensify glow on hover
  pad = true,
  // internal padding
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const cls = ['sg-card', pad ? 'sg-card--pad' : '', glow ? 'sg-card--glow' : '', hover ? 'sg-card--hover' : '', className].filter(Boolean).join(' ');
  return React.createElement(as, {
    className: cls,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const ArrowUpRight = () => React.createElement('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  'aria-hidden': true
}, React.createElement('path', {
  d: 'M7 17 17 7M9 7h8v8',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}));

/**
 * SPORT[GEN] IconButton — small circular button, gold-fills on hover.
 * Defaults to the ↗ arrow used on inline "see more" links.
 */
function IconButton({
  size = 'md',
  // 'sm' | 'md'
  href,
  label = 'Open',
  className = '',
  children,
  ...rest
}) {
  const cls = ['sg-iconbtn', size === 'sm' ? 'sg-iconbtn--sm' : '', className].filter(Boolean).join(' ');
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    className: cls,
    href,
    'aria-label': label,
    ...rest
  }, children || React.createElement(ArrowUpRight));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/showcase/LogoChip.jsx
try { (() => {
/**
 * SPORT[GEN] LogoChip — a partner/attendee logo on the dark logo wall.
 * Renders an <img> (mono/white logo) or a text wordmark fallback; both sit
 * muted on the navy and brighten on hover.
 */
function LogoChip({
  src = null,
  name,
  // alt text and/or text wordmark fallback
  href,
  className = '',
  ...rest
}) {
  const inner = src ? React.createElement('img', {
    src,
    alt: name || ''
  }) : React.createElement('span', null, name);
  const cls = ['sg-logochip', className].filter(Boolean).join(' ');
  const Tag = href ? 'a' : 'div';
  return React.createElement(Tag, {
    className: cls,
    href,
    title: name,
    ...rest
  }, inner);
}
Object.assign(__ds_scope, { LogoChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/LogoChip.jsx", error: String((e && e.message) || e) }); }

// components/showcase/SpeakerCard.jsx
try { (() => {
/**
 * SPORT[GEN] SpeakerCard — full-bleed speaker tile. The portrait photo
 * fills the entire card (gentle zoom on hover, overflow-clipped); a dark
 * bottom-up scrim keeps text legible, and the profile — gradient-gold
 * name, white role, semibold white company — plus the company logo are
 * overlaid on top of the photo. The whole card links out (LinkedIn).
 */
function SpeakerCard({
  photo,
  name,
  role,
  org,
  logo = null,
  // company logo overlaid on the photo (top-right)
  href = null,
  // optional link (e.g. LinkedIn) — card becomes an <a>
  glow = true,
  className = '',
  imgStyle = null,
  // optional inline style override on the photo (e.g. object-position zoom)
  ...rest
}) {
  const cls = ['sg-speaker', glow ? 'sg-speaker--glow' : '', className].filter(Boolean).join(' ');

  // Photo when available; otherwise a gold-initials monogram fallback.
  const initials = (name || '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const hasPhoto = !!photo;
  const visual = hasPhoto ? React.createElement('img', {
    className: 'sg-speaker__img',
    src: photo,
    alt: name,
    loading: 'lazy',
    style: imgStyle || undefined
  }) : React.createElement('div', {
    className: 'sg-speaker__monogram',
    role: 'img',
    'aria-label': name
  }, initials);
  const inner = React.createElement(React.Fragment, null, React.createElement('div', {
    className: 'sg-speaker__top'
  }, visual, React.createElement('div', {
    className: 'sg-speaker__scrim'
  }), React.createElement('div', {
    className: 'sg-speaker__profile'
  }, name ? React.createElement('h4', {
    className: 'sg-speaker__name'
  }, name) : null, role ? React.createElement('p', {
    className: 'sg-speaker__role'
  }, role) : null, org ? React.createElement('p', {
    className: 'sg-speaker__org'
  }, org) : null)), logo ? React.createElement('div', {
    className: 'sg-speaker__logobar'
  }, React.createElement('img', {
    className: 'sg-speaker__logo',
    src: logo,
    alt: org ? org + ' logo' : ''
  })) : null);

  // Whole card links out (LinkedIn); hovering zooms the photo (CSS).
  if (href) {
    return React.createElement('a', {
      className: cls,
      href,
      target: '_blank',
      rel: 'noopener',
      'aria-label': name ? name + ' — LinkedIn' : 'View profile',
      ...rest
    }, inner);
  }
  return React.createElement('div', {
    className: cls,
    ...rest
  }, inner);
}
Object.assign(__ds_scope, { SpeakerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/SpeakerCard.jsx", error: String((e && e.message) || e) }); }

// components/showcase/StatTile.jsx
try { (() => {
const {
  useState,
  useEffect,
  useRef
} = React;

/**
 * SPORT[GEN] StatTile — big gold-accented number + label, with optional
 * count-up-on-scroll and a gold progress bar (used for the "70%" tile).
 */
function StatTile({
  number,
  // target integer, e.g. 1000
  prefix = '',
  // e.g. "+"
  suffix = '',
  // e.g. "+", "%"
  label,
  progress = null,
  // 0–100 -> renders gold progress bar
  countUp = true,
  duration = 1400,
  className = '',
  ...rest
}) {
  const [display, setDisplay] = useState(countUp ? 0 : number);
  const [shown, setShown] = useState(!countUp);
  const ref = useRef(null);
  useEffect(() => {
    if (!countUp) return;
    if (!('IntersectionObserver' in window) || !ref.current) {
      setShown(true);
      return;
    }
    const el = ref.current;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.4
    });
    io.observe(el);
    // Failsafe: never leave the number stuck at 0 (print / offscreen / IO edge cases)
    const t = setTimeout(() => setShown(true), 2200);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [countUp]);
  useEffect(() => {
    if (!shown || !countUp) return;
    let raf,
      start,
      done = false;
    const finish = () => {
      if (!done) {
        done = true;
        setDisplay(number);
      }
    };
    const step = t => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * number));
      if (p < 1) raf = requestAnimationFrame(step);else done = true;
    };
    raf = requestAnimationFrame(step);
    // Safety net: if rAF is throttled (background/preview), still land on the final value.
    const t = setTimeout(finish, duration + 400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [shown, countUp, number, duration]);
  return React.createElement('div', {
    ref,
    className: ['sg-stat', className].filter(Boolean).join(' '),
    ...rest
  }, React.createElement('div', {
    className: 'sg-stat__num'
  }, prefix, React.createElement('span', {
    className: 'sg-gold-text'
  }, (countUp ? display : number).toLocaleString()), suffix), label ? React.createElement('div', {
    className: 'sg-stat__label'
  }, label) : null, progress != null ? React.createElement('div', {
    className: 'sg-stat__bar'
  }, React.createElement('i', {
    style: {
      width: (shown ? progress : 0) + '%'
    }
  })) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/showcase/TicketCard.jsx
try { (() => {
/**
 * SPORT[GEN] TicketCard — pricing card (Startup / Pro / VIP). Glassmorphism
 * with a gold-checked perks list; the `featured` (VIP) card gets the gold
 * glow + border and a gold primary CTA.
 */
function TicketCard({
  tier,
  price,
  vat = '+VAT',
  perks = [],
  perksIntro = null,
  // muted lead-in line, e.g. "Perks of a Pro ticket plus:"
  featured = false,
  ctaLabel = 'Buy Ticket',
  ctaHref = '#',
  className = '',
  ...rest
}) {
  const cls = ['sg-card', 'sg-ticket', featured ? 'sg-card--glow sg-ticket--featured' : '', className].filter(Boolean).join(' ');
  const btnCls = 'sg-btn ' + (featured ? 'sg-btn--primary' : 'sg-btn--light');
  return React.createElement('div', {
    className: cls,
    ...rest
  }, React.createElement('div', {
    className: 'sg-ticket__tier'
  }, tier), React.createElement('div', {
    className: 'sg-ticket__price'
  }, price, ' ', React.createElement('small', null, vat)), React.createElement('a', {
    className: 'sg-ticket__cta ' + btnCls,
    href: ctaHref
  }, ctaLabel), React.createElement('ul', {
    className: 'sg-ticket__perks'
  }, perksIntro ? React.createElement('li', {
    className: 'sg-ticket__plus'
  }, perksIntro) : null, perks.map((p, i) => React.createElement('li', {
    key: i
  }, p))));
}
Object.assign(__ds_scope, { TicketCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/TicketCard.jsx", error: String((e && e.message) || e) }); }

// tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* SPORT[GEN], hash router + scroll-reveal wiring */
const {
  useState: useAppState,
  useEffect: useAppEffect
} = React;
const ROUTES = {
  '': 'HomePage',
  '/': 'HomePage',
  '/home': 'HomePage',
  '/agenda': 'AgendaPage',
  '/why-attend': 'WhyAttendPage',
  '/speakers': 'SpeakersPage',
  '/tracks': 'TracksPage',
  '/startup-competition': 'StartupPage',
  '/medias': 'MediasPage',
  '/news': 'NewsPage',
  '/side-events': 'SideEventsPage',
  '/vip-dinner': 'VipDinnerPage',
  '/french-open': 'FrenchOpenPage',
  '/half-time-drinks': 'HalfTimeDrinksPage',
  '/investor-breakfast': 'InvestorBreakfastPage',
  '/closing-drinks': 'ClosingDrinksPage',
  '/investment-summit': 'InvestmentSummitPage',
  '/investment-summit/tickets': 'InvestTicketsPage',
  '/plan-your-trip': 'PlanTripPage',
  '/get-in-touch': 'GetInTouchPage',
  '/tickets': 'TicketsPage',
  '/faq': 'FaqPage',
  '/partner': 'PartnerPage',
  '/sponsor': 'PartnerPage',
  '/terms-and-conditions': 'TermsPage',
  '/privacy': 'PrivacyPage',
  '/official-contest-rules': 'ContestRulesPage',
  '/download-brochure': 'DownloadBrochurePage',
  '/download-brochure-startup': 'DownloadBrochureStartupPage',
  '/sitemap': 'SitemapPage',
  '/404': 'NotFoundPage'
};
function currentPath() {
  const h = window.location.hash.replace(/^#/, '');
  return h || '/';
}

/* Tweaks — sitewide "feel" controls, applied by writing CSS custom properties
   onto :root so every component that already consumes var(--gold), var(--dur-base),
   the hero filter vars etc. recolors/retimes/remoods together (no per-component wiring). */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "gold",
  "motion": "live",
  "heroMood": "balanced"
} /*EDITMODE-END*/;
const ACCENT_PALETTES = {
  gold: {
    hi: '#FFEBAF',
    bright: '#FFD089',
    base: '#FFB049',
    deep: '#F0871E',
    rgb: '255,176,73'
  },
  ice: {
    hi: '#DCEEFF',
    bright: '#9CCBFF',
    base: '#4FA0F0',
    deep: '#215FC7',
    rgb: '79,160,240'
  },
  emerald: {
    hi: '#DCFBEA',
    bright: '#8FE3B8',
    base: '#2FBF80',
    deep: '#127A50',
    rgb: '47,191,128'
  }
};
const MOTION_PRESETS = {
  calm: {
    fast: '240ms',
    base: '420ms',
    slow: '900ms',
    scale: '1.5'
  },
  live: {
    fast: '160ms',
    base: '280ms',
    slow: '600ms',
    scale: '1'
  },
  intense: {
    fast: '90ms',
    base: '160ms',
    slow: '340ms',
    scale: '0.55'
  }
};
const HERO_MOODS = {
  bright: {
    brightness: '0.92',
    contrast: '1.0',
    saturate: '1.1',
    veil1: '0.5',
    veil2: '0.34',
    veil3: '0.18'
  },
  balanced: {
    brightness: '0.72',
    contrast: '1.05',
    saturate: '1.05',
    veil1: '0.78',
    veil2: '0.6',
    veil3: '0.46'
  },
  noir: {
    brightness: '0.5',
    contrast: '1.28',
    saturate: '0.12',
    veil1: '0.88',
    veil2: '0.76',
    veil3: '0.62'
  }
};
function applyTweaks(t) {
  const root = document.documentElement.style;
  const acc = ACCENT_PALETTES[t.accent] || ACCENT_PALETTES.gold;
  root.setProperty('--gold-highlight', acc.hi);
  root.setProperty('--gold-bright', acc.bright);
  root.setProperty('--gold', acc.base);
  root.setProperty('--amber-deep', acc.deep);
  root.setProperty('--accent', acc.base);
  root.setProperty('--accent-bright', acc.hi);
  root.setProperty('--accent-deep', acc.deep);
  root.setProperty('--border-gold', `rgba(${acc.rgb},0.55)`);
  root.setProperty('--glow-gold-sm', `0 0 24px -2px rgba(${acc.rgb},0.35)`);
  root.setProperty('--glow-gold-lg', `0 -30px 70px -30px rgba(${acc.rgb},0.55)`);
  root.setProperty('--glow-gold-base', `radial-gradient(120% 90% at 50% 130%, rgba(${acc.rgb},0.30) 0%, rgba(${acc.rgb},0.06) 45%, rgba(${acc.rgb},0) 70%)`);
  root.setProperty('--glow-gold-corner', `radial-gradient(50% 50%, ${acc.deep} 0%, rgba(${acc.rgb},0) 100%)`);
  root.setProperty('--gradient-gold', `radial-gradient(50% 50% at 50% 50%, ${acc.hi} 62%, ${acc.base} 100%)`);
  root.setProperty('--gradient-gold-h', `linear-gradient(90deg, ${acc.hi} 0%, ${acc.bright} 45%, ${acc.base} 100%)`);
  root.setProperty('--hero-glow-rgb', acc.rgb);
  const mo = MOTION_PRESETS[t.motion] || MOTION_PRESETS.live;
  root.setProperty('--dur-fast', mo.fast);
  root.setProperty('--dur-base', mo.base);
  root.setProperty('--dur-slow', mo.slow);
  root.setProperty('--motion-scale', mo.scale);
  const hm = HERO_MOODS[t.heroMood] || HERO_MOODS.balanced;
  root.setProperty('--hero-brightness', hm.brightness);
  root.setProperty('--hero-contrast', hm.contrast);
  root.setProperty('--hero-saturate', hm.saturate);
  root.setProperty('--hero-veil-1', hm.veil1);
  root.setProperty('--hero-veil-2', hm.veil2);
  root.setProperty('--hero-veil-3', hm.veil3);
}
function App() {
  const {
    Nav,
    Footer
  } = window;
  const [path, setPath] = useAppState(currentPath());
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useAppEffect(() => {
    applyTweaks(t);
  }, [t]);
  useAppEffect(() => {
    const onHash = () => {
      setPath(currentPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Toggle a route-level class so Home can widen its page margins AND so every
  // other route gets its own full-page background plate (see kit2.css body::before):
  // nav + content + footer all read --gutter from <body class="route-home">.
  useAppEffect(() => {
    const name = ROUTES[path] || 'NotFoundPage';
    const slug = path.replace(/^\//, '').split('/')[0] || 'home';
    Array.from(document.body.classList).filter(c => c.indexOf('route-') === 0).forEach(c => document.body.classList.remove(c));
    document.body.classList.add('route-' + slug);
    document.body.classList.toggle('route-home', name === 'HomePage');
  }, [path]);

  // (Re)wire scroll-reveal whenever the route changes
  useAppEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.reveal--in)'));
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('reveal--in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal--in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(el => io.observe(el));
    const t = setTimeout(() => els.forEach(e => e.classList.add('reveal--in')), 2600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [path]);
  const PageName = ROUTES[path] || 'NotFoundPage';
  const Page = window[PageName] || window.HomePage;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", {
    key: path
  }, /*#__PURE__*/React.createElement(Page, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent",
    value: ACCENT_PALETTES[t.accent].base,
    options: [ACCENT_PALETTES.gold.base, ACCENT_PALETTES.ice.base, ACCENT_PALETTES.emerald.base],
    onChange: v => {
      const found = Object.keys(ACCENT_PALETTES).find(k => ACCENT_PALETTES[k].base === v);
      setTweak('accent', found || 'gold');
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Feel"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Motion",
    value: t.motion,
    options: [{
      value: 'calm',
      label: 'Calm'
    }, {
      value: 'live',
      label: 'Live'
    }, {
      value: 'intense',
      label: 'Intense'
    }],
    onChange: v => setTweak('motion', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Hero mood",
    value: t.heroMood,
    options: [{
      value: 'bright',
      label: 'Bright'
    }, {
      value: 'balanced',
      label: 'Balanced'
    }, {
      value: 'noir',
      label: 'Noir'
    }],
    onChange: v => setTweak('heroMood', v)
  })));
}

// Reuse a single root across hot re-executions (avoids the "createRoot called twice" warning)
const __sgRootEl = document.getElementById('root');
window.__sgRoot = window.__sgRoot || ReactDOM.createRoot(__sgRootEl);
window.__sgRoot.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* SPORT[GEN], Footer */
const {
  useState: useFootState,
  useEffect: useFootEffect
} = React;
function Footer() {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const [route, setRoute] = useFootState(window.location.hash.replace('#', '') || '/');
  useFootEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const isInv = route.startsWith('/investment-summit'); // SGN Investment Summit: graphite art-direction
  return /*#__PURE__*/React.createElement("footer", {
    className: 'footer' + (isInv ? ' footer--inv' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-container footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__top"
  }, isInv ? /*#__PURE__*/React.createElement("img", {
    className: "footer__logo footer__logo--sgn",
    src: "assets/brand/sgn-investment-summit.png",
    alt: "[SGN] Invest"
  }) : /*#__PURE__*/React.createElement("img", {
    className: "footer__logo",
    src: "assets/brand/sportgen-logo-official.png",
    alt: "SPORT[GEN]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "footer__top-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__meta"
  }, /*#__PURE__*/React.createElement("span", null, "26 & 27 May 2027"), /*#__PURE__*/React.createElement("span", null, "Paris, France")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Get Your Ticket"))), /*#__PURE__*/React.createElement("div", {
    className: "footer__follow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer__follow-label"
  }, "Follow us on"), /*#__PURE__*/React.createElement("div", {
    className: "footer__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/company/sportgen-summit/",
    target: "_blank",
    rel: "noopener",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.96H5.56v8.38h2.78zM6.95 8.81a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.39 9.53v-4.59c0-2.45-1.31-3.59-3.06-3.59a2.64 2.64 0 0 0-2.39 1.31h-.04V9.96H10.1v8.38h2.78v-4.15c0-1.09.21-2.15 1.56-2.15 1.34 0 1.36 1.25 1.36 2.22v4.08h2.54z"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/sportgensummit/",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  }))))), /*#__PURE__*/React.createElement("nav", {
    className: "footer__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/get-in-touch",
    onClick: e => go(e, '#/get-in-touch')
  }, "Get In Touch"), /*#__PURE__*/React.createElement("a", {
    href: "#/speakers",
    onClick: e => go(e, '#/speakers')
  }, "2026 Speakers"), /*#__PURE__*/React.createElement("a", {
    href: "#/partner",
    onClick: e => go(e, '#/partner')
  }, "Partner"), /*#__PURE__*/React.createElement("a", {
    href: "#/faq",
    onClick: e => go(e, '#/faq')
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    href: "#/sitemap",
    onClick: e => go(e, '#/sitemap')
  }, "Sitemap")), /*#__PURE__*/React.createElement("div", {
    className: "footer__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 SPORT[GEN] Summit \xB7 sportgensummit.com"), /*#__PURE__*/React.createElement("span", null, "All copyrights \xB7", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#/terms-and-conditions",
    onClick: e => go(e, '#/terms-and-conditions')
  }, "Terms and Conditions"), " \xB7", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#/privacy",
    onClick: e => go(e, '#/privacy')
  }, "Privacy policy")))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* SPORT[GEN], Home hero with gold-streak backdrop, founding partner + partner marquee */
function Hero() {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const {
    marquee,
    heroVideo,
    foundingLogo
  } = window.SGData;
  const loop = marquee.concat(marquee);
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };

  // Loop the hero video but skip its final 6 seconds.
  const trimTail = e => {
    const v = e.currentTarget;
    if (v.duration && v.currentTime >= v.duration - 6) v.currentTime = 0;
  };

  // Size each logo to fill its card based on its own aspect ratio,
  // so wide marks and square marks both read at a comparable visual weight.
  const fitLogo = e => {
    const img = e.currentTarget;
    const ar = img.naturalWidth / img.naturalHeight || 1;
    let h;
    if (ar >= 4) h = 26; // very wide wordmarks
    else if (ar >= 2.6) h = 32;else if (ar >= 1.8) h = 36;else if (ar >= 1.2) h = 40;else h = 44; // square / tall marks
    img.style.height = h + 'px';
    img.style.width = 'auto';
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("video", {
    className: "hero__video",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    "aria-hidden": "true",
    onTimeUpdate: trimTail
  }, /*#__PURE__*/React.createElement("source", {
    src: heroVideo,
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__inner sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__eyebrow"
  }, /*#__PURE__*/React.createElement("span", null, "26 & 27 May 2027"), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Paris, France")), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Connect with Leaders.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "sg-gold-text"
  }, "Build the Future of Sport.")), /*#__PURE__*/React.createElement("div", {
    className: "hero__founding"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Founding Partner"), /*#__PURE__*/React.createElement("img", {
    className: "hero__founding-logo",
    src: foundingLogo,
    alt: "BNP Paribas"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero__marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__marquee-label"
  }, "Trusted by the industry leaders"), /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee__track"
  }, loop.map((src, i) => /*#__PURE__*/React.createElement("span", {
    className: "marquee__chip",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    onLoad: fitLogo
  })))))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InvestmentSummit.jsx
try { (() => {
/* SGN INVESTMENT SUMMIT, standalone art-direction page (graphite / mono).
   Self-contained DA, sits under the shared Nav/Footer as an Explore-SGN route. */
const {
  useState: useInvState,
  useEffect: useInvEffect,
  useRef: useInvRef
} = React;
const INV_CDN = 'https://framerusercontent.com/images/';

/* The leading investment voices, pulled from the speakers already on the site. */
const INV_VOICES = [['Marc Lasry', 'Co-Founder, Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png'], ['Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg'], ['Paolo Della Rovere', 'Managing Director', 'Morgan Stanley', 'pdvLJbsdJnsLkLnZcQRwHa8edfM.png'], ['Arnaud Caudoux', 'Deputy CEO', 'Bpifrance', '7X49U9IfeLJzZYasFXCHPvLZrE.png'], ['Mofses Kechichian', 'Managing Director', 'TRAIL Capital', 'SC5jKA69BcOxMSril0AxRPtLLqg.webp'], ['Kyang Yung', 'Chief Investment Officer', 'Gamma Waves Partners', 'NPxvIK1ahJtK6aTBHkdSslw.jpg'], ['Danny Menken', 'Co-Founder & General Partner', 'Athvance Capital', 'm9f95fpcRMqDIYHr5nWy622oONE.png'], ['Mark Wyatt', 'Managing Director', 'Alvarez & Marsal', 'v9vatvO0s2B6K43xRT7bxN1gXk.jpg'], ['Kushaan Ahuja', 'Partner', 'Will Ventures', 'ZIezVLEQ6WTmMov8zVurQ9bUI.webp'], ['Arjun Kapur', 'Vice President', 'Left Lane Capital', 'jW9ZIvK1FFDsYJ67Ep7xOzwD6k.jpg'], ['Charlie Stebbings', 'Head of Sport', '20VC', 'BuPSqhLT52NQIR9BN64DO9d3Ec.jpg'], ['Andy Marston', 'Head of Corporate Ventures', 'The Players Fund', 'KkyQMkFZGwFse8tkTEFCbCjThXc.png'], ['Adriana Crovetto', 'Investor', 'Gamma Waves Partners', 'G8JCKXENjWIMdqZJ8T2iPOFgI8.jpg'], ['António Caçorino', 'CEO & Founder', 'APEX', 'OoVzkBGf4K24lUhuRZoKcvb4.jpg'], ['Bex Smith', 'CEO & Founder', 'Crux Football', 'cSUoLhNbaT5EgvvrrJdgyz5ss4.jpg']];

/* Pull-quotes from leading investment voices on stage. */
const INV_QUOTES = [['“The best returns in sport go to those who read the game before the spreadsheet.”', 'Marc Lasry', 'Chairman & CEO of', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png'], ['“Private capital is no longer a spectator in sport, it is shaping how the industry gets built.”', 'Adnan Khalef', 'Managing Director of', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg'], ['“The biggest opportunity in sport is the blind spot everyone else keeps overlooking.”', 'António Caçorino', 'CEO & Founder of', 'APEX', 'OoVzkBGf4K24lUhuRZoKcvb4.jpg']];

/* Investment-led main-stage sessions (real, from the 2026 agenda). */
const INV_SESSIONS = [['Fireside with Marc Lasry', 'Avenue Capital'], ['Private capital in sport', 'Carlyle · TRAIL · Morgan Stanley'], ['Smart money in sport', 'Will Ventures · Left Lane · 20VC'], ["France as Europe's sports investment hub", 'Bpifrance'], ['The blind spot of Private Equity', 'APEX'], ["The women's sport investment window", 'Mastercard · Crux · BJK Cup']];

/* Who's in the room, real organisations from the site, grouped. */
const INV_PARTICIPANTS = [['Private Equity & Institutional', ['The Carlyle Group', 'Avenue Capital', 'APEX', 'TRAIL Capital']], ['Venture & Growth Capital', ['Will Ventures', 'Left Lane Capital', '20VC', 'Athvance Capital', 'Gamma Waves Partners', 'Clubhouse Ventures', 'The Players Fund']]];

/* Investment Summit dedicated passes (prices to confirm). */
const INV_TICKETS = [{
  tier: 'LP Pass',
  price: 'On request',
  intro: 'FOR LIMITED PARTNERS:',
  perks: ['Full access to both summit days + SGN Invest programme', 'Access to the LP & investor networking lounge', 'Introductions to GPs and funds raising']
}, {
  tier: 'Investor Pass',
  price: 'On request',
  intro: 'FOR ACTIVE INVESTORS:',
  perks: ['Full access to both summit days + SGN Invest programme', 'Access to the investor networking lounge', 'Curated deal-flow & startup access', 'Investor-only roundtables']
}, {
  tier: 'VIP Investor Pass',
  featured: true,
  price: 'On request',
  intro: 'PERKS OF AN INVESTOR PASS PLUS:',
  perks: ['Invitation to the VIP Dinner', 'Access to the VIP Lounge on both days', 'Private meeting rooms for deal-making', 'Concierge introductions to LPs & founders']
}];
const INV_FIGURES = [['250', '', 'Curated investors', 'hand-selected'], ['100', '', "LP's", 'limited partners'], ['90', '%', 'Director-level & up', 'decision-makers']];

/* count-up gated by viewport */
function InvCountUp({
  value,
  suffix
}) {
  const target = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
  const hasComma = String(value).indexOf(',') >= 0;
  const ref = useInvRef(null);
  const [val, setVal] = useInvState(0);
  useInvEffect(() => {
    let raf;
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) {
        io.disconnect();
        const t0 = performance.now(),
          dur = 1500;
        const tick = t => {
          const p = Math.min(1, (t - t0) / dur),
            e = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * e));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }, {
      threshold: 0.4
    });
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target]);
  const fmt = hasComma ? val.toLocaleString('en-US') : String(val);
  return /*#__PURE__*/React.createElement("span", {
    className: "inv-fig__num",
    ref: ref
  }, fmt, suffix);
}

/* Curated fund logos for the listed firms. [name, src, asis?]
   `asis` = render in natural form (no black-silhouette filter) for two-tone marks.
   Still missing (no logo file): Will Ventures, Clubhouse Ventures. */
const INV_LOGO_CDN = 'https://framerusercontent.com/images/';
const INV_LOGOS = [['The Carlyle Group', INV_LOGO_CDN + '0wKm4XbrfMQTfvoWUOheFFPe7ys.png'], ['Avenue Capital', INV_LOGO_CDN + 'HZaR7L01XlCApAMTJDGF1DhqV18.png'], ['APEX', INV_LOGO_CDN + 'bkMmpr6NP0OUpWnewViZQLRfc.png'], ['TRAIL Capital', 'assets/logos/trail.png'], ['Left Lane Capital', 'assets/logos/left-lane.png'], ['20VC', INV_LOGO_CDN + 'T9cbGVkT9VMMbAhR50Z9LLCHOw.png'], ['Athvance Capital', 'assets/logos/athvance.png'], ['Gamma Waves Partners', INV_LOGO_CDN + '3cAhKpkihqzD6n5pZc2CDMSlVM.png'], ['The Players Fund', 'assets/logos/players-fund.png']];

/* Investors strip on the SIS home, real funds + institutions in the room. */
const INV_STRIP = [{
  name: 'The Carlyle Group',
  src: INV_LOGO_CDN + '0wKm4XbrfMQTfvoWUOheFFPe7ys.png'
}, {
  name: 'Avenue Capital',
  src: 'assets/logos/avenue-capital.png'
}, {
  name: 'BNP Paribas',
  src: 'https://framerusercontent.com/images/slCL53NvqEbZ8mCu0dMoIJNesTI.png'
}, {
  name: 'Left Lane Capital',
  src: 'assets/logos/left-lane.png',
  h: 48
}, {
  name: 'Morgan Stanley',
  word: 'Morgan Stanley'
}, {
  name: 'APEX',
  src: INV_LOGO_CDN + 'bkMmpr6NP0OUpWnewViZQLRfc.png',
  h: 50
}, {
  name: 'TRAIL Capital',
  src: 'assets/logos/trail.png'
}, {
  name: '20VC',
  src: INV_LOGO_CDN + 'T9cbGVkT9VMMbAhR50Z9LLCHOw.png'
}, {
  name: 'Athvance Capital',
  src: 'assets/logos/athvance.png'
}, {
  name: 'Gamma Waves Partners',
  src: INV_LOGO_CDN + '3cAhKpkihqzD6n5pZc2CDMSlVM.png'
}, {
  name: 'The Players Fund',
  src: 'assets/logos/players-fund.png'
}];
function InvestmentSummitPage() {
  const D = window.SGData;
  const investLogos = INV_LOGOS.map(([alt, src, asis]) => ({
    src,
    alt,
    asis: !!asis
  }));
  const rootRef = useInvRef(null);

  /* DA locked to White, Dark DA removed */
  const light = true;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const BUY_URL = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
  const tickets = INV_TICKETS;
  const marqWords = ['Private Equity', 'Venture', 'Sovereign Capital', 'M&A', 'Family Offices', 'Growth', 'Rights & Media'];
  return /*#__PURE__*/React.createElement("div", {
    className: 'inv' + (light ? ' inv--light' : ''),
    ref: rootRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-grid",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("header", {
    className: "inv-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-hero__glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-hero__meta inv-rv"
  }, /*#__PURE__*/React.createElement("span", null, "[ SGN ", /*#__PURE__*/React.createElement("b", null, "Invest"), " ]"), /*#__PURE__*/React.createElement("span", null, "26 ", /*#__PURE__*/React.createElement("b", null, "May 2027")), /*#__PURE__*/React.createElement("span", null, "Paris, ", /*#__PURE__*/React.createElement("b", null, "France"))), /*#__PURE__*/React.createElement("div", {
    className: "inv-hero__head"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "inv-h1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-mask"
  }, /*#__PURE__*/React.createElement("span", null, "Europe's")), /*#__PURE__*/React.createElement("span", {
    className: "inv-mask"
  }, /*#__PURE__*/React.createElement("span", null, "Leading Sport")), /*#__PURE__*/React.createElement("span", {
    className: "inv-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-silver"
  }, "Investment")), /*#__PURE__*/React.createElement("span", {
    className: "inv-mask"
  }, /*#__PURE__*/React.createElement("span", null, "Event")))), /*#__PURE__*/React.createElement("div", {
    className: "inv-hero__lower"
  }, /*#__PURE__*/React.createElement("p", {
    className: "inv-hero__lead inv-rv"
  }, "Two days inside the SPORT[GEN] Summit where ", /*#__PURE__*/React.createElement("b", null, "the capital of sport"), " gathers, private equity, sovereign funds, venture and the operators raising and deploying it. Where deals begin."), /*#__PURE__*/React.createElement("div", {
    className: "inv-hero__cta inv-rv"
  }, /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: "#/investment-summit/tickets",
    onClick: e => go(e, '#/investment-summit/tickets')
  }, "Request your pass ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost",
    href: "#voices",
    onClick: e => {
      e.preventDefault();
      document.getElementById('inv-voices').scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, "See the lineup")))), /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-tvoices"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "inv-tvoices__title inv-rv"
  }, "Top voices at SGN Invest"), /*#__PURE__*/React.createElement("div", {
    className: "inv-tvcards"
  }, INV_QUOTES.map((q, i) => /*#__PURE__*/React.createElement("figure", {
    className: "inv-tvcard inv-rv",
    key: q[1],
    style: {
      animationDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "inv-tvcard__quote"
  }, q[0]), /*#__PURE__*/React.createElement("figcaption", {
    className: "inv-tvcard__who"
  }, /*#__PURE__*/React.createElement("img", {
    className: "inv-tvcard__ph",
    src: INV_CDN + q[4],
    alt: q[1],
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "inv-tvcard__name"
  }, q[1]), /*#__PURE__*/React.createElement("div", {
    className: "inv-tvcard__role"
  }, q[2], " ", /*#__PURE__*/React.createElement("b", null, q[3]))))))))), /*#__PURE__*/React.createElement("section", {
    className: "inv-section inv-section--light",
    style: {
      paddingTop: 'clamp(20px,3vw,40px)',
      paddingBottom: 'clamp(24px,3vw,44px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "inv-invhead inv-rv"
  }, "Meet the investors owning the future of the game")), /*#__PURE__*/React.createElement("div", {
    className: "inv-invmarq",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-invmarq__track"
  }, INV_STRIP.concat(INV_STRIP).map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "inv-invmarq__cell",
    key: c.name + i
  }, c.word ? /*#__PURE__*/React.createElement("span", {
    className: "inv-invword"
  }, c.word) : /*#__PURE__*/React.createElement("img", {
    src: c.src,
    alt: c.name,
    loading: "lazy",
    style: c.h ? {
      height: c.h + 'px'
    } : undefined
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "inv-section",
    style: {
      paddingTop: 'clamp(40px,5vw,70px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-shead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-shead__idx inv-rv"
  }, "[01]"), /*#__PURE__*/React.createElement("div", {
    className: "inv-shead__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-eyebrow inv-rv"
  }, "Why the room matters"), /*#__PURE__*/React.createElement("h2", {
    className: "inv-h2 inv-rv"
  }, "The most exclusive room of investors"), /*#__PURE__*/React.createElement("p", {
    className: "inv-shead__sub inv-rv"
  }, "The investment community of sport, funds, banks, family offices and the rights holders they back, convened during Roland-Garros week. Concentrated, senior, and there to do business."))), /*#__PURE__*/React.createElement("div", {
    className: "inv-figs"
  }, INV_FIGURES.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "inv-fig inv-rv",
    key: f[2],
    style: {
      animationDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement(InvCountUp, {
    value: f[0],
    suffix: f[1]
  }), /*#__PURE__*/React.createElement("span", {
    className: "inv-fig__label"
  }, f[2]), /*#__PURE__*/React.createElement("span", {
    className: "inv-fig__note"
  }, f[3])))))), /*#__PURE__*/React.createElement("section", {
    className: "inv-section",
    id: "inv-voices",
    style: {
      paddingBottom: 'clamp(40px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-shead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-shead__idx inv-rv"
  }, "[02]"), /*#__PURE__*/React.createElement("div", {
    className: "inv-shead__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-eyebrow inv-rv"
  }, "Top voices"), /*#__PURE__*/React.createElement("h2", {
    className: "inv-h2 inv-rv"
  }, "The leading voices speaking", /*#__PURE__*/React.createElement("br", null), "at SGN Invest"))), /*#__PURE__*/React.createElement("div", {
    className: "inv-voices"
  }, INV_VOICES.map((v, i) => /*#__PURE__*/React.createElement("article", {
    className: "inv-voice inv-rv",
    key: v[0],
    style: {
      animationDelay: i % 4 * 60 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-voice__media"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-voice__idx"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("img", {
    src: INV_CDN + v[3],
    alt: v[0],
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "inv-voice__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-voice__name"
  }, v[0]), /*#__PURE__*/React.createElement("div", {
    className: "inv-voice__role"
  }, v[1]), /*#__PURE__*/React.createElement("div", {
    className: "inv-voice__org"
  }, v[2]))))), /*#__PURE__*/React.createElement("div", {
    className: "inv-voices__foot inv-rv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-voices__note"
  }, "+ 100 speakers across the full SPORT[GEN] programme"), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost",
    href: "#/speakers",
    onClick: e => go(e, '#/speakers')
  }, "All 2026 speakers ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "inv-section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-shead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-shead__idx inv-rv"
  }, "[04]"), /*#__PURE__*/React.createElement("div", {
    className: "inv-shead__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-eyebrow inv-rv"
  }, "Passes"), /*#__PURE__*/React.createElement("h2", {
    className: "inv-h2 inv-rv"
  }, "Secure your place in the room"), /*#__PURE__*/React.createElement("p", {
    className: "inv-shead__sub inv-rv"
  }, "One ticket, full access to both days of the SPORT[GEN] Summit and the SGN Invest programme. Super Early Bird pricing."))), /*#__PURE__*/React.createElement("div", {
    className: "invtx-grid"
  }, INV_TIX_PASSES.map(t => /*#__PURE__*/React.createElement("div", {
    className: 'invtx-card inv-rv' + (t.featured ? ' invtx-card--feat' : ''),
    key: t.tier
  }, /*#__PURE__*/React.createElement("div", {
    className: "invtx-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__tier"
  }, t.tier), t.featured ? /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__flag"
  }, "\u2605 Free for LPs") : null), /*#__PURE__*/React.createElement("div", {
    className: "invtx-card__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__amt"
  }, t.price), t.unit ? /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__unit"
  }, t.unit) : null), /*#__PURE__*/React.createElement("p", {
    className: "invtx-card__note"
  }, invTixNote(t.note)), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn invtx-card__cta",
    href: t.href,
    target: t.href.startsWith('#') ? undefined : '_blank',
    rel: "noopener",
    onClick: t.href.startsWith('#') ? e => go(e, t.href) : undefined
  }, t.cta), /*#__PURE__*/React.createElement("div", {
    className: "invtx-card__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "invtx-list"
  }, t.perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement(InvTixCheck, null), /*#__PURE__*/React.createElement("span", null, p))))))))), /*#__PURE__*/React.createElement("section", {
    className: "inv-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-eyebrow inv-cta__eyebrow inv-rv"
  }, "[ 26 May 2027 \xB7 Paris ]"), /*#__PURE__*/React.createElement("h2", {
    className: "inv-rv"
  }, "Where deals", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "inv-silver"
  }, "begin.")), /*#__PURE__*/React.createElement("p", {
    className: "inv-cta__sub inv-rv"
  }, "Join the capital community of sport for two days in Paris during Roland-Garros week."), /*#__PURE__*/React.createElement("div", {
    className: "inv-cta__btns inv-rv"
  }, /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: "#/investment-summit/tickets",
    onClick: e => go(e, '#/investment-summit/tickets')
  }, "Request your pass ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost",
    href: "#/get-in-touch",
    onClick: e => go(e, '#/get-in-touch')
  }, "Talk to the team")))), /*#__PURE__*/React.createElement("a", {
    className: "inv-lpbar",
    href: "#/why-lp",
    onClick: e => go(e, '#/why-lp')
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-lpbar__track"
  }, Array.from({
    length: 12
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    className: "inv-lpbar__item",
    key: i
  }, "Free for LPs, Apply for an LP Pass ", /*#__PURE__*/React.createElement("span", {
    className: "inv-lpbar__sep"
  }, "\u2726"))))));
}
window.InvestmentSummitPage = InvestmentSummitPage;

/* ============================================================
   [SGN] INVESTMENT SUMMIT, Tickets page (#/investment-summit/tickets)
   ============================================================ */

const INV_TIX_BUY = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
const INV_TIX_PRESS = '#/get-in-touch';
const INV_TIX_PASSES = [{
  tier: 'LP Pass',
  price: 'Free',
  unit: 'for qualified LPs',
  featured: true,
  note: 'Complimentary two-day pass for **verified Limited Partners**',
  cta: 'Apply for an LP Pass',
  href: INV_TIX_BUY,
  perks: ['Full access to both summit days + SGN Invest programme', 'Access to the LP & investor networking lounge', 'Curated introductions to GPs and funds raising', 'Invitation to the LP-only investor breakfast']
}, {
  tier: 'Investor Pass',
  price: '€1,290',
  unit: 'ex. VAT',
  note: 'Two-day pass for **active investors & funds**',
  cta: 'Buy a Ticket',
  href: INV_TIX_BUY,
  perks: ['Full access to both summit days + SGN Invest programme', 'Access to the investor networking lounge', 'Curated deal-flow & startup access', 'Investor-only roundtables']
}, {
  tier: 'VIP Investor Pass',
  price: '€2,490',
  unit: 'ex. VAT',
  note: '**Everything** on an **Investor Pass** plus...',
  cta: 'Buy a Ticket',
  href: INV_TIX_BUY,
  perks: ['Invitation to the exclusive VIP Dinner', 'Access to the VIP Lounge on both days', 'Private meeting rooms for deal-making', 'Concierge introductions to LPs & founders']
}];
const INV_TIX_PRESS_PASS = {
  tier: 'Press Accreditation',
  note: 'Apply for press accreditation to cover SGN Invest 2027 on-site. Approved applicants receive media access, assets, and coordination support ahead of the summit.',
  cta: 'Media Pass Application',
  href: INV_TIX_PRESS,
  perks: ['Access to press updates, assets, and on-site support', 'Interview opportunities with speakers, partners, and investors', 'Application reviewed on a rolling basis']
};
const INV_TIX_GROUP = {
  tier: 'Group Discount',
  note: 'Attending as a team? Groups of 3+ from the same organisation receive a reduced rate across Investor and VIP passes. Get in touch for a tailored group quote.',
  cta: 'Request a Group Rate',
  href: INV_TIX_PRESS,
  perks: ['Discounted rate for 3 or more passes', 'Single invoice & coordinated registration', 'Ideal for funds, LPs and portfolio teams']
};
const INV_TIX_EXPERIENCE = [['Meet the capital', 'Sit across from the LPs, GPs and family offices actually writing cheques in sport.'], ['See the deal flow', 'First-hand access to the funds, founders and rights holders shaping the market.'], ['Forge partnerships', 'Turn introductions into term sheets, co-investments and commercial deals.'], ['Shape the market', 'Be part of the group defining how capital gets deployed across sport in Europe.']];
function InvTixCheck() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "invtx-check",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5L6.2 11.5L13 4.5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function invTixNote(str) {
  return str.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((chunk, i) => chunk.startsWith('**') && chunk.endsWith('**') ? /*#__PURE__*/React.createElement("b", {
    key: i
  }, chunk.slice(2, -2)) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, chunk));
}
function InvestTicketsPage() {
  const investLogos = INV_LOGOS.map(([alt, src, asis]) => ({
    src,
    alt,
    asis: !!asis
  }));
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "inv inv--light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-grid",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("header", {
    className: "invtx-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "invtx-idx inv-rv"
  }, "007 / Get access"), /*#__PURE__*/React.createElement("h1", {
    className: "invtx-title inv-rv"
  }, "Tickets for", /*#__PURE__*/React.createElement("br", null), "SGN Invest"), /*#__PURE__*/React.createElement("p", {
    className: "invtx-sub inv-rv"
  }, "Europe's leading sport investment event."), /*#__PURE__*/React.createElement("div", {
    className: "invtx-hero__cta inv-rv"
  }, /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: INV_TIX_BUY,
    target: "_blank",
    rel: "noopener"
  }, "Buy a Ticket ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost",
    href: "#/sponsor",
    onClick: e => go(e, '#/sponsor')
  }, "Partner with SGN")))), /*#__PURE__*/React.createElement("section", {
    className: "inv-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-shead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-shead__idx inv-rv"
  }, "[01]"), /*#__PURE__*/React.createElement("div", {
    className: "inv-shead__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-eyebrow inv-rv"
  }, "Passes"), /*#__PURE__*/React.createElement("h2", {
    className: "inv-h2 inv-rv"
  }, "Book your ticket"), /*#__PURE__*/React.createElement("p", {
    className: "inv-shead__sub inv-rv"
  }, "One ticket, full access to both days of the SPORT[GEN] Summit and the SGN Invest programme. LP passes are complimentary for verified Limited Partners."))), /*#__PURE__*/React.createElement("div", {
    className: "invtx-grid"
  }, INV_TIX_PASSES.map(t => /*#__PURE__*/React.createElement("div", {
    className: 'invtx-card inv-rv' + (t.featured ? ' invtx-card--feat' : ''),
    key: t.tier
  }, /*#__PURE__*/React.createElement("div", {
    className: "invtx-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__tier"
  }, t.tier), t.featured ? /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__flag"
  }, "\u2605 Free for LPs") : null), /*#__PURE__*/React.createElement("div", {
    className: "invtx-card__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__amt"
  }, t.price), t.unit ? /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__unit"
  }, t.unit) : null), /*#__PURE__*/React.createElement("p", {
    className: "invtx-card__note"
  }, invTixNote(t.note)), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn invtx-card__cta",
    href: t.href,
    target: t.href.startsWith('#') ? undefined : '_blank',
    rel: "noopener",
    onClick: t.href.startsWith('#') ? e => go(e, t.href) : undefined
  }, t.cta), /*#__PURE__*/React.createElement("div", {
    className: "invtx-card__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "invtx-list"
  }, t.perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement(InvTixCheck, null), /*#__PURE__*/React.createElement("span", null, p))))))), /*#__PURE__*/React.createElement("div", {
    className: "invtx-duo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invtx-press inv-rv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__tier"
  }, INV_TIX_PRESS_PASS.tier), /*#__PURE__*/React.createElement("p", {
    className: "invtx-press__note"
  }, INV_TIX_PRESS_PASS.note), /*#__PURE__*/React.createElement("ul", {
    className: "invtx-list invtx-press__list"
  }, INV_TIX_PRESS_PASS.perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement(InvTixCheck, null), /*#__PURE__*/React.createElement("span", null, p)))), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost invtx-press__cta",
    href: INV_TIX_PRESS_PASS.href,
    onClick: e => go(e, INV_TIX_PRESS_PASS.href)
  }, INV_TIX_PRESS_PASS.cta, " ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "invtx-press inv-rv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "invtx-card__tier"
  }, INV_TIX_GROUP.tier), /*#__PURE__*/React.createElement("p", {
    className: "invtx-press__note"
  }, INV_TIX_GROUP.note), /*#__PURE__*/React.createElement("ul", {
    className: "invtx-list invtx-press__list"
  }, INV_TIX_GROUP.perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement(InvTixCheck, null), /*#__PURE__*/React.createElement("span", null, p)))), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost invtx-press__cta",
    href: INV_TIX_GROUP.href,
    onClick: e => go(e, INV_TIX_GROUP.href)
  }, INV_TIX_GROUP.cta, " ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192")))))), /*#__PURE__*/React.createElement("section", {
    className: "inv-section inv-section--light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-shead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-shead__idx inv-rv"
  }, "[02]"), /*#__PURE__*/React.createElement("div", {
    className: "inv-shead__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-eyebrow inv-rv"
  }, "Attendance value"), /*#__PURE__*/React.createElement("h2", {
    className: "inv-h2 inv-rv"
  }, "The SGN Invest experience"))), /*#__PURE__*/React.createElement("div", {
    className: "invtx-xp"
  }, INV_TIX_EXPERIENCE.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    className: "invtx-xp__cell inv-rv",
    key: t,
    style: {
      animationDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "invtx-xp__idx"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "invtx-xp__title"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "invtx-xp__body"
  }, b)))), /*#__PURE__*/React.createElement("div", {
    className: "invtx-xp__cta inv-rv"
  }, /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: INV_TIX_BUY,
    target: "_blank",
    rel: "noopener"
  }, "Buy a Ticket ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))))));
}
window.InvestTicketsPage = InvestTicketsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InvestmentSummit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* SPORT[GEN], sticky navigation: left link pills + right "Explore SGN" mega menu */
const {
  useState: useNavState,
  useEffect: useNavEffect
} = React;

/* Left-of-logo quick links. A third tuple element = dropdown sub-items. */
const NAV_LEFT = [['Get in Touch', '#/get-in-touch'], ['Sponsor', '#/sponsor', [['Sponsor with SGN', '#/sponsor'], ['Book a call', 'https://meetings-eu1.hubspot.com/tom-petit-vallois/tom-meetings-scheduler'], ['Download our brochure', '#/download-brochure']]]];

/* "Explore SGN" mega menu, 3 columns */
const SGN_CDN = 'https://framerusercontent.com/images/';
const MEGA_COLS = [{
  heading: 'SGN Week',
  vignettes: true,
  items: [['SGN Week', '#/side-events', SGN_CDN + 'YS423by22cxS7BAwz4vMTZoCQs.png', false, 'A full week of sport across Paris'], ['SGN Invest', 'sis.html', 'assets/sgn-investment-square.png', true, 'Where sport capital gets deployed'], ['The Gala', '#/vip-dinner', SGN_CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg', false, 'A private evening with industry leaders'], ['The Draft', '#/startup-competition', SGN_CDN + 'M8ZEBZWVvM9a4GcqTMeFXBk.png', false, '200+ startups pitch the future of sport'], ['Side Events', '#/half-time-drinks', 'assets/halftime-crowd.jpg', false, 'Golden-hour drinks to the final toast']]
}, {
  heading: 'Program',
  sub: '2026 Edition',
  items: [['2026 Agenda', '#/agenda'], ['2026 Speakers', '#/speakers'], ['Why Attend', '#/why-attend'], ['Tracks', '#/tracks']]
}, {
  heading: 'Ecosystem',
  items: [['Sponsors', '#/sponsor'], ['Media', '#/medias'], ['News', '#/news']]
}];
function Nav() {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const [scrolled, setScrolled] = useNavState(false);
  const [open, setOpen] = useNavState(false); // mobile drawer
  const [openCol, setOpenCol] = useNavState(null); // mobile accordion
  const [route, setRoute] = useNavState(window.location.hash.replace('#', '') || '/');
  useNavEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.18);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);
  const navTo = href => {
    setOpen(false);
    setOpenCol(null);
    window.location.hash = href.replace('#', '');
  };
  const isActive = href => route === href.replace('#', '');
  const isInv = route.startsWith('/investment-summit'); // SGN Investment Summit: graphite art-direction
  const ticketsHref = isInv ? '#/investment-summit/tickets' : '#/tickets';

  // Live-site pill animation: label slides up, gold rounded layer rises, twin label slides in
  const fx = text => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "navfx__bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "navfx__l1"
  }, text), /*#__PURE__*/React.createElement("span", {
    className: "navfx__l2",
    "aria-hidden": "true"
  }, text));

  // 2x2 dot grid icon for Explore SGN
  const gridIcon = /*#__PURE__*/React.createElement("svg", {
    className: "sg-mega__icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "6",
    height: "6",
    rx: "1.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "0",
    width: "6",
    height: "6",
    rx: "1.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "9",
    width: "6",
    height: "6",
    rx: "1.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6",
    rx: "1.5",
    fill: "currentColor"
  }));
  return /*#__PURE__*/React.createElement("header", {
    className: 'sg-nav' + (scrolled ? ' sg-nav--scrolled' : '') + (isInv ? ' sg-nav--inv' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__inner"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "sg-nav__menus"
  }, NAV_LEFT.map(([label, href, sub]) => sub ? /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__qdrop",
    key: label
  }, /*#__PURE__*/React.createElement("button", {
    className: "sg-nav__quick",
    type: "button",
    "aria-haspopup": "true"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__qdrop-panel"
  }, sub.map(([l, h]) => {
    const sext = !h.startsWith('#');
    return sext ? /*#__PURE__*/React.createElement("a", {
      key: h + l,
      href: h,
      target: "_blank",
      rel: "noopener"
    }, l) : /*#__PURE__*/React.createElement("a", {
      key: h + l,
      href: h,
      onClick: e => {
        e.preventDefault();
        navTo(h);
      }
    }, l);
  }))) : /*#__PURE__*/React.createElement("a", {
    key: href,
    className: "sg-nav__quick",
    href: href,
    onClick: e => {
      e.preventDefault();
      navTo(href);
    }
  }, label))), /*#__PURE__*/React.createElement("a", {
    className: "sg-nav__brand",
    href: "#/",
    onClick: e => {
      e.preventDefault();
      navTo('#/');
    }
  }, isInv ? /*#__PURE__*/React.createElement("img", {
    className: "sg-nav__brand-sgn",
    src: "assets/brand/sgn-investment-summit.png",
    alt: "[SGN] Invest"
  }) : /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/sportgen-logo-official.png",
    alt: "SPORT[GEN]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    className: "sg-btn--nav-navy",
    href: ticketsHref,
    onClick: e => {
      e.preventDefault();
      navTo(ticketsHref);
    }
  }, "2027 Tickets"), /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__mega"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sg-nav__mega-trigger",
    "aria-haspopup": "true"
  }, /*#__PURE__*/React.createElement("span", null, "Explore SGN"), gridIcon), /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__mega-panel"
  }, MEGA_COLS.map(col => /*#__PURE__*/React.createElement("div", {
    className: 'sg-mega__col' + (col.vignettes ? ' sg-mega__col--vig' : ''),
    key: col.heading
  }, /*#__PURE__*/React.createElement("h4", {
    className: "sg-mega__heading"
  }, col.heading), col.sub ? /*#__PURE__*/React.createElement("span", {
    className: "sg-mega__subheading"
  }, col.sub) : null, col.vignettes ? /*#__PURE__*/React.createElement("div", {
    className: "sg-mega__vgrid"
  }, col.items.map(([label, href, img, dark, sub]) => {
    const ext = !href.startsWith('#');
    return /*#__PURE__*/React.createElement("a", {
      key: href,
      href: href,
      className: 'sg-mega__vig' + (dark ? ' sg-mega__vig--dark' : '') + (isActive(href) ? ' is-active' : ''),
      onClick: ext ? undefined : e => {
        e.preventDefault();
        navTo(href);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "sg-mega__vig-thumb"
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "",
      loading: "lazy"
    }), dark ? null : /*#__PURE__*/React.createElement("span", {
      className: "sg-mega__vig-badge",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/sgn-wordmark.png",
      alt: ""
    }))), /*#__PURE__*/React.createElement("span", {
      className: "sg-mega__vig-text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sg-mega__vig-label"
    }, label), sub ? /*#__PURE__*/React.createElement("span", {
      className: "sg-mega__vig-sub"
    }, sub) : null));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "sg-mega__list"
  }, col.items.map(([label, href], i) => /*#__PURE__*/React.createElement("a", {
    key: col.heading + i,
    href: href,
    className: 'sg-mega__link' + (isActive(href) ? ' is-active' : ''),
    onClick: e => {
      e.preventDefault();
      navTo(href);
    }
  }, label)))))))), /*#__PURE__*/React.createElement("button", {
    className: "sg-nav__burger",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), open && /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__mobile"
  }, NAV_LEFT.map(([label, href, sub]) => sub ? /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__mgroup",
    key: label
  }, /*#__PURE__*/React.createElement("button", {
    className: "sg-nav__mtrigger",
    onClick: () => setOpenCol(openCol === label ? null : label)
  }, label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, openCol === label ? '−' : '+')), openCol === label && /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__msub"
  }, sub.map(([l, h]) => h.startsWith('#') ? /*#__PURE__*/React.createElement("a", {
    key: h + l,
    href: h,
    onClick: e => {
      e.preventDefault();
      navTo(h);
    }
  }, l) : /*#__PURE__*/React.createElement("a", {
    key: h + l,
    href: h,
    target: "_blank",
    rel: "noopener"
  }, l)))) : /*#__PURE__*/React.createElement("button", {
    key: href,
    className: "sg-nav__mtrigger",
    onClick: () => navTo(href)
  }, label)), MEGA_COLS.map(col => /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__mgroup",
    key: col.heading
  }, /*#__PURE__*/React.createElement("button", {
    className: "sg-nav__mtrigger",
    onClick: () => setOpenCol(openCol === col.heading ? null : col.heading)
  }, col.heading, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, openCol === col.heading ? '−' : '+')), openCol === col.heading && /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__msub"
  }, col.items.map(([label, href], i) => /*#__PURE__*/React.createElement("a", {
    key: col.heading + i,
    href: href,
    onClick: e => {
      e.preventDefault();
      navTo(href);
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    className: "sg-nav__mcta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    className: "sg-btn--nav-navy",
    href: ticketsHref,
    onClick: e => {
      e.preventDefault();
      navTo(ticketsHref);
    }
  }, "2027 Tickets"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/News.jsx
try { (() => {
/* SPORT[GEN], News / Blog: featured article + latest articles grid + in-page reader */
const {
  useState: useNewsState
} = React;
const NEWS_ARTICLES = [{
  slug: 'sportgen-returns-paris-2027',
  category: 'Announcements',
  date: 'June 16, 2026',
  readTime: '3 min read',
  author: 'SportGen Newsroom',
  image: 'assets/news/sportgen-stage.jpg',
  title: 'SPORT[GEN] Summit is coming back to Paris in May 2027!',
  excerpt: 'After a record-breaking edition, the global gathering for the business of sport returns to Paris, two days on the main stage and a full week across the city.',
  featured: true,
  body: [{
    h: null,
    p: 'SPORT[GEN] Summit returns to Paris on 26 & 27 May 2027, bringing together the founders, investors, federations and brands shaping the next era of sport. After a record-breaking edition, we are back in the heart of Paris, steps from the Champs-Élysées, with an expanded programme across two days on the main stage.'
  }, {
    h: 'A week, not just a summit',
    p: 'Around the two main days, SGN Week unfolds across the city, from the Investor Breakfast and Half-Time Drinks to the now-signature VIP Dinner and Closing Drinks. Each moment is built for the kind of conversation that simply doesn’t happen on a conference floor.'
  }, {
    h: 'At the heart of the season',
    p: 'Holding the summit during one of the most intense weeks of the global sports calendar is deliberate. It places our delegates at the centre of the moment, with access to the people and stories defining the year ahead.'
  }, {
    h: null,
    p: 'Super Early Bird tickets for the 2027 edition are live now, with early allocations reserved for returning partners and members of the SportGen community.'
  }]
}, {
  slug: 'world-cup-2026-media-rights',
  category: 'Media Rights',
  date: 'June 12, 2026',
  readTime: '5 min read',
  author: 'SportGen Newsroom',
  image: 'assets/news/worldcup.png',
  title: 'The 2026 World Cup is the most-sold media event ever, and deals are still closing at kick-off',
  excerpt: 'With 104 matches across three nations, FIFA\u2019s first 48-team World Cup has redrawn the global rights map, right down to agreements signed hours before the opener.',
  body: [{
    h: null,
    p: 'The 48-team, 104-match tournament staged across the United States, Canada and Mexico is the largest World Cup ever held, and the most valuable from a media standpoint. Through the spring, broadcasters and streamers raced to lock down territories, with several agreements reportedly signed only hours before the opening match.'
  }, {
    h: 'A streaming-first tournament',
    p: 'The balance has tipped decisively from traditional pay-TV toward global platforms. DAZN secured rights to all 104 matches for subscribers across several South American markets, underlining how central streaming has become to FIFA\u2019s distribution strategy.'
  }, {
    h: 'Negotiated to the final whistle',
    p: 'Thai telecoms group Jasmine International agreed a World Cup rights deal only hours before kick-off, a reminder that even the biggest event in sport is now negotiated down to the wire.'
  }, {
    h: null,
    p: 'For rights holders watching from Paris, the lesson is clear: scarcity and global reach still command record fees, but the buyers, and the screens they sell, have fundamentally changed.'
  }]
}, {
  slug: 'nfl-franchise-valuations-seahawks',
  category: 'Franchise Valuations',
  date: 'June 10, 2026',
  readTime: '4 min read',
  author: 'SportGen Newsroom',
  image: 'assets/news/seahawks.png',
  title: 'A possible $9bn Seahawks bid would reset the ceiling for sports franchises',
  excerpt: 'Reports that Chelsea co-owner Todd Boehly is weighing a bid of up to $9bn for the Seattle Seahawks would shatter the NFL\u2019s ownership record, and signal where valuations are heading.',
  body: [{
    h: null,
    p: 'Todd Boehly, alongside Guggenheim Partners chief executive Mark Walter, is reported to be exploring a bid of up to $9bn for the Seattle Seahawks, with Middle East investors floated as potential partners. A deal at that level would eclipse the roughly $6bn paid for the Washington Commanders, the current NFL record.'
  }, {
    h: 'Why the number matters',
    p: 'Every new high resets the benchmark used to value the other teams in a league, and the assumptions investors carry into competitions worldwide. Limited supply, durable media income and global demand keep pushing top-tier franchises into territory once reserved for entire portfolios.'
  }, {
    h: null,
    p: 'The names linked to the deal, from Guggenheim to sovereign-backed capital, show just how global the buyer pool for elite sports assets has become.'
  }]
}, {
  slug: 'mlb-rights-fragmentation',
  category: 'Broadcast',
  date: 'June 4, 2026',
  readTime: '4 min read',
  author: 'SportGen Newsroom',
  image: 'assets/news/mlb.png',
  title: 'Baseball\u2019s new TV deal splits the season across NBC, Netflix and ESPN',
  excerpt: 'MLB\u2019s reshuffled national rights, spread across a broadcaster, a streamer and a sports-media giant, is a case study in how live sport is being unbundled.',
  body: [{
    h: null,
    p: 'Major League Baseball confirmed new national agreements with NBCUniversal, Netflix and ESPN, alongside its existing deals with Fox and Turner. NBC takes Sunday-night and Wild Card games on Peacock and its relaunched cable network; Netflix adds marquee one-offs including the Home Run Derby and an Opening Night game; ESPN gains the right to sell the out-of-market MLB.TV product.'
  }, {
    h: 'The unbundling continues',
    p: 'Where a league once sold its season to one or two networks, it now stitches together broadcasters and streamers, each taking the windows that suit its model. Reach goes up; for the fan, simplicity goes down.'
  }, {
    h: null,
    p: 'For every rights holder, the trade-off raises the question SportGen keeps returning to: how much fragmentation is worth the incremental dollar?'
  }]
}, {
  slug: 'private-equity-european-football',
  category: 'Private Equity',
  date: 'June 7, 2026',
  readTime: '5 min read',
  author: 'SportGen Newsroom',
  image: 'assets/news/reggina.png',
  title: 'New money, smaller clubs: private equity goes hunting in the mid-market',
  excerpt: 'From a celebrity-backed takeover of Italy\u2019s Reggina to multi-billion interest in Napoli, investors are no longer chasing only the giants.',
  body: [{
    h: null,
    p: 'Underdog Global Partners acquired historic Serie D side AS Reggina 1914, with Kelly Ripa and Mark Consuelos among the co-investors, and set out a five-to-seven-year plan to climb back toward Serie A. The same group has been linked with a reported approach of around $2.3bn for SSC Napoli.'
  }, {
    h: 'The thesis',
    p: 'Lower down the pyramid, valuations are a fraction of the elite, the upside sits several promotions away, and operators believe modern commercial and data playbooks can close the gap faster than ever. It is precisely the mid-market that SportGen\u2019s investor community keeps circling.'
  }, {
    h: null,
    p: 'Whether patient capital can withstand the volatility of sporting results is the open question, but the money is no longer waiting at the top of the table.'
  }]
}, {
  slug: 'liv-golf-sovereign-funding',
  category: 'Capital & Influence',
  date: 'June 9, 2026',
  readTime: '4 min read',
  author: 'SportGen Newsroom',
  image: 'assets/news/liv-pif.png',
  title: 'LIV Golf and the limits of sovereign money',
  excerpt: 'As Saudi Arabia\u2019s PIF backing is tested, LIV\u2019s push to raise up to $350m from outside investors shows even state-funded leagues need a commercial model.',
  body: [{
    h: null,
    p: 'LIV Golf chief executive Scott O\u2019Neil said he must \u201ctake PIF at their word\u201d on continued support, while the league races to close an external raise of up to $350m, holding a series of investor meetings through the summer.'
  }, {
    h: 'From subsidy to sustainability',
    p: 'State capital can launch a property at extraordinary speed, but the next phase is harder to buy: independent revenue, durable audiences and a credible path to profit. The transition from funded to self-sustaining is where many new leagues will ultimately be judged.'
  }, {
    h: null,
    p: 'It is a live test of a question every founder-backed and sovereign-backed venture eventually has to answer.'
  }]
}, {
  slug: 'sponsorship-records-womens-sport',
  category: 'Sponsorship',
  date: 'June 5, 2026',
  readTime: '4 min read',
  author: 'SportGen Newsroom',
  image: 'assets/news/wnba.png',
  title: 'Sponsorship is concentrating, and women\u2019s sport is where the new growth is',
  excerpt: 'NBA team sponsorship hit a record $1.8bn this season even as brands consolidate spend, while women\u2019s competitions keep converting rising audiences into commercial value.',
  body: [{
    h: null,
    p: 'League-wide, NBA team sponsorship revenue reached a record of roughly $1.8bn for the 2025-26 season, up around 11% year-on-year, with brands concentrating budgets into fewer, larger partnerships. The pattern repeats across sport: bigger deals, fewer of them, deeper integrations.'
  }, {
    h: 'The women\u2019s sport window',
    p: 'Audiences and broadcast slots for women\u2019s competitions keep expanding, and the brands moving early are pricing in growth the rest of the market is still catching up to. In investors\u2019 words, the window is still open.'
  }, {
    h: null,
    p: 'For partners, the strategic question is no longer whether to back women\u2019s sport, but how quickly, before the window\u2019s economics reset.'
  }]
}];
function newsBySlug(slug) {
  return NEWS_ARTICLES.find(a => a.slug === slug) || null;
}

/* ---- Reusable placeholder media block (team drops real images here) ---- */
function NewsThumb({
  label,
  className,
  src
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'news-thumb' + (className ? ' ' + className : ''),
    "aria-hidden": "true"
  }, src ? /*#__PURE__*/React.createElement("img", {
    className: "news-thumb__img",
    src: src,
    alt: "",
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "news-thumb__ph"
  }, label || 'IMG · 16:10'));
}
function NewsMeta({
  a,
  withRead
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "news-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "news-meta__dot",
    "aria-hidden": "true"
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, "Published on ", a.date), withRead ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "news-meta__dot",
    "aria-hidden": "true"
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, a.readTime)) : null);
}

/* ---- Single article reader ---- */
function ArticleView({
  article,
  onBack
}) {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  return /*#__PURE__*/React.createElement("article", {
    className: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "article__bg page-hero__bg page-hero__bg--network",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-container article__inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "article__back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2190"), " All News"), /*#__PURE__*/React.createElement("span", {
    className: "news-eyebrow"
  }, article.category), /*#__PURE__*/React.createElement("h1", {
    className: "article__title"
  }, article.title), /*#__PURE__*/React.createElement(NewsMeta, {
    a: article,
    withRead: true
  }), /*#__PURE__*/React.createElement(NewsThumb, {
    label: "ARTICLE HERO \xB7 16:9",
    className: "news-thumb--hero",
    src: article.image
  }), /*#__PURE__*/React.createElement("div", {
    className: "article__body"
  }, article.body.map((blk, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, blk.h ? /*#__PURE__*/React.createElement("h2", null, blk.h) : null, /*#__PURE__*/React.createElement("p", null, blk.p)))), /*#__PURE__*/React.createElement("div", {
    className: "article__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "article__back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2190"), " Back to all news"), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Get Your Ticket")))));
}

/* ---- News index (hero + featured + latest grid) ---- */
function NewsPage() {
  const [open, setOpen] = useNewsState(null); // open article slug

  if (open) {
    const a = newsBySlug(open);
    if (a) return /*#__PURE__*/React.createElement(ArticleView, {
      article: a,
      onBack: () => {
        setOpen(null);
        window.scrollTo(0, 0);
      }
    });
  }
  const openArticle = slug => {
    setOpen(slug);
    window.scrollTo(0, 0);
  };
  const featured = NEWS_ARTICLES.find(a => a.featured) || NEWS_ARTICLES[0];
  const rest = NEWS_ARTICLES.filter(a => a !== featured);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "News",
    art: "network",
    titleWhite: "The latest from",
    titleGold: "SportGen.",
    stacked: true,
    sub: "Announcements, partnerships and perspectives on the business of sport, straight from the team building the summit."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("button", {
    className: "news-feat reveal",
    onClick: () => openArticle(featured.slug)
  }, /*#__PURE__*/React.createElement(NewsThumb, {
    label: "FEATURED \xB7 16:9",
    className: "news-feat__media",
    src: featured.image
  }), /*#__PURE__*/React.createElement("div", {
    className: "news-feat__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "news-eyebrow news-eyebrow--gold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "news-eyebrow__dot",
    "aria-hidden": "true"
  }), "Featured Article"), /*#__PURE__*/React.createElement("h2", {
    className: "news-feat__title"
  }, featured.title), /*#__PURE__*/React.createElement(NewsMeta, {
    a: featured
  }), /*#__PURE__*/React.createElement("p", {
    className: "news-feat__excerpt"
  }, featured.excerpt), /*#__PURE__*/React.createElement("span", {
    className: "news-card__more"
  }, "Read Article ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))), /*#__PURE__*/React.createElement("h2", {
    className: "news-latest-head reveal"
  }, "Latest articles"), /*#__PURE__*/React.createElement("div", {
    className: "news-grid"
  }, rest.map((a, i) => /*#__PURE__*/React.createElement("button", {
    className: "news-card reveal",
    style: {
      transitionDelay: i % 3 * 60 + 'ms'
    },
    key: a.slug,
    onClick: () => openArticle(a.slug)
  }, /*#__PURE__*/React.createElement("div", {
    className: "news-card__media"
  }, /*#__PURE__*/React.createElement(NewsThumb, {
    label: a.category,
    src: a.image
  })), /*#__PURE__*/React.createElement("div", {
    className: "news-card__body"
  }, /*#__PURE__*/React.createElement(NewsMeta, {
    a: a,
    withRead: true
  }), /*#__PURE__*/React.createElement("h3", {
    className: "news-card__title"
  }, a.title), /*#__PURE__*/React.createElement("p", {
    className: "news-card__excerpt"
  }, a.excerpt), /*#__PURE__*/React.createElement("span", {
    className: "news-card__more"
  }, "Read Article ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))))))));
}
Object.assign(window, {
  NewsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/News.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SisApp.jsx
try { (() => {
/* [SGN] INVESTMENT SUMMIT, standalone site router (hash-based, own nav + footer) */
const {
  useState: useSisAppState,
  useEffect: useSisAppEffect
} = React;
const SIS_ROUTES = {
  '': 'InvestmentSummitPage',
  '/': 'InvestmentSummitPage',
  '/home': 'InvestmentSummitPage',
  '/speakers': 'SisSpeakersPage',
  '/media': 'SisMediaPage',
  '/sponsor': 'SisSponsorPage',
  '/agenda': 'SisAgendaPage',
  '/why-lp': 'SisLpPage',
  '/tickets': 'InvestTicketsPage'
};
function sisCurrentPath() {
  const h = window.location.hash.replace(/^#/, '');
  return h || '/';
}
function SisAppRoot() {
  const {
    SisNav,
    SisFooter
  } = window;
  const [path, setPath] = useSisAppState(sisCurrentPath());
  useSisAppEffect(() => {
    const onHash = () => {
      setPath(sisCurrentPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Wire scroll-reveal on each route (mirrors the SGN app)
  useSisAppEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.reveal--in), .inv-rv:not(.is-in)'));
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => {
        e.classList.add('reveal--in');
        e.classList.add('is-in');
      });
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal--in');
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(el => io.observe(el));
    const t = setTimeout(() => els.forEach(e => {
      e.classList.add('reveal--in');
      e.classList.add('is-in');
    }), 2600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [path]);
  const PageName = SIS_ROUTES[path] || 'InvestmentSummitPage';
  const Page = window[PageName] || window.InvestmentSummitPage;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SisNav, null), /*#__PURE__*/React.createElement("main", {
    key: path
  }, /*#__PURE__*/React.createElement(Page, null)), /*#__PURE__*/React.createElement(SisFooter, null));
}
const __sisRootEl = document.getElementById('root');
// This file is also compiled into the shared _ds_bundle.js, which other pages (the SGN
// site) load, so guard the mount to ONLY run on the standalone SIS page, otherwise it
// would hijack #root on every page that includes the bundle.
if (__sisRootEl && document.body && document.body.classList.contains('sis-body')) {
  window.__sisRoot = window.__sisRoot || ReactDOM.createRoot(__sisRootEl);
  window.__sisRoot.render(/*#__PURE__*/React.createElement(SisAppRoot, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SisApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SisFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* [SGN] INVESTMENT SUMMIT, footer (dark mono) */
// Self-contained: each script/bundle module gets its own scope, so define the URL locally
// rather than relying on a const from SisNav.jsx.
const SIS_FOOT_BUY = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
function SisFooter() {
  const ext = {
    target: '_blank',
    rel: 'noopener'
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "sis-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-foot__top"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sis-foot__brand",
    href: "#/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/sgn-investment-summit-white.png",
    alt: "[SGN] Invest"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sis-foot__meta"
  }, /*#__PURE__*/React.createElement("span", null, "26 May 2027"), /*#__PURE__*/React.createElement("span", null, "Paris, France"))), /*#__PURE__*/React.createElement("nav", {
    className: "sis-foot__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/speakers"
  }, "Speakers"), /*#__PURE__*/React.createElement("a", {
    href: "#/media"
  }, "Media"), /*#__PURE__*/React.createElement("a", {
    href: "#/sponsor"
  }, "Sponsor"), /*#__PURE__*/React.createElement("a", {
    href: "#/agenda"
  }, "Agenda"), /*#__PURE__*/React.createElement("a", _extends({
    href: SIS_FOOT_BUY
  }, ext), "Get Your Pass"), /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Explore SGN Summit")), /*#__PURE__*/React.createElement("div", {
    className: "sis-foot__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 SPORT[GEN] Summit \xB7 A SPORT[GEN] event"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "index.html#/terms-and-conditions"
  }, "Terms"), " \xB7", ' ', /*#__PURE__*/React.createElement("a", {
    href: "index.html#/privacy"
  }, "Privacy")))));
}
window.SisFooter = SisFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SisFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SisNav.jsx
try { (() => {
/* [SGN] INVESTMENT SUMMIT, top nav (Machina-style: links · centred wordmark · CTAs) */
const {
  useState: useSisNavState,
  useEffect: useSisNavEffect
} = React;
const SIS_BUY_URL = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
const SIS_LINKS = [['Speakers', '#/speakers'], ['Media', '#/media'], ['Sponsor', '#/sponsor']];
const SIS_TICKETS_HREF = '#/tickets';
function SisNav() {
  const [route, setRoute] = useSisNavState(window.location.hash.replace('#', '') || '/');
  const [open, setOpen] = useSisNavState(false);
  useSisNavEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.replace('#', '') || '/');
      setOpen(false);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const nav = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const isActive = href => route === href.replace('#', '');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "sis-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-nav__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-nav__left"
  }, SIS_LINKS.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    className: 'sis-nav__link' + (isActive(href) ? ' is-active' : ''),
    href: href,
    onClick: e => nav(e, href)
  }, label))), /*#__PURE__*/React.createElement("a", {
    className: "sis-nav__brand",
    href: "#/",
    onClick: e => nav(e, '#/')
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/sgn-investment-summit.png",
    alt: "[SGN] Invest"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sis-nav__right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sis-nav__btn sis-nav__btn--outline",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("span", null, "Explore SGN"), /*#__PURE__*/React.createElement("svg", {
    className: "sis-nav__btn-icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "6",
    height: "6",
    rx: "1.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "0",
    width: "6",
    height: "6",
    rx: "1.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "9",
    width: "6",
    height: "6",
    rx: "1.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6",
    rx: "1.5",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("a", {
    className: "sis-nav__btn sis-nav__btn--gold",
    href: SIS_TICKETS_HREF,
    onClick: e => nav(e, SIS_TICKETS_HREF)
  }, "Tickets"), /*#__PURE__*/React.createElement("button", {
    className: "sis-nav__burger",
    type: "button",
    "aria-label": "Menu",
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))))), /*#__PURE__*/React.createElement("div", {
    className: 'sis-mobile' + (open ? ' is-open' : '')
  }, SIS_LINKS.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    onClick: e => nav(e, href)
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "sis-mobile__btns"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sis-nav__btn sis-nav__btn--outline",
    href: "index.html"
  }, "Explore SGN"), /*#__PURE__*/React.createElement("a", {
    className: "sis-nav__btn sis-nav__btn--gold",
    href: SIS_TICKETS_HREF,
    onClick: e => nav(e, SIS_TICKETS_HREF)
  }, "Tickets"))));
}
window.SisNav = SisNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SisNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SisPages.jsx
try { (() => {
/* [SGN] INVESTMENT SUMMIT, sub-pages: Speakers · Media · Sponsor · Agenda
   Light / graphite / mono DA (reuses .inv--light + .inv-* atoms from invest.css). */
const {
  useRef: useSisRef,
  useState: useSisState,
  useEffect: useSisEffect
} = React;
const SIS_BUY = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
const SIS_CDN = 'https://framerusercontent.com/images/';
const sisGo = (e, href) => {
  e.preventDefault();
  window.location.hash = href.replace('#', '');
};

/* The leading investment voices at the Summit, same lineup as the SIS home. */
const SIS_VOICES = [['Marc Lasry', 'Co-Founder, Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png'], ['Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg'], ['Paolo Della Rovere', 'Managing Director', 'Morgan Stanley', 'pdvLJbsdJnsLkLnZcQRwHa8edfM.png'], ['Arnaud Caudoux', 'Deputy CEO', 'Bpifrance', '7X49U9IfeLJzZYasFXCHPvLZrE.png'], ['Mofses Kechichian', 'Managing Director', 'TRAIL Capital', 'SC5jKA69BcOxMSril0AxRPtLLqg.webp'], ['Kyang Yung', 'Chief Investment Officer', 'Gamma Waves Partners', 'NPxvIK1ahJtK6aTBHkdSslw.jpg'], ['Danny Menken', 'Co-Founder & General Partner', 'Athvance Capital', 'm9f95fpcRMqDIYHr5nWy622oONE.png'], ['Mark Wyatt', 'Managing Director', 'Alvarez & Marsal', 'v9vatvO0s2B6K43xRT7bxN1gXk.jpg'], ['Kushaan Ahuja', 'Partner', 'Will Ventures', 'ZIezVLEQ6WTmMov8zVurQ9bUI.webp'], ['Arjun Kapur', 'Vice President', 'Left Lane Capital', 'jW9ZIvK1FFDsYJ67Ep7xOzwD6k.jpg'], ['Charlie Stebbings', 'Head of Sport', '20VC', 'BuPSqhLT52NQIR9BN64DO9d3Ec.jpg'], ['Andy Marston', 'Head of Corporate Ventures', 'The Players Fund', 'KkyQMkFZGwFse8tkTEFCbCjThXc.png'], ['Adriana Crovetto', 'Investor', 'Gamma Waves Partners', 'G8JCKXENjWIMdqZJ8T2iPOFgI8.jpg'], ['António Caçorino', 'CEO & Founder', 'APEX', 'OoVzkBGf4K24lUhuRZoKcvb4.jpg'], ['Bex Smith', 'CEO & Founder', 'Crux Football', 'cSUoLhNbaT5EgvvrrJdgyz5ss4.jpg']];
function SisShell({
  idx,
  kicker,
  title,
  sub,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "inv inv--light sis-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inv-grid",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "inv-wrap"
  }, /*#__PURE__*/React.createElement("header", {
    className: "sis-phead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sis-phead__idx"
  }, idx, ", ", kicker), /*#__PURE__*/React.createElement("h1", null, title), sub ? /*#__PURE__*/React.createElement("p", {
    className: "sis-phead__sub"
  }, sub) : null), children));
}

/* ─────────────────────────── SPEAKERS ─────────────────────────── */
function SisSpeakersPage() {
  return /*#__PURE__*/React.createElement(SisShell, {
    idx: "[01]",
    kicker: "The room speaks",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The voices shaping", /*#__PURE__*/React.createElement("br", null), "the capital of sport"),
    sub: "Limited partners, fund managers, bankers and the operators they back, the people defining how money moves through sport, on stage across two days in Paris."
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-spk-grid"
  }, SIS_VOICES.map((s, i) => /*#__PURE__*/React.createElement("article", {
    className: "sis-spk",
    key: s[0] + i
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-spk__media"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sis-spk__idx"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("img", {
    src: SIS_CDN + s[3],
    alt: s[0],
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sis-spk__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-spk__name"
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    className: "sis-spk__role"
  }, s[1]), /*#__PURE__*/React.createElement("div", {
    className: "sis-spk__org"
  }, s[2]))))), /*#__PURE__*/React.createElement("div", {
    className: "inv-voices__foot inv-rv",
    style: {
      marginTop: 'clamp(36px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-voices__note"
  }, "+ 100 speakers across the full SPORT[GEN] programme. Updated continuously toward May 2027."), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: SIS_BUY,
    target: "_blank",
    rel: "noopener"
  }, "Request your pass ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))));
}

/* ─────────────────────────── MEDIA ─────────────────────────── */
const SIS_MEDIA_REASONS = [['[ 01 ]', 'Where the deals surface first', 'Fund launches, raises, M&A and rights deals are announced and debated on stage, original stories for finance and business desks.'], ['[ 02 ]', 'Access you can quote', 'On-record fireside chats and briefings with managing partners, CIOs and CEOs, plus a dedicated press room for one-to-one interviews.'], ['[ 03 ]', 'Numbers behind the noise', 'Proprietary data on capital flows into sport, valuations, deal volume and where institutional money is moving next.'], ['[ 04 ]', 'The European angle', 'Held during Roland-Garros week in Paris: the European story on sports investment, with global funds in the room.']];
const SIS_PRESS = [['Bloomberg', 'Markets'], ['Financial Times', 'Companies'], ['Les Échos', 'Finance'], ['Reuters', 'Deals'], ['Sportico', 'Business of Sport'], ['SportBusiness', 'Industry']];
function SisMediaPage() {
  return /*#__PURE__*/React.createElement(SisShell, {
    idx: "[02]",
    kicker: "Press & media",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "A finance story,", /*#__PURE__*/React.createElement("br", null), "told from inside sport"),
    sub: "SGN Invest is built for finance, economics and business media. Accreditation gives you the room where sport's capital is raised, priced and deployed."
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-media-grid"
  }, SIS_MEDIA_REASONS.map(r => /*#__PURE__*/React.createElement("div", {
    className: "sis-media-card",
    key: r[1]
  }, /*#__PURE__*/React.createElement("span", {
    className: "sis-media-card__idx"
  }, r[0]), /*#__PURE__*/React.createElement("h3", null, r[1]), /*#__PURE__*/React.createElement("p", null, r[2])))), /*#__PURE__*/React.createElement("div", {
    className: "sis-press"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "inv-eyebrow inv-rv"
  }, "Who covers it"), /*#__PURE__*/React.createElement("h2", {
    className: "inv-h2 inv-rv",
    style: {
      marginTop: '14px'
    }
  }, "Finance & sport-business desks in the room"), /*#__PURE__*/React.createElement("p", {
    className: "sis-phead__sub",
    style: {
      marginTop: '18px'
    }
  }, "A non-exhaustive picture of the outlets we host. Media passes are complimentary for credentialed journalists; we review every request individually."), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: "index.html#/get-in-touch",
    style: {
      marginTop: '28px'
    }
  }, "Apply for media accreditation ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "sis-press__list"
  }, SIS_PRESS.map(p => /*#__PURE__*/React.createElement("div", {
    className: "sis-press__row",
    key: p[0]
  }, /*#__PURE__*/React.createElement("span", null, p[0]), /*#__PURE__*/React.createElement("span", null, p[1]))))));
}

/* ─────────────────────────── SPONSOR ─────────────────────────── */
const SIS_FIG = [['200', '+', 'Active investors'], ['300', '+', 'Organizations'], ['70', '%', 'Director-level & up']];
const SIS_SPON_DECK = 'index.html#/get-in-touch';
const SIS_SPON_CALL = 'index.html#/get-in-touch';
function SisSponIcon({
  name
}) {
  const p = {
    connect: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "2.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "6",
      r: "2.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "18",
      r: "2.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.6 7.6 11 15M16.4 7.6 13 15M8 6h8"
    })),
    tech: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3.2"
    })),
    handshake: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 9l4-2 5 3 5-3 4 2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 10v8M8 12l4 3 4-3"
    })),
    future: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 20V8M10 20V4M16 20v-9M22 20H2"
    })),
    learn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.3 19.5h5.4M10 21.5h4"
    })),
    flow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3c1.4 2.6.6 4.4-.6 6C10 10.8 9 12.3 9 14a3 3 0 0 0 6 0c0-1-.3-1.9-.8-2.7.9.4 1.8 1.4 1.8 3.2A5 5 0 1 1 8 11.2C9.6 9 12 7 12 3Z"
    })),
    globe: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17"
    })),
    room: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "14",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 10h16M9 5v14"
    })),
    convert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 18l5-6 4 3 7-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 7v4h-4"
    })),
    beyond: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17"
    }))
  }[name];
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, p);
}
const SIS_EXPERIENCE = [['connect', 'Connect with capital', 'Meet the LPs, GPs and family offices actively writing cheques across sport.'], ['tech', 'See the deal flow first', 'First-hand access to the funds, founders and rights holders shaping the market.'], ['handshake', 'Forge lasting partnerships', 'Turn introductions into pilots, co-investments and commercial deals.'], ['future', 'Shape the future', 'Be part of the group defining how capital gets deployed across European sport.']];
const SIS_WHY = [['room', 'Access the room', "Direct access to 1,500+ founders, investors and enterprise leaders. Over 70% hold director-level or investment authority, the most targeted sport-investment audience on a single floor in Europe."], ['convert', 'Visibility that converts', 'Position your brand alongside the funds, banks and rights holders defining the next era of sport. Sponsoring SGN places you at the center of the most significant sport-investment conversation in Europe.'], ['beyond', 'Outcomes beyond the event', 'SGN is where pilots get scoped, partnerships begin and capital meets conviction. Sponsors gain dedicated touchpoints on the floor, converting presence into relationships that extend well beyond the summit.']];
function SisCount({
  value,
  suffix
}) {
  const target = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
  const ref = useSisRef(null);
  const [val, setVal] = useSisState(0);
  useSisEffect(() => {
    let raf;
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) {
        io.disconnect();
        const t0 = performance.now(),
          dur = 1300;
        const tick = t => {
          const p = Math.min(1, (t - t0) / dur),
            e = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * e));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }, {
      threshold: 0.4
    });
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target]);
  return /*#__PURE__*/React.createElement("span", {
    className: "inv-fig__num",
    ref: ref
  }, val, suffix);
}
function SisSponsorPage() {
  return /*#__PURE__*/React.createElement(SisShell, {
    idx: "[03]",
    kicker: "Partner with us",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Put your brand", /*#__PURE__*/React.createElement("br", null), "where capital meets"),
    sub: "Reach the most senior, hardest-to-access audience in sport: the funds, family offices and banks deciding where the next decade of investment goes."
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-cta inv-rv"
  }, /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: SIS_SPON_DECK,
    onClick: e => sisGo(e, '#/get-in-touch')
  }, "Explore Sponsorship Opportunities ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost",
    href: SIS_SPON_DECK,
    onClick: e => sisGo(e, '#/get-in-touch')
  }, "Download Sponsorship Deck")), /*#__PURE__*/React.createElement("div", {
    className: "inv-figs",
    style: {
      marginTop: 'clamp(20px,3vw,36px)'
    }
  }, SIS_FIG.map(f => /*#__PURE__*/React.createElement("div", {
    className: "inv-fig",
    key: f[2]
  }, /*#__PURE__*/React.createElement(SisCount, {
    value: f[0],
    suffix: f[1]
  }), /*#__PURE__*/React.createElement("span", {
    className: "inv-fig__label"
  }, f[2])))), /*#__PURE__*/React.createElement("section", {
    className: "sis-spon-build"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sis-spon-build__title inv-rv"
  }, "Build your presence at", /*#__PURE__*/React.createElement("br", null), "SGN Invest 2027"), /*#__PURE__*/React.createElement("p", {
    className: "sis-spon-build__lead inv-rv"
  }, "SGN is where European sport makes its most consequential investment decisions. Position your brand alongside the funds, banks and family offices deploying capital across the game."), /*#__PURE__*/React.createElement("p", {
    className: "sis-spon-build__lead inv-rv"
  }, "Sponsoring SGN does not put your logo on a banner. It puts your brand inside that conversation, in front of the people actively building, buying and funding sport at scale.", /*#__PURE__*/React.createElement("br", null), "The room is being filled. Make sure your brand is in it."), /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-cta sis-spon-cta--center inv-rv"
  }, /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: SIS_SPON_DECK,
    onClick: e => sisGo(e, '#/get-in-touch')
  }, "Request the Sponsorship Deck ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost",
    href: SIS_SPON_CALL,
    onClick: e => sisGo(e, '#/get-in-touch')
  }, "Book a Call"))), /*#__PURE__*/React.createElement("section", {
    className: "sis-spon-xp"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sis-spon-xp__title inv-rv"
  }, "The SGN Experience"), /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-xp__grid"
  }, SIS_EXPERIENCE.map(x => /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-xp__cell inv-rv",
    key: x[1]
  }, /*#__PURE__*/React.createElement("span", {
    className: "sis-spon-xp__ico"
  }, /*#__PURE__*/React.createElement(SisSponIcon, {
    name: x[0]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, x[1]), /*#__PURE__*/React.createElement("p", null, x[2]))))), /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-cta sis-spon-cta--center inv-rv"
  }, /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: SIS_SPON_DECK,
    onClick: e => sisGo(e, '#/get-in-touch')
  }, "Explore Sponsorship Opportunities ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "sis-spon-why"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sis-spon-why__title inv-rv"
  }, "Why Sponsor SGN Invest"), /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-why__grid"
  }, SIS_WHY.map(w => /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-why__col inv-rv",
    key: w[1]
  }, /*#__PURE__*/React.createElement("span", {
    className: "sis-spon-why__ico"
  }, /*#__PURE__*/React.createElement(SisSponIcon, {
    name: w[0]
  })), /*#__PURE__*/React.createElement("h3", null, w[1]), /*#__PURE__*/React.createElement("p", null, w[2]))))), /*#__PURE__*/React.createElement("div", {
    className: "inv-voices__foot inv-rv",
    style: {
      marginTop: 'clamp(36px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-voices__note"
  }, "Custom packages available, we build partnerships around your objectives."), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: "index.html#/get-in-touch"
  }, "Talk to the team ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))));
}

/* ─────────────────────────── AGENDA ─────────────────────────── */
const SIS_AGENDA = [['Day 1, 27 May 2027', [['09:00', 'Opening: the state of sports capital', 'Where money is flowing across leagues, teams and infrastructure, and what changed this year.'], ['09:40', 'Fireside with Marc Lasry', 'Avenue Capital, building a portfolio at the intersection of sport and entertainment.'], ['10:30', 'Private capital in sport', 'Carlyle · TRAIL · Morgan Stanley on PE, control deals and the new buyer landscape.'], ['11:30', 'Smart money in sport', 'Will Ventures · Left Lane · 20VC, where venture is underwriting the next sports businesses.'], ['14:00', 'France as Europe\u2019s sports investment hub', 'Bpifrance on the institutional thesis for backing the sector at scale.'], ['15:00', 'The blind spot of Private Equity', 'APEX on the deals the market keeps mispricing.']]], ['Day 2, 28 May 2027', [['09:30', 'LP perspectives', 'What allocators need to see before they commit to sport as an asset class.'], ['10:30', 'The women\u2019s sport investment window', 'Mastercard · Crux · BJK Cup on pricing the fastest-growing opportunity in sport.'], ['11:30', 'Rights, media & the value chain', 'How distribution shifts are repricing the assets underneath every deal.'], ['14:00', 'Family offices & sovereign capital', 'Private money entering sport, patient, strategic and increasingly hands-on.'], ['15:00', 'Deal-making roundtables', 'Closed-door sessions matching capital with operators and rights holders.'], ['16:00', 'Closing & investor reception', 'Where the conversations started on stage continue off it.']]]];
function SisAgendaPage() {
  return /*#__PURE__*/React.createElement(SisShell, {
    idx: "[04]",
    kicker: "Two days in Paris",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The programme", /*#__PURE__*/React.createElement("br", null), "where deals begin"),
    sub: "An investment-led agenda across the SPORT[GEN] Summit. Sessions, fireside chats and closed-door roundtables, built for the people raising and deploying capital. Times subject to change."
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-agenda"
  }, SIS_AGENDA.map(day => /*#__PURE__*/React.createElement("div", {
    key: day[0]
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-agenda__day"
  }, day[0]), day[1].map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "sis-agenda__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "sis-agenda__time"
  }, s[0]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sis-agenda__t"
  }, s[1]), /*#__PURE__*/React.createElement("span", {
    className: "sis-agenda__d"
  }, s[2]))))))), /*#__PURE__*/React.createElement("div", {
    className: "inv-voices__foot inv-rv",
    style: {
      marginTop: 'clamp(36px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-voices__note"
  }, "Full SPORT[GEN] programme runs alongside SGN Invest."), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: SIS_BUY,
    target: "_blank",
    rel: "noopener"
  }, "Request your pass ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))));
}

/* ─────────────────────────── WHY ATTEND AS AN LP ─────────────────────────── */
function sisBold(str) {
  return str.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((c, i) => c.startsWith('**') && c.endsWith('**') ? /*#__PURE__*/React.createElement("b", {
    key: i,
    style: {
      color: 'inherit'
    }
  }, c.slice(2, -2)) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, c));
}
const SIS_LP_WHY = [['learn', 'Sharpen your strategy', 'Gain forward-looking perspectives through **peer learning, expert-led sessions** and **curated content** designed to help LPs navigate strategy shifts, manager selection and private-markets trends with confidence.'], ['flow', 'Source differentiated deal flow', 'Identify differentiated deal flow through targeted meetings with **leading and emerging GPs**, structured **networking formats** and a **digital platform** showcasing funds in market and company insights.'], ['globe', 'Join the community', 'Connect with a high-quality **international community of investors**, share challenges and benchmarks, and build relationships that extend far beyond the two days of SGN Invest.']];
const SIS_LP_BREAKFAST = ['Invite-only table of Limited Partners and senior allocators', 'Chatham House rule, candid, off-record conversation', 'Curated seating around live allocation themes', 'Hosted ahead of the main-stage programme'];
function SisLpPage() {
  return /*#__PURE__*/React.createElement(SisShell, {
    idx: "[05]",
    kicker: "For Limited Partners",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "LPs at", /*#__PURE__*/React.createElement("br", null), "SGN Invest"),
    sub: "The one room in Europe where the people allocating capital into sport meet the managers, operators and rights holders deploying it. Complimentary access for verified Limited Partners."
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-cta inv-rv"
  }, /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: "index.html#/get-in-touch",
    onClick: e => sisGo(e, '#/get-in-touch')
  }, "Apply for an LP Pass ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-btn--ghost",
    href: "#/agenda",
    onClick: e => sisGo(e, '#/agenda')
  }, "See the programme")), /*#__PURE__*/React.createElement("section", {
    className: "sis-spon-why"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sis-spon-why__title inv-rv"
  }, "Why Attend as an LP"), /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-why__grid"
  }, SIS_LP_WHY.map(w => /*#__PURE__*/React.createElement("div", {
    className: "sis-spon-why__col inv-rv",
    key: w[1]
  }, /*#__PURE__*/React.createElement("span", {
    className: "sis-spon-why__ico"
  }, /*#__PURE__*/React.createElement(SisSponIcon, {
    name: w[0]
  })), /*#__PURE__*/React.createElement("h3", null, w[1]), /*#__PURE__*/React.createElement("p", null, sisBold(w[2])))))), /*#__PURE__*/React.createElement("section", {
    className: "sis-lp-break"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-lp-break__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-eyebrow inv-rv"
  }, "Side event"), /*#__PURE__*/React.createElement("h2", {
    className: "inv-h2 inv-rv",
    style: {
      marginTop: '14px'
    }
  }, "LP-Only Investor Breakfast"), /*#__PURE__*/React.createElement("p", {
    className: "sis-phead__sub inv-rv",
    style: {
      marginTop: '18px'
    }
  }, "A closed-door breakfast reserved for Limited Partners, held before the main programme opens. A smaller, senior room to compare notes on allocation, manager selection and where sport sits in the portfolio, before the floor fills up."), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn inv-rv",
    href: "index.html#/get-in-touch",
    onClick: e => sisGo(e, '#/get-in-touch'),
    style: {
      marginTop: '28px'
    }
  }, "Request an invitation ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "sis-lp-break__side inv-rv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sis-lp-break__meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Day 1"), /*#__PURE__*/React.createElement("b", null, "28 May 2027")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Time"), /*#__PURE__*/React.createElement("b", null, "08:00, 09:00")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Location"), /*#__PURE__*/React.createElement("b", null, "Investor Lounge, Paris"))), /*#__PURE__*/React.createElement("ul", {
    className: "sis-lp-break__list"
  }, SIS_LP_BREAKFAST.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, b))))), /*#__PURE__*/React.createElement("div", {
    className: "inv-voices__foot inv-rv",
    style: {
      marginTop: 'clamp(36px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inv-voices__note"
  }, "LP passes are complimentary for verified Limited Partners."), /*#__PURE__*/React.createElement("a", {
    className: "inv-btn",
    href: "index.html#/get-in-touch",
    onClick: e => sisGo(e, '#/get-in-touch')
  }, "Apply for an LP Pass ", /*#__PURE__*/React.createElement("span", {
    className: "inv-btn__arrow"
  }, "\u2192"))));
}
Object.assign(window, {
  SisSpeakersPage,
  SisMediaPage,
  SisSponsorPage,
  SisAgendaPage,
  SisLpPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SisPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/blocks.jsx
try { (() => {
/* SPORT[GEN], shared, reusable page blocks (composed across all routes) */

// Generic page hero: eyebrow + two-tone H1 + subtitle + optional CTA, on a gold-streak plate (or a photo via bgImage).
function PageHero({
  eyebrow,
  titleWhite,
  titleGold,
  sub,
  ctaLabel,
  ctaHref,
  variant,
  bgImage,
  stacked,
  art,
  goldFirst,
  heroClass
}) {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    if (/^https?:/i.test(href || '')) return; // external links navigate normally
    e.preventDefault();
    window.location.hash = (href || '#/').replace('#', '');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: 'page-hero' + (variant === 'tall' ? ' page-hero--tall' : '') + (heroClass ? ' ' + heroClass : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: 'page-hero__bg' + (art ? ' page-hero__bg--' + art : ''),
    "aria-hidden": "true"
  }), bgImage ? /*#__PURE__*/React.createElement("img", {
    className: "page-hero__img",
    src: bgImage,
    alt: "",
    "aria-hidden": "true"
  }) : null, bgImage ? /*#__PURE__*/React.createElement("div", {
    className: "page-hero__shade",
    "aria-hidden": "true"
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "sg-container page-hero__inner"
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, eyebrow) : null, goldFirst ? /*#__PURE__*/React.createElement("h1", {
    className: "page-hero__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'sg-gold-text' + (stacked ? ' page-hero__gold-line' : '')
  }, titleGold), " ", titleWhite) : /*#__PURE__*/React.createElement("h1", {
    className: "page-hero__title"
  }, titleWhite, " ", titleGold ? /*#__PURE__*/React.createElement("span", {
    className: 'sg-gold-text' + (stacked ? ' page-hero__gold-line' : '')
  }, titleGold) : null), sub ? /*#__PURE__*/React.createElement("p", {
    className: "page-hero__sub"
  }, sub) : null, ctaLabel ? /*#__PURE__*/React.createElement("div", {
    className: "page-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: ctaHref,
    onClick: e => go(e, ctaHref)
  }, ctaLabel)) : null));
}

// Section heading: eyebrow (+rule) and a ghost two-tone heading.
function SectionHead({
  eyebrow,
  eyebrowGold,
  ghost,
  white,
  gold,
  lead,
  center
}) {
  const {
    GhostHeading,
    Eyebrow
  } = window.SPORTGENDesignSystem_882f1e;
  return /*#__PURE__*/React.createElement("div", {
    className: 'section__head reveal' + (center ? ' section__head--center' : '')
  }, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, {
    rule: !center,
    gold: !!eyebrowGold
  }, eyebrow) : null, /*#__PURE__*/React.createElement(GhostHeading, {
    ghost: ghost,
    align: center ? 'center' : 'left'
  }, white, " ", gold ? /*#__PURE__*/React.createElement("span", {
    className: "sg-gold-text"
  }, gold) : null), lead ? /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, lead) : null);
}
function StatBand() {
  const {
    StatTile
  } = window.SPORTGENDesignSystem_882f1e;
  const {
    stats
  } = window.SGData;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-grid reveal"
  }, stats.map(s => /*#__PURE__*/React.createElement(StatTile, {
    key: s.label,
    number: s.number,
    suffix: s.suffix,
    label: s.label,
    progress: s.progress ?? null
  })))));
}
function SpeakerGrid({
  speakers,
  footer,
  cols
}) {
  const {
    SpeakerCard,
    Button,
    IconButton
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'speaker-grid' + (cols ? ' speaker-grid--' + cols : '')
  }, speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      transitionDelay: i % 5 * 50 + 'ms'
    },
    key: s.name + i
  }, /*#__PURE__*/React.createElement(SpeakerCard, {
    photo: s.photo,
    logo: s.logo,
    name: s.name,
    role: s.role,
    org: s.org,
    href: s.link,
    imgStyle: s.name === 'Bex Smith' || s.name === 'Rebecca Smith' ? {
      transform: 'scale(1.35)',
      objectPosition: 'center 20%'
    } : undefined
  })))), footer ? /*#__PURE__*/React.createElement("div", {
    className: "section__foot"
  }, /*#__PURE__*/React.createElement("a", {
    className: "section__foot-link",
    href: "#/speakers",
    onClick: e => go(e, '#/speakers')
  }, "See All 2026 Speakers ", /*#__PURE__*/React.createElement(IconButton, {
    label: "See all speakers"
  })), /*#__PURE__*/React.createElement("hr", {
    className: "sg-rule"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Get Your Ticket")) : null);
}

// "They will be at", every category stacked, each with a label + auto-scrolling logo marquee
function LogoWalls({
  groups
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "walls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "walls__head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "walls__head-eyebrow"
  }, "They were at"), ' ', /*#__PURE__*/React.createElement("span", {
    className: "walls__head-main"
  }, "Sport Gen Summit in 2026")), /*#__PURE__*/React.createElement("div", {
    className: "walls__stack"
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    className: "walls__row reveal",
    key: g.label,
    style: {
      transitionDelay: i * 80 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "walls__row-label"
  }, g.label), /*#__PURE__*/React.createElement("div", {
    className: "wmq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wmq__track",
    style: {
      animationDuration: 28 + g.logos.length + 's',
      animationDirection: i % 2 ? 'reverse' : 'normal'
    }
  }, g.logos.concat(g.logos).map((l, j) => /*#__PURE__*/React.createElement("div", {
    className: 'wmq__item' + (l.cls ? ' ' + l.cls : ''),
    key: j,
    style: {
      animationDelay: (j % 6 * 0.55 + i % 2 * 0.3).toFixed(2) + 's'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: j < g.logos.length ? l.alt : '',
    loading: "lazy"
  })))))))));
}
function TicketsBlock({
  first
}) {
  const {
    tickets
  } = window.SGData;
  const BUY_URL = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
  return /*#__PURE__*/React.createElement("section", {
    className: 'section section--tickets' + (first ? ' section--first' : ''),
    id: "tickets"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section--tickets__bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tkx-head reveal"
  }, "Secure your 2027 ", /*#__PURE__*/React.createElement("span", {
    className: "tkx-head__gold"
  }, "Super Early Birds")), /*#__PURE__*/React.createElement("div", {
    className: "tkx-grid"
  }, tickets.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: 'tkx-card reveal tkx-card--' + t.tier.toLowerCase() + (t.featured ? ' tkx-card--vip' : ''),
    style: {
      transitionDelay: i * 70 + 'ms'
    },
    key: t.tier,
    onMouseEnter: t.featured ? e => {
      const v = e.currentTarget.querySelector('.tkx-vid');
      if (v) {
        try {
          v.currentTime = 0;
        } catch (_) {}
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }
      e.currentTarget.classList.add('tkx-card--playing');
    } : undefined,
    onMouseLeave: t.featured ? e => {
      const v = e.currentTarget.querySelector('.tkx-vid');
      if (v) {
        v.pause();
        try {
          v.currentTime = 0;
        } catch (_) {}
      }
      e.currentTarget.classList.remove('tkx-card--playing');
    } : undefined
  }, t.featured ? /*#__PURE__*/React.createElement("div", {
    className: "tkx-vidwrap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("video", {
    className: "tkx-vid",
    src: "assets/vip-aftermovie.mp4",
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tkx-vidscrim"
  })) : null, /*#__PURE__*/React.createElement("h3", {
    className: "tkx-card__tier"
  }, t.tier), /*#__PURE__*/React.createElement("div", {
    className: "tkx-card__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tkx-card__amount"
  }, t.price), /*#__PURE__*/React.createElement("span", {
    className: "tkx-card__vat"
  }, "+VAT")), /*#__PURE__*/React.createElement("a", {
    className: "tkx-btn",
    href: BUY_URL,
    target: "_blank",
    rel: "noopener"
  }, "Buy Ticket"), /*#__PURE__*/React.createElement("div", {
    className: "tkx-card__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "tkx-card__intro"
  }, t.intro), t.lede ? /*#__PURE__*/React.createElement("p", {
    className: "tkx-card__lede"
  }, t.lede) : null, /*#__PURE__*/React.createElement("ul", {
    className: "tkx-list"
  }, t.perks.map(p => {
    const ci = p.indexOf(': ');
    const hasLabel = ci > 0 && ci < 28;
    return /*#__PURE__*/React.createElement("li", {
      key: p
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5l5 5L20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, hasLabel ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
      className: "tkx-list__label"
    }, p.slice(0, ci)), p.slice(ci + 1)) : p));
  })), t.note ? (() => {
    const ci = t.note.indexOf(': ');
    return /*#__PURE__*/React.createElement("p", {
      className: "tkx-card__note"
    }, ci > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
      className: "tkx-list__label"
    }, t.note.slice(0, ci)), t.note.slice(ci + 1)) : t.note);
  })() : null)))));
}

// Live photo-card grid (shared by Opportunities + Startup page)
function OppCards({
  cards
}) {
  const {
    oppStar
  } = window.SGData;
  return /*#__PURE__*/React.createElement("div", {
    className: "oppx-grid"
  }, cards.map((o, i) => /*#__PURE__*/React.createElement("div", {
    className: "opp-card reveal",
    key: o.title,
    style: {
      transitionDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "opp-card__bg",
    src: o.photo,
    alt: "",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "opp-card__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "opp-card__content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "opp-card__title"
  }, o.title), /*#__PURE__*/React.createElement("ul", {
    className: "opp-card__list"
  }, o.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("img", {
    src: oppStar,
    alt: "",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", null, it))))))));
}

// "A summit full of opportunities", live design: full-photo cards, title + gold star bullets at top
function Opportunities() {
  const {
    opportunities
  } = window.SGData;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "A summit"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line opps-head__line--gold"
  }, "full of opportunities")), /*#__PURE__*/React.createElement(OppCards, {
    cards: opportunities
  })));
}

// Live stat band: big 62px counters + 28px labels, count-up on scroll
function CounterBandItem({
  on,
  number,
  suffix,
  label
}) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!on) return;
    const t0 = performance.now();
    const dur = 1600;
    let raf;
    const tick = t => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(number * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, number]);
  const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F');
  return /*#__PURE__*/React.createElement("div", {
    className: "cband__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cband__num"
  }, fmt(val), suffix), /*#__PURE__*/React.createElement("h4", {
    className: "cband__label"
  }, label));
}
function CounterBand() {
  const {
    stats
  } = window.SGData;
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--cband section--cband-streaks"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cband-head reveal"
  }, "SPORT ", /*#__PURE__*/React.createElement("span", {
    className: "cband-head__bracket"
  }, "[GEN]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "cband-head__gold"
  }, "2026 Figures")), /*#__PURE__*/React.createElement("div", {
    className: "cband cband--gold-labels",
    ref: ref
  }, stats.map(s => /*#__PURE__*/React.createElement(CounterBandItem, {
    key: s.label,
    on: on,
    number: s.number,
    suffix: s.suffix,
    label: s.label
  }))));
}

// Home "Our 2026 Speakers", swipeable cover-flow reel carousel (one reel in front, arrows + dots), one shared CTA
function SpeakersReel() {
  const {
    reels
  } = window.SGData;
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const n = reels.length;
  const [idx, setIdx] = React.useState(1);
  const [muted, setMuted] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const stageRef = React.useRef(null);
  const activeVideoRef = React.useRef(null);
  const visibleRef = React.useRef(false);
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  // Verrou anti double-saut : une action = un seul cran, le temps de la transition (0,5s).
  const animatingRef = React.useRef(false);
  const lock = React.useCallback(() => {
    animatingRef.current = true;
    setTimeout(() => {
      animatingRef.current = false;
    }, 480);
  }, []);
  const goTo = React.useCallback(target => {
    if (animatingRef.current) return;
    lock();
    setIdx((target % n + n) % n);
  }, [n, lock]);
  const step = React.useCallback(dir => {
    if (animatingRef.current) return;
    lock();
    setIdx(i => (i + dir + n) % n);
  }, [n, lock]);
  const prev = React.useCallback(() => step(-1), [step]);
  const next = React.useCallback(() => step(1), [step]);
  // Clic sur la vidéo active : pause / reprise.
  const togglePlay = React.useCallback(() => {
    const v = activeVideoRef.current;
    if (!v) return;
    if (v.paused) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  }, []);
  const toggleMute = React.useCallback(() => {
    setMuted(m => {
      const nm = !m;
      const v = activeVideoRef.current;
      if (v) v.muted = nm;
      return nm;
    });
  }, []);

  // Le réel ne se lit que lorsqu'il est à l'écran. On pilote la lecture directement dans
  // l'observer (pas via un état React) avec une hystérésis pour éviter tout flapping play/pause.
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      const r = e.intersectionRatio;
      const v = activeVideoRef.current;
      if (!visibleRef.current && r >= 0.45) {
        visibleRef.current = true;
        if (v) {
          try {
            v.currentTime = 0;
          } catch (_) {}
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        }
        setPaused(false);
      } else if (visibleRef.current && r <= 0.1) {
        visibleRef.current = false;
        if (v) {
          v.pause();
          try {
            v.currentTime = 0;
          } catch (_) {}
        }
      }
    }, {
      threshold: [0, 0.1, 0.45, 0.7, 1]
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // Changement de réel : s'il est visible, on (re)démarre le nouveau depuis le début.
  React.useEffect(() => {
    setPaused(false);
    const v = activeVideoRef.current;
    if (!v || !visibleRef.current) return;
    try {
      v.currentTime = 0;
    } catch (_) {}
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }, [idx]);

  // Drag / touch swipe
  const drag = React.useRef({
    x: null
  });
  const onDown = x => {
    drag.current.x = x;
  };
  const onUp = x => {
    if (drag.current.x == null) return;
    const dx = x - drag.current.x;
    drag.current.x = null;
    if (dx > 45) prev();else if (dx < -45) next();
  };

  // Keyboard arrows when the carousel is on screen
  React.useEffect(() => {
    const onKey = e => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) return;
      if (e.key === 'ArrowLeft') prev();else next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);
  const [reelFs, setReelFs] = React.useState(false);
  const [reelBox, setReelBox] = React.useState(null);
  const [playing, setPlaying] = React.useState(null);
  // Sur swipe : le réel central se lance immédiatement (s'il est à l'écran).
  React.useEffect(() => {
    if (!visibleRef.current) {
      setPlaying(null);
      return;
    }
    const center = reels[idx];
    if (center) setPlaying(center.name);
  }, [idx]);
  // Auto-lecture du réel central : dès que la section entre dans l'écran (0s).
  // Quand on quitte la section, le réel se coupe ; il repart du début au retour.
  const idxRef = React.useRef(idx);
  idxRef.current = idx;
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let timer = null;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && e.intersectionRatio >= 0.5) {
        if (timer) clearTimeout(timer);
        const center = reels[idxRef.current];
        if (center) setPlaying(center.name);
      } else {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        setPlaying(null);
      }
    }, {
      threshold: [0, 0.5, 1]
    });
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);
  // Classic full screen for the active reel (native if available, else fixed overlay fallback
  // Classic full screen for the active reel — rendered as a portal overlay on <body> so it is
  // never nested under transformed ancestors (carousel track, scroll-reveal). Pure overlay, no
  // native fullscreen (blocked in the preview iframe and it corrupts the page on exit).
  const fsReel = React.useCallback(() => {
    setReelFs(f => !f);
  }, []);
  React.useEffect(() => {
    if (!reelFs) return;
    const onKey = e => {
      if (e.key === 'Escape') setReelFs(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [reelFs]);
  const fsIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3"
  }));
  const closeIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }));
  const soundIcon = muted ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5L6 9H2v6h4l5 4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "9",
    x2: "16",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "9",
    x2: "22",
    y2: "15"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5L6 9H2v6h4l5 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8.5a5 5 0 0 1 0 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 5.5a9 9 0 0 1 0 13"
  }));
  const ytIcon = /*#__PURE__*/React.createElement("svg", {
    className: "spk2-yt__icon",
    viewBox: "0 0 28 20",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    className: "spk2-yt__badge",
    width: "28",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("path", {
    className: "spk2-yt__play",
    d: "M11 6l7 4-7 4z"
  }));
  const chevron = d => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "section spk2",
    id: "our-speakers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-h2 reveal"
  }, "Relive ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "[SGN] 2026")), /*#__PURE__*/React.createElement("p", {
    className: "spk2-sub reveal"
  }, "Hear them in 60 seconds, swipe through the latest reels."), /*#__PURE__*/React.createElement("div", {
    className: "reelx reveal"
  }, /*#__PURE__*/React.createElement("button", {
    className: "reelx-arrow reelx-arrow--prev",
    onClick: prev,
    "aria-label": "R\xE9el pr\xE9c\xE9dent"
  }, chevron('M15 5l-7 7 7 7')), /*#__PURE__*/React.createElement("div", {
    className: "reelx-stage",
    ref: stageRef,
    onMouseDown: e => onDown(e.clientX),
    onMouseUp: e => onUp(e.clientX),
    onTouchStart: e => onDown(e.touches[0].clientX),
    onTouchEnd: e => onUp(e.changedTouches[0].clientX)
  }, reels.map((r, i) => {
    let off = i - idx;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    const abs = Math.abs(off);
    if (abs > 1) return null;
    const active = off === 0;
    const isPlaying = active && (!r.staticCard || playing === r.name);
    const showInfo = isPlaying || !active && !r.staticCard;
    return /*#__PURE__*/React.createElement("div", {
      className: 'reelx-card' + (active ? ' reelx-card--active' : '') + (r.staticCard ? ' reelx-card--wide' : ''),
      key: r.name,
      style: {
        '--off': off,
        '--abs': abs,
        zIndex: 3 - abs
      },
      "aria-hidden": !active,
      onClick: () => !active && goTo(i)
    }, /*#__PURE__*/React.createElement("div", {
      className: 'reelx-card__frame' + (r.staticCard ? ' reelx-card__frame--wide' : '')
    }, r.staticCard ? active && playing === r.name ? /*#__PURE__*/React.createElement("video", {
      className: "reelx-card__media reelx-card__media--playing",
      src: r.src,
      poster: r.poster,
      autoPlay: true,
      playsInline: true,
      onDoubleClick: e => {
        e.preventDefault();
        fsReel();
      },
      ref: el => {
        activeVideoRef.current = el;
      }
    }) : /*#__PURE__*/React.createElement("img", {
      className: "reelx-card__media reelx-card__media--contain",
      src: r.poster,
      alt: r.name,
      loading: "lazy"
    }) : active ? /*#__PURE__*/React.createElement("video", {
      className: "reelx-card__media",
      src: r.src,
      poster: r.poster,
      autoPlay: true,
      loop: true,
      playsInline: true,
      preload: "auto",
      muted: muted,
      onDoubleClick: e => {
        e.preventDefault();
        fsReel();
      },
      ref: el => {
        activeVideoRef.current = el;
        if (el) el.muted = muted;
      }
    }) : /*#__PURE__*/React.createElement("img", {
      className: "reelx-card__media",
      src: r.poster,
      alt: r.name,
      loading: "eager"
    }), showInfo ? /*#__PURE__*/React.createElement("div", {
      className: "reelx-card__grad",
      "aria-hidden": "true"
    }) : null, showInfo ? /*#__PURE__*/React.createElement("div", {
      className: 'reelx-card__info' + (isPlaying ? ' reelx-card__info--live' : '')
    }, /*#__PURE__*/React.createElement("span", {
      className: "reelx-card__name"
    }, r.name), /*#__PURE__*/React.createElement("span", {
      className: "reelx-card__meta"
    }, r.role, " \xB7 ", r.org)) : null, r.staticCard && playing !== r.name ? /*#__PURE__*/React.createElement("button", {
      className: "reelx-card__watch",
      onClick: e => {
        e.stopPropagation();
        if (active) {
          setPlaying(r.name);
        } else {
          goTo(i);
        }
      },
      "aria-label": 'Watch ' + r.name + ' reel'
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/watch-now.png",
      alt: "Watch Now"
    })) : null, active ? /*#__PURE__*/React.createElement("a", {
      className: "reelx-card__yt",
      href: r.youtube,
      target: "_blank",
      rel: "noopener",
      "aria-label": 'Watch ' + r.name + ' on YouTube'
    }, ytIcon) : null, active && (!r.staticCard || playing === r.name) ? /*#__PURE__*/React.createElement("button", {
      className: "reelx-card__fs",
      onClick: e => {
        e.stopPropagation();
        fsReel();
      },
      "aria-label": "Full screen"
    }, fsIcon) : null));
  })), /*#__PURE__*/React.createElement("button", {
    className: "reelx-arrow reelx-arrow--next",
    onClick: next,
    "aria-label": "Next reel"
  }, chevron('M9 5l7 7-7 7'))), reelFs && reels[idx] ? ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "reelx-fs",
    onClick: e => {
      if (e.target === e.currentTarget) setReelFs(false);
    }
  }, /*#__PURE__*/React.createElement("video", {
    className: "reelx-fs__media",
    src: reels[idx].src,
    poster: reels[idx].poster,
    autoPlay: true,
    loop: true,
    playsInline: true,
    muted: muted,
    onDoubleClick: () => setReelFs(false)
  }), /*#__PURE__*/React.createElement("button", {
    className: "reelx-fs__btn reelx-fs__sound",
    onClick: () => setMuted(m => !m),
    "aria-label": muted ? 'Unmute' : 'Mute'
  }, soundIcon), /*#__PURE__*/React.createElement("button", {
    className: "reelx-fs__btn reelx-fs__close",
    onClick: () => setReelFs(false),
    "aria-label": "Exit full screen"
  }, closeIcon), /*#__PURE__*/React.createElement("a", {
    className: "reelx-fs__btn reelx-fs__yt",
    href: reels[idx].youtube,
    target: "_blank",
    rel: "noopener",
    "aria-label": 'Watch ' + reels[idx].name + ' on YouTube'
  }, ytIcon), /*#__PURE__*/React.createElement("div", {
    className: "reelx-fs__info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "reelx-fs__name"
  }, reels[idx].name), /*#__PURE__*/React.createElement("span", {
    className: "reelx-fs__meta"
  }, reels[idx].role, " \xB7 ", reels[idx].org))), document.body) : null, /*#__PURE__*/React.createElement("div", {
    className: "reelx-dots reveal"
  }, reels.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r.name,
    className: 'reelx-dot' + (i === idx ? ' is-active' : ''),
    onClick: () => goTo(i),
    "aria-label": 'Reel ' + (i + 1) + ', ' + r.name
  }))), /*#__PURE__*/React.createElement("div", {
    className: "spk2-foot reveal"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#/speakers",
    onClick: e => go(e, '#/speakers')
  }, "See all speakers"))));
}
Object.assign(window, {
  PageHero,
  SectionHead,
  StatBand,
  CounterBand,
  CounterBandItem,
  SpeakerGrid,
  SpeakersReel,
  LogoWalls,
  TicketsBlock,
  Opportunities,
  OppCards
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/blocks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* SPORT[GEN] website, shared content data for all routes */
(function () {
  // Real brand assets, hotlinked from the live site's Framer CDN (sportgensummit.com export).
  const CDN = 'https://framerusercontent.com/images/';
  const heroVideo = 'assets/aftermovie-hero.mp4';
  const PH = 'assets/photos/speakers/';
  const p = slug => slug ? PH + slug + '.jpg' : null;

  // [name, role, org, photoFile, logoFile], real headshots + company logos from the live site
  const HOME = [['Vincent-Baptiste Closon', 'Global Director Partnerships', 'BNP Paribas', 'XYiyKAI6WxTzTM5lq7VDw1lDFeE.png', 'oiwhOS68oWxY0RMuWSH4sVwCD2Q.png', 'https://www.linkedin.com/in/vincent-baptiste-closon-48a21360/'], ['Eno Polo', 'CEO', 'ATP Tour', 'oC8BQ5Exr5ECOmfk339aS6Tu7w.jpg', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'https://www.linkedin.com/in/eno-polo-ab61371b/'], ['Dominic Thiem', 'Entrepreneur', 'Grand Slam Winner', 'zgSiRRf8uaS2NtEv28uhqIUrahw.jpeg', 'F4sRsiPUORsuwZ8Zz8BEtPdEI.webp', 'https://www.linkedin.com/in/dominic-thiem-03a46a291/'], ['Romy Gai', 'Chief Business Officer', 'FIFA', 'Tn2BKZ9BUwgeXkQxOwhAHwFjopQ.png', 'vW8YRjMjRcJWDpC9F61JBG5fo.png', 'https://www.linkedin.com/in/romy-gai-8543171a1/'], ['Marc Lasry', 'Co-Founder, Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png', 'assets/logos/avenue-capital-white.png', 'https://www.linkedin.com/in/marc-lasry/'], ['Brett Gosper', 'Head of Europe & Asia-Pacific', 'National Football League', 'gfqYm3HLjJ3Hi2WAfmmf4cLDWrI.jpg', '8Z1SmNneEspk4mN0uccgRsjszc.png', 'https://www.linkedin.com/in/brett-gosper-45a63331/'], ['Teodora Ivanova-Limon', 'Chief Business Officer', 'WTA Ventures', 'ZqznAWRhndyAX1HIOFtDAGh6Ew.png', 'b10sH78U8PBmsSt6dxHhTOCc718.png', 'https://www.linkedin.com/in/teodoraivanovalimon/'], ['Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg', '0wKm4XbrfMQTfvoWUOheFFPe7ys.png', 'https://www.linkedin.com/in/adnan-khalef-3a1ab942/'], ['Monica Biagiotti', 'EVP, Global Consumer Marketing & Sponsorships', 'Mastercard', 'mDIEzQnpFsK3huNTXGfzbvh3o.png', 'bBFMfwXl1N3bQJsWeCfbDYWbdM.png', 'https://www.linkedin.com/in/monica-biagiotti-ab120b3/'], ['Paul Devlin', 'Sub-Industry Leader', 'Amazon Web Services', 'CtbQN6AjuDDQOOsPsoUuTqeDhU.png', 'z71YIjycythtNG4vy2uFCmUh9qM.png', 'https://www.linkedin.com/in/pauldevlin81/'], ['Kameryn Stanhouse', 'VP, Global Sports & Entertainment Partnerships', 'IBM', 'kz9VSOZ3FNeXD2b1fFGcb2z4xE.jpg', 'jteIxzQ28sYkB8DYhrbfqZzYmU.png', 'https://www.linkedin.com/in/kkstanhouse/'], ['Doriane Pin', 'Development Driver', 'Mercedes-AMG F1 Team', 'KtpA5J6ofMHavCfYlW6hD0h1w.jpg', 'gzaMuoJS9CBROGNAq84UXuW757Q.png', 'https://www.instagram.com/dorianepin/'], ['Ariel Wengroff', 'EVP, Global Marketing & Communications', 'Ledger', 'SKGeP3KhrXTh0Q0bXYTJlzAh7c.png', '5c3diShw4jgTyu6lVKIwzHqSJU.png', 'https://www.linkedin.com/in/ariel-wengroff-24522343'], ['Caroline Garcia', 'Co-Founder', 'Tennis Insider Club', 'x8oZKvcecHtYwz0VRPK3ifQXI.jpeg', 'yZ5yZ71Q2K3agJLLsCYbGDn0Fs.png', 'https://www.linkedin.com/in/caroline-garcia-8a602a272/'], ['Richard Heaselgrave', 'Chief Revenue Officer', 'Paris Saint-Germain', 'r96laVtMzd63qY9BQlNotyW5tho.jpg', 'EkGeSbh7M8mUEePZhtZASn6Hw.png', 'https://www.linkedin.com/in/richard-heaselgrave-513b8723/']];

  // Full /speakers grid, all 71 speakers, extracted 1:1 from the live site export (order preserved)
  const SPEAKERS_PAGE = [['Vincent-Baptiste Closon', 'Global Director Partnerships', 'BNP Paribas', 'Ct1U5mWGXe3weGxYafxiFmjLew0.png', 'U4n41CTSeJOvs9jq3uhkGR7ZsQ.png', 'https://www.linkedin.com/in/vincent-baptiste-closon-48a21360/'], ['Eno Polo', 'CEO', 'ATP Tour', 'KOg82zEr50WLKR1pAW0q3HyoCY.jpg', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'https://www.linkedin.com/in/eno-polo-ab61371b/'], ['Marc Lasry', 'Co-Founder, Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png', 'assets/logos/avenue-capital-white.png', 'https://www.linkedin.com/in/victoriano-melero-894500/'], ['Monica Biagiotti', 'EVP, Global Sponsorships', 'Mastercard', '9gGKGEEO5o6E2zL2yfDkhEc4sRA.png', 'H4SviEOOywoV9CUHur0ApGPFrsg.png', 'https://www.linkedin.com/in/monica-biagiotti-ab120b3/'], ['Brett Gosper', 'Head of Europe & Asia-Pacific', 'National Football League', 'o6IYTXQ1tZThwW02waiDwffAw4.jpg', '8Z1SmNneEspk4mN0uccgRsjszc.png', 'https://www.linkedin.com/in/brett-gosper-45a63331/'], ['Paolo Della Rovere', 'Managing Director', 'Morgan Stanley', 'pdvLJbsdJnsLkLnZcQRwHa8edfM.png', 'vnw4TG8atkC1YyLDst45dBcmlJY.png', 'https://www.linkedin.com/in/teodoraivanovalimon/'], ['Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg', '0wKm4XbrfMQTfvoWUOheFFPe7ys.png', 'https://www.linkedin.com/in/adnan-khalef-3a1ab942/'], ['Teodora Ivanova - L.', 'Chief Business Officer', 'WTA Ventures', 'IWY2u2oQiuFsmQaMqpNCSkK4B0o.png', 'u78t8hHR6ITBPPZlQtxtLnQ9jXw.png', 'https://www.linkedin.com/in/teodoraivanovalimon/'], ['Arnaud Caudoux', 'Deputy CEO', 'Bpifrance', 'Fp1R3KtVbQmI64dvvojgw6XfyZ8.png', 'PuNtgmxduCCzof75tJ6TSIXJOws.png', 'https://www.linkedin.com/in/arnaud-caudoux-420292/'], ['Doriane Pin', 'Development Driver', 'Mercedes-AMG F1', 'RNu7jrhgq63LxRM61EL7rQN3ylM.jpg', 'gzaMuoJS9CBROGNAq84UXuW757Q.png', 'https://www.instagram.com/dorianepin/'], ['Valerio Iachizzi', 'Secretary General for Sport', 'FIA', 'GWZNWQOS1CpXY6v1v99AVhcpQys.png', 'wHiMAzRm7EQGhfe4MyN0NJyLw.png', 'https://www.linkedin.com/in/valerio-iachizzi-6600a646/'], ['Brandon James', 'SVP, Strategic Growth', 'Spurs Sports & Entertainment', 'UF5pmOCcP70s6ZPANk1piJAb5Sk.png', 'SsKuGBb2cpyeOeLdz0GX1c8dwz8.png', 'https://www.linkedin.com/in/brandon-james-6403a91a9/'], ['Bob Markham', 'President, EMEA', 'Accenture Song', 'XH2sk3qWc0t8lumJwOIptl7DBVU.png', 'NJE5DpePqV3KU8QTNT9fGLWcDew.png', 'https://www.linkedin.com/in/bob-markham/'], ['Paul Devlin', 'Sub-Industry Leader', 'Amazon Web Services', 'HfF7w9MhUCZ1hA68f9KhOnIufE.png', 'f5MGMMQk3u7GD1OhaZc0ZlqIk.png', 'https://www.linkedin.com/in/pauldevlin81/'], ['Dominik Beier', 'Chief Commercial Officer', 'Bitpanda', 'TNacToTo4ykOxM9fSk1VOKjHE.jpeg', 'RzeUuGHE7Q4W7UkCHSTI61WR6k.png', 'https://www.linkedin.com/in/dominik-beier-ba40a999/'], ['Caroline Garcia', 'Co-founder', 'Tennis Insider Club', 'tOhW8QQQ5vFvk5hayJhpjN8hI.jpeg', 'yZ5yZ71Q2K3agJLLsCYbGDn0Fs.png', 'https://www.linkedin.com/in/caroline-garcia-8a602a272/'], ['Edgar Grospiron', 'President', 'COJOP Alpes 2030', '6grJ04KZbnZ2Lf7cwBumzPwcs.png', 'V4n4JOXkdawihqpgu1of86uIU.png', 'https://www.linkedin.com/in/edgar-grospiron/'], ['Victorien Tixier', 'CEO & Co-founder', 'ScorePlay', 'pg7IL44tyUHzJrqLTkLGD5Q2YCc.jpg', 'hi0liccijnZPVpJgDDaD7mnZVM.png', 'https://www.linkedin.com/in/victorien-tixier-28543510b/'], ['Steve Carter', 'CEO', 'Bolt6', 'nYGYoSqdHFMmZOXMd2iZtwUh0I.jpeg', 'ZE4dbNWeozgmtiRYZnFwg5QgH2Y.png', 'https://www.linkedin.com/in/steve-carter-59030128/'], ['Amélie Oudéa-Castéra', 'President', 'French Olympic Committee', 'Teonqpy9c2W494iZpRlPL4DtX8.png', 'sVuIKYoM6i7L0U4c1QymUdME0.png', 'https://www.linkedin.com/in/amelieoudeacastera/'], ['Sanjog Gupta', 'CEO', 'International Cricket Council', 'l7GSPEAIwKMEs27tVgXBN3yJBnE.png', 'TV3bAMfP8MzWbKhkItwViUE6xo.png', 'https://www.linkedin.com/in/sanjog/'], ['David Trezeguet', 'International Ambassador', 'River Plate', 'q1se2o8j9o6q67hMb6jCS2MR8.png', 'V22od8P68GbYvMu792hTWQYM2g4.png', 'https://www.instagram.com/trezeguetofficial/'], ['Jérôme Parmentier', 'VP, Media Rights & Partnerships', 'IOC', 'rLAVv82JfRx22lf0feQNzcRIg.png', 'NJHSEws3U3PIKLvdZWkOo9aLsfc.png', 'https://www.linkedin.com/in/jeromeparmentier/'], ['Rebecca Smith', 'CEO & Founder', 'Crux Football', '8gCUjJ2gcYk88RIgvNpU5jb1k.jpg', '6OrgnRVFRpu95mm1IHh3QFmI88.png', 'https://www.linkedin.com/in/rebecca-bex-smith-0798106/'], ['Kyang Yung', 'Chief Investment Officer', 'Gamma Waves Partners', 'NPxvIK1ahJtK6aTBHkdSslw.jpg', '3cAhKpkihqzD6n5pZc2CDMSlVM.png', 'https://www.linkedin.com/in/kyangyung/'], ['Ariel Wengroff', 'EVP, Global Marketing', 'Ledger', 'sNKOTwmc4jc7bXKkVmPKBypv6Y.png', '5c3diShw4jgTyu6lVKIwzHqSJU.png', 'https://www.linkedin.com/in/ariel-wengroff-24522343/'], ['Richard Heaselgrave', 'Chief Revenue Officer', 'Paris Saint-Germain', 'r96laVtMzd63qY9BQlNotyW5tho.jpg', 'EkGeSbh7M8mUEePZhtZASn6Hw.png', 'https://www.linkedin.com/in/richard-heaselgrave-513b8723/'], ['Chris Hume', 'Director', 'Champion Data', 'cpSfWIt3sfqFNx3Ll0sFJCU8mVQ.jpg', 'AZHQfZ6ftdmQNdNgqsEwFOi6TMs.png', 'https://www.linkedin.com/in/chris-hume-9603384/'], ['Lorenzo Vitali', 'Co-Sector Head Media, Sport', 'DLA Piper', '3QfzHlnlgCcCgPLFlYFGLdGa0uE.jpg', 'z9I5mmi0jJq8AhE26eP7Skfl6M.png', 'https://www.linkedin.com/in/lorenzo-vitali-446662297/'], ['Ugo Valensi', 'CEO', 'Volleyball World', 'x40RcTCHQtzPKRfiXQCbo5oY.jpeg', 'ymkwAW6BKs1RibbDG5cGzVirMk0.png', 'https://www.linkedin.com/in/ugo-valensi/'], ['Josh Pyatt', 'Partner', 'WTSL', '7WLJROzIxkug2pcbTmfDpaU4hw.png', 'B4fZ6SRmtXYmZhymM5UEWBYJfY8.png', 'https://www.linkedin.com/in/josh-pyatt-58b646183/'], ['Kameryn Stanhouse', 'VP, Global Partnerships', 'IBM', '26ZoG4VEcUOYVzvhkzjgbZHZY.jpg', 'PhRKRIMKW2Ix48Ep151f2sIf1A.png', 'https://www.linkedin.com/in/kkstanhouse/'], ['Jamie Horowitz', 'President & Co-founder', 'Omaha Productions', '3qDR6O2GDk70Q748AdrFhFtepCI.jpg', 'Ed2708FxAC1CNwSay8GKT1jk8xQ.png', 'https://www.linkedin.com/in/jamie-horowitz-5153597/'], ['Arjun Kapur', 'Vice President', 'Left Lane', 'jW9ZIvK1FFDsYJ67Ep7xOzwD6k.jpg', '2GsGoD7sFxOkGrSrYlTPCTtNtfU.png', 'https://www.linkedin.com/in/arjun-kapur7/'], ['Michele Ciccarese', 'Commercial Director', 'Lega Serie A', 'udb6kA5iY9iQXIA9G0fRfPzPHg.png', 'JBXrnydivE1GEU9OpF6S4zSlUG4.png', 'https://www.linkedin.com/in/micheleciccarese/'], ['Kushaan Ahuja', 'Partner', 'Will Ventures', 'ZIezVLEQ6WTmMov8zVurQ9bUI.webp', 'BmQkevU6v9j3VLsXLDFxWJgJtM.png', 'https://www.linkedin.com/in/kushaan-ahuja-68a32940/'], ['Marc Cohen', 'Regional Manager', 'Fever', 'LqinovjiZkrLlHr7ro2YpPqRA4s.png', 'jrt7GZF4KyxLYMJ9wGBM0YAKSlE.png', 'https://www.linkedin.com/in/marc-cohen/'], ['David Coulthard', 'Co-Founder', 'Velocity Experience', 'tiBi34zT0Do6HNFgNj0xvCFEiw.webp', 's9SrfZXjRijd9bacgPH1APyAU.png', 'https://www.linkedin.com/in/david-coulthard12345/'], ['Raquel Braun', 'Chief Commercial Officer', 'League One Volleyball', 'xeiOHOGIvj4wEx0O4pfh7clk1n8.png', 'p0GEnD9Th9aXrGkpPl2ncZEkvPc.png', 'https://www.linkedin.com/in/raquelbraun/'], ['Charlie Dewhurst', 'Chief Commercial Officer', 'SailGP', 'YWgjjrlHJ2kCYo89O3qVv17VTs.jpg', 'FkaA5HtlWyirrHvZwNtZMHZm8w.png', 'https://www.linkedin.com/in/charlie-dewhurst-62289758/'], ['Florian Lamblin', 'CEO', 'UTMB International', 'Ra07CCjG5ZDKjTy2mXu9F1H5FM.jpeg', 'huEoYutBRgMSecdf0o0YUDHiwY.png', 'https://www.linkedin.com/in/florianlamblin/'], ['António Caçorino', 'CEO & Founder', 'APEX', 'b554CkGsKD0mf5o7ICzfsF4gE.jpg', 'e5h6TNotYVIUyE0bu5YA3DoU4Y.png', 'https://www.linkedin.com/in/antonio-cacorino/'], ['Kerstin Lutz', 'CEO', 'Billie Jean King Cup', 'xShbCFVd8xtZ3Pec2HpOB8fk.png', '9LhM5TDyQR07wVwfqu96O4MGg.png', 'https://www.linkedin.com/in/kerstin-lutz-20b6573/'], ['Patrick Mouratoglou', 'CEO & Founder', 'UTS', 'M9jhhxTuShdkPkOYdEVatipgVo.jpg', '0D2EG0owCMrfKi2NDevjfCtakPs.png', 'https://www.linkedin.com/in/patrickmouratoglou/'], ['Laurent-Eric Le Lay', 'Sports Director', 'France Télévisions', 'ABuVzZlPSSaeZSuIyfbJXoUoZaU.webp', '5BOtza5epQAO6mfiIiX6ay73o4.png', 'https://www.linkedin.com/in/laurentericlelay/'], ['Mofses Kechichian', 'Managing Director', 'TRAIL Capital', 'SC5jKA69BcOxMSril0AxRPtLLqg.webp', 'hrcSIpOBqLYeHUVdPxrXWvlcaPk.png', 'https://www.linkedin.com/in/mofses-kechichian-809989111/'], ['Sunil Patel', 'CEO & Co-founder', 'Whisper Group', 'mVrDv5p5l0KgPCCUQRgWyhcwNY.jpg', 'wZ5rVWgXfFERPZ6XJba1g8zmVs.svg'], ['Charles Frémont', 'Senior Innovation Hub Manager', 'UEFA', 'XA5qnTv4yC9c6D6kuOzk7Iq20Zg.jpg', 'FjIP5blMI4GqOyJ6DM2AFGT8pLs.png', 'https://www.linkedin.com/in/charles-fr%C3%A9mont-17988139/'], ['Dominic Thiem', 'Entrepreneur', 'Grand Slam Winner', 'zgSiRRf8uaS2NtEv28uhqIUrahw.jpeg', 'F4sRsiPUORsuwZ8Zz8BEtPdEI.webp', 'https://www.linkedin.com/in/dominic-thiem-03a46a291/'], ['Samuel Tamba', 'Founder & CEO', 'AxeOne', '4Wa0dEkyzt8Fhv8AhlVR3eRykA.png', 'eukTT2eqCfLEf1nstRwB7xsc.png', 'https://www.linkedin.com/in/samuel-tamba/'], ['Pedro Félix da Costa', 'Chief Commercial Officer', 'APEX', '9TF5cswcp1ZksvnQueEku8nTt0c.jpg', 'DsCEik0BA7rP5MUUZpee8bO8.png', 'https://www.linkedin.com/in/pedro-f%C3%A9lix-da-costa-a23309205/'], ['Malcolm Lemmons', 'Founder', 'Vetted Sports', '1n9ELr1BPUQI7H9MdJHcG6Rrs.jpg', 'UGxoUp27I64v6olmxjbE5pjI.png', 'https://www.linkedin.com/in/malcolmlemmons/'], ['Lisa Billard', 'F1 Academy Driver', 'Gatorade', '5qYROyrDnVJIBJJzjTy6W8qMWH4.jpeg', '9kV5habPwLlDdIvKQ3Tst6BuZeI.png', 'https://www.instagram.com/lisabillard_driver/'], ['Jefferson Plentz', 'CEO & Founder', 'StarBro Sport Tech', 'fwC3DkHHZZ5qhlVrvmEHTunqsJ4.png', 'lWT4mXTlpl8UFENBW3EkJoVgI8w.png', 'https://www.linkedin.com/in/jplentz/'], ['Stéphane Bénichou', 'Managing Director', 'InTheBoardroom', '5Sz6TZUFej1aTgoPCZidGxrYY.jpeg', 'uQqmegKdmysV8pzVazxPwSC4B54.png', 'https://www.linkedin.com/in/stephane-benichou-itb'], ['Charlie Stebbings', 'Head of Sport', '20VC', 'BuPSqhLT52NQIR9BN64DO9d3Ec.jpg', 'jU3GHGx4Cq29Idh1jhAXtMm4.png', 'https://www.linkedin.com/in/charlie-stebbings-629059114/'], ['Mathias Kuhn', 'Lawyer', 'DLA Piper', 'lHIr7bEUwdQUnu9q5pxN0VimFg.jpg', 'z9I5mmi0jJq8AhE26eP7Skfl6M.png', 'https://www.linkedin.com/in/mathias-kuhn-b10a0b59/'], ['Zack Weiner', 'Overtime', 'Co-Founder', 'pO7mbetJjwEnUWLbs6qFXnk.png', 'N7jiIpc10yi2879x9yJWe8J3TA.png', 'https://www.linkedin.com/in/zack-weiner-02071237/'], ['Antoine Magnan', 'Strategic Advisor', 'Genesis Magma Racing', 'RLfuMl4flBPuUUn7NbGEppUqE.png', 'TrNXu1NH8kJbtv55QG7UiShOd9Q.png', 'https://www.linkedin.com/in/antoine-magnan-86506a2/'], ['Adriana Crovetto', 'Investor', 'Gamma Waves Partners', 'G8JCKXENjWIMdqZJ8T2iPOFgI8.jpg', '3cAhKpkihqzD6n5pZc2CDMSlVM.png', 'https://www.linkedin.com/in/adriana-crovetto-2a14b184/'], ['Danny Menken', 'Co-Founder & General Partner', 'Athvance Capital', 'm9f95fpcRMqDIYHr5nWy622oONE.png', '9x9L306y3TV6nNw4V6S2ofj9Kc.png', 'https://www.linkedin.com/in/dannymenken/'], ['Nicolas Burger', 'CEO', 'Alltricks', 'q3zQxZZwG5EL3UccEVE3ZxtmY.png', 'auokZr6m46PL5IhMBRzPTf05V8.png', 'https://www.linkedin.com/in/nicolas-burger-2a05891/'], ['Mark Wyatt', 'Managing Director', 'Alvarez & Marsal', 'v9vatvO0s2B6K43xRT7bxN1gXk.jpg', 'E0E6d5Yf5scc76iZycietG5N8Cc.png', 'https://www.linkedin.com/in/corporatefinanceadvisor/'], ['João Sousa', 'Former ATP Player', '4-Time ATP Title Winner', '8g65vFNaKxjIrSDHuVWrXJVIw.png', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'https://www.linkedin.com/in/jo%C3%A3o-sousa-b8a2bb390/'], ['Lucy Mills', 'Founder', 'Ready Sport Global', 'eZEY2a2gygCpktH5dQNqhW20A.png', 'jaARswXrTFB34qRzk2ns4wnAmE.png', 'https://www.linkedin.com/in/lucycmills/'], ['Aymeric Labaste', 'Head of Intl. Development', 'Roland-Garros', 'hGtACndj3JcYH4Ow5IqRSnM1J8.jpg', 'LTK4MH6czKBOScRebF0qe00pAA.png', 'https://fr.linkedin.com/in/aymericlabaste'], ['Stefan Lavén', 'Founder', 'Data Talks', 'EANl9dyv7EACSc2huQO4In2r0.png', 'Clm2j7I9IKuW0aS9UDH8kfmic.png', 'https://www.linkedin.com/in/stefan-laven/'], ['Juanjo Martin', 'Players Relation Senior Manager', 'ATP Tour', 'nEH1b6TGpIt8RhaFJOPwvZkiU.jpg', 'soA1GFaOfMNDIwQV0rvfHYKoc94.png', 'https://www.linkedin.com/in/juanjomartinortiz/'], ['Andy Marston', 'Head of Corporate Ventures', 'The Players Fund', 'KkyQMkFZGwFse8tkTEFCbCjThXc.png', 'sqHmdkMTl1k5Dfp06UmbuVASBQ.webp', 'https://www.linkedin.com/in/andrew-marston/'], ['Mark Hartmann', 'Tech Entrepreneur', 'Beyond the Athletes', 'vrcZZ0vrb9dW50knLuxD8YOk.jpeg', 'sK9XKFOLytdB2Sb2GSVBxKmAng.png', 'https://www.linkedin.com/in/mark-a-hartmann-0387ba1/']];
  const toObj = ([name, role, org, photoFile, logoFile, link]) => ({
    name,
    role,
    org,
    link: link || null,
    photo: photoFile ? photoFile.indexOf('/') >= 0 ? photoFile : CDN + photoFile : null,
    logo: logoFile ? logoFile.indexOf('/') >= 0 ? logoFile : CDN + logoFile : null
  });
  const speakersHome = HOME.map(toObj);
  const speakersAll = SPEAKERS_PAGE.map(toObj);

  // ── Home "Our 2026 Speakers", featured list (9) shown beside the weekly reel ──
  // [name, role, org, photoFile, youtubeUrl], replace each youtube URL with the speaker's real clip.
  const REEL_SPEAKERS = [['Eno Polo', 'CEO', 'ATP Tour', PH + 'eno-polo-reel-card-clean.png', 'https://www.youtube.com/results?search_query=Eno+Polo+ATP+Tour', true], ['Romy Gai', 'Chief Business Officer', 'FIFA', PH + 'romy-gai-reel-card.png', 'https://www.youtube.com/results?search_query=Romy+Gai+FIFA', true], ['Marc Lasry', 'Co-Founder & CEO', 'Avenue Capital', PH + 'marc-lasry-reel-card.png', 'https://www.youtube.com/results?search_query=Marc+Lasry+Avenue+Capital', true], ['Doriane Pin', 'Development Driver', 'Mercedes-AMG F1', PH + 'doriane-pin-reel-card.png', 'https://www.youtube.com/results?search_query=Doriane+Pin+F1+Academy', true], ['Caroline Garcia', 'Co-Founder', 'Tennis Insider Club', PH + 'caroline-garcia-reel-card.png', 'https://www.youtube.com/results?search_query=Caroline+Garcia+SportGen+Summit', true], ['Patrick Mouratoglou', 'CEO & Founder', 'UTS', PH + 'patrick-mouratoglou-reel-card.png', 'https://www.youtube.com/results?search_query=Patrick+Mouratoglou+UTS', true], ['Dominic Thiem', 'US Open Winner', 'ex-pro Athlete', PH + 'dominic-thiem-reel-card.png', 'https://www.youtube.com/results?search_query=Dominic+Thiem', true], ['David Coulthard', 'Company Director', 'Velocity Experience', PH + 'david-coulthard-reel-card.png', 'https://www.youtube.com/results?search_query=David+Coulthard+Velocity+Experience', true], ['Teodora Ivanova', 'Chief Business Officer', 'WTA Ventures', PH + 'teodora-ivanova-reel-card.png', 'https://www.youtube.com/results?search_query=Teodora+Ivanova+WTA+Ventures', true]];
  const reelSpeakers = REEL_SPEAKERS.map(([name, role, org, photoFile, youtube, staticCard]) => ({
    name,
    role,
    org,
    youtube,
    staticCard: !!staticCard,
    photo: photoFile.indexOf('/') >= 0 ? photoFile : CDN + photoFile
  }));

  // ⭐ ÉDITION HEBDOMADAIRE, change la vidéo du réel ici, en une ligne.
  // Dépose ton fichier .mp4 vertical (9:16) dans reels/ puis mets src: 'reels/ton-fichier.mp4'.
  const weeklyReel = {
    src: 'reels/patrick-mouratoglou.mp4',
    // ex. 'reels/semaine-25.mp4' (fichier hébergé sur le site, pas d'embed)
    poster: CDN + 'M9jhhxTuShdkPkOYdEVatipgVo.jpg',
    speakerName: 'Patrick Mouratoglou'
  };

  // 🎬 Carrousel de réels (swipe), un réel par speaker. Remplace src par le .mp4 vertical (9:16) hébergé.
  // 👉 Vidéo réelle par speaker : ajoute 'Nom': 'reels/fichier.mp4' ici.
  const REEL_VIDEOS = {
    'Eno Polo': 'reels/eno-polo.mp4',
    'Teodora Ivanova': 'reels/teodora-ivanova.mp4',
    'Patrick Mouratoglou': 'reels/patrick-mouratoglou.mp4',
    'David Coulthard': 'reels/coulthard.mp4',
    'Caroline Garcia': 'reels/caroline-garcia.mp4',
    'Dominic Thiem': 'reels/dominic-thiem.mp4',
    'Romy Gai': 'reels/romy-gai.mp4',
    'Doriane Pin': 'reels/doriane-pin.mp4',
    'Marc Lasry': 'reels/marc-lasry.mp4'
  };
  const reels = reelSpeakers.map(s => ({
    name: s.name,
    role: s.role,
    org: s.org,
    youtube: s.youtube,
    staticCard: s.staticCard,
    poster: s.photo,
    src: REEL_VIDEOS[s.name] || heroVideo
  }));

  // Auto-scrolling "Trusted by the industry leaders" marquee, real partner logos
  const marquee = ['0wKm4XbrfMQTfvoWUOheFFPe7ys.png', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'gGOnNMRaqcQzaTsChA9D1VuSc.png', '5yqukeigbpRRQIZRKWRlrXGxbM.png', 'bBFMfwXl1N3bQJsWeCfbDYWbdM.png', '8Z1SmNneEspk4mN0uccgRsjszc.png', 'sTkuESzrslw6aMGjJGsZPPDMN0.png', 'wsPFfMrxlpOr8t3fkNl0SZZXc44.png', 'aAww8JOfIK3o1h5YTfcsu5ebts.png', 'w6V1nYCQ7XNBzfM8bEzPRcfeXU.png'].map(f => CDN + f);

  // "They will be at", tabbed auto-scrolling logo marquees (real logos per category)
  // A few clubs use proper supplied artwork: Monaco & Spurs are reversed (light) versions made
  // for dark backgrounds, shown as-is (no mono filter); the Timberwolves line-art keeps the
  // default white treatment and reads cleanly.
  const LOCAL_LOGOS = {
    'wC2YyNaB5ps0bESRHwqgP72yU.png': {
      src: 'assets/teams/minnesota-timberwolves.png',
      alt: 'Minnesota Timberwolves',
      cls: 'wmq__item--emblem wmq__item--invert'
    },
    'oJH0nJVskCP7oYVPm9ZSGW2I.png': {
      src: 'assets/teams/as-monaco.png',
      alt: 'AS Monaco',
      cls: 'wmq__item--emblem wmq__item--asis'
    },
    'Yc16FE3ZQ5Ak9fGUjTaLZNJUA.png': {
      src: 'assets/teams/san-antonio-spurs.png',
      alt: 'San Antonio Spurs',
      cls: 'wmq__item--asis'
    },
    'laliga.png': {
      src: 'assets/teams/laliga.png',
      alt: 'LaLiga'
    },
    'eintracht.png': {
      src: 'assets/teams/eintracht-frankfurt.png',
      alt: 'Eintracht Frankfurt',
      cls: 'wmq__item--emblem wmq__item--invert'
    },
    'mancity.png': {
      src: 'assets/teams/manchester-city.png',
      alt: 'Manchester City',
      cls: 'wmq__item--emblem wmq__item--asis'
    },
    'chelsea.png': {
      src: 'assets/teams/chelsea-fc.png',
      alt: 'Chelsea FC',
      cls: 'wmq__item--emblem wmq__item--asis wmq__item--lg'
    },
    'zozpBXQdfLJ30K3n1jr40t3CD3Q.png': {
      src: 'assets/teams/olympique-marseille.png',
      alt: 'Olympique de Marseille',
      cls: 'wmq__item--emblem wmq__item--asis'
    }
  };
  const wallCat = (label, altPrefix, files) => ({
    label,
    logos: files.map((f, i) => {
      const o = LOCAL_LOGOS[f];
      return o ? {
        src: o.src,
        alt: o.alt,
        cls: o.cls
      } : {
        src: CDN + f,
        alt: altPrefix + ' ' + (i + 1)
      };
    })
  });
  const walls = [wallCat('Teams, Leagues, Federations', 'Team/League', ['MRTVHFaexoWQmGLzmbmR6H9SHo8.png', 'XEmuKda3Zj9r5Oz4c2yszPNxgY4.png', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'laliga.png', 'FjIP5blMI4GqOyJ6DM2AFGT8pLs.png', 'aL2i6uYyGsyWQVKALkJvSkov0.png', 'vW8YRjMjRcJWDpC9F61JBG5fo.png', 'Yc16FE3ZQ5Ak9fGUjTaLZNJUA.png', 'eintracht.png', 'wC2YyNaB5ps0bESRHwqgP72yU.png', 'AJe4iCWXGUzIW3VsPMPiExPkFkw.png', 'V22od8P68GbYvMu792hTWQYM2g4.png', 'mancity.png', 'S0UY3kfGWV8cxlgxNwJvADtwY.png', 'RHRmacpc1m7U97iyxSRn6g0m98.png', '5yqukeigbpRRQIZRKWRlrXGxbM.png', 'pDrQVy8eb9kWOJe4yvtm4rQkM.png', 'chelsea.png', 'zozpBXQdfLJ30K3n1jr40t3CD3Q.png', 'gA8oXxDpaPQhqZW3E98ytj26bg.png', 'oJH0nJVskCP7oYVPm9ZSGW2I.png', 'fmVAjJOAhVQvY8fDp7Wnip849c.png']), wallCat('Brands', 'Brand', ['TCaxRUNJ7T3cE1ZaFBkQDDd74.png', 'gCFryWsRGnkNFywuNuk8Fz8lOKM.png', 'xPvxSYuxSkm0ufFNj8WpbIdmzWw.png', 'YBVuke31FU4muojOPxD7a4NudY.png', '0Zfyd7cXhlGnUfyziX5M1MEglPw.png', 'bBFMfwXl1N3bQJsWeCfbDYWbdM.png', 'tcWfcQzMF2r2XlNtuz47A99duw.png', 'pDnBxzTcQ0KLnJoYJllbvWgK0nY.png', 'lNldTvHYGBgBi1ZJnHmnT8Pj1w.png', '6GE77GEU6kY5TrsR4DzdQWrM9U.png', 'FscUvZ0NPqx1KBH08t42u0vpPjI.png', '5c3diShw4jgTyu6lVKIwzHqSJU.png', 'F7PJ2i4hJl0aWahXbXj3lnqE.png', 'XT4RZyfVRFKXxdhEsN1xx1Gd8.png']), wallCat('Investment & Advisory Firms', 'Investment', ['gGOnNMRaqcQzaTsChA9D1VuSc.png', 'bkMmpr6NP0OUpWnewViZQLRfc.png', '0wKm4XbrfMQTfvoWUOheFFPe7ys.png', 'T9cbGVkT9VMMbAhR50Z9LLCHOw.png', '3cAhKpkihqzD6n5pZc2CDMSlVM.png', 'HZaR7L01XlCApAMTJDGF1DhqV18.png', 'AMMZrcroRhVn7IwGNzCQp6LSM.png', 'LV7eydEqXnc6xWgv8Lo64rwVVg.png', '8ulJACMJgZxJslxsQdJnnbp1Ckk.png', '3GsgZxvyIuhhB9KCCEPR2QLcTtw.png', 'CKTErho3wj186JGVWXcKsntirjg.png', 'dXxIkypsDmW3oSX99NNj3iQko.png', 'PddPF3w300JMQWwuNSqk8GrXm4.png', 'C7JsfwFbbAZGUvwvUhPVNqTK2Q.png', 'p8xTFfSybbF09YGqZGq2WWH7Q.png', 'PVgY1RRv24tCPf3oaAEaxIYzGSI.png', 'k8LcAMwlh3iR4AQaLJiJhVcjBU.png', 'ngI5KXaJLlPXMSJ2U1Gxaf32nks.png', 'jWKcDuG97p5UBzgBI9ICpcNSes.png']), wallCat('Agencies', 'Agency', ['wTuzIWFWngbNaIyGggeCRR74hk.png', 'd4LMpGnJyR2xO2pXsStgdGrn6k.png', '4KaHgvQ8WonhPZ71rPLAM0dwWEE.png', 'KCjimyWDqtsKrvD36jCeSeUGjQ.png', 'HJs1N9pV0pUKLyoGaDj35Muv4.png', '2EXpptyCZGPsZGz1MvYEWB0GFA.png', '53w9ACsARidQh3ZfN6XHDC1Wl38.png', 'GqZpKFQQzzc84NDX3fJR97OVCo.png', 'e9W6QzZTLBEPGRzVM9JC57hg8Q.png', 'JYAZ8D6eAHAST2jdDH2Deif1j0.png', 'rY0BbMlkgRxuTSUucaGzxQcX6U.png', 'xyASCEPsvX9SdVJK6FnfWojbss.png']), wallCat('Technology & Data', 'Tech', ['z11y40PmGss5LtiR6MkrnS05FA.png', 'mmQYwNgeA9MitLHEJntDfJcTE.png', '0jDYuLRxy0uVwREwWW9d8AoaAGM.png', 'uZhnpoZS18PaCIf8oOvkFRsh0.png', 'wsPFfMrxlpOr8t3fkNl0SZZXc44.png', 'QS6ulzt1neb4SQhOfnwrvfNBUNc.png', 'lWT4mXTlpl8UFENBW3EkJoVgI8w.png', 'QubFoZOScAwGfHjW0Z48VazSc.png', 'ozhOF81N5WhgGBacANg27I6R6Q.png', 'XTeuNidKJmD8gly8TBrlbTxkM.png', 'ppBFtFJ6N5Ns7QhjlBBJ21pSxJY.png', 'AZHQfZ6ftdmQNdNgqsEwFOi6TMs.png']), wallCat('Media & Entertainment', 'Media', ['twvoFscjUYUGh7o1KIg1DiCy5EQ.png', 'EgxVaNXbTBz7xZMpM5m1gMNN6Cs.png', 'HGSVsXCy5NLV1cBkl5OO09r8YEE.png', 'PjAYGZZjOwq1PGNduvTO3GvHA7E.png', 'IrC48C4TOLG8tO0d1wNpCKNLspw.png', 'BEXkWr9iiMm6bFecLv1oCG8Zo.png', 'txLWj4MTTaAgqHAxz5sHlVo7wHw.png', 'uX0tn3POfXz2c8eUf9ycWVGXQrA.png', 'icCd3Nf62K6XGd1yD327NPSYp4.png', 'R898MyAtJ827zhXIpGGXuyoPjg.png', 'WdS44dVFpkekKblIdgATe5QOk.png', 'sCJFTrXmUNlz0wH9CVvBT2B1g.png', 'B2mDXyEk5zSAbiKFYNLvipEKaE.png', '23zLzo3nxB7Wfehfulln4Ya0Vls.png'])];

  // Partner tiers, real partner logos from the live site (tier drives logo size)
  const partnerTiers = [{
    label: 'Founding Partner',
    tier: 'founding',
    logos: [['slCL53NvqEbZ8mCu0dMoIJNesTI.png', 'BNP Paribas']]
  }, {
    label: 'Gold Partner',
    tier: 'gold',
    logos: [['wsPFfMrxlpOr8t3fkNl0SZZXc44.png', 'Gold Partner']]
  }, {
    label: 'Silver Partners',
    tier: 'silver',
    logos: [['h2ylcv16WF79aJJDNZV7eB1I.png', 'Silver Partner 1'], ['vgwtaKPe6QQld31Xq22jdBb5ujA.png', 'Silver Partner 2']]
  }, {
    label: 'Bronze Partners',
    tier: 'bronze',
    logos: [['ApC508naRqFg0TN9fpzFRL5GH4.png', 'Bronze Partner 1'], ['51FzYj8FGpxXXAodofaQwk7Bxp0.png', 'Bronze Partner 2'], ['ZL9q0YnHad9wTMN7EYvmRyofKJU.png', 'Bronze Partner 3'], ['gmw06UOZ9lQ1aswF6dcD91ooA.png', 'Bronze Partner 4'], ['iPqm6K8LH9lPMP9aJDmaBeNWsI.png', 'Bronze Partner 5'], ['Lr2KaB1rioLJDY7kQqEho92WNk.png', 'Bronze Partner 6'], ['jrt7GZF4KyxLYMJ9wGBM0YAKSlE.png', 'Bronze Partner 7'], ['hrcSIpOBqLYeHUVdPxrXWvlcaPk.png', 'Bronze Partner 8'], ['9zQ9UqsFzWAFe3xtKRYpRZyqkek.png', 'Bronze Partner 9']]
  }, {
    label: 'Startup Partners',
    tier: 'startup',
    logos: [['Bv5Sgtdi4VfPQIzBmZKCJwi7w.png', 'Startup Partner 1'], ['zDqAiHLJ3Z4vbI7xU9UxCkc.png', 'Startup Partner 2'], ['hppcDIccYnC2TssJg640CT7QA24.png', 'Startup Partner 3'], ['rl3Fc5MNsSsSfO0eeR1SUwNvg.png', 'Startup Partner 4'], ['Xjt8pLBR4dVIZlkcVcNoZ0Ghd50.png', 'Startup Partner 5'], ['r8A6MHTf9S0GKSH6ayQGMiekc.png', 'Startup Partner 6'], ['vns24K9oT8hyEX2YALjAsmsZCJM.png', 'Startup Partner 7'], ['C8UZztxEFetWskhB049Lt54e2Y.png', 'Startup Partner 8'], ['Wx89eI6F7gjdgsumOL51WwAxkyE.png', 'Startup Partner 9']]
  }, {
    label: 'Media Partners',
    tier: 'media',
    logos: [['kzhbCpxTZZTgb6Bwx0In0mX2qg.png', 'Media Partner 1'], ['fNHh43BAcwcP5o1whTzUMF9dLs.png', 'Media Partner 2'], ['PRS2D3RGXtVIcFjU0w0Ghs.png', 'Media Partner 3']]
  }].map(t => ({
    label: t.label,
    tier: t.tier,
    logos: t.logos.map(([f, alt]) => ({
      src: CDN + f,
      alt
    }))
  }));

  // Attendee snapshot (gated PDF): a curated extract of the 2026/2027 attendee list.
  // Displayed as three vertically scrolling columns of role + entity cards.
  const snapshotStats = [{
    value: '1,200+',
    label: 'Attendees'
  }, {
    value: '70%',
    label: 'Senior decision-makers'
  }, {
    value: '250+',
    label: 'C-level executives'
  }];
  const snapshotPdf = 'assets/sgn-2026-attendee-snapshot.pdf';
  const snapshotAttendees = [[['Chief Business Officer', 'FIFA'], ['CEO', 'ATP Tour'], ['Chief Revenue Officer', 'Paris Saint-Germain'], ['EVP, Global Sponsorships', 'Mastercard'], ['Head of Europe & Asia-Pacific', 'NFL'], ['Secretary General for Sport', 'FIA'], ['VP, Global Partnerships', 'IBM'], ['CEO', 'Volleyball World'], ['Sales Director Football EMEA', 'Nike'], ['Head of Content Operations EMEA', 'TikTok'], ['Managing Director', 'Morgan Stanley'], ['CEO', 'International Cricket Council']], [['VP, Media Rights & Partnerships', 'International Olympic Committee'], ['President', 'CNOSF'], ['Sr Director Partnerships', 'Netflix'], ['Chief Commercial Officer', 'SailGP'], ['Global Director Partnerships', 'BNP Paribas'], ['Managing Director', 'The Carlyle Group'], ['President, EMEA', 'Accenture Song'], ['Head of Intl. Development', 'Roland-Garros'], ['Senior Innovation Hub Manager', 'UEFA'], ['GVP, Head of Legal', 'Warner Bros. Discovery Sports'], ['Director of Sports & Media Partnerships', 'Snap Inc.'], ['CEO', 'Paris FC']], [['Chief Business Officer', 'WTA Ventures'], ['President', 'COJOP Alpes 2030'], ['Deputy CEO', 'Bpifrance'], ['Sports Director', 'France Télévisions'], ['Managing Director & Partner', 'Boston Consulting Group'], ['Head of Tennis', 'beIN Sports'], ['SVP, Strategic Growth', 'Spurs Sports & Entertainment'], ['Chief Commercial Officer', 'Lega Serie A'], ['Head of Partnership Acquisitions', 'Alpine F1 Team'], ['EVP, Global Marketing', 'Ledger'], ['Sub-Industry Leader', 'Amazon Web Services'], ['Chairman, Unified World Cup', 'Special Olympics']]].map(col => col.map(([role, entity]) => ({
    role,
    entity
  })));
  const stats = [{
    number: 1200,
    suffix: '',
    label: 'Attendees'
  }, {
    number: 300,
    suffix: '',
    label: 'Organizations'
  }, {
    number: 100,
    suffix: '',
    label: 'Speakers'
  }, {
    number: 70,
    suffix: '%',
    label: 'Director level & up',
    progress: 70
  }];
  const tickets = [{
    tier: 'Startup',
    price: '€390',
    intro: 'Eligibility Requirements',
    lede: 'To qualify for the discounted pass and unlock full PRO-level perks, your startup must meet the following criteria:',
    perks: ['Funding Stage: Must have raised less than $3 million in total funding.', 'Company Age: Must be under 5 years old.'],
    note: 'Pass Benefits: Includes the exact same perks as a PRO ticket.'
  }, {
    tier: 'Pro',
    price: '€790',
    intro: 'PERKS OF A PRO TICKET:',
    perks: ['Main Stage access for both days', 'Networking & Corporate Lounge access for both days', 'Access to The Draft live pitches: startup competition', 'All food and drinks during the event']
  }, {
    tier: 'VIP',
    price: '€2290',
    featured: true,
    intro: 'PERKS OF A PRO TICKET PLUS:',
    perks: ['Invitation to the VIP Dinner', 'Access to the VIP Lounge on both days', 'Access to private meeting rooms', 'VIP Welcome Bag']
  }];

  // "A summit full of opportunities", live photo cards (hotlinked like the rest of the kit)
  const opportunities = [{
    title: 'Build Meaningful Connections',
    photo: CDN + 'fgOqDRsDf4r3haBleHzcp5GSE.jpg',
    items: ['Network with right holders, brands, partners & investors', 'Curated meetings', 'Private meeting rooms']
  }, {
    title: 'Explore Strategic Insights & Future Trends',
    photo: CDN + 't4dVvEId1PV0qnMajtfRbF5rvi8.jpg',
    items: ['100 Speakers', '5 Future-oriented themes', 'Real-world case studies']
  }, {
    title: 'Business Opportunities',
    photo: CDN + 'grjj04CQv3NcrpZa86oFpvIHN0Q.jpg',
    items: ['Showcase your solution & product', 'Explore collaboration opportunities', 'Connect with global sports leaders']
  }];
  const oppStar = CDN + 'Qj6Z1idsH3DOGNFrJeriBx8fHZI.png';

  // Why Attend, persona-based personalization. `acc` maps to the index of the
  // matching category in the "Where vision meets opportunity" accordion.
  const personas = [{
    key: 'rights-holders',
    acc: 0,
    label: 'Right Holders',
    short: 'Teams · Leagues · Federations',
    titleWhite: 'Capital, partners & growth for',
    titleGold: 'rights holders.',
    intro: 'Meet the investors, brands and platforms actively looking to back the next era of teams, leagues and federations.',
    reasons: [['Meet capital that is deploying', 'Sit down with private equity, sovereign funds and family offices actively allocating to sport.'], ['Find your next sponsor', 'Curated introductions to brands and agencies looking for rights to activate against.'], ['Benchmark new revenue models', 'Direct-to-fan, data and media rights, see what is actually working from peers across the globe.']]
  }, {
    key: 'brands',
    acc: 1,
    label: 'Brands',
    short: 'Sponsors · Marketers',
    titleWhite: 'The right rights, and partners to activate them, ',
    titleGold: 'for brands.',
    intro: 'Find the properties, agencies and technology that turn sponsorship spend into measurable fan engagement.',
    reasons: [['Scout sponsorship inventory', 'Meet rights holders across leagues, teams and federations under one roof.'], ['Prove the ROI', 'Sessions and case studies on attribution, attention and what actually moves the needle.'], ['Build your activation stack', 'Connect with agencies, creators and platforms to bring campaigns to life.']]
  }, {
    key: 'investment',
    acc: 2,
    label: 'Investment & Advisory',
    short: 'Investors · Advisors',
    titleWhite: 'Deal flow and the next wave of value',
    titleGold: 'for investors.',
    intro: 'Source opportunities, pressure-test theses and meet the operators shaping valuations across the sports economy.',
    reasons: [['Source proprietary deal flow', 'Rights holders, startups and operators raising and open to capital.'], ['Sharpen your thesis', 'Five forward-looking themes on where value is migrating next in sport.'], ['Meet co-investors & LPs', 'The capital community of sport, gathered in one room.']]
  }, {
    key: 'agencies',
    acc: 3,
    label: 'Agencies',
    short: 'Creative · Media · Sponsorship',
    titleWhite: 'Win mandates and partners',
    titleGold: 'for agencies.',
    intro: 'Meet the brands and rights holders commissioning the partnerships and campaigns that move the industry.',
    reasons: [['Meet brands with budgets', 'Decision-makers looking for partners to design and run their programs.'], ['Land new rights-holder clients', 'Teams and leagues seeking commercial and creative expertise.'], ['Stay ahead of the brief', 'See what CMOs and rights holders will be asking for next.']]
  }, {
    key: 'tech',
    acc: 4,
    label: 'Startups',
    short: 'Tech · Data · Platforms',
    titleWhite: 'Buyers, partners and capital',
    titleGold: 'for tech.',
    intro: 'Get in front of the rights holders, brands and investors deciding which platforms define the next era of sport.',
    reasons: [['Reach real buyers', 'Leagues, teams and brands actively evaluating new platforms and data products.'], ['Pitch on the main stage', 'The Draft, compete with 200+ startups for visibility and capital.'], ['Find your investors', 'VCs and strategics scouting the next infrastructure of sport.']]
  }, {
    key: 'media',
    acc: 5,
    label: 'Media',
    short: 'Broadcast · Streaming · Content',
    titleWhite: 'Rights, audiences and the story',
    titleGold: 'for media.',
    intro: 'Connect with the rights holders, platforms and brands defining how sport gets distributed and told.',
    reasons: [['Secure the next rights', 'Meet leagues and federations rethinking distribution and direct-to-fan.'], ['Build models that hold', 'Sessions on margins, retention and winning the second screen.'], ['Partner on content', 'Brands, creators and platforms looking to co-create the story.']]
  }];

  // Home §5 "Be part of SportGen this May", solid-fill cards (Raise-style: square photo on top, CTA below)
  const homeFeatures = [{
    grid: ['assets/halftime-crowd.jpg', 'assets/closing-golden.jpg', 'assets/vip-frontrow.jpg', 'assets/closing-talk.jpg', 'assets/halftime-eiffel.jpg', 'assets/vip-ambiance.jpg', 'assets/vip-networking.jpg', 'assets/closing-crowd.jpg', 'assets/halftime-talk.jpg'],
    logo: 'assets/sgn-wordmark.png',
    title: '[SGN] Summit',
    body: 'A full week of sport, business and unforgettable moments across Paris.',
    cta: 'About [SGN]',
    href: '#/side-events'
  }, {
    photo: 'assets/photos/gala-handshake.png',
    title: 'The SportGen Gala',
    body: 'A private evening with speakers and industry leaders in Paris.',
    cta: 'About the VIP dinner',
    href: '#/vip-dinner'
  }, {
    photo: 'assets/sgn-investment-summit-concorde.jpg',
    logoOverlay: 'assets/brand/sgn-investment-summit-white.png',
    title: 'SGN Invest',
    body: 'Where the capital shaping the business of sport gets deployed.',
    cta: 'About [SGN] Invest',
    href: 'sis.html'
  }, {
    photo: CDN + 'Co52dENJq9zURuHVWsaT9wf0Vi4.jpg',
    title: 'Speakers',
    body: 'Join 100+ world-class voices redefining the business of sport.',
    cta: 'About the Line up',
    href: '#/speakers'
  }, {
    photo: 'assets/photos/the-draft-stage.jpg',
    title: 'The Draft',
    body: 'Where 200+ startups compete to pitch the future of sport.',
    cta: 'About the start up competition',
    href: '#/startup-competition'
  }];
  const tracks = [{
    name: 'Capital & Influence',
    img: CDN + 'BdvImhqqpS5xKMewIaIVQTRFy0.jpg',
    tagline: "Who's Really Running Sports Now",
    body: 'Sport has never attracted more capital, and capital has never demanded more in return. Institutional investors, private equity firms, sovereign funds, and a new generation of athletes are reshaping governance, strategy, and long-term value creation. The levers of power are shifting, the question is who is pulling them.',
    topics: [{
      q: 'Private Equity in Sport',
      a: 'How PE and institutional capital are reshaping ownership, governance, and the way clubs and leagues are run.'
    }, {
      q: 'Sovereign & State Investment',
      a: 'The geopolitics of sport and the new wave of state-backed funding redrawing the global map.'
    }, {
      q: 'Athletes as Investors',
      a: 'A new generation of athletes turning influence into equity, ownership stakes, and operating power.'
    }, {
      q: 'Valuations & Exits',
      a: "What franchises, leagues, and media rights are really worth, and who's buying at the top of the cycle."
    }]
  }, {
    name: 'The Attention Stack',
    img: CDN + 'F7FzrbBTjcQ6YqN7dzTW4ZBX24.jpg',
    tagline: 'Navigating Media, Technology, and What Actually Moves the Needle',
    body: 'AI, streaming, direct-to-fan platforms: the tools available to sport have never been more powerful or more overwhelming. Technology is reshaping every part of the media value chain, but not every innovation delivers. The real conversation is about what to invest in, what to ignore, and how to build for an audience with more choices than ever.',
    topics: [{
      q: 'AI in Production & Personalization',
      a: 'Where artificial intelligence genuinely moves the needle across production, personalization, and operations.'
    }, {
      q: 'Streaming & Media Rights',
      a: 'Building direct-to-fan and streaming models that actually hold an audience and a margin.'
    }, {
      q: 'Creators & the Second Screen',
      a: 'Capturing attention where fans really spend their time, beyond the broadcast window.'
    }, {
      q: 'Measuring What Matters',
      a: 'Cutting through the hype to the metrics that should drive investment decisions.'
    }]
  }, {
    name: "Women's Sport: Building the Future Now",
    img: CDN + 'kRXx3Wp2Vc6PrS52quVwaCChZU.jpg',
    tagline: 'Why Women\u2019s Sport Is the Play Nobody Can Afford to Miss',
    body: 'The window is open, but not forever. Audiences are growing. Media rights are still catching up. The commercial infrastructure around women\u2019s sport is still being built. Who builds it, and how fast, will define the next decade.',
    topics: [{
      q: 'Building the Commercial Infrastructure',
      a: 'Standing up the sponsorship, media, and operating models from the ground up.'
    }, {
      q: 'Media Rights & Visibility',
      a: 'Closing the gap between fast-growing audiences and the rights value that should follow.'
    }, {
      q: 'Investing Early',
      a: 'Why the next decade of returns is being decided by who moves now.'
    }, {
      q: 'Building Lasting Fandom',
      a: 'Turning momentum into durable, monetizable communities rather than a passing moment.'
    }]
  }, {
    name: 'From Visibility to Value',
    img: CDN + '6BGdavZd7RRphp5LkXDSCgZXds.jpg',
    tagline: 'How Sports Sponsorship is Being Redefined',
    body: 'The rules of partnership are being rewritten. Brands want measurable impact. Rights holders want long-term relevance. Creators want creative control. When everyone wants more from a deal, the old models start to crack, and the most interesting partnerships are being built on entirely new terms.',
    topics: [{
      q: 'From Logos to Measurable Impact',
      a: 'Moving partnerships from exposure and placement to proven, accountable ROI.'
    }, {
      q: 'Creator-Led Partnerships',
      a: 'What changes when creative control shifts to the talent and the audience they own.'
    }, {
      q: 'Long-Term Relevance',
      a: 'What rights holders owe partners beyond reach, and how relationships are kept alive.'
    }, {
      q: 'New Deal Structures',
      a: 'The models quietly replacing the traditional sponsorship playbook.'
    }]
  }, {
    name: 'Rewriting The Game',
    img: CDN + '5e1BhyCxqGtKrBP0BqthxARQ8.jpg',
    tagline: 'Leagues, Fans, and the Pressure to Evolve',
    body: 'New formats are finding audiences that traditional competitions struggle to retain. Emerging leagues are moving fast, while established sports face growing pressure to rethink their rules, media strategies, and what fans actually want in a fragmented digital world. Evolution is no longer optional.',
    topics: [{
      q: 'New Formats, New Audiences',
      a: 'How emerging competitions win the fans that incumbent formats struggle to keep.'
    }, {
      q: 'Reinventing the Fan Experience',
      a: 'Rethinking what fans actually want in a fragmented, on-demand world.'
    }, {
      q: 'Pressure on the Incumbents',
      a: 'Why established sports must rethink their rules, calendars, and media strategies.'
    }, {
      q: 'Speed as Strategy',
      a: 'Moving fast and experimenting when evolution is no longer optional.'
    }]
  }];
  const startupSteps = [{
    label: 'Applications Open',
    desc: 'Over 100 promising startups apply to compete',
    date: 'FEB 18TH',
    short: 'Feb 18',
    line: 271
  }, {
    label: 'Submissions Closed',
    desc: 'The application window shuts. No more entries after this date',
    date: 'APRIL 24TH',
    short: 'Apr 24',
    line: 199
  }, {
    label: 'Top 20 Selection',
    desc: 'Our expert jury shortlists the most promising ventures',
    date: 'MAY 1ST',
    short: 'May 1',
    line: 263
  }, {
    label: 'Finalists announced',
    desc: 'The 10 best startups are invited to pitch live',
    date: 'MAY 6TH',
    short: 'May 6',
    line: 154
  }, {
    label: 'Winner Announcement',
    desc: 'The future of sport unfolds at SportGen',
    date: 'MAY 28TH',
    short: 'May 28',
    line: 272
  }];

  // Startup Competition page (live assets, hotlinked)
  const startup = {
    heroBg: 'assets/startup-hero.png',
    cards: [{
      title: 'Meet your next  client',
      photo: CDN + 't4dVvEId1PV0qnMajtfRbF5rvi8.jpg',
      items: ['1,500+ sports industry leaders', 'Side events and private gatherings', 'Networking Lounge & App']
    }, {
      title: 'Secure international funding',
      photo: CDN + 'grjj04CQv3NcrpZa86oFpvIHN0Q.jpg',
      items: ['200+ active investors', 'Curated 1:1 investor meetings', 'Leading venture capital funds']
    }, {
      title: 'Get industry  visibility',
      photo: CDN + 'p5sFQKUigSzrEY5t0wLlOKzWcU.jpg',
      items: ['Apply to The Draft', 'Pitch on the Main Stage', 'Showcase your solution']
    }],
    activitiesBg: CDN + 'nJpxwFSp4i2lTdIZvNHirUBaU.jpg',
    activities: [{
      label: 'Meet your Next Customer',
      body: 'Exhibit your solution, engage with industry decision-makers, and turn visibility into new customer opportunities.'
    }, {
      label: 'Exhibition Booths',
      body: 'Showcase your solution in our Startup Area and meet decision-makers. Increase your visibility with an Official Partner package.',
      cta: 'Book a Call',
      href: '#/get-in-touch'
    }, {
      label: 'Apply to The Draft and Pitch on the Main Stage',
      body: 'If your project is among the most promising in sport tech, health, or wellness, secure your spot among the 10 finalists and get ready to gain unmatched industry visibility.',
      cta: 'Apply to The Draft',
      href: '#/get-in-touch'
    }, {
      label: 'Side Events',
      body: 'Join innovation and startup-focused side events to grow faster and smarter. Connect with industry professionals and meet your next clients.',
      cta: 'SGN Week',
      href: '#/side-events'
    }, {
      label: 'Investor Meetings',
      body: 'Meet international investors through scheduled meetings and dedicated time slots focused on fundraising discussions.'
    }],
    whereImgs: [CDN + 'bYVI6HO8cxnNKsF6MAd1FtWec.jpg', CDN + 'MDiTNGMBJZBZQcBsTMd047WQpUw.jpg'],
    sponsors: ['HZaR7L01XlCApAMTJDGF1DhqV18.png', 'sSilUxow0NqHJiOo0YcObWU3Y.png', 'x0SM7QgrWqKw8Ke26CNm2pxW88.png', 'GoGTAGqQoWm649gzHwtjIvBkg.png', 'sCJFTrXmUNlz0wH9CVvBT2B1g.png', 'k8LcAMwlh3iR4AQaLJiJhVcjBU.png'].map(f => CDN + f)
  };
  const startupWinners = [{
    rank: 2,
    name: 'Eóin Tuohy',
    role: 'Founder & CEO, Sport Impact Technologies',
    photo: 'assets/winners/eoin-tuohy.jpg',
    logo: 'assets/winners/sport-impact-logo.png'
  }, {
    rank: 1,
    name: 'Karim Fawaz',
    role: 'Founder, Playback',
    photo: 'assets/winners/karim-fawaz.jpg',
    logo: 'assets/winners/playback-logo.png'
  }, {
    rank: 3,
    name: 'Robin Champseix',
    role: 'CEO, Billy',
    photo: 'assets/winners/robin-champseix.jpg',
    logo: 'assets/winners/billy-logo.png'
  }];
  const startupJury = [{
    name: 'Pieter Lammens',
    role: 'Manager, PSG Labs',
    photo: 'assets/jury/pieter-lammens.jpg',
    logo: 'assets/jury/psg-labs-logo.png'
  }, {
    name: 'Kevin Savina',
    role: 'Principal Partner Lead, Media & Entertainment, AWS',
    photo: 'assets/jury/kevin-savina.jpg',
    logo: 'assets/jury/aws-logo.png'
  }, {
    name: 'Rohn Malhotra',
    role: 'Founder, SportsTechX',
    photo: 'assets/jury/rohn-malhotra.jpg',
    logo: 'assets/jury/sportstechx-logo.png',
    pos: 'center 22%'
  }, {
    name: 'BNP Paribas',
    logo: 'assets/jury/bnp-paribas-logo.png',
    pair: [{
      name: 'Islem Laid',
      role: 'Ambassadrice Sport BCEF Entreprise, BNP Paribas',
      photo: 'assets/jury/islem-laid.jpg'
    }, {
      name: 'Sébastien Moisan',
      role: 'Chargé d\u2019Affaires Entreprises Innovation, BNP Paribas',
      photo: 'assets/jury/sebastien-moisan.jpg'
    }]
  }];
  const startupFaq = [{
    q: 'Who can apply ?',
    a: 'To be eligible for The Draft, startups must have raised less than $5 million in total funding and have been operating for fewer than 4 years. Companies must operate in Sport Tech, Health, or Wellness.'
  }, {
    q: 'How are finalists selected ?',
    a: 'A panel of investors and industry leaders reviews all submissions. The Top 20 are selected by May 1st, with 10 finalists announced on May 6th to pitch live on the Main Stage.'
  }, {
    q: 'What are the key dates ?',
    a: 'Applications open Feb 18th, submissions close Apr 24th, Top 20 by May 1st, finalists May 6th, winner announced May 28th.'
  }, {
    q: 'Is there a fee ?',
    a: 'Applying to The Draft is free. Selected startups attend with a Startup ticket, which includes Main Stage access, the Networking Lounge and all food & drinks.'
  }, {
    q: 'What\u2019s at stake?',
    a: 'Exposure to 1,500+ sports industry leaders and 200+ active investors, a Main Stage pitch slot, and the chance to be named the SportGen Draft winner.'
  }];
  const interests = ['Technology', 'Women Sport', 'Investment', 'Advisory', 'Innovation', 'Partnerships', 'Fan Engagement', 'Sport'];

  // Agenda, all 4 stage/day tabs, extracted 1:1 from the live site's CMS collections
  // (Talks Main Stage + Talks Elysee Stage), speaker photos/roles joined from the Speakers collection.
  const agendaLive = {
    'main-27': [{
      time: "09:00 - 09:10",
      title: "Opening Speeches",
      guests: [{
        name: "Paul Perrin",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png"
      }, {
        name: "Aurélien Linÿer",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/IuCCHjO1TuytCBgo4vE8Qif668.png"
      }, {
        name: "Vincent-Baptiste Closon",
        role: "Global Director Partnerships, Events & Sponsorship",
        org: "BNP Paribas",
        photo: "https://framerusercontent.com/images/G0DgfGsNgiIDeGgtfs2SRlPq2is.png"
      }]
    }, {
      time: "09:10 - 09:40",
      title: "What the Olympic moment means for France",
      desc: "Legacy, investment, and the opportunity of hosting twice in six years",
      guests: [{
        name: "Amélie Oudéa-Castéra",
        role: "President",
        org: "French National Olympic Committee",
        photo: "https://framerusercontent.com/images/EIQBimfHqqBhiB2hYGc7NFJZaCw.png"
      }, {
        name: "Edgar Grospiron",
        role: "President",
        org: "OCOG French Alps 2030",
        photo: "https://framerusercontent.com/images/SWzegi8o5okeIp3xgI5OufypW4.png"
      }, {
        name: "Mathieu Besson",
        role: "Managing Director, France",
        org: "Parresia",
        photo: "https://framerusercontent.com/images/YGFzzoEXrpr2aqsVB92WVSskaU.png",
        mod: true
      }]
    }, {
      time: "10:00 - 10:20",
      title: "Playing to win, on and off the court",
      desc: "How athletes are changing the way deals get done",
      guests: [{
        name: "Caroline Garcia",
        role: "Co-Founder",
        org: "Tennis Insider Club",
        photo: "https://framerusercontent.com/images/oOu39W7dBxb3Cu4ngc3VXjJ18.png"
      }, {
        name: "Pedro Félix da Costa",
        role: "Chief Commercial Officer",
        org: "APEX",
        photo: "https://framerusercontent.com/images/pptQFejMtbINOhmt6NktRcf7VZI.png"
      }]
    }, {
      time: "10:20 - 10:50",
      title: "Format first",
      desc: "How emerging leagues are rebuilding the relationship with fans",
      guests: [{
        name: "Charlie Dewhurst",
        role: "Chief Commercial Officer",
        org: "SailGP",
        photo: "https://framerusercontent.com/images/kJMwAsEKurlQrgAXA0AFqOwqvSs.jpg"
      }, {
        name: "Baptiste Kern",
        role: "Chief Operating Officer",
        org: "UTS",
        photo: "https://framerusercontent.com/images/gPV26XCeBFiFoDKz4bXr3B0N1W4.png"
      }, {
        name: "Mariano Otero",
        role: "SVP, Business Development",
        org: "Fever",
        photo: "https://framerusercontent.com/images/YdMzGv4lQzIXAeobXaqukb69Ic.png"
      }, {
        name: "Paul Rossi",
        role: "CEO",
        org: "SportBusiness",
        photo: "https://framerusercontent.com/images/EA65kVDaLzKMrLeWLKKndjRsEA.jpg",
        mod: true
      }]
    }, {
      time: "10:50 - 11:10",
      title: "Scaling a global sport",
      desc: "Volleyball world’s growth story",
      guests: [{
        name: "Ugo Valensi",
        role: "CEO",
        org: "Volleyball World",
        photo: "https://framerusercontent.com/images/ppqSiw0yy54bFBHWNFHO8wkCn0c.jpeg"
      }, {
        name: "David Dellea",
        role: "Partner",
        org: "Altman Solon",
        photo: "https://framerusercontent.com/images/22lqhNpDCVAxaXxmdKQqjfzOIY.png",
        mod: true
      }]
    }, {
      time: "11:10 - 11:40",
      title: "Moving from proof of concept to real impact",
      desc: "What is actually working with AI in sport, and what isn't (yet)",
      guests: [{
        name: "Steve Carter",
        role: "CEO",
        org: "Bolt6",
        photo: "https://framerusercontent.com/images/oBs9Ew8nb7JQqrSkXkaxEvK0wAk.jpeg"
      }, {
        name: "Chris Hume",
        role: "Director",
        org: "Champion Data",
        photo: "https://framerusercontent.com/images/mWInzwhlffIHNRTtXjN2XfnH1g.jpg"
      }, {
        name: "Charles Fremont",
        role: "Senior Innovation Hub Manager",
        org: "UEFA",
        photo: "https://framerusercontent.com/images/57QrK0NlU2wid8StS4Vd8NAAMA.jpg"
      }, {
        name: "Paul Devlin",
        role: "Sub-Industry Leader",
        org: "Amazon Web Services",
        photo: "https://framerusercontent.com/images/jhxQig1VSxf41EfZdVDKMLmfo.png",
        mod: true
      }]
    }, {
      time: "11:40 - 12:00",
      title: "What's next for professional tennis?",
      desc: "ATP Tour CEO on strategy, opportunity and the long-term vision for the sport",
      guests: [{
        name: "Eno Polo",
        role: "CEO",
        org: "ATP Tour",
        photo: "https://framerusercontent.com/images/9XsFaQ5U2Y1j2GAnxBzSig6ER0.jpg"
      }, {
        name: "Francesca Tognoni",
        role: "Senior Brands & Sponsorship Manager",
        org: "Haier Europe",
        photo: "https://framerusercontent.com/images/6OJSIP04HRE50T4OFtczZbJQS9U.png"
      }, {
        name: "Aurélien Linÿer",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/IuCCHjO1TuytCBgo4vE8Qif668.png",
        mod: true
      }]
    }, {
      time: "12:00 - 12:30",
      title: "The Roland-Garros flywheel",
      desc: "How global ambition and local innovation feed each other",
      guests: [{
        name: "Jefferson Plentz",
        role: "CEO & Founder",
        org: "StarBro Sport Tech",
        photo: "https://framerusercontent.com/images/fwC3DkHHZZ5qhlVrvmEHTunqsJ4.png"
      }, {
        name: "Eero Kuusi",
        role: "CEO & Founder",
        org: "Zenniz",
        photo: "https://framerusercontent.com/images/zrGBADWPrfbdxCco50eXhfivvWA.jpg"
      }, {
        name: "Aymeric Labaste",
        role: "Head of International Development",
        org: "Roland-Garros",
        photo: "https://framerusercontent.com/images/hGtACndj3JcYH4Ow5IqRSnM1J8.jpg"
      }, {
        name: "Vincent Hillion",
        role: "",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/ulkBhMHzXZdTfvZvLLj4y7gToQ.png",
        mod: true
      }]
    }, {
      time: "12:30 - 12:50",
      title: "Fireside with David Coulthard",
      desc: "From the track to the boardroom",
      guests: [{
        name: "David Coulthard",
        role: "Company Director",
        org: "Velocity Experience",
        photo: "https://framerusercontent.com/images/8FFPADXXkrEbuOJLKq7wJAbmvo.webp"
      }, {
        name: "Paul Perrin",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png",
        mod: true
      }]
    }, {
      time: "12:50 - 13:10",
      title: "Touchdown Paris",
      desc: "Inside the NFL's European expansion: the strategy and the challenges",
      guests: [{
        name: "Brett Gosper",
        role: "Head of Europe & Asia-Pacific",
        org: "National Football League",
        photo: "https://framerusercontent.com/images/Pek3pM4e4UrWakS9WQRdf5uT0w.png"
      }, {
        name: "Benjamin Morel",
        role: "Founder & President",
        org: "M2C Sports Advisory",
        photo: "https://framerusercontent.com/images/aY2MoCYu0KUmuTjZYsIvlH3rAo.png",
        mod: true
      }]
    }, {
      time: "13:10 - 13:40",
      title: "European football’s next chapter",
      desc: "How European leagues are building for global relevance",
      guests: [{
        name: "Michele Ciccarese",
        role: "Marketing & Commercial Director",
        org: "Lega Serie A",
        photo: "https://framerusercontent.com/images/Zoc8ZkIgRaUqyaKLPxNmNeiC6o.png"
      }, {
        name: "Luca Baldanza",
        role: "Founding Partner",
        org: "Iris Sport Media",
        photo: "https://framerusercontent.com/images/q8utcKnFUXH5bqsYEgq1Gn09s.png"
      }, {
        name: "Gianluca Santaniello",
        role: "Strategy Director",
        org: "Olympique de Marseille",
        photo: "https://framerusercontent.com/images/hLrJm21H7lfENFhc2nXIkx9DUHo.png"
      }, {
        name: "Lorenzo Vitali",
        role: "Co-Sector Head Media, Sport",
        org: "DLA Piper",
        photo: "https://framerusercontent.com/images/dP6HMVCq5KZSnsmiJ1wmIFwng8.png"
      }, {
        name: "Mathias Kuhn",
        role: "Lawyer",
        org: "DLA Piper",
        photo: "https://framerusercontent.com/images/FqjietMGOpqg7e2yIVfRYiOLZ7k.png",
        mod: true
      }]
    }, {
      time: "13:40 - 14:00",
      title: "From coach to founder",
      desc: "Building stars, brands and leagues",
      guests: [{
        name: "Patrick Mouratoglou",
        role: "Founder",
        org: "UTS",
        photo: "https://framerusercontent.com/images/U2myLjMqe8qJVdTCmpTbwBphPw.jpg"
      }, {
        name: "Jules Stimpfling",
        role: "Co-Founder",
        org: "Le Crayon Groupe",
        photo: "https://framerusercontent.com/images/dQlJz7VHL99hd0OfOUrNlxCwfg.jpg",
        mod: true
      }]
    }, {
      time: "14:00 - 14:30",
      title: "Smart money in sport",
      desc: "VCs on the sectors, the deal flow and the honest investment thesis",
      guests: [{
        name: "Kushaan Ahuja",
        role: "Partner",
        org: "Will Ventures",
        photo: "https://framerusercontent.com/images/Ak1uO3FhCGapUbhnBihxUKzG8YM.webp"
      }, {
        name: "Arjun Kapur",
        role: "Vice President",
        org: "Left Lane Capital",
        photo: "https://framerusercontent.com/images/mEcHvHS8jqIDhs6t2oDDi5KMsU.jpg"
      }, {
        name: "Charlie Stebbings",
        role: "Head of Sport",
        org: "20VC",
        photo: "https://framerusercontent.com/images/yxpiucim8tjbGyOjvqVAjwdH4.jpg"
      }, {
        name: "Malcolm Lemmons",
        role: "Founder",
        org: "Vetted Sports",
        photo: "https://framerusercontent.com/images/uzI5otMpDM3bKzdpNGe9cO9V3lA.jpg",
        mod: true
      }]
    }, {
      time: "14:30 - 15:00",
      title: "Reinventing the future of sport",
      desc: "How technology, data and AI are transforming tennis",
      guests: [{
        name: "Teodora Ivanova-Limon",
        role: "Chief Business Officer",
        org: "WTA Ventures",
        photo: "https://framerusercontent.com/images/jafSqAyUG6QlnNpBsMDcJ5NdMk.png"
      }, {
        name: "Bob Markham",
        role: "President, EMEA",
        org: "Accenture Song",
        photo: "https://framerusercontent.com/images/pTypHmfhSQquS9hs9uzGdWgTTDY.png"
      }, {
        name: "Christopher Carroll",
        role: "Managing Partner",
        org: "Clubhouse Ventures",
        photo: "https://framerusercontent.com/images/lM8P1YiQOVCPxBSg4YY1uLA077A.png",
        mod: true
      }]
    }, {
      time: "15:00 - 15:30",
      title: "Champion meets challenger",
      desc: "Lessons on sponsorship and brand evolution across the maturity curve",
      guests: [{
        name: "Richard Heaselgrave",
        role: "Chief Revenue Officer",
        org: "PSG",
        photo: "https://framerusercontent.com/images/4Bd8adKnpoUpgrn3B0Es5BvNGM.jpg"
      }, {
        name: "Raquel Braun",
        role: "Chief Commercial Officer",
        org: "League One Volleyball",
        photo: "https://framerusercontent.com/images/5Ij0fyGOgmzd9wk2cD5C3DYLFE.png"
      }, {
        name: "Charlie Dewhurst",
        role: "Chief Commercial Officer",
        org: "SailGP",
        photo: "https://framerusercontent.com/images/kJMwAsEKurlQrgAXA0AFqOwqvSs.jpg"
      }, {
        name: "Matthew Glendinning",
        role: "European Sponsorship Editor",
        org: "SportBusiness Group",
        photo: "https://framerusercontent.com/images/dEYTugwd8WstQWhpQO3cBOnD4g.png",
        mod: true
      }]
    }, {
      time: "15:30 - 15:50",
      title: "France as Europe's sports investment hub",
      desc: "Bpifrance's vision for the next decade",
      guests: [{
        name: "Arnaud Caudoux",
        role: "Deputy CEO",
        org: "Bpifrance",
        photo: "https://framerusercontent.com/images/Zi6YmhlwG0FvUXZsEawbfa1BQws.png"
      }, {
        name: "Sofiane El Majdoubi",
        role: "News Editor, Economy & Sports Business",
        org: "Linkedin",
        photo: "https://framerusercontent.com/images/I8z2Wn0Qq9QyydY95dS5FEOEL7s.png",
        mod: true
      }]
    }, {
      time: "15:50 - 16:20",
      title: "The women's sport investment window",
      desc: "How investors, brands and rights holders are pricing the new economics of women's sport",
      guests: [{
        name: "Bex Smith",
        role: "CEO & Founder",
        org: "Crux Football",
        photo: "https://framerusercontent.com/images/cSUoLhNbaT5EgvvrrJdgyz5ss4.jpg"
      }, {
        name: "Monica Biagiotti",
        role: "EVP, Global Consumer Mrktg & Sponsorships",
        org: "Mastercard",
        photo: "https://framerusercontent.com/images/aAIUB9U0FIxO8pozAKsLtFEk.jpg"
      }, {
        name: "Kerstin Lutz",
        role: "CEO",
        org: "Billie Jean King Cup",
        photo: "https://framerusercontent.com/images/MCyQPT581a3eq1hMmXTuQ2sDxVw.png"
      }, {
        name: "Adriana Crovetto",
        role: "Investor",
        org: "Gamma Waves Partners",
        photo: "https://framerusercontent.com/images/I8mhyySULZGm6fXG4capFil7qaA.jpg",
        mod: true
      }]
    }, {
      time: "16:20 - 16:50",
      title: "The attention game",
      desc: "How to win the next generation of fans through original content and storytelling",
      guests: [{
        name: "Victorien Tixier",
        role: "CEO & Founder",
        org: "Scoreplay",
        photo: "https://framerusercontent.com/images/ghLemAq0cDaYEkDESEH9aY18Ec.png"
      }, {
        name: "Kahlen Macaulay",
        role: "Head of Sports & Media Partnerships",
        org: "Snap Inc.",
        photo: "https://framerusercontent.com/images/jg0QsUFlvdSOAdh1eGjgSiVHg.png"
      }, {
        name: "Cyprien Castanedo",
        role: "Head of Project Platform & Innovation",
        org: "LFP Media",
        photo: null
      }, {
        name: "Benjamin Abitbol",
        role: "Board Member",
        org: "Unibet Rose Rockets",
        photo: "https://framerusercontent.com/images/Fz4ZjKFNtXipioCSodsZpgLKYmQ.png",
        mod: true
      }]
    }, {
      time: "16:50 - 17:20",
      title: "Beyond the patch",
      desc: "Building global brands through sport & technology",
      guests: [{
        name: "Brandon James",
        role: "SVP, Strategic Growth & Deputy General Counsel",
        org: "San Antonio Spurs",
        photo: "https://framerusercontent.com/images/haSwDsC3jNW9b77bGMgo55o3D4.png"
      }, {
        name: "Ariel Wengroff",
        role: "EVP, Global Marketing & Communications",
        org: "Ledger",
        photo: "https://framerusercontent.com/images/XrabIKsJP1I5VnDlhaKfCbV0ess.png"
      }, {
        name: "Paul Perrin",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png",
        mod: true
      }]
    }],
    'main-28': [{
      time: "09:00 - 09:30",
      title: "The rise of outdoor sports",
      desc: "The growth story, brand opportunity and authenticity challenge",
      guests: [{
        name: "Florian Lamblin",
        role: "CEO",
        org: "UTMB International",
        photo: "https://framerusercontent.com/images/dCaPR9qH5sXnNOVCEhrbJ9pxzrY.jpeg"
      }, {
        name: "Nicolas Burger",
        role: "CEO",
        org: "Alltricks",
        photo: "https://framerusercontent.com/images/bmCFsSdESmMfodkKOJPyRvhDUL4.png"
      }, {
        name: "Diane Marie-Hardy",
        role: "Account Strategist",
        org: "Google",
        photo: "https://framerusercontent.com/images/80xZl97NuEAGxJGRDcGjnDvpUE.png",
        mod: true
      }]
    }, {
      time: "09:30 - 10:00",
      title: "The future of sports broadcasting",
      desc: "New screens, new stories, new rules",
      guests: [{
        name: "Laurent-Eric Le Lay",
        role: "Sports Director",
        org: "France Télévisions",
        photo: "https://framerusercontent.com/images/jcrXXVghu7vXURhrmXaOWy1coc.webp"
      }, {
        name: "Jérôme Parmentier",
        role: "Vice President, Media Rights &\nContent Partnerships",
        org: "International Olympic Committee",
        photo: "https://framerusercontent.com/images/K3K9uV0jbgEcF2adMHbmVrRj8.png"
      }, {
        name: "Sunil Patel",
        role: "CEO ",
        org: "Whisper Group",
        photo: "https://framerusercontent.com/images/mqKNKc4P6pE46imawF9dGu0Oh8.jpg"
      }, {
        name: "Mathieu Besson",
        role: "Managing Director, France",
        org: "Parresia",
        photo: "https://framerusercontent.com/images/YGFzzoEXrpr2aqsVB92WVSskaU.png",
        mod: true
      }]
    }, {
      time: "10:00 - 10:20",
      title: "Structuring global motorsport",
      desc: "Governance and growth",
      guests: [{
        name: "Valerio Iachizzi",
        role: "Secretary General for Sport",
        org: "FIA",
        photo: "https://framerusercontent.com/images/GWZNWQOS1CpXY6v1v99AVhcpQys.png"
      }, {
        name: "Samuel Tamba",
        role: "Founder & CEO",
        org: "AxeOne",
        photo: "https://framerusercontent.com/images/4Wa0dEkyzt8Fhv8AhlVR3eRykA.png",
        mod: true
      }]
    }, {
      time: "10:20 - 10:40",
      title: "El Millonario",
      desc: "The blueprint of a south american giant",
      guests: [{
        name: "David Trezeguet",
        role: "Euro 2000 Winner",
        org: "ex-Footballer",
        photo: "https://framerusercontent.com/images/h3h0uiAzr7dhms3AEifc3cgOI.png"
      }, {
        name: "Matias Patanian",
        role: "Former Vice President",
        org: "River Plate",
        photo: "https://framerusercontent.com/images/uCYoiXTFZwFqdMkU2AGgVSWtcxQ.png"
      }, {
        name: "Jules Derrien",
        role: "Strategic Partnerships Project Manager",
        org: "BNP Paribas",
        photo: "https://framerusercontent.com/images/014lrZe7Mc11a7vZ4cH0Gsx0uX8.png",
        mod: true
      }]
    }, {
      time: "10:40 - 11:00",
      title: "The new business of sport hospitality",
      desc: "From premium experiences to talent pipelines",
      guests: [{
        name: "Matthew Williams",
        role: "Program Manager, Sports",
        org: "Les Roches",
        photo: "https://framerusercontent.com/images/xogkKvJplFY9aIiVdEyA0NdU.jpg"
      }, {
        name: "Paul Rossi",
        role: "CEO",
        org: "SportBusiness",
        photo: "https://framerusercontent.com/images/EA65kVDaLzKMrLeWLKKndjRsEA.jpg",
        mod: true
      }]
    }, {
      time: "11:00 - 12:00",
      title: "The Draft",
      desc: "Startup competition final",
      guests: [{
        name: "Kevin Savina",
        role: "Principal Partner Lead, MEGS",
        org: "Amazon Web Services",
        photo: "https://framerusercontent.com/images/t4ubpfhNDKEMKMG4toxmmyGKg.png"
      }, {
        name: "Pieter Lammens",
        role: "Manager",
        org: "PSG Labs",
        photo: "https://framerusercontent.com/images/yB9IKQ6OykIkc9vhYnaRPDc8FZI.jpg"
      }, {
        name: "Rohn Malhotra",
        role: "Founder",
        org: "SportsTechX",
        photo: "https://framerusercontent.com/images/08zclNSUpg7XYqHOucwfnyrPk.png"
      }, {
        name: "Islem Laid",
        role: "BCEF Entreprise Sport Ambassador",
        org: "BNP Paribas",
        photo: "https://framerusercontent.com/images/ng2zpbRZPbD6FIvI0oGi1t24pZA.png"
      }]
    }, {
      time: "12:00 - 12:20",
      title: "Fireside with Marc Lasry",
      guests: [{
        name: "Marc Lasry",
        role: "Co-Founder, Chairman and CEO",
        org: "Avenue Capital",
        photo: "https://framerusercontent.com/images/cYNJZ7PeuRme6ygWI2V7HJT3fU.png"
      }, {
        name: "Aurélien Linÿer",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/IuCCHjO1TuytCBgo4vE8Qif668.png",
        mod: true
      }]
    }, {
      time: "12:20 - 12:50",
      title: "Building a brand–athlete partnership",
      desc: "How to structure, activate and measure deals where everyone wins",
      guests: [{
        name: "Dominic Thiem",
        role: "US Open Winner",
        org: "Entrepreneur",
        photo: "https://framerusercontent.com/images/FZRS6IAVUKCc3QsPrmDkNl0o8.jpeg"
      }, {
        name: "Dominik Beier",
        role: "Chief Commercial Officer",
        org: "Bitpanda",
        photo: "https://framerusercontent.com/images/LHDDn1bOuMqzNbKgTwG9bbs.jpg"
      }, {
        name: "Christopher Carroll",
        role: "Managing Partner",
        org: "Clubhouse Ventures",
        photo: "https://framerusercontent.com/images/lM8P1YiQOVCPxBSg4YY1uLA077A.png",
        mod: true
      }]
    }, {
      time: "12:50 - 13:20",
      title: "Private capital in sport",
      desc: "What value creation really means, and where the market goes next",
      guests: [{
        name: "Adnan Khalef",
        role: "Managing Director",
        org: "The Carlyle Group",
        photo: "https://framerusercontent.com/images/NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg"
      }, {
        name: "Mofses Kechichian",
        role: "TRAIL Capital",
        org: "Managing Director ",
        photo: "https://framerusercontent.com/images/OlxkarHVwcGX5MzaAMwhzbH8RmE.png"
      }, {
        name: "Paolo Della Rovere",
        role: "Morgan Stanley",
        org: "Managing Director ",
        photo: "https://framerusercontent.com/images/pdvLJbsdJnsLkLnZcQRwHa8edfM.png"
      }, {
        name: "Samuel Agini",
        role: "Sports Business Correspondent",
        org: "Financial Times",
        photo: "https://framerusercontent.com/images/Q1N9eWUQnwQsfjufm0ybIhlmnY.png",
        mod: true
      }]
    }, {
      time: "13:20 - 13:40",
      title: "New horizons for global cricket",
      desc: "The future of the world's second most watched sport",
      guests: [{
        name: "Sanjog Gupta",
        role: "CEO",
        org: "International Cricket Council",
        photo: "https://framerusercontent.com/images/KBCeAisvKUDV6rggLYayhnyVQJw.png"
      }, {
        name: "Hanu Trivedi",
        role: "",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/nmpf0P3riObVc6WdQBJ5r4YAE4w.png",
        mod: true
      }]
    }, {
      time: "13:40 - 14:00",
      title: "The blind spot of Private Equity",
      desc: "Tackling the mid-market in European sports",
      guests: [{
        name: "António Caçorino",
        role: "CEO",
        org: "APEX",
        photo: "https://framerusercontent.com/images/xV2GmsqRh00j1SfbvgUG9AM2Lsk.jpg"
      }, {
        name: "Stéphane Bénichou",
        role: "CEO",
        org: "InTheBoardroom",
        photo: "https://framerusercontent.com/images/awVro1YhuwJ9Ek1KB0dv18m2xs.jpeg",
        mod: true
      }]
    }, {
      time: "14:00 - 14:30",
      title: "Winning with AI",
      desc: "How IBM is redefining the sports experience",
      guests: [{
        name: "Kameryn Stanhouse",
        role: "Vice President, Global Sports & Entertainment Partnerships",
        org: "IBM",
        photo: "https://framerusercontent.com/images/26ZoG4VEcUOYVzvhkzjgbZHZY.jpg"
      }, {
        name: "Alessandro Stornelli",
        role: "Fan Development Product Manager",
        org: "Scuderia Ferrari",
        photo: "https://framerusercontent.com/images/KG9MYn3ErMk5D85tMEj94AqEkw.png"
      }, {
        name: "Paul Perrin",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png",
        mod: true
      }]
    }, {
      time: "14:30 - 15:00",
      title: "Meet the challenger",
      desc: "The next generation of players shaping sports finance",
      guests: [{
        name: "Kyang Yung",
        role: "Chief Investment Officer",
        org: "Gamma Waves Partners",
        photo: "https://framerusercontent.com/images/vQlgyWWl1GYwqMFikNA1Zn6kQ0.jpg"
      }, {
        name: "Mark Wyatt",
        role: "Managing Director",
        org: "Alvarez & Marsal",
        photo: "https://framerusercontent.com/images/VAovWjs6XW5T844GcYQEAvoXDgQ.jpg"
      }, {
        name: "Danny Menken",
        role: "Co-Founder & General Partner",
        org: "Athvance Capital",
        photo: "https://framerusercontent.com/images/h28fsVQ9NByiRnShu8MozaY9eM.png"
      }]
    }, {
      time: "15:00 - 15:30",
      title: "Accelerating progress",
      desc: "Women driving the future of motorsport",
      guests: [{
        name: "Burcu Çetinkaya",
        role: "Chair Women in Motorsport Commission",
        org: "FIA",
        photo: "https://framerusercontent.com/images/lEv8ZTFyaFMORtwezXBxpv3F1qk.png"
      }, {
        name: "Doriane Pin",
        role: "Professional Driver",
        org: "Mercedes F1 Team",
        photo: "https://framerusercontent.com/images/6PIGO4V0mt1VVZpcIrWdgI1gCk.png"
      }, {
        name: "Lisa Billard",
        role: "F1 Academy Driver",
        org: "Gatorade",
        photo: "https://framerusercontent.com/images/eGo5kWQBOx9lE9q1dffdG07Bias.png"
      }, {
        name: "Samuel Tamba",
        role: "Founder & CEO",
        org: "AxeOne",
        photo: "https://framerusercontent.com/images/4Wa0dEkyzt8Fhv8AhlVR3eRykA.png",
        mod: true
      }]
    }, {
      time: "15:30 - 16:00",
      title: "The athlete enterprise, a new era of ownership",
      guests: [{
        name: "Jamie Horowitz",
        role: "CEO & Co-Founder",
        org: "Omaha Productions",
        photo: "https://framerusercontent.com/images/UU8iqJYYYS3sBqUFjd5G3biptBI.png"
      }, {
        name: "Josh Pyatt",
        role: "Partner",
        org: "WTSL",
        photo: "https://framerusercontent.com/images/IXlNPPR7KsOukybMMhonI2BxwU.jpg"
      }, {
        name: "Michael Meltzer",
        role: "Board Member",
        org: "ScorePlay",
        photo: "https://framerusercontent.com/images/5qbsXavPP34mqJKWdyvqzRWACE.png",
        mod: true
      }]
    }, {
      time: "16:00 - 16:20",
      title: "From Paris to the world, a global ambition",
      desc: "Inside PSG’s commercial strategy and brand evolution",
      guests: [{
        name: "Richard Heaselgrave",
        role: "Chief Revenue Officer",
        org: "PSG",
        photo: "https://framerusercontent.com/images/4Bd8adKnpoUpgrn3B0Es5BvNGM.jpg"
      }, {
        name: "Paul Perrin",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png",
        mod: true
      }]
    }, {
      time: "16:20 - 16:50",
      title: "Signal shift",
      desc: "How rights holders and digital platforms are co-creating a new sports media model",
      guests: [{
        name: "Zack Weiner",
        role: "Co-Founder",
        org: "Overtime",
        photo: "https://framerusercontent.com/images/pO7mbetJjwEnUWLbs6qFXnk.png"
      }, {
        name: "Kinda Ibrahim",
        role: "General Manager Operations Content, EMEA",
        org: "TikTok",
        photo: "https://framerusercontent.com/images/u3PIYEl1SuUbk8SZXhCP4897mI.png"
      }, {
        name: "Andrew Walker",
        role: "SVP, Brand & Marketing",
        org: "ATP Tour",
        photo: "https://framerusercontent.com/images/Cnn1M0Jj4wXicKv41B2U8eHE4wc.png"
      }, {
        name: "Dan Frommer",
        role: "The New Consumer",
        org: "Founder & Editor in Chief",
        photo: "https://framerusercontent.com/images/ZE8UXQ4GcpzPXcVBaQwDhyswU.png",
        mod: true
      }]
    }, {
      time: "16:50 - 17:10",
      title: "2026 and beyond",
      desc: "What's next for FIFA and the Beautiful Game",
      guests: [{
        name: "Romy Gai",
        role: "Chief Business Officer",
        org: "FIFA",
        photo: "https://framerusercontent.com/images/Tn2BKZ9BUwgeXkQxOwhAHwFjopQ.png"
      }, {
        name: "Aurélien Linÿer",
        role: "Co-Founder",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/IuCCHjO1TuytCBgo4vE8Qif668.png",
        mod: true
      }]
    }],
    'elysee-27': [{
      time: "10:00 - 10:30",
      title: "A monk’s guide to building AI for sports fans",
      guests: [{
        name: "Walter Gjergja",
        role: "Co-Founder",
        org: "Zing Coach",
        photo: "https://framerusercontent.com/images/e6WwOoEqjpCpGyUgosDmytT3yg.png"
      }]
    }, {
      time: "10:45 - 11:30",
      title: "Engineering the transition",
      desc: "Motorsport and the future of energy systems",
      guests: [{
        name: "Thomas Chevaucher",
        role: "Technical Engineering Director",
        org: "FIA",
        photo: "https://framerusercontent.com/images/XznIacfGjnb1esWYVtsuOKvsxg.png"
      }, {
        name: "Antoine Magnan",
        role: "Strategic Advisor",
        org: "Hyundai Motor Group",
        photo: "https://framerusercontent.com/images/NvDrJ8bzh3UnRlrw1UwROODUK1w.png"
      }, {
        name: "Thomas Fritsch",
        role: "Motorsport Technical Manager",
        org: "TotalEnergies",
        photo: "https://framerusercontent.com/images/HwYB5YQryMOUl4fJ7A8eboVrco.jpg"
      }, {
        name: "Anthony Drevet",
        role: "",
        org: "Journalist",
        photo: "https://framerusercontent.com/images/Rpu2b4IePE2UbmF5Xnkx8Qk8sk.png",
        mod: true
      }]
    }, {
      time: "11:30 - 12:00",
      title: "From fragmented club data to a unified fan strategy",
      desc: "How the Pro League and Arenametrix built a shared fan data foundation across 14 clubs",
      guests: [{
        name: "Ludovic Bordes",
        role: "CEO & Founder",
        org: "Arenametrix",
        photo: "https://framerusercontent.com/images/YADisWu5d2ePjZu5WYkDVCldg.png"
      }, {
        name: "Tim Vlaeminck",
        role: "Key Account Manager",
        org: "Pro League",
        photo: "https://framerusercontent.com/images/EtJE8zy1vR0wsbMBveECM0ebo1A.png"
      }, {
        name: "Léo Weisse",
        role: "",
        org: "",
        photo: null,
        mod: true
      }]
    }, {
      time: "12:00 - 12:30",
      title: "What women’s football needs next in digital, data and AI",
      guests: [{
        name: "Lucy Mills",
        role: "Founder",
        org: "Ready Sport Global",
        photo: "https://framerusercontent.com/images/eZEY2a2gygCpktH5dQNqhW20A.png"
      }, {
        name: "Stefan Lavén",
        role: "Founder",
        org: "Data Talks",
        photo: "https://framerusercontent.com/images/EANl9dyv7EACSc2huQO4In2r0.png"
      }]
    }, {
      time: "14:00 - 14:30",
      title: "IEI Sport Tech Delegation",
      guests: [{
        name: "Ran Keiny",
        role: "Head of the Economic and Trade Mission to France",
        org: "Embassy of Israel in Paris",
        photo: "https://framerusercontent.com/images/CqlmyYhWj7X4NWNlrwW6WQN1hPk.png"
      }, {
        name: "Omri Lifschitz",
        role: "European Sales Executive Manager",
        org: "PLAY LEAP",
        photo: "https://framerusercontent.com/images/mz3S7ml1MVznXjuwsnGHg5XM.png"
      }]
    }, {
      time: "14:30 - 15:30",
      title: "ATP x LALIGA MBA Showcase",
      desc: "Preparing star athletes for life after professional sport",
      guests: [{
        name: "João Sousa",
        role: "4x ATP Champion",
        org: "Former ATP Tennis Player",
        photo: "https://framerusercontent.com/images/sNFOiJLRl9naPKBc21PZ72VleVo.png"
      }, {
        name: "Roberto Jimenez Gago",
        role: "Player Relations",
        org: "LaLiga",
        photo: "https://framerusercontent.com/images/MieViKd9KUvvG0fJJZPkZEaU.png"
      }, {
        name: "Juanjo Martin",
        role: "Player Relations Senior Manager",
        org: "ATP Tour",
        photo: "https://framerusercontent.com/images/KvdLUlCLsXEbQVXVIaU1bHXKq0.jpg"
      }, {
        name: "Jose Moya Gomez",
        role: "Director",
        org: "LaLiga Business School ",
        photo: "https://framerusercontent.com/images/nbUdcYk4v8coyCdiy8bYZqB4VJA.png"
      }]
    }, {
      time: "15:30 - 16:00",
      title: "Ticketing & Revenue Management",
      desc: "Insights from PSG & Angers SCO",
      guests: [{
        name: "Thibault Jaillet Lébé",
        role: "Head of Revenue Strategy & Business Intelligence",
        org: "Paris Saint-Germain",
        photo: "https://framerusercontent.com/images/hFJ9j7d1BHTxRx9APvPf68jg.png"
      }, {
        name: "Gaspard Le Roux",
        role: "Head of Ticketing & CRM",
        org: "Angers SCO",
        photo: "https://framerusercontent.com/images/W3fQtciSYBVNOdy2Q8da88Hy0JM.png"
      }, {
        name: "Baptiste Jourdan",
        role: "Chief Revenue Officer",
        org: "EVENTORI",
        photo: "https://framerusercontent.com/images/i3bCSGwMUQh081OjPCDx2DbF5zc.png"
      }, {
        name: "Tom Petit Vallois",
        role: "",
        org: "SPORT[GEN] Summit",
        photo: "https://framerusercontent.com/images/9HIJG4jG8g3RYZnocxnLCoq6Hs.png",
        mod: true
      }]
    }],
    'elysee-28': [{
      time: "10:00 - 10:30",
      title: "New frontiers for professional football",
      desc: "What exactly does digital transformation mean for football clubs?",
      guests: [{
        name: "Timm Jager",
        role: "CEO",
        org: "Eintracht Tech",
        photo: "https://framerusercontent.com/images/AVYF03JtRzSxdynq5DlEV0dX8zs.png"
      }, {
        name: "Sudarshan Gopaladesikan",
        role: "Technical Director",
        org: "Newcastle United",
        photo: "https://framerusercontent.com/images/7pimV4YECJqFXPcMxuD2uvTVjYU.png"
      }, {
        name: "Par Helgosson",
        role: "Head of PSG Labs",
        org: "Paris Saint-Germain",
        photo: "https://framerusercontent.com/images/F3aad9HKhqwWV13yeiztdXHQQ.png"
      }, {
        name: "Mark Hartmann",
        role: "Tech Entrepreneur",
        org: "Beyond the Athletes",
        photo: "https://framerusercontent.com/images/xK6N7cbwxQaDbixbMda1RZHjU.jpeg",
        mod: true
      }]
    }, {
      time: "10:30 - 11:00",
      title: "Building by the Lake",
      desc: "A look behind the innovative partnership between Como 1907 and The Players Fund",
      guests: [{
        name: "Andy Marston",
        role: "Head of Corporate Venture",
        org: "The Players Fund",
        photo: "https://framerusercontent.com/images/I6KcGTgu6gU0qfcBJKNGF95zNPI.png"
      }, {
        name: "Giuseppe Ribaudo",
        role: "Strategic Revenues Lead",
        org: "Como 1907",
        photo: "https://framerusercontent.com/images/7AtD0YroQ1s7JflvlZo8j7LLpHM.png"
      }, {
        name: "Giovanni Camisasca",
        role: "CEO & Founder",
        org: "Collecto",
        photo: "https://framerusercontent.com/images/6yHKBjnoxAakh5QcMsi1O9bAY.png"
      }, {
        name: "Olivier Guiol",
        role: "Director",
        org: "Nova Consulting",
        photo: "https://framerusercontent.com/images/drkpWKN8BRjykEh8XKoYTGNGaZ4.png",
        mod: true
      }]
    }, {
      time: "11:00 - 11:30",
      title: "Brand building in women's football",
      desc: "A masterclass by The Women's Cup and Chicago Stars FC",
      guests: [{
        name: "John P Reynal",
        role: "CEO",
        org: "The Women's Cup",
        photo: "https://framerusercontent.com/images/b2JZeYFh2mZcZQlL77dT31cBHkk.jpeg"
      }, {
        name: "Richard Feuz",
        role: "General Manager",
        org: "Chicago Stars FC",
        photo: "https://framerusercontent.com/images/UIpPiJ6MuRNXepgFqlhzAdsj9c.jpg"
      }, {
        name: "Myles Begley",
        role: "",
        org: "Lawyer",
        photo: "https://framerusercontent.com/images/ZhSoOMK3whJQIYrosXcqzu8w.png",
        mod: true
      }]
    }, {
      time: "11:30 - 11:55",
      title: "Ceremonies in global sports competitions",
      desc: "Meaning, impact and legacy",
      guests: [{
        name: "Roshan Soomarchun",
        role: "CEO & Founder",
        org: "LEAP Creative Studio",
        photo: "https://framerusercontent.com/images/OHpkQByvRYHHUqZ0XtorgFy9M.png"
      }, {
        name: "Laurent Boillot",
        role: "Production Director & Senior Account Manager",
        org: "PRG",
        photo: "https://framerusercontent.com/images/sFJGlK6NfoNpamS2H0VyvDXfM.png"
      }]
    }, {
      time: "12:00 - 12:30",
      title: "IFAF PLAY Media launch",
      desc: "Flag football, data and the start-up IF",
      guests: [{
        name: "Pierre Trochet",
        role: "President",
        org: "IFAF",
        photo: "https://framerusercontent.com/images/7J21ZapnjcTFwvMlbvdFFvS9n0I.png"
      }, {
        name: "Peter Anderson",
        role: "Journalist",
        org: "Bein Sports",
        photo: "https://framerusercontent.com/images/uu2QdsBY5TtD51CLsso4Eo9jrc.png",
        mod: true
      }]
    }, {
      time: "14:00 - 14:30",
      title: "Excellence and boldness",
      desc: "How sports contribute to France's attractiveness",
      guests: [{
        name: "Adam Oubuih",
        role: "CEO",
        org: "Atout France",
        photo: "https://framerusercontent.com/images/GRz3VzXtWr6LZ4GfkibNfDmuQ.png"
      }, {
        name: "Arnaud Burlin",
        role: "CEO",
        org: "Viparis",
        photo: "https://framerusercontent.com/images/kCakZDJZYduB1EcGYwcbH2btew.png"
      }, {
        name: "Sophie Lorant",
        role: "President",
        org: "France Sport Expertise",
        photo: "https://framerusercontent.com/images/5LFQmZrNTMrQhoWy7AoP2qzbSQ.png",
        mod: true
      }]
    }, {
      time: "14:30 - 14:50",
      title: "Operating scalability & resilience",
      desc: "Delivering modern and mega-events accros multiple venues, cities & stakeholders",
      guests: [{
        name: "Ingo Rehnert",
        role: "Executive Board Member",
        org: "PRG",
        photo: "https://framerusercontent.com/images/mtaNeEsGV8buGMBv7nCRE2rv7p4.png"
      }, {
        name: "Christophe Veau-Cahon",
        role: "President",
        org: "GL Events Audiovisual & Power",
        photo: "https://framerusercontent.com/images/l2bWr71KUWVsTdj4oWNq6Gkek.png"
      }]
    }]
  };
  const socials = {
    linkedin: 'https://www.linkedin.com/company/sportgen-summit/',
    instagram: 'https://www.instagram.com/sportgensummit/',
    x: 'https://x.com/SportGenSummit'
  };
  window.SGData = {
    heroVideo,
    foundingLogo: CDN + 'c2mRXIJQpZi8ck3KGrvcjObcIoE.png',
    speakersHome,
    speakersAll,
    reelSpeakers,
    weeklyReel,
    reels,
    marquee,
    walls,
    partnerTiers,
    stats,
    tickets,
    socials,
    snapshotStats,
    snapshotAttendees,
    snapshotPdf,
    opportunities,
    oppStar,
    personas,
    homeFeatures,
    tracks,
    startupSteps,
    startupWinners,
    startupJury,
    startupFaq,
    startup,
    interests,
    agendaLive
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/legal.js
try { (() => {
/* SPORT[GEN], legal page content, extracted 1:1 from the live site export */
window.SGLegal = {
  "terms": {
    "title": "Terms & conditions",
    "items": [["p", "Effective Date: [ 01/08/2025]Last Updated: [ 01/11/2025]"], ["h2", "1. Purpose"], ["p", "The purpose of these General Terms and Conditions of Sale (“TCS”) is to define the conditions under which New Gen Events SAS (the “Organiser”) offers tickets for sale for its events, including SportGen Summit and any other events organised by the company."], ["p", "Hereafter, the term “Event” shall refer to any event organised by the Organiser and subject to these TCS."], ["p", "These TCS apply to all attendees (“you”, “your”, or the “Attendee”) participating in an Event organised by New Gen Events SAS.By registering for an Event, you agree that you have read, understood, and accepted these Terms and that you are legally bound by them.If you do not agree to these Terms, please do not register, attend, or participate in the Event."], ["p", "If you are registering on behalf of another person, it is your responsibility to ensure that they are aware of and accept these Terms."], ["p", "These Terms incorporate by reference our Privacy Policy, which explains how personal information is collected, used, shared, and processed in connection with the Event."], ["p", "These Terms are available at all times on the Event website (www.sportgen-summit.com) and may be provided upon request."], ["p", "The Organiser reserves the right to amend these Terms at any time, it being understood that the version applicable to any dispute will be the one effective at the date of ticket purchase."], ["h2", "2. Description of the Organiser"], ["p", "New Gen Events SASRegistered office: 5 Rue Jean Bologne, 75016 Paris, FranceLegal form: SAS (Société par actions simplifiée)Share capital: €1,000Legal representatives: Aurélien Linyer & Paul PerrinSIREN: 989 991 666 – RCS ParisVAT number: FR07989991666"], ["p", "New Gen Events SAS (the “Organiser”) is the owner and organiser of SportGen Summit and other professional events."], ["p", "Contact:📧 For ticket or registration inquiries: contact@newgenevents.com📧 For general or partnership inquiries: hello@newgenevents.com"], ["h2", "3. Purchase of Tickets"], ["p", "To attend an Event such as SportGen Summit, Attendees must purchase their tickets directly via the official Event Website."], ["p", "Tickets are sold within the “Tickets” section and are delivered electronically via email once payment is confirmed.An invoice will also be automatically issued to the purchaser."], ["p", "Tickets remain the property of New Gen Events SAS until full payment is received. The Organiser reserves the right to refuse admission and refund the ticket price if necessary."], ["h2", "4. Ticket Categories and Rights"], ["h3", "a. Ticket Categories"], ["p", "Different ticket types may be available at various price points (e.g., Startup, Pro, Max, VIP). Eligibility requirements, if any, are detailed on the Event Website."], ["p", "If an Attendee purchases a ticket that does not correspond to their category or violates discount rules, access to the Event may be denied without refund. Fraudulent use of promo codes may lead to cancellation with a 15% administrative fee deducted."], ["h3", "b. Name Transfers and Refunds"], ["p", "Tickets are nominal and non-transferable, except when explicitly stated otherwise for a specific ticket type.Requests for name changes or transfers must be made by email to contact@newgenevents.com before the deadline specified for that ticket type."], ["p", "No refunds will be made if the Attendee cannot attend the Event."], ["h3", "c. Access to Conference Rooms"], ["p", "Access to all Event sessions is subject to venue capacity. The Organiser guarantees entry to the Event itself but cannot guarantee access to specific rooms once full."], ["h2", "5. Ticket Prices and Payment"], ["p", "Ticket prices are displayed on the Event Website and include French VAT (20%).Prices may vary depending on ticket type, purchase date (Early Bird, Regular, Late), and ongoing promotions."], ["p", "Accepted payment methods:"], ["li", "Credit cards (Visa, Mastercard, American Express)"], ["li", "Bank transfer"], ["li", "Crypto"], ["p", "All payments must be completed within ten (10) business days. Unpaid orders may be automatically cancelled."], ["h2", "6. Organiser’s Obligations"], ["h3", "a. Tickets"], ["p", "Once payment is received, the Attendee will receive an electronic ticket by email. Each ticket is nominative and must be presented with valid photo ID at the entrance."], ["p", "In accordance with Article L121-21-18 of the French Consumer Code, ticket sales are not subject to a right of withdrawal and cannot be exchanged or refunded."], ["h3", "b. Event Content"], ["p", "While the Organiser strives to ensure the accuracy of event details (program, speakers, venue), unforeseen circumstances may result in modifications, substitutions, or postponements. The Organiser will communicate such changes promptly via the Event Website."], ["h2", "7. Admission and Conduct"], ["h3", "a. ID Checks"], ["p", "Attendees must present valid ID matching their registration details. The Organiser reserves the right to refuse entry if information does not match."], ["h3", "b. Wristbands and Badges"], ["p", "For security reasons, Attendees must wear their official Event badge and wristband at all times. Lost items may incur replacement fees."], ["h3", "c. Event App"], ["p", "By attending the Event, you may access the official Event App. Basic personal data (name, company, title) may be visible to other attendees, but no contact details (email, phone) are shared without your explicit consent."], ["h3", "d. Behaviour"], ["p", "Attendees must conduct themselves respectfully and comply with all venue rules. The Organiser reserves the right to remove any individual causing disruption, without refund."], ["h2", "8. Cancellation and Force Majeure"], ["p", "Tickets are non-refundable in the event of cancellation due to circumstances beyond the Organiser’s control (force majeure, administrative restrictions, or venue unavailability).In other cases, refunds will be limited to the ticket price minus transaction fees. The Organiser will not cover travel or accommodation expenses."], ["h2", "9. Personal Data"], ["p", "The Organiser collects personal data for registration and ticketing purposes.By registering, you acknowledge that your name, job title, company name, and company affiliation may be included in the attendee directory and in conference communications identifying participating organisations and speakers, for our legitimate interests in facilitating networking and informing participants and prospective attendees about conference participation. If you do not wish to be included, you may object at any time by contacting info@sportgensummit.com.Please refer to our Privacy Policy (available on www.sportgen-summit.com/privacy-policy) for details about how your information is collected and used."], ["p", "For any data requests, please contact:privacy@newgenevents.comor by mail to:New Gen Events SAS, 5 Rue Jean Bologne, 75016 Paris, France"], ["h2", "10. Photography, Audio & Video Recording"], ["p", "By attending the Event, you consent to being photographed or filmed. Such media may be used for promotional or editorial purposes by New Gen Events SAS or its partners.If you do not wish to appear in any media, please notify event staff on site."], ["h2", "11. Intellectual Property"], ["p", "All trademarks, logos, and content displayed during the Event remain the property of their respective owners.Attendees are prohibited from reproducing or distributing any materials without prior written authorization from New Gen Events SAS or the rightful owner."], ["h2", "12. Insurance"], ["p", "Attendees are responsible for their own insurance coverage.The Organiser maintains professional liability insurance covering damages that may occur during the Event.Attendees must comply with all on-site safety and health rules."], ["h2", "13. Limitation of Liability"], ["p", "Speakers’ views are their own and do not represent the Organiser’s.Materials distributed at the Event are for informational purposes only."], ["p", "To the maximum extent permitted by law, New Gen Events SAS shall not be liable for:"], ["li", "any indirect, consequential, or economic losses;"], ["li", "loss of profits, opportunities, data, or goodwill."], ["p", "Total liability shall not exceed the amount paid for the Event ticket."], ["h2", "14. Governing Law and Language"], ["p", "These Terms are governed by French law.As the Events are international, the Terms are provided in English only."], ["h2", "Contact"], ["p", "New Gen Events SAS📍 5 Rue Jean Bologne, 75016 Paris, France📧 contact@newgenevents.com🌐 www.sportgensummit.com"]]
  },
  "privacy": {
    "title": "Privacy Policy",
    "items": [["p", "New Gen Events SASEffective Date: 01/08/2025Last Updated: 01/11/2025"], ["h2", "1. Introduction"], ["p", "New Gen Events SAS (“we”, “us”, “our”) is committed to protecting your personal data and respecting your privacy."], ["p", "This Privacy Policy explains how we collect, use, process, and protect your personal information in connection with:"], ["li", "SportGen Summit"], ["li", "Any event organised by New Gen Events SAS"], ["li", "Our website (www.sportgen-summit.com)"], ["li", "Our official networking platform (Brella)"], ["p", "We process personal data in accordance with the General Data Protection Regulation (EU) 2016/679 (“GDPR”)."], ["h2", "2. Data Controller"], ["p", "New Gen Events SAS5 Rue Jean Bologne75016 Paris, France"], ["p", "SIREN: 989 991 666 – RCS ParisVAT: FR07989991666"], ["p", "Email: info@sportgensummit.com"], ["p", "New Gen Events SAS acts as the data controller for your personal data."], ["h2", "3. Personal Data We Collect"], ["p", "Depending on your interaction with us, we may collect the following categories of data:"], ["p", "Registration & Ticketing"], ["li", "First name and last name"], ["li", "Company and job title"], ["li", "Email address"], ["li", "Phone number (if provided)"], ["li", "Billing and payment information"], ["li", "Ticket and registration details"], ["p", "Networking Platform (Brella)"], ["li", "Name, company, job title"], ["li", "Profile photo (optional)"], ["li", "Meeting requests and interactions"], ["li", "Messages exchanged within the platform"], ["p", "Contact details (email or phone) are only shared if you explicitly choose to connect."], ["p", "Website & Technical Data"], ["li", "IP address"], ["li", "Browser and device information"], ["li", "Cookies and analytics data"], ["p", "Contact Form & Newsletter"], ["li", "Name, email, company"], ["li", "Message content"], ["li", "Communication preferences"], ["h2", "4. Legal Basis for Processing"], ["p", "We process your personal data based on:"], ["li", "Contractual necessity (ticket purchase and event participation)"], ["li", "Legitimate interest (facilitating professional networking and improving our services)"], ["li", "Consent (newsletter and marketing communications)"], ["li", "Legal obligation (accounting and regulatory requirements)"], ["p", "Where processing is based on our legitimate interests, we ensure that such interests are not overridden by your fundamental rights and freedoms. We carefully assess and maintain a fair balance between our operational needs and your privacy rights."], ["h2", "5. How We Use Your Data"], ["p", "We may use your data to:"], ["li", "Process ticket purchases and registrations"], ["li", "Manage event access, badges and participation"], ["li", "Enable networking through Brella"], ["li", "Communicate event updates and logistics"], ["li", "Send newsletters and marketing communications (if you opted in)"], ["li", "Improve our website and services"], ["li", "Comply with legal obligations"], ["p", "We do not sell your personal data."], ["h2", "6. Data Sharing"], ["p", "We may share your data with trusted service providers acting as data processors, including:"], ["li", "Payment providers (such as Stripe)"], ["li", "Event management platforms"], ["li", "Brella (networking platform)"], ["li", "Hosting and IT service providers"], ["li", "Communication and email tools"], ["p", "All processors are bound by Data Processing Agreements in compliance with GDPR."], ["h2", "7. International Transfers"], ["p", "Some service providers may process data outside the European Union.Where applicable, we ensure appropriate safeguards such as Standard Contractual Clauses (SCC) are in place."], ["h2", "8. Data Retention"], ["p", "We retain personal data only for as long as necessary:"], ["li", "Ticketing and accounting data: up to 6 years (legal obligation)"], ["li", "Networking data: up to 24 months after the Event"], ["li", "Marketing data: until withdrawal of consent"], ["li", "Analytics data: anonymised where possible"], ["h2", "9. Your Rights"], ["p", "Under GDPR, you have the right to:"], ["li", "Access your data"], ["li", "Rectify inaccurate data"], ["li", "Request deletion"], ["li", "Restrict processing"], ["li", "Object to processing"], ["li", "Request data portability"], ["li", "Withdraw consent at any time"], ["p", "To exercise your rights, contact: info@sportgensummit.com"], ["p", "You also have the right to lodge a complaint with the CNIL."], ["h2", "10. Security & Data Breach"], ["p", "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, alteration, or disclosure."], ["p", "In the event of a personal data breach that may pose a risk to your rights and freedoms, we will notify affected users and the competent supervisory authority where required by applicable law."], ["h2", "11. Photography & Media"], ["p", "By attending our Events, you may appear in photos or videos used for promotional purposes.If you wish to opt out, please inform our team on site."], ["h2", "12. Cookies"], ["p", "Our website may use cookies necessary for the operation and security of the site. No non-essential cookies are deployed without user consent."], ["h2", "13. Updates"], ["p", "We may update this Privacy Policy from time to time.The latest version will always be available on our website."]]
  },
  "contest": {
    "title": "OFFICIAL CONTEST RULES",
    "items": [["h2", "\"Share & Win Roland-Garros with BNP Paribas\", SPORT[GEN] Summit"], ["h3", "Article 1: Organizer"], ["p", "The \"Share & Win Roland-Garros with BNP Paribas\" contest (hereinafter the \"Contest\") is organized by NEW GEN EVENTS, a company registered under number 98999166600011, with its registered office at 5 RUE JEAN BOLOGNE, 75016 PARIS, organizer of the SPORT[GEN] Summit (hereinafter the \"Organizer\")."], ["p", "The Contest is offered in partnership with BNP Paribas (hereinafter the \"Partner\"), which provides the prize described in Article 6."], ["h3", "Article 2: Purpose of the Contest"], ["p", "The Contest is a free promotional sweepstakes intended to allow participants to publicly announce their attendance at the SPORT[GEN] Summit by sharing a personalized post on LinkedIn, and to enter a random draw for the chance to win a Roland-Garros experience."], ["p", "No purchase or payment of any kind is required to enter or win."], ["h3", "Article 3: Eligibility"], ["p", "Participation is open to any natural person who, at the time of entry, meets all of the following conditions:"], ["li", "Is at least eighteen (18) years of age."], ["li", "Holds a valid, confirmed registration to the SPORT[GEN] Summit 2026 edition."], ["li", "Has an active personal LinkedIn account in good standing under LinkedIn's Terms of Service."], ["li", "Has access to the internet and a personal email address."], ["p", "The following persons are not eligible to enter:"], ["li", "Employees, contractors and direct family members of the Organizer or the Partner."], ["li", "Any person involved in the design, administration or operation of the Contest."], ["p", "Any entry that does not meet these conditions will be considered void."], ["h3", "Article 4: How to Enter"], ["p", "To enter the Contest, the participant must, during the Contest Period defined in Article 5:"], ["li", "Access the official SPORT[GEN] Summit sharing page at https://sportgen.premagic.com/sportgensummit-2026/poster/create/DELEGATE/"], ["li", "Connect their personal LinkedIn account through the dedicated interface."], ["li", "Publish the personalized post generated by the tool, on their LinkedIn feed, with public visibility (visible to \"Anyone\")."], ["li", "Keep the post online and public until at least the date of the draw set out in Article 7."], ["p", "Once the post is successfully published, the participant is automatically entered into the draw. The Organizer reserves the right to verify that the post has been published and remains public."], ["p", "One (1) entry per person. Duplicate entries from the same individual, the use of multiple LinkedIn accounts, automated tools or any other fraudulent means will result in automatic disqualification."], ["h3", "Article 5: Contest Period"], ["p", "The Contest opens on Wedneday 20 May at 00:01 (Paris time, CET/CEST) and closes on Tuesday 26 May at 23:59 (Paris time, CET/CEST) (hereinafter the \"Contest Period\")."], ["p", "Any entry received before or after this period will not be considered."], ["h3", "Article 6: Prize"], ["p", "One (1) winner will be selected and will receive the following prize (hereinafter the \"Prize\"):"], ["li", "Two (2) tickets to a Roland-Garros session, provided by the Partner, on the 30 May and for a session determined by the Partner."], ["p", "Unless expressly stated above, the Prize does not include: travel to and from the venue, accommodation, meals outside hospitality areas, personal expenses, insurance, or any cost not explicitly listed."], ["p", "The Prize is personal, non-transferable, may not be exchanged for cash or any other goods or services of equivalent value, and may not be resold. In case of force majeure or events beyond its control, the Organizer and the Partner reserve the right to replace the Prize with an item of equivalent value."], ["h3", "Article 7: Selection of the Winner"], ["p", "The winner will be selected by a random draw from among all valid entries received during the Contest Period."], ["p", "The draw will take place on Wednesday 27 May under the responsibility of the Organizer. A record of the draw will be retained by the Organizer."], ["h3", "Article 8: Winner Notification"], ["p", "The winner will be notified within one (1) calendar day following the draw, by email at the address associated with their SPORT[GEN] Summit registration and/or by LinkedIn direct message."], ["p", "The winner must confirm acceptance of the Prize and provide the information required to deliver it (full name, identification details required by the Partner if applicable) within two (2) calendar days following the notification."], ["p", "If the winner cannot be reached, fails to respond within the required time, declines the Prize, or does not meet the eligibility conditions set out in Article 3, the Prize will be forfeited and a new winner may be drawn from the remaining eligible entries, under the same conditions."], ["h3", "Article 9: Personal Data"], ["p", "The personal data collected as part of the Contest (name, email, LinkedIn profile, SPORT[GEN] Summit registration data) is processed by the Organizer for the sole purpose of administering the Contest, identifying and contacting the winner, and complying with applicable legal obligations."], ["p", "Data is retained for the time strictly necessary for these purposes and is not transferred to third parties other than the Partner for the delivery of the Prize."], ["p", "In accordance with the General Data Protection Regulation (EU) 2016/679 and applicable French data protection law, each participant has the right to access, rectify, delete, restrict, port or object to the processing of their personal data. These rights may be exercised by writing to info@sportgensummit.com . Participants also have the right to lodge a complaint with the French data protection authority (CNIL)."], ["h3", "Article 10: Use of Name and Image of the Winner"], ["p", "By accepting the Prize, the winner authorizes the Organizer and the Partner to mention their first name, last initial, professional title, company and LinkedIn post for promotional purposes relating to the SPORT[GEN] Summit and the Contest, on all media (website, social media, press), for a period of twelve (12) months following the draw, without giving rise to any compensation other than the Prize itself."], ["p", "The winner may object to this use by sending a written request to info@sportgensummit.com"], ["h3", "Article 11: Liability"], ["p", "The Organizer and the Partner cannot be held liable for any event beyond their control, including but not limited to: technical failures of the LinkedIn platform, transmission errors, internet outages, fraud, or any cause that may prevent the proper running of the Contest, the publication of a post, or the delivery of the Prize."], ["p", "The Organizer and the Partner cannot be held liable for any damage that may occur during the use of the Prize, in particular during travel to or attendance of the Roland-Garros event. The winner is responsible for ensuring that they hold any necessary identification, travel documents and insurance."], ["h3", "Article 12: LinkedIn"], ["p", "This Contest is in no way sponsored, endorsed, administered by, or associated with LinkedIn. LinkedIn is not responsible for the Contest. By participating, the participant releases LinkedIn from any liability in connection with the Contest."], ["h3", "Article 13: Acceptance of the Rules"], ["p", "Participation in the Contest implies the full and unreserved acceptance of these Rules. Any failure to comply with the Rules will result in the disqualification of the participant."], ["p", "The Rules may be amended at any time by the Organizer if circumstances so require. Any amendment will be communicated on the official Contest page."], ["h3", "Article 14: Governing Law and Disputes"], ["p", "These Rules are governed by French law. Any dispute relating to the interpretation or application of the Rules will first be submitted to the Organizer for amicable resolution. Failing amicable settlement, the dispute will fall under the exclusive jurisdiction of the competent courts of Paris, France."], ["h3", "Article 15: Availability of the Rules"], ["p", "These Rules are available free of charge throughout the Contest Period on the official Contest page at https://sportgensummit.com/rules-contest, and may be sent on simple written request to info@sportgensummit.com"], ["p", "Date of publication: 19/05/2026 Version: 1.0 Organizer contact: info@sportgensummit.com"], ["h2", "RÈGLEMENT OFFICIEL DU JEU-CONCOURS"], ["p", "« Share & Win Roland-Garros with BNP Paribas », SPORT[GEN] Summit"], ["p", ""], ["h4", "Article 1: Organisateur"], ["p", "Le jeu-concours « Share & Win Roland-Garros with BNP Paribas » (ci-après le « Concours ») est organisé par NEW GEN EVENTS, société immatriculée sous le numéro 98999166600011, dont le siège social est situé 5 RUE JEAN BOLOGNE, 75016 PARIS, organisateur du SPORT[GEN] Summit (ci-après l'« Organisateur »)."], ["p", "Le Concours est proposé en partenariat avec BNP Paribas (ci-après le « Partenaire »), qui fournit le lot décrit à l'Article 6."], ["h4", "Article 2: Objet du Concours"], ["p", "Le Concours est un jeu promotionnel gratuit destiné à permettre aux participants d'annoncer publiquement leur présence au SPORT[GEN] Summit en partageant une publication personnalisée sur LinkedIn, et de participer à un tirage au sort pour tenter de gagner une expérience Roland-Garros."], ["p", "Aucun achat ni paiement d'aucune nature n'est requis pour participer ou gagner."], ["h4", "Article 3: Conditions de participation"], ["p", "La participation est ouverte à toute personne physique qui, au moment de son inscription, remplit l'ensemble des conditions suivantes :"], ["p", "1. Être âgée d'au moins dix-huit (18) ans."], ["p", "2. Disposer d'une inscription valide et confirmée à l'édition 2026 du SPORT[GEN] Summit."], ["p", "3. Posséder un compte LinkedIn personnel actif et en règle au regard des Conditions d'utilisation de LinkedIn."], ["p", "4. Disposer d'un accès à Internet et d'une adresse e-mail personnelle."], ["p", "Ne peuvent pas participer :"], ["p", "- Les salariés, prestataires et membres de la famille directe de l'Organisateur ou du Partenaire."], ["p", "- Toute personne impliquée dans la conception, l'administration ou le fonctionnement du Concours."], ["p", "Toute participation ne satisfaisant pas à ces conditions sera considérée comme nulle."], ["h4", "Article 4: Modalités de participation"], ["p", "Pour participer au Concours, le participant doit, pendant la Période du Concours définie à l'Article 5 :"], ["p", "1. Accéder à la page officielle de partage du SPORT[GEN] Summit à l'adresse https://sportgen.premagic.com/sportgensummit-2026/poster/create/DELEGATE/"], ["p", "2. Connecter son compte LinkedIn personnel via l'interface dédiée."], ["p", "3. Publier la publication personnalisée générée par l'outil sur son fil LinkedIn, avec une visibilité publique (visible par « Tout le monde »)."], ["p", "4. Maintenir la publication en ligne et publique jusqu'à la date du tirage au sort fixée à l'Article 7."], ["p", "Une fois la publication effectuée avec succès, le participant est automatiquement inscrit au tirage au sort. L'Organisateur se réserve le droit de vérifier que la publication a bien été effectuée et demeure publique."], ["p", "Une (1) participation par personne. Les participations en double émanant d'un même individu, l'utilisation de plusieurs comptes LinkedIn, d'outils automatisés ou de tout autre moyen frauduleux entraîneront une disqualification automatique."], ["h4", "Article 5: Période du Concours"], ["p", "Le Concours est ouvert le mercredi 20 mai à 00h01 (heure de Paris, CET/CEST) et se clôture le mardi 26 mai à 23h59 (heure de Paris, CET/CEST) (ci-après la « Période du Concours »)."], ["p", "Toute participation reçue avant ou après cette période ne sera pas prise en compte."], ["h4", "Article 6: Lot"], ["p", "Un (1) gagnant sera sélectionné et recevra le lot suivant (ci-après le « Lot ») :"], ["p", "- Deux (2) places pour une session de Roland-Garros, fournies par le Partenaire, le 30 mai, déterminée par le Partenaire."], ["p", "Sauf mention expresse ci-dessus, le Lot n'inclut pas : les transports aller-retour vers le lieu de l'événement, l'hébergement, les repas en dehors des espaces d'hospitalité, les dépenses personnelles, les assurances, ni aucun frais non explicitement mentionné."], ["p", "Le Lot est personnel, incessible, ne peut être échangé contre de l'argent ni contre tout autre bien ou service de valeur équivalente, et ne peut être revendu. En cas de force majeure ou d'événement indépendant de leur volonté, l'Organisateur et le Partenaire se réservent le droit de remplacer le Lot par un article de valeur équivalente."], ["h4", "Article 7: Désignation du gagnant"], ["p", "Le gagnant sera désigné par tirage au sort parmi l'ensemble des participations valides reçues pendant la Période du Concours."], ["p", "Le tirage au sort aura lieu le mercredi 27 mai sous la responsabilité de l'Organisateur. Un procès-verbal du tirage sera conservé par l'Organisateur."], ["h4", "Article 8: Notification du gagnant"], ["p", "Le gagnant sera informé dans un (1) jour calendaire suivant le tirage au sort, par e-mail à l'adresse associée à son inscription au SPORT[GEN] Summit et/ou par message direct LinkedIn."], ["p", "Le gagnant devra confirmer l'acceptation du Lot et fournir les informations nécessaires à sa remise (nom complet, pièce d'identité requise par le Partenaire le cas échéant) dans un délai de deux (2) jours calendaires suivant la notification."], ["p", "Si le gagnant ne peut être contacté, ne répond pas dans le délai imparti, refuse le Lot ou ne remplit pas les conditions d'éligibilité prévues à l'Article 3, le Lot sera considéré comme perdu et un nouveau gagnant pourra être tiré au sort parmi les participations valides restantes, dans les mêmes conditions."], ["h4", "Article 9: Données personnelles"], ["p", "Les données personnelles collectées dans le cadre du Concours (nom, e-mail, profil LinkedIn, données d'inscription au SPORT[GEN] Summit) sont traitées par l'Organisateur aux seules fins d'administration du Concours, d'identification et de contact du gagnant, et de respect des obligations légales applicables."], ["p", "Les données sont conservées pendant le temps strictement nécessaire à ces finalités et ne sont pas transmises à des tiers autres que le Partenaire pour la remise du Lot."], ["p", "Conformément au Règlement général sur la protection des données (UE) 2016/679 et à la loi française applicable en matière de protection des données, chaque participant dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition au traitement de ses données personnelles. Ces droits peuvent être exercés en écrivant à info@sportgensummit.com. Les participants disposent également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL)."], ["h4", "Article 10: Utilisation du nom et de l'image du gagnant"], ["p", "En acceptant le Lot, le gagnant autorise l'Organisateur et le Partenaire à mentionner son prénom, l'initiale de son nom, son titre professionnel, son entreprise et sa publication LinkedIn à des fins promotionnelles relatives au SPORT[GEN] Summit et au Concours, sur tous supports (site internet, réseaux sociaux, presse), pour une durée de douze (12) mois à compter du tirage au sort, sans contrepartie autre que le Lot lui-même."], ["p", "Le gagnant peut s'opposer à cette utilisation en adressant une demande écrite à info@sportgensummit.com."], ["h4", "Article 11: Responsabilité"], ["p", "L'Organisateur et le Partenaire ne sauraient être tenus responsables de tout événement indépendant de leur volonté, incluant notamment : les défaillances techniques de la plateforme LinkedIn, les erreurs de transmission, les interruptions d'accès à Internet, les fraudes, ou toute cause susceptible d'empêcher le bon déroulement du Concours, la publication d'une participation ou la remise du Lot."], ["p", "L'Organisateur et le Partenaire ne sauraient être tenus responsables de tout dommage pouvant survenir lors de l'utilisation du Lot, notamment lors du déplacement ou de la participation à l'événement Roland-Garros. Le gagnant est responsable de s'assurer qu'il dispose des documents d'identité, titres de transport et assurances nécessaires."], ["h4", "Article 12: LinkedIn"], ["p", "Ce Concours n'est en aucune manière parrainé, approuvé, administré par LinkedIn, ni associé à LinkedIn. LinkedIn n'est pas responsable du Concours. En participant, le participant dégage LinkedIn de toute responsabilité en lien avec le Concours."], ["h4", "Article 13: Acceptation du Règlement"], ["p", "La participation au Concours implique l'acceptation pleine et entière du présent Règlement. Tout manquement au Règlement entraînera la disqualification du participant."], ["p", "Le Règlement peut être modifié à tout moment par l'Organisateur si les circonstances l'exigent. Toute modification sera communiquée sur la page officielle du Concours."], ["h4", "Article 14: Droit applicable et litiges"], ["p", "Le présent Règlement est régi par le droit français. Tout litige relatif à l'interprétation ou à l'application du Règlement sera d'abord soumis à l'Organisateur en vue d'un règlement amiable. À défaut de règlement amiable, le litige relèvera de la compétence exclusive des tribunaux compétents de Paris, France."], ["h4", "Article 15: Disponibilité du Règlement"], ["p", "Le présent Règlement est disponible gratuitement pendant toute la Période du Concours sur la page officielle du Concours à l'adresse https://sportgensummit.com/rules-contest, et peut être envoyé sur simple demande écrite à info@sportgensummit.com."], ["p", ""], ["p", "Date de publication : 19/05/2026 Version : 1.0 Contact Organisateur : info@sportgensummit.com"]]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/legal.js", error: String((e && e.message) || e) }); }

// ui_kits/website/pages1.jsx
try { (() => {
/* SPORT[GEN], Home page */
function PartnerTiers() {
  const {
    partnerTiers
  } = window.SGData;
  const sectionRef = React.useRef(null);

  // Scroll-driven "pyramid" reveal: logos light up top-to-bottom as you scroll
  // down through the section, and unlight as you scroll back up.
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const logos = Array.from(section.querySelectorAll('.ptier__logo'));
    const labels = Array.from(section.querySelectorAll('.ptier__label'));
    const dividers = Array.from(section.querySelectorAll('.ptiers__divider'));
    // Reveal order: each tier's label + divider, then its logos, top to bottom.
    const order = Array.from(section.querySelectorAll('.ptiers__divider, .ptier__label, .ptier__logo'));
    if (reduce) {
      order.forEach(el => el.classList.add('ptier-lit'));
      return;
    }
    const N = order.length;
    let ticking = false;
    const apply = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight || document.documentElement.clientHeight;
      // How far the section has travelled up through the viewport.
      const travelled = winH - rect.top;
      // Build the whole pyramid quickly as the section enters view, so all
      // logos are lit together rather than trickling in across a long scroll.
      const startAt = winH * 0.10;
      const endAt = winH * 0.80;
      const p = Math.max(0, Math.min(1, (travelled - startAt) / (endAt - startAt)));
      // +1.2 so the last item finishes a touch before full progress.
      const lit = Math.round(p * (N + 1.2));
      order.forEach((el, i) => el.classList.toggle('ptier-lit', i < lit));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };
    apply();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [partnerTiers]);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--partner-tiers section--ptiers-pyramid",
    id: "partners",
    ref: sectionRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ptiers__heading reveal"
  }, "SPORT", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--white)'
    }
  }, "[GEN]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "ptiers__heading__gold"
  }, "2026 Partners")), partnerTiers.map((tier, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: tier.label
  }, i > 0 ? /*#__PURE__*/React.createElement("hr", {
    className: "ptiers__divider"
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: 'ptier ptier--' + tier.tier
  }, /*#__PURE__*/React.createElement("p", {
    className: "ptier__label"
  }, tier.label), /*#__PURE__*/React.createElement("div", {
    className: "ptier__logos"
  }, tier.logos.map((l, j) => /*#__PURE__*/React.createElement("div", {
    className: "ptier__logo",
    key: j
  }, /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.alt,
    loading: "lazy"
  })))))))));
}
function HomeFeatures() {
  const {
    homeFeatures
  } = window.SGData;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const scroller = React.useRef(null);
  const nudge = dir => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('.hf-pcard');
    const dx = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({
      left: dir * dx,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-h2 home-h2--flush"
  }, "Be part of SportGen ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "this May")), /*#__PURE__*/React.createElement("div", {
    className: "hf-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hf-nav__btn",
    type: "button",
    "aria-label": "Scroll left",
    onClick: () => nudge(-1)
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "hf-nav__btn",
    type: "button",
    "aria-label": "Scroll right",
    onClick: () => nudge(1)
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "hf-scroller",
    ref: scroller
  }, homeFeatures.map((f, i) => /*#__PURE__*/React.createElement("article", {
    className: "hf-pcard reveal",
    key: f.title,
    style: {
      transitionDelay: i * 60 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-pcard__media"
  }, f.grid ? /*#__PURE__*/React.createElement("div", {
    className: "hf-pcard__grid"
  }, f.grid.map((g, k) => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: g,
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hf-pcard__grid-veil",
    "aria-hidden": "true"
  }), f.logo ? /*#__PURE__*/React.createElement("img", {
    className: "hf-pcard__grid-logo",
    src: f.logo,
    alt: "SGN"
  }) : null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "hf-pcard__img",
    src: f.photo,
    alt: "",
    loading: "lazy",
    style: {
      transform: f.zoom ? 'scale(' + f.zoom + ')' : undefined,
      transformOrigin: f.zoom ? f.objpos || 'center' : undefined,
      objectPosition: f.objpos
    }
  }), f.logoOverlay ? /*#__PURE__*/React.createElement("div", {
    className: "hf-pcard__grid-veil",
    "aria-hidden": "true"
  }) : null, f.logoOverlay ? /*#__PURE__*/React.createElement("img", {
    className: "hf-pcard__grid-logo",
    src: f.logoOverlay,
    alt: f.title
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "hf-pcard__num"
  }, "[ ", String(i + 1).padStart(2, '0'), " ]")), /*#__PURE__*/React.createElement("div", {
    className: "hf-pcard__body"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "hf-pcard__title"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "hf-pcard__sub"
  }, f.body)), /*#__PURE__*/React.createElement("a", {
    className: "hf-pcard__cta",
    href: f.href,
    onClick: f.href && !f.href.startsWith('#') ? undefined : e => go(e, f.href)
  }, /*#__PURE__*/React.createElement("span", null, f.cta), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))))))));
}

/* Gated "attendee snapshot" section: stats + scrolling attendee wall + lead-capture modal.
   The modal embeds the SAME HubSpot form as Get in Touch, then opens the PDF on submit.
   The PDF is fetched as a blob first, so it also works in sandboxed previews where a
   direct file URL in a new tab is rejected. */
function deliverSnapshot() {
  const {
    snapshotPdf
  } = window.SGData;
  const open = url => {
    const w = window.open(url, '_blank', 'noopener');
    if (!w) {
      // popup blocked, fall back to a click-driven navigation
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };
  fetch(snapshotPdf).then(r => {
    if (!r.ok) throw new Error(r.status);
    return r.blob();
  }).then(b => {
    const url = URL.createObjectURL(b.slice(0, b.size, 'application/pdf'));
    open(url);
    setTimeout(() => URL.revokeObjectURL(url), 120000);
  }).catch(() => open(snapshotPdf));
}
function SnapshotGate({
  open,
  onClose
}) {
  const {
    snapshotPdf
  } = window.SGData;
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const [done, setDone] = React.useState(false);
  const fired = React.useRef(false);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  React.useEffect(() => {
    if (open) {
      setDone(false);
      fired.current = false;
    }
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "snapgate",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Download the 2026 attendee snapshot",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "snapgate__panel"
  }, /*#__PURE__*/React.createElement("button", {
    className: "snapgate__close",
    type: "button",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))), done ? /*#__PURE__*/React.createElement("div", {
    className: "snapgate__done"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sg-eyebrow"
  }, "Your download is ready"), /*#__PURE__*/React.createElement("h3", {
    className: "snapgate__title"
  }, "Thank you. ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "Enjoy the read.")), /*#__PURE__*/React.createElement("p", {
    className: "snapgate__lede"
  }, "The 2026 attendee snapshot opened in a new tab. If your browser blocked it, use the button below."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "button",
    onClick: deliverSnapshot
  }, "Open the PDF")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "sg-eyebrow"
  }, "2026 Attendee Snapshot"), /*#__PURE__*/React.createElement("h3", {
    className: "snapgate__title"
  }, "Tell us who you are, ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "and it's yours.")), /*#__PURE__*/React.createElement("p", {
    className: "snapgate__lede"
  }, "A curated extract of who was in the room: roles and organizations across teams, leagues, brands, media, investors and tech."), /*#__PURE__*/React.createElement("div", {
    className: "snapgate__hs"
  }, /*#__PURE__*/React.createElement(window.HubspotForm, {
    targetId: "hs-form-snapshot",
    onSubmitted: () => {
      if (fired.current) return;
      fired.current = true;
      try {
        window.localStorage.setItem('sgn_snapshot_access', '1');
      } catch (err) {/* no storage */}
      setDone(true);
      deliverSnapshot();
    }
  })))));
}
function AttendeeSnapshot() {
  const {
    snapshotStats,
    snapshotAttendees
  } = window.SGData;
  // One attendee per line: interleave the three source columns into a single list.
  const snapshotLines = React.useMemo(() => {
    const out = [];
    const max = Math.max.apply(null, snapshotAttendees.map(c => c.length));
    for (let i = 0; i < max; i++) {
      snapshotAttendees.forEach(c => {
        if (c[i]) out.push(c[i]);
      });
    }
    return out;
  }, [snapshotAttendees]);
  const [gate, setGate] = React.useState(false);
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  // The form is the gate: always open it, so the section stays demoable and the lead is always captured.
  const onCta = () => setGate(true);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--snapshot",
    id: "attendee-snapshot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-h2 snap__heading reveal"
  }, "The ultimate gathering of ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "sports business professionals")), /*#__PURE__*/React.createElement("div", {
    className: "snap__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snap__stats reveal"
  }, snapshotStats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "snap__stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "snap__stat-value"
  }, s.value), /*#__PURE__*/React.createElement("span", {
    className: "snap__stat-label"
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "snap__wall reveal",
    "aria-label": "A sample of 2026 attendees"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snap__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snap__track"
  }, snapshotLines.concat(snapshotLines).map((a, j) => /*#__PURE__*/React.createElement("p", {
    className: "snap__line",
    key: j,
    "aria-hidden": j >= snapshotLines.length ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "snap__line-role"
  }, a.role), /*#__PURE__*/React.createElement("span", {
    className: "snap__line-sep",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "snap__line-entity"
  }, a.entity))))))), /*#__PURE__*/React.createElement("div", {
    className: "snap__cta reveal"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "button",
    onClick: onCta
  }, "Download the 2026 Attendee Snapshot"), /*#__PURE__*/React.createElement("p", {
    className: "snap__cta-note"
  }))), /*#__PURE__*/React.createElement(SnapshotGate, {
    open: gate,
    onClose: () => setGate(false)
  }));
}
function HomePage() {
  const {
    speakersHome,
    walls
  } = window.SGData;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("div", {
    className: "home-figbg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-figbg__bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(CounterBand, null), /*#__PURE__*/React.createElement("section", {
    className: "section section--atmo-network",
    id: "speakers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-h2 reveal"
  }, "Our ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "2026 Speakers")), /*#__PURE__*/React.createElement(SpeakerGrid, {
    speakers: speakersHome,
    footer: true,
    cols: 5
  }))), /*#__PURE__*/React.createElement(HomeFeatures, null), /*#__PURE__*/React.createElement(SpeakersReel, null), /*#__PURE__*/React.createElement(PartnerTiers, null), /*#__PURE__*/React.createElement(AttendeeSnapshot, null), /*#__PURE__*/React.createElement(TicketsBlock, null)));
}
Object.assign(window, {
  HomePage,
  PartnerTiers,
  AttendeeSnapshot,
  SnapshotGate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages2.jsx
try { (() => {
/* SPORT[GEN], core content pages */
const {
  useState: usePageState
} = React;
function SpeakersPage() {
  const {
    speakersAll
  } = window.SGData;
  const {
    Badge
  } = window.SPORTGENDesignSystem_882f1e;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Speakers",
    art: "stage",
    titleWhite: "Leading minds in sports.",
    titleGold: "Exclusive insights.",
    sub: "A curated group of top executives, visionaries, athletes, and experts shaping the new landscape of sports and entertainment.",
    ctaLabel: "Get my ticket",
    ctaHref: "#/tickets"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-h2 reveal",
    style: {
      marginBottom: '2rem'
    }
  }, "Our ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "2026 Speakers")), /*#__PURE__*/React.createElement(SpeakerGrid, {
    speakers: speakersAll,
    cols: 5
  }))), /*#__PURE__*/React.createElement(TicketsBlock, null));
}
function PersonaPicker({
  personas,
  selected,
  onPick
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section persona-pick"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container persona-pick__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "persona-pick__head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Make it yours"), /*#__PURE__*/React.createElement("h2", {
    className: "persona-pick__title"
  }, "What brings you to ", /*#__PURE__*/React.createElement("span", {
    className: "sg-gold-text"
  }, "SPORT[GEN]"), "?"), /*#__PURE__*/React.createElement("p", {
    className: "persona-pick__lead"
  }, "Tell us where you sit in the ecosystem and we'll tailor the case for attending to you.")), /*#__PURE__*/React.createElement("div", {
    className: "persona-grid reveal",
    role: "radiogroup",
    "aria-label": "Which best describes you?"
  }, personas.map(p => {
    const active = selected === p.key;
    return /*#__PURE__*/React.createElement("button", {
      key: p.key,
      type: "button",
      role: "radio",
      "aria-checked": active,
      className: 'persona-chip' + (active ? ' persona-chip--active' : ''),
      onClick: () => onPick(active ? null : p.key)
    }, /*#__PURE__*/React.createElement("span", {
      className: "persona-chip__dot",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", {
      className: "persona-chip__text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "persona-chip__label"
    }, p.label), /*#__PURE__*/React.createElement("span", {
      className: "persona-chip__sub"
    }, p.short)), /*#__PURE__*/React.createElement("svg", {
      className: "persona-chip__check",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12.5l4.5 4.5L19 7",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  }))));
}
function PersonaResult({
  persona
}) {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section persona-result",
    key: persona.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "persona-result__head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Tailored for ", persona.label), /*#__PURE__*/React.createElement("h2", {
    className: "persona-result__title"
  }, persona.titleWhite, " ", /*#__PURE__*/React.createElement("span", {
    className: "sg-gold-text"
  }, persona.titleGold)), /*#__PURE__*/React.createElement("p", {
    className: "persona-result__lead"
  }, persona.intro)), /*#__PURE__*/React.createElement("div", {
    className: "why-grid"
  }, persona.reasons.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "why-card reveal",
    style: {
      transitionDelay: i * 70 + 'ms'
    },
    key: r[0]
  }, /*#__PURE__*/React.createElement("span", {
    className: "why-card__dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h3", null, r[0]), /*#__PURE__*/React.createElement("p", null, r[1])))), /*#__PURE__*/React.createElement("div", {
    className: "persona-result__cta reveal"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Get your ticket"), /*#__PURE__*/React.createElement("a", {
    className: "persona-result__link",
    href: "#/agenda",
    onClick: e => go(e, '#/agenda')
  }, "See the full agenda"))));
}
function WhyAttendPage() {
  const {
    walls,
    personas
  } = window.SGData;
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const cats = [['Right Holders (Teams, Leagues...)', 'Teams, leagues and federations seeking partners, capital and new commercial models.'], ['Brands', 'Brands looking to connect with rights holders and reach engaged global audiences.'], ['Investment & Advisory', 'Investors and advisors scouting the next wave of value creation in sport.'], ['Agencies', 'Agencies building the partnerships and campaigns that move the industry.'], ['Tech', 'Technology and data platforms reshaping how sport is produced and consumed.'], ['Media', 'Media and entertainment companies defining how the story gets told.']];
  const [persona, setPersona] = usePageState(() => {
    try {
      return window.localStorage.getItem('sg_persona') || null;
    } catch (e) {
      return null;
    }
  });
  const active = personas.find(p => p.key === persona) || null;
  const [open, setOpen] = usePageState(active ? active.acc : -1);
  const pick = key => {
    setPersona(key);
    try {
      key ? window.localStorage.setItem('sg_persona', key) : window.localStorage.removeItem('sg_persona');
    } catch (e) {}
    const next = personas.find(p => p.key === key);
    setOpen(next ? next.acc : -1);
    if (key && typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(() => {
        const el = document.getElementById('persona-result');
        if (el) window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 90,
          behavior: 'smooth'
        });
      });
    }
  };
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Why Attend",
    art: "curve",
    titleWhite: "The global platform for",
    titleGold: "sport leaders.",
    sub: "Where deals happen. Where the next era is defined.",
    ctaLabel: "See 2027 Tickets",
    ctaHref: "#/tickets"
  }), /*#__PURE__*/React.createElement(PersonaPicker, {
    personas: personas,
    selected: persona,
    onPick: pick
  }), active ? /*#__PURE__*/React.createElement("div", {
    id: "persona-result"
  }, /*#__PURE__*/React.createElement(PersonaResult, {
    persona: active
  })) : null, /*#__PURE__*/React.createElement(Opportunities, null), /*#__PURE__*/React.createElement(CounterBand, null), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vision reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vision__text"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "vision__title"
  }, "Where vision meets opportunity."), /*#__PURE__*/React.createElement("h4", {
    className: "vision__desc"
  }, "SportGen Summit connects the global sports ecosystem to drive partnerships, innovation, and sustainable growth, giving every stakeholder a reason to attend."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Get your ticket")), /*#__PURE__*/React.createElement("div", {
    className: "vision__list"
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c[0],
    className: 'acc' + (open === i ? ' acc--open' : '') + (active && active.acc === i ? ' acc--match' : ''),
    onClick: () => setOpen(open === i ? -1 : i),
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(open === i ? -1 : i);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "acc__q"
  }, /*#__PURE__*/React.createElement("p", {
    className: "acc__label"
  }, c[0]), /*#__PURE__*/React.createElement("svg", {
    className: "acc__chev",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "acc__a"
  }, /*#__PURE__*/React.createElement("p", null, c[1])))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement(LogoWalls, {
    groups: walls
  }))));
}
function ThemeTopics({
  items
}) {
  const [open, setOpen] = usePageState(-1);
  return /*#__PURE__*/React.createElement("div", {
    className: "tg-acc"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: 'tg-acc__item' + (open === i ? ' is-open' : ''),
    key: it.q
  }, /*#__PURE__*/React.createElement("button", {
    className: "tg-acc__q",
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i
  }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
    className: "tg-acc__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg-acc__bar tg-acc__bar--h"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tg-acc__bar tg-acc__bar--v"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tg-acc__panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-acc__a"
  }, it.a)))));
}
function TracksPage() {
  const {
    tracks
  } = window.SGData;
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const [active, setActive] = usePageState(0);
  const num = i => String(i + 1).padStart(2, '0');
  const total = num(tracks.length - 1);

  // Scroll-spy: highlight the filter pill for the theme currently in view.
  React.useEffect(() => {
    const els = tracks.map((_, i) => document.getElementById('theme-' + num(i))).filter(Boolean);
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = els.indexOf(e.target);
          if (idx >= 0) setActive(idx);
        }
      });
    }, {
      rootMargin: '-46% 0px -46% 0px',
      threshold: 0
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  const jump = (e, i) => {
    e.preventDefault();
    const el = document.getElementById('theme-' + num(i));
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 110,
      behavior: 'smooth'
    });
  };
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Content Themes",
    art: "orbit",
    titleWhite: "Powering the",
    titleGold: "Next Era of Sport.",
    sub: "A curated program of themes exploring leadership, innovation, investment, and the evolving global sports economy."
  }), /*#__PURE__*/React.createElement("div", {
    className: "tg-filter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container tg-filter__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg-filter__label"
  }, "Themes"), /*#__PURE__*/React.createElement("nav", {
    className: "tg-filter__list",
    "aria-label": "Jump to a theme"
  }, tracks.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: t.name,
    href: '#theme-' + num(i),
    onClick: e => jump(e, i),
    className: 'tg-filter__pill' + (active === i ? ' is-active' : ''),
    "aria-current": active === i ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg-filter__num"
  }, "[", num(i), "]"), t.name))))), /*#__PURE__*/React.createElement("section", {
    className: "section tg-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, tracks.map((t, i) => /*#__PURE__*/React.createElement("article", {
    id: 'theme-' + num(i),
    key: t.name,
    className: 'tg-card reveal' + (i % 2 ? ' tg-card--alt' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "tg-card__media",
    style: t.img ? {
      backgroundImage: 'linear-gradient(160deg, rgba(4,8,26,0.18), rgba(4,8,26,0.78)), url(' + t.img + ')'
    } : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg-card__tag",
    "aria-hidden": "true"
  }, "[", num(i), "]"), /*#__PURE__*/React.createElement("div", {
    className: "tg-card__overlay"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tg-card__name"
  }, t.name), t.topics ? /*#__PURE__*/React.createElement("span", {
    className: "tg-card__count"
  }, t.topics.length, " sub-topics") : null)), /*#__PURE__*/React.createElement("div", {
    className: "tg-card__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg-card__index"
  }, "Theme ", num(i), " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/ ", total)), /*#__PURE__*/React.createElement("h3", {
    className: "tg-card__tagline sg-gold-text"
  }, t.tagline), /*#__PURE__*/React.createElement("p", {
    className: "tg-card__body"
  }, t.body), t.topics ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tg-card__inside"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg-card__inside-label"
  }, "Inside this theme"), /*#__PURE__*/React.createElement("span", {
    className: "tg-card__inside-rule",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement(ThemeTopics, {
    items: t.topics
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "tg-card__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#/agenda",
    onClick: e => go(e, '#/agenda')
  }, "See related sessions"))))))));
}
function TicketsPage() {
  const {
    speakersAll
  } = window.SGData;
  const names = ['Eno Polo', 'Kameryn Stanhouse', 'Teodora Ivanova - L.', 'Jamie Horowitz', 'Adnan Khalef', 'Dominic Thiem', 'Ugo Valensi', 'Raquel Braun', 'Richard Heaselgrave', 'Charlie Dewhurst'];
  const list = names.map(n => speakersAll.find(s => s.name === n)).filter(Boolean).map(s => {
    if (s.name === 'Dominic Thiem') return {
      ...s,
      role: s.org,
      org: s.role
    };
    if (s.name === 'Richard Heaselgrave') return {
      ...s,
      role: 'CRO'
    };
    return s;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TicketsBlock, {
    first: true
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-h2 reveal"
  }, "Hear from our ", /*#__PURE__*/React.createElement("span", {
    className: "home-h2__gold"
  }, "leaders and visionaries")), /*#__PURE__*/React.createElement(SpeakerGrid, {
    speakers: list
  }))), /*#__PURE__*/React.createElement(Opportunities, null));
}

// Real HubSpot form (EU1 portal) with styled fallback while it loads / if blocked
const HS_PORTAL = '146907186';
const HS_FORM = '754ae578-af1c-4e00-94fd-9658986f999f';
function HubspotForm({
  targetId,
  onSubmitted
}) {
  const id = targetId || 'hs-form-git';
  const ref = React.useRef(null);
  const submitCb = React.useRef(onSubmitted);
  submitCb.current = onSubmitted;
  const [status, setStatus] = usePageState('loading'); // loading | ready | failed
  React.useEffect(() => {
    let cancelled = false;
    const create = () => {
      if (cancelled || !window.hbspt || !ref.current) return;
      ref.current.innerHTML = '';
      window.hbspt.forms.create({
        region: 'eu1',
        portalId: HS_PORTAL,
        formId: HS_FORM,
        target: '#' + id,
        onFormReady: () => {
          if (!cancelled) setStatus('ready');
        },
        onFormSubmitted: () => {
          if (submitCb.current) submitCb.current();
        }
      });
      // Watchdog: the embed can inject a 0-height iframe in sandboxed/blocked
      // contexts and never fire onFormReady, poll for a real rendered form.
      let tries = 0;
      const poll = setInterval(() => {
        if (cancelled) {
          clearInterval(poll);
          return;
        }
        const el = ref.current && (ref.current.querySelector('form') || ref.current.querySelector('iframe'));
        const h = el ? el.getBoundingClientRect().height : 0;
        if (h > 60) {
          clearInterval(poll);
          setStatus('ready');
        } else if (++tries > 16) {
          clearInterval(poll);
          setStatus(s => s === 'ready' ? s : 'failed');
        }
      }, 500);
    };
    // The embed does not always invoke onFormSubmitted, and on the new embed the form lives
    // in a cross-origin iframe (so its thank-you is invisible to us). postMessage is the
    // primary signal, iframe presence/height the secondary one. Fire at most once.
    let hitOnce = false;
    const hit = () => {
      if (hitOnce) return;
      hitOnce = true;
      if (submitCb.current) submitCb.current();
    };
    const onMsg = e => {
      const fromHs = typeof e.origin === 'string' && /hsforms\.net$/.test(e.origin.replace(/^https?:\/\//, '').split('/')[0]);
      let raw = '';
      try {
        raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
      } catch (err) {
        raw = '';
      }
      if (!raw || raw.indexOf('onFormSubmit') === -1) return;
      if (!fromHs && raw.indexOf('hsFormCallback') === -1) return;
      hit();
    };
    window.addEventListener('message', onMsg);
    // Cross-origin-safe fallback: the embed iframe resizes sharply when the form is replaced
    // by its thank-you. Watch for a settled height that then changes by a large amount.
    let mo = null;
    let baseH = 0;
    let stable = 0;
    const probe = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const frame = el.querySelector('iframe');
      const h = frame ? Math.round(frame.getBoundingClientRect().height) : 0;
      if (h > 120) {
        if (!baseH) {
          baseH = h;
          stable = 0;
          return;
        }
        if (Math.abs(h - baseH) < 8) {
          stable++;
          return;
        }
        if (stable >= 2 && baseH - h > 120) {
          clearInterval(probe);
          hit();
          return;
        }
        baseH = h;
        stable = 0;
      }
      // Inline (classic) embeds swap the thank-you into our own DOM.
      if (!frame && /thank|update you|submitted/i.test(el.textContent || '')) {
        clearInterval(probe);
        hit();
      }
    }, 500);
    if (ref.current && window.MutationObserver) {
      mo = new MutationObserver(() => {
        if (ref.current && ref.current.querySelector('.submitted-message, .hs-form__thank-you, [class*="submitted-message"]')) {
          mo.disconnect();
          hit();
        }
      });
      mo.observe(ref.current, {
        childList: true,
        subtree: true
      });
    }
    const cleanupExtras = () => {
      window.removeEventListener('message', onMsg);
      clearInterval(probe);
      if (mo) mo.disconnect();
    };
    if (window.hbspt) {
      create();
      return cleanupExtras;
    }
    let s = document.getElementById('hs-forms-v2');
    if (!s) {
      s = document.createElement('script');
      s.id = 'hs-forms-v2';
      s.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
      s.async = true;
      document.head.appendChild(s);
    }
    const onLoad = () => create();
    const onError = () => {
      if (!cancelled) setStatus('failed');
    };
    s.addEventListener('load', onLoad);
    s.addEventListener('error', onError);
    const t = setTimeout(() => {
      if (!cancelled && !window.hbspt) setStatus('failed');
    }, 8000);
    return () => {
      cancelled = true;
      clearTimeout(t);
      cleanupExtras();
      s.removeEventListener('load', onLoad);
      s.removeEventListener('error', onError);
    };
  }, [id]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: id,
    className: 'git__hsform' + (status === 'failed' ? ' git__hsform--hidden' : ''),
    ref: ref
  }), status === 'loading' ? /*#__PURE__*/React.createElement("p", {
    className: "git__form-note"
  }, "Loading form\u2026") : null, status === 'failed' ? /*#__PURE__*/React.createElement(FallbackForm, {
    onSubmitted: onSubmitted
  }) : null);
}
function FallbackForm({
  onSubmitted
}) {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const [sent, setSent] = usePageState(false);
  if (sent) return /*#__PURE__*/React.createElement("div", {
    className: "contact__done"
  }, /*#__PURE__*/React.createElement("h3", null, "Thank you."), /*#__PURE__*/React.createElement("p", null, "Our team will contact you today."));
  return /*#__PURE__*/React.createElement("form", {
    className: "contact__form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      if (onSubmitted) onSubmitted();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "First name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "Jane"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Last name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "Doe"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Work email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "jane@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Company"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field field--full"
  }, /*#__PURE__*/React.createElement("label", null, "What are you interested in?"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Tell us a little about your goals\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Submit"));
}

// HubSpot meetings scheduler (Tom), embedded with a clean fallback link
const MEETING_URL = 'https://meetings-eu1.hubspot.com/tom-petit-vallois/tom-meetings-scheduler';
function BookCall() {
  const [loaded, setLoaded] = usePageState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "git2__call"
  }, !loaded ? /*#__PURE__*/React.createElement("p", {
    className: "git2__form-note"
  }, "Loading calendar\u2026") : null, /*#__PURE__*/React.createElement("iframe", {
    className: "git2__cal",
    src: MEETING_URL + '?embed=true',
    title: "Book a call with the SPORT[GEN] team",
    loading: "lazy",
    onLoad: () => setLoaded(true)
  }), /*#__PURE__*/React.createElement("p", {
    className: "git2__form-note"
  }, "Calendar not loading? ", /*#__PURE__*/React.createElement("a", {
    href: MEETING_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Open the scheduler in a new tab \u2192")));
}
function GetInTouchPage() {
  const [mode, setMode] = usePageState('form'); // form | call
  return /*#__PURE__*/React.createElement("section", {
    className: "git2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "git2__bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/git-networking-bg.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "git2__scrim"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide git2__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "git2__head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "git2__eyebrow"
  }, "SPORT[GEN] Summit 2027"), /*#__PURE__*/React.createElement("h1", {
    className: "git2__title"
  }, "Get in Touch"), /*#__PURE__*/React.createElement("p", {
    className: "git2__text"
  }, "Learn more about the event, subscribe to our newsletter and gain exclusive access. Tell us how you'd like to connect, our team will get back to you today."), /*#__PURE__*/React.createElement("ul", {
    className: "git2__points"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "git2__points-dot"
  }), "Tailored access for sponsors, partners and delegations"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "git2__points-dot"
  }), "Newsletter & early ticket release"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "git2__points-dot"
  }), "Speak directly with our team"))), /*#__PURE__*/React.createElement("div", {
    className: "git2__panel reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "git2__tabs",
    role: "tablist",
    "aria-label": "Choose how to contact us"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'git2__tab' + (mode === 'form' ? ' is-active' : ''),
    role: "tab",
    "aria-selected": mode === 'form',
    onClick: () => setMode('form')
  }, /*#__PURE__*/React.createElement("span", {
    className: "git2__tab-title"
  }, "Get in Touch"), /*#__PURE__*/React.createElement("span", {
    className: "git2__tab-sub"
  }, "Show your interest, and get contacted by our team")), /*#__PURE__*/React.createElement("button", {
    className: 'git2__tab' + (mode === 'call' ? ' is-active' : ''),
    role: "tab",
    "aria-selected": mode === 'call',
    onClick: () => setMode('call')
  }, /*#__PURE__*/React.createElement("span", {
    className: "git2__tab-title"
  }, "Book a Call"), /*#__PURE__*/React.createElement("span", {
    className: "git2__tab-sub"
  }, "Pick a time that suits you"))), /*#__PURE__*/React.createElement("div", {
    className: "git2__body"
  }, mode === 'form' ? /*#__PURE__*/React.createElement(HubspotForm, null) : /*#__PURE__*/React.createElement(BookCall, null)))));
}
Object.assign(window, {
  SpeakersPage,
  WhyAttendPage,
  TracksPage,
  TicketsPage,
  GetInTouchPage,
  HubspotForm,
  FallbackForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages3.jsx
try { (() => {
/* SPORT[GEN], remaining routes */
const {
  useState: useP3State
} = React;
function Accordion({
  items
}) {
  const [open, setOpen] = useP3State(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "accordion"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: 'accordion__item reveal' + (open === i ? ' accordion__item--open' : ''),
    key: it.q
  }, /*#__PURE__*/React.createElement("button", {
    className: "accordion__q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
    className: "accordion__icon",
    "aria-hidden": "true"
  }, open === i ? '−' : '+')), open === i ? /*#__PURE__*/React.createElement("div", {
    className: "accordion__a"
  }, it.a) : null)));
}
function FeatureColumns({
  cards
}) {
  const {
    GlassCard
  } = window.SPORTGENDesignSystem_882f1e;
  return /*#__PURE__*/React.createElement("div", {
    className: "cols3"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(GlassCard, {
    hover: true,
    key: c.title,
    className: "reveal col3",
    style: {
      transitionDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "col3__title"
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    className: "opps__list"
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, it))))));
}
function AgendaPage() {
  const {
    agendaLive
  } = window.SGData;
  const [stage, setStage] = useP3State('main');
  const [day, setDay] = useP3State('27');
  const sessions = agendaLive[stage + '-' + day];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Agenda",
    titleGold: "The SportGen Summit",
    titleWhite: "2026 Agenda is here",
    goldFirst: true,
    stacked: true,
    sub: "Discover the ideas, people, and technologies shaping the future of sport."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ag-tabs reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ag-tabbar"
  }, [['main', 'Main Stage'], ['elysee', 'Élysée Stage']].map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: 'ag-tab' + (stage === k ? ' is-active' : ''),
    onClick: () => setStage(k)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ag-tab__line",
    "aria-hidden": "true"
  }), label))), /*#__PURE__*/React.createElement("div", {
    className: "ag-tabbar"
  }, [['27', '27 May'], ['28', '28 May']].map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: 'ag-tab' + (day === k ? ' is-active' : ''),
    onClick: () => setDay(k)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ag-tab__line",
    "aria-hidden": "true"
  }), label)))), sessions ? /*#__PURE__*/React.createElement("div", {
    className: "ag-list"
  }, sessions.map(s => /*#__PURE__*/React.createElement("div", {
    className: "ag-session reveal",
    key: s.time + s.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "ag-session__timecol"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "ag-session__time"
  }, s.time)), /*#__PURE__*/React.createElement("div", {
    className: "ag-session__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ag-session__event"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ag-session__title"
  }, s.title), s.desc ? /*#__PURE__*/React.createElement("h4", {
    className: "ag-session__desc"
  }, s.desc) : null), /*#__PURE__*/React.createElement("div", {
    className: "ag-guests"
  }, s.guests.map(g => /*#__PURE__*/React.createElement("div", {
    className: 'ag-guest' + (g.mod ? ' ag-guest--mod' : ''),
    key: g.name + g.org
  }, g.mod ? /*#__PURE__*/React.createElement("p", {
    className: "ag-guest__modlabel"
  }, "MODERATED BY") : null, /*#__PURE__*/React.createElement("div", {
    className: "ag-guest__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ag-guest__photo"
  }, g.photo ? /*#__PURE__*/React.createElement("img", {
    src: g.photo,
    alt: g.name,
    loading: "lazy"
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "ag-guest__profile"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "ag-guest__name"
  }, g.name), g.role ? /*#__PURE__*/React.createElement("p", {
    className: "ag-guest__role"
  }, g.role) : null, g.org ? /*#__PURE__*/React.createElement("p", {
    className: "ag-guest__org"
  }, g.org) : null))))))))) : /*#__PURE__*/React.createElement("div", {
    className: "ag-empty reveal"
  }, /*#__PURE__*/React.createElement("h3", null, "This agenda will be announced soon."), /*#__PURE__*/React.createElement("p", null, "Sessions for this stage and day are being finalized, check back shortly.")))), /*#__PURE__*/React.createElement(TicketsBlock, null));
}
function StartupPage() {
  const {
    startupSteps,
    startupWinners,
    startupJury,
    startupFaq,
    startup
  } = window.SGData;
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const [draftIdx, setDraftIdx] = useP3State(0);
  const [juryIdx, setJuryIdx] = useP3State(0);
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const [faqOpen, setFaqOpen] = React.useState(0);
  const [actOpen, setActOpen] = React.useState(0);
  const chev = /*#__PURE__*/React.createElement("svg", {
    className: "acc__chev",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Startups",
    titleWhite: "Connect with decision-makers.",
    titleGold: "Scale faster.",
    stacked: true,
    bgImage: startup.heroBg,
    sub: "Meet clubs, leagues, brands, media outlets and investors actively looking for innovative solutions. Join the Startup Competition to pitch your vision and solution on stage.",
    ctaLabel: "Startup Tickets",
    ctaHref: "#/tickets"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--partners-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("p", {
    className: "partners-band__label reveal"
  }, "Competition Partners"), /*#__PURE__*/React.createElement("div", {
    className: "sponsor-mq reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sponsor-mq__track"
  }, startup.sponsors.concat(startup.sponsors).map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "sponsor-card",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: s,
    alt: i < startup.sponsors.length ? 'Competition partner ' + (i + 1) : '',
    loading: "lazy"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Take your startup to"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line opps-head__line--gold"
  }, "the next stage")), /*#__PURE__*/React.createElement(OppCards, {
    cards: startup.cards
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-row cta-row--center reveal"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Buy Tickets"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#/get-in-touch",
    onClick: e => go(e, '#/get-in-touch')
  }, "Book a Meeting")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "acts reveal"
  }, /*#__PURE__*/React.createElement("img", {
    className: "acts__bg",
    src: startup.activitiesBg,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "acts__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "acts__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "acts__title"
  }, "Activities for Startups"), /*#__PURE__*/React.createElement("h4", {
    className: "acts__desc"
  }, "Designed to help startups connect with decision-makers, build partnerships and accelerate growth across the global sports industry."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Get a Startup Ticket"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#/download-brochure-startup",
    onClick: e => go(e, '#/download-brochure-startup')
  }, "Download our Startup Brochure"))), /*#__PURE__*/React.createElement("div", {
    className: "acts__list"
  }, startup.activities.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: 'acc' + (i === actOpen ? ' is-open' : ''),
    key: a.label
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "acc__q",
    "aria-expanded": i === actOpen,
    onClick: () => setActOpen(o => o === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("p", {
    className: "acc__label"
  }, a.label), chev), /*#__PURE__*/React.createElement("div", {
    className: "acc__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "acc__body-inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "acc__text"
  }, a.body), a.cta ? /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: a.href,
    onClick: e => go(e, a.href)
  }, a.cta)) : null))))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wstart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wstart__imgs reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: startup.whereImgs[0],
    alt: "Startup exhibition at SportGen Summit",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("img", {
    src: startup.whereImgs[1],
    alt: "Networking at SportGen Summit",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wstart__side reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wstart__line"
  }, "Where your startup"), /*#__PURE__*/React.createElement("h2", {
    className: "wstart__line wstart__line--gold"
  }, "meets the right people"), /*#__PURE__*/React.createElement("p", {
    className: "wstart__desc"
  }, "Exhibit your solution, host meetings on-site, and connect with decision-makers actively looking for innovation."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Buy Tickets"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#/get-in-touch",
    onClick: e => go(e, '#/get-in-touch')
  }, "Book a Meeting")))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide draft2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "draft__head draft__head--center reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "draft__title"
  }, "The Draft"), /*#__PURE__*/React.createElement("h4", {
    className: "draft__lead"
  }, "Join the Startup Competition and pitch your startup on stage in front of industry leaders.")), /*#__PURE__*/React.createElement("ol", {
    className: "hiw__list reveal"
  }, startupSteps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    className: "hiw__item",
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "hiw__rail"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hiw__node"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hiw__node-num"
  }, String(i + 1).padStart(2, '0'))), i < startupSteps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "hiw__line",
    "aria-hidden": "true"
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "hiw__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hiw__date"
  }, s.date), /*#__PURE__*/React.createElement("h3", {
    className: "hiw__title"
  }, s.label), /*#__PURE__*/React.createElement("p", {
    className: "hiw__copy"
  }, s.desc))))), /*#__PURE__*/React.createElement("div", {
    className: "cta-row cta-row--center reveal"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Buy Tickets")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head opps-head--center reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ptn-eyebrow win__eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "win__dot",
    "aria-hidden": "true"
  }), "2026 success story"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Our ", /*#__PURE__*/React.createElement("span", {
    className: "opps-head__gold"
  }, "2026"), " winners"), /*#__PURE__*/React.createElement("h4", {
    className: "ptn-sub win__sub"
  }, "Out of 200+ applicants, only a select few pitch live on the Main Stage. These three startups stood out from the 2026 cohort as the top tier of innovation.")), /*#__PURE__*/React.createElement("div", {
    className: "win__grid reveal"
  }, startupWinners.map(w => /*#__PURE__*/React.createElement("article", {
    className: 'win__card win__card--r' + w.rank,
    key: w.name
  }, w.rank !== 1 ? /*#__PURE__*/React.createElement("span", {
    className: "win__rank",
    "aria-hidden": "true"
  }, w.rank) : null, /*#__PURE__*/React.createElement("div", {
    className: "win__top"
  }, /*#__PURE__*/React.createElement("img", {
    className: "win__photo",
    src: w.photo,
    alt: w.name,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "win__veil",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "win__profile"
  }, /*#__PURE__*/React.createElement("span", {
    className: "win__name"
  }, w.name), /*#__PURE__*/React.createElement("span", {
    className: "win__role"
  }, w.role))), /*#__PURE__*/React.createElement("div", {
    className: "win__logobar"
  }, /*#__PURE__*/React.createElement("img", {
    src: w.logo,
    alt: "",
    loading: "lazy"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide jury"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jury__text reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ptn-eyebrow win__eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "win__dot",
    "aria-hidden": "true"
  }), "The final jury"), /*#__PURE__*/React.createElement("h2", {
    className: "jury__title"
  }, "Judged by the investors ", /*#__PURE__*/React.createElement("span", {
    className: "opps-head__gold"
  }, "shaping sport")), /*#__PURE__*/React.createElement("p", {
    className: "jury__desc"
  }, "The Draft jury brings the decision-makers of the sports economy into one room \u2014 the funds, operators and founders who write the cheques and open the doors across SportGen\u2019s global network."), /*#__PURE__*/React.createElement("p", {
    className: "jury__desc"
  }, "Pitch on the SportGen Main Stage and your startup lands in front of a panel that has scaled category-defining companies. One pitch is all it takes to turn a demo into partnerships, capital and industry-wide visibility."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Buy Tickets"))), /*#__PURE__*/React.createElement("div", {
    className: "jury__media reveal"
  }, startupJury[juryIdx].pair ? /*#__PURE__*/React.createElement("div", {
    className: "jury__card jury__card--split"
  }, startupJury[juryIdx].pair.map(p => /*#__PURE__*/React.createElement("div", {
    className: "jury__half",
    key: p.name
  }, /*#__PURE__*/React.createElement("img", {
    className: "jury__photo",
    src: p.photo,
    alt: p.name,
    loading: "lazy",
    style: p.pos ? {
      objectPosition: p.pos
    } : undefined
  }), /*#__PURE__*/React.createElement("div", {
    className: "jury__veil",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jury__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jury__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jury__name"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "jury__role"
  }, p.role)))))) : /*#__PURE__*/React.createElement("div", {
    className: "jury__card"
  }, /*#__PURE__*/React.createElement("img", {
    className: "jury__photo",
    src: startupJury[juryIdx].photo,
    alt: startupJury[juryIdx].name,
    loading: "lazy",
    style: startupJury[juryIdx].pos ? {
      objectPosition: startupJury[juryIdx].pos
    } : undefined
  }), /*#__PURE__*/React.createElement("div", {
    className: "jury__veil",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jury__bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jury__cool"
  }, "Member of our jury"), /*#__PURE__*/React.createElement("div", {
    className: "jury__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jury__name"
  }, startupJury[juryIdx].name), /*#__PURE__*/React.createElement("span", {
    className: "jury__role"
  }, startupJury[juryIdx].role)))), /*#__PURE__*/React.createElement("div", {
    className: "jury__logos",
    role: "tablist"
  }, startupJury.map((j, i) => /*#__PURE__*/React.createElement("button", {
    key: j.name,
    type: "button",
    role: "tab",
    "aria-selected": i === juryIdx,
    "aria-label": j.name,
    className: 'jury__logo-btn' + (i === juryIdx ? ' is-active' : ''),
    onClick: () => setJuryIdx(i)
  }, /*#__PURE__*/React.createElement("img", {
    src: j.logo,
    alt: "",
    loading: "lazy"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head opps-head--center reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Frequently Asked"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line opps-head__line--gold"
  }, "Questions")), /*#__PURE__*/React.createElement("div", {
    className: "faqx reveal"
  }, startupFaq.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: 'faqx__item' + (faqOpen === i ? ' is-open' : ''),
    key: f.q,
    role: "button",
    tabIndex: 0,
    onClick: () => setFaqOpen(faqOpen === i ? -1 : i),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setFaqOpen(faqOpen === i ? -1 : i);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "faqx__row"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "faqx__q"
  }, f.q), /*#__PURE__*/React.createElement("span", {
    className: "faqx__plus",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))), /*#__PURE__*/React.createElement("div", {
    className: "faqx__a"
  }, /*#__PURE__*/React.createElement("p", null, f.a))))))));
}
function MediasPage() {
  const {
    walls,
    oppStar
  } = window.SGData;
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const CDN = 'https://framerusercontent.com/images/';
  const MEDIA_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLScDx0Ycp8zuil1oCCb_ZGZjHPkMTygoxAyF7bT2Adfi89eTig/viewform';
  const cards = [{
    title: 'Meet the Future of Sport',
    photo: CDN + 'bYVI6HO8cxnNKsF6MAd1FtWec.jpg',
    items: ['Top entrepreneurs', 'International scaleups', 'Innovation Room']
  }, {
    title: 'Access to Global Leaders',
    photo: 'assets/news/sportgen-panel.jpg',
    items: ['World renowned speakers', 'Business leaders', 'Experts & trend setters']
  }, {
    title: 'Create Multi Platform Content',
    photo: CDN + 'Ia440MI3OIGoYp0KDRROqwrm0.jpg',
    items: ['Interview Area', 'Podcast Studio', 'Event Video Stories']
  }];
  const chev = /*#__PURE__*/React.createElement("svg", {
    className: "acc__chev",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Medias",
    art: "network",
    titleWhite: "SportGen Summit",
    titleGold: "for Media.",
    sub: "A must-attend event for global media, with unparalleled access to exclusive stories and the sport's most influential leaders.",
    ctaLabel: "Become a Media Partner",
    ctaHref: MEDIA_FORM
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Innovation & Leadership Stories"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line opps-head__line--gold"
  }, "Powering the Next Era of Sport")), /*#__PURE__*/React.createElement(OppCards, {
    cards: cards
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-row cta-row--center reveal"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Buy Ticket"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#/download-brochure",
    onClick: e => go(e, '#/download-brochure')
  }, "Book a Meeting")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "acts reveal"
  }, /*#__PURE__*/React.createElement("img", {
    className: "acts__bg",
    src: CDN + 'xRx1aVzgK86KpAErMhUxLw66zI.jpg',
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "acts__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "acts__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "acts__title"
  }, "Activities for Medias"), /*#__PURE__*/React.createElement("h4", {
    className: "acts__desc"
  }, "Don\u2019t just cover the future of sport, help shape it at SportGen Summit 2027. Join leading global outlets for exclusive access to key insights, major announcements, and direct engagement with the leaders redefining sport, technology, and culture."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: MEDIA_FORM,
    target: "_blank",
    rel: "noopener"
  }, "Apply for Media Pass"))), /*#__PURE__*/React.createElement("div", {
    className: "acts__list"
  }, ['Media Area', 'Media Lounge', 'Podcast Studio'].map(a => /*#__PURE__*/React.createElement("div", {
    className: "acc",
    key: a
  }, /*#__PURE__*/React.createElement("div", {
    className: "acc__q"
  }, /*#__PURE__*/React.createElement("p", {
    className: "acc__label"
  }, a), chev)))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement(LogoWalls, {
    groups: walls
  }))));
}
function SideEventsPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };

  // 2025 recap, real photography from the live site + local event shots.
  const mosaic = [{
    src: 'assets/halftime-eiffel.jpg',
    cls: 'se-m--tall',
    alt: 'Half-Time Drinks with a view of the Eiffel Tower'
  }, {
    src: 'assets/halftime-crowd.jpg',
    cls: 'se-m--wide',
    alt: 'Guests gathering at golden hour'
  }, {
    src: 'assets/halftime-talk.jpg',
    cls: '',
    alt: 'A conversation between attendees'
  }, {
    src: CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg',
    cls: '',
    alt: 'VIP Dinner in Paris'
  }, {
    src: CDN + 'fgOqDRsDf4r3haBleHzcp5GSE.jpg',
    cls: 'se-m--wide',
    alt: 'Conversations between leaders'
  }];
  const events = [{
    t: 'SGN Invest',
    meta: '25 May',
    href: 'sis.html',
    img: 'assets/sgn-investment-summit-concorde.jpg',
    b: 'The investment community of sport, funds, family offices and rights holders, convened for a focused half-day near Place de la Concorde. Senior, concentrated, and built to move capital.',
    tag: 'Investors'
  }, {
    t: 'The VIP Dinner',
    meta: 'Day 1 · Evening',
    href: '#/vip-dinner',
    img: CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg',
    b: 'Steps from Place de la Concorde, a private dinner brought together speakers, senior executives and partners for the most exclusive evening of the week, the kind of room where a seating plan becomes a deal.',
    tag: 'Invitation only'
  }, {
    t: 'Half-Time Drinks',
    meta: 'Day 1 · After hours',
    href: '#/half-time-drinks',
    img: 'assets/halftime-crowd.jpg',
    b: 'As the first day closed, the room kept talking, drinks in hand, the Eiffel Tower over one shoulder and the Paris sun going down. A relaxed reception that turned keynote moments into the introductions people came for.',
    tag: 'All pass holders'
  }, {
    t: 'Closing Drinks',
    meta: 'Day 2 · Evening',
    href: '#/closing-drinks',
    img: 'assets/closing-golden.jpg',
    b: 'One last toast to close the summit. A celebratory send-off where the week\u2019s new partnerships were sealed and the next edition was already being planned over a glass.',
    tag: 'All pass holders'
  }];
  const stats = [{
    v: '4',
    l: 'Signature evenings'
  }, {
    v: '200+',
    l: 'VIP dinner guests'
  }, {
    v: '90%',
    l: 'C-level & founders'
  }, {
    v: 'Paris',
    l: 'Iconic private venues'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "SGN Week \xB7 2026 Recap",
    art: "frame",
    heroClass: "sgnw-rec-hero",
    bgImage: 'assets/photos/sgn-week-montage.png',
    titleWhite: "Where the summit",
    titleGold: "carries on after dark.",
    stacked: true,
    sub: "The conversations that matter rarely happen on a conference floor. Around SportGen, a curated series of dinners, breakfasts and drinks gives the room a reason to stay in Paris.",
    ctaLabel: "Be part of 2027",
    ctaHref: "#/get-in-touch"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "se-intro reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "se-intro__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "se-intro__h2"
  }, "A few ", /*#__PURE__*/React.createElement("em", null, "unforgettable nights"), ", woven through two days of business."), /*#__PURE__*/React.createElement("p", {
    className: "se-intro__lead"
  }, "Here is what this year\u2019s side events looked like, and the kind of moments returning in 2027.")), /*#__PURE__*/React.createElement("div", {
    className: "se-mosaic reveal"
  }, mosaic.map((m, i) => /*#__PURE__*/React.createElement("figure", {
    className: m.cls,
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: m.src,
    alt: m.alt,
    loading: "lazy"
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "The signature"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line opps-head__line--gold"
  }, "side events")), /*#__PURE__*/React.createElement("div", {
    className: "vip-why"
  }, events.map((ev, i) => /*#__PURE__*/React.createElement("div", {
    className: 'vip-why__row' + (i % 2 ? ' vip-why__row--flip' : '') + ' reveal',
    key: ev.t
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-why__box"
  }, /*#__PURE__*/React.createElement("img", {
    src: ev.img,
    alt: ev.t,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "se-card__tag"
  }, ev.tag)), /*#__PURE__*/React.createElement("div", {
    className: "vip-why__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "se-meta sg-eyebrow sg-eyebrow--gold"
  }, ev.meta), /*#__PURE__*/React.createElement("h3", {
    className: "vip-why__title"
  }, /*#__PURE__*/React.createElement("a", {
    className: "se-evt-link",
    href: ev.href,
    onClick: e => {
      if (ev.href.startsWith('#')) go(e, ev.href);
    }
  }, ev.t, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "vip-why__point"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-why__bar",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "vip-why__desc"
  }, ev.b)))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide vip-excl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-excl__rule reveal",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "vip-excl__title reveal"
  }, "The 2026 edition, in numbers."), /*#__PURE__*/React.createElement("div", {
    className: "vip-stats reveal"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "vip-stat",
    key: s.l
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-stat__value"
  }, s.v), /*#__PURE__*/React.createElement("h4", {
    className: "vip-stat__label"
  }, s.l)))))), /*#__PURE__*/React.createElement("section", {
    className: "section sgnw-cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sgnw-cta-band__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sgnw-cta-band__h2 reveal"
  }, "Want a seat at the ", /*#__PURE__*/React.createElement("span", {
    className: "sgnw-gold"
  }, "table in 2027?")), /*#__PURE__*/React.createElement("p", {
    className: "sgnw-cta-band__sub"
  }, "Some evenings are open to all pass holders, others are strictly by invitation. Tell us about you and our team will be in touch about access."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row cta-row--center"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#/get-in-touch",
    onClick: e => go(e, '#/get-in-touch')
  }, "Request access"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Buy 2027 Ticket")))));
}
function VipCount({
  to,
  suffix
}) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) {
        const t0 = performance.now(),
          dur = 1400;
        const tick = t => {
          const p = Math.min(1, (t - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(e * to));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        io.disconnect();
      }
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, val, suffix);
}

// Classic native-controls video with a fullscreen button that falls back to a
// fixed full-viewport overlay when the browser/sandbox blocks native fullscreen.
function NativeVideo({
  src,
  poster
}) {
  const ref = React.useRef(null);
  const wrapRef = React.useRef(null);
  const [overlayFs, setOverlayFs] = React.useState(false);
  const [blobUrl, setBlobUrl] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    let alive = true,
      url;
    setLoading(true);
    setBlobUrl(null);
    fetch(src).then(r => r.blob()).then(b => {
      if (!alive) return;
      url = URL.createObjectURL(b);
      setBlobUrl(url);
      setLoading(false);
    }).catch(() => {
      if (alive) setLoading(false);
    });
    return () => {
      alive = false;
      if (url) URL.revokeObjectURL(url);
    };
  }, [src]);
  const previewing = React.useRef(false);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
      const e = entries[0];
      if (!e || overlayFs) return;
      if (e.isIntersecting && e.intersectionRatio >= 0.5) {
        if (v.paused) {
          previewing.current = true;
          v.muted = true;
          try {
            v.currentTime = 0;
          } catch (err) {}
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        }
      } else {
        if (previewing.current && v.muted) {
          previewing.current = false;
          v.pause();
          try {
            v.currentTime = 0;
          } catch (err) {}
        }
      }
    }, {
      threshold: [0, 0.5]
    });
    io.observe(v);
    return () => io.disconnect();
  }, [overlayFs, blobUrl]);
  const goFs = () => {
    if (overlayFs) {
      setOverlayFs(false);
      return;
    }
    if (document.fullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
      return;
    }
    const wrap = wrapRef.current,
      el = ref.current;
    if (!el) return;
    const target = wrap && wrap.requestFullscreen ? wrap : el;
    const req = wrap && wrap.requestFullscreen || el.requestFullscreen || el.webkitRequestFullscreen || el.webkitEnterFullscreen;
    if (req) {
      try {
        const p = req.call(target);
        if (p && p.catch) p.catch(() => setOverlayFs(true));
        return;
      } catch (e) {}
    }
    setOverlayFs(true);
  };
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') setOverlayFs(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    className: 'vidembed-wrap' + (overlayFs ? ' vidembed-wrap--fs' : '')
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    className: "vidembed",
    src: blobUrl || src,
    poster: poster,
    controls: true,
    playsInline: true,
    preload: "metadata",
    onVolumeChange: () => {
      if (ref.current && !ref.current.muted) previewing.current = false;
    }
  }), loading ? /*#__PURE__*/React.createElement("div", {
    className: "vidembed__load",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vidembed__spin"
  })) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "vidembed__fs",
    onClick: goFs,
    "aria-label": overlayFs ? 'Exit fullscreen' : 'Fullscreen'
  }, overlayFs ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
  }))));
}
function VipVideoPlayer({
  src
}) {
  const ref = React.useRef(null);
  const wrapRef = React.useRef(null);
  const barRef = React.useRef(null);
  const [fs, setFs] = React.useState(false);
  const [fsBox, setFsBox] = React.useState(null);
  const [playing, setPlaying] = React.useState(true);
  const [muted, setMuted] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [scrubbing, setScrubbing] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [blobSrc, setBlobSrc] = React.useState(null);
  const pendingSeek = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  const hideTimer = React.useRef(null);

  // The static host doesn't serve byte-range requests, so the network video
  // reports an empty seekable range and snaps back to 0 on any seek. Loading
  // the file as a Blob URL makes it fully seekable, so the scrubber works.
  React.useEffect(() => {
    let url,
      cancelled = false;
    fetch(src).then(r => r.blob()).then(b => {
      if (cancelled) return;
      const v = ref.current;
      if (v && v.currentTime > 0.2) pendingSeek.current = v.currentTime; // restore position across the src swap
      url = URL.createObjectURL(b);
      setBlobSrc(url);
    }).catch(() => {});
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, [src]);
  const showBar = () => {
    setVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (!scrubbing) setVisible(false);
    }, 1000);
  };
  const hideBar = () => {
    clearTimeout(hideTimer.current);
    if (!scrubbing) setVisible(false);
  };
  React.useEffect(() => () => clearTimeout(hideTimer.current), []);

  // Classic full screen (YouTube-style: video fills the screen, control bar across the bottom).
  // Request the native Fullscreen API — works on the real site. The preview runs in a
  // permission-less iframe where native FS is blocked, so we ALSO toggle a fixed full-viewport
  // overlay (same CSS as :fullscreen) as a fallback. A lingering scroll-reveal transform on an
  // ancestor would trap position:fixed, so neutralise ancestor transforms while open.
  React.useEffect(() => {
    const wrap = wrapRef.current;
    if (!fs || !wrap) return;
    const touched = [];
    let el = wrap.parentElement;
    while (el && el !== document.body) {
      const cs = getComputedStyle(el);
      if (cs.transform !== 'none' || cs.filter !== 'none' || cs.perspective !== 'none') {
        touched.push([el, el.style.transform, el.style.filter, el.style.perspective, el.style.transition]);
        el.style.transition = 'none';
        el.style.transform = 'none';
        el.style.filter = 'none';
        el.style.perspective = 'none';
      }
      el = el.parentElement;
    }
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    // Size the overlay to the real visible viewport (clientWidth/Height exclude scrollbars,
    // so it doesn't overflow the way 100vw/100vh would inside a scrolled iframe).
    const sizeBox = () => setFsBox({
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight
    });
    sizeBox();
    window.addEventListener('resize', sizeBox);
    return () => {
      window.removeEventListener('resize', sizeBox);
      document.documentElement.style.overflow = prevOverflow;
      touched.forEach(([node, t, f, p, tr]) => {
        node.style.transform = t;
        node.style.filter = f;
        node.style.perspective = p;
        node.style.transition = tr;
      });
    };
  }, [fs]);
  // Sync state when native full screen is exited via Esc / browser chrome.
  React.useEffect(() => {
    const onChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) setFs(false);
    };
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
    };
  }, []);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  React.useEffect(() => {
    const v = ref.current;
    if (v) v.muted = muted;
  }, [muted, blobSrc]);
  const soundIcon = muted ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5L6 9H2v6h4l5 4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "9",
    x2: "16",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "9",
    x2: "22",
    y2: "15"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5L6 9H2v6h4l5 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8.5a5 5 0 0 1 0 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 5.5a9 9 0 0 1 0 13"
  }));
  const onMeta = () => {
    const v = ref.current;
    if (!v) return;
    if (isFinite(v.duration) && v.duration > 0) setDuration(v.duration);
  };
  const onTime = () => {
    const v = ref.current;
    if (!v || scrubbing) return;
    const d = isFinite(v.duration) ? v.duration : duration;
    if (d > 0) setProgress(v.currentTime / d);
  };
  const seekAt = clientX => {
    const v = ref.current,
      bar = barRef.current;
    if (!v || !bar) return;
    const d = isFinite(v.duration) ? v.duration : duration;
    if (!(d > 0)) return;
    const r = bar.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    setProgress(p);
    const target = p * d;
    // Seek whenever the seekable range covers the target (true for the network
    // source when the host serves byte-range, and always for the blob). If the
    // range isn't ready yet, queue it and apply on canplay.
    const seekable = v.seekable.length > 0 && v.seekable.end(v.seekable.length - 1) >= target - 0.5;
    if (seekable) {
      v.currentTime = target;
      pendingSeek.current = null;
    } else {
      pendingSeek.current = target;
    }
  };
  const onCanPlay = () => {
    const v = ref.current;
    if (!v) return;
    if (pendingSeek.current != null && v.seekable.length > 0) {
      v.currentTime = pendingSeek.current;
      pendingSeek.current = null;
    }
  };
  const fmt = s => {
    s = Math.max(0, s || 0);
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return m + ':' + String(ss).padStart(2, '0');
  };

  // Toggle classic full screen: native if available, else the fixed overlay fallback.
  const toggleFs = () => {
    const el = wrapRef.current;
    const inNative = document.fullscreenElement || document.webkitFullscreenElement;
    if (fs || inNative) {
      if (inNative) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      }
      setFs(false);
      return;
    }
    setFs(true);
    if (el) {
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (ref.current && ref.current.webkitEnterFullscreen) {
        ref.current.webkitEnterFullscreen();
      }
    }
  };
  React.useEffect(() => {
    if (!fs) return;
    const onKey = e => {
      if (e.key === 'Escape') setFs(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [fs]);
  const fsIcon = fs ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3"
  }));
  React.useEffect(() => {
    if (!scrubbing) return;
    const move = e => seekAt(e.touches ? e.touches[0].clientX : e.clientX);
    const up = () => setScrubbing(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [scrubbing]);
  const dur = duration;
  const fsStyle = fs && fsBox ? {
    width: fsBox.w + 'px',
    height: fsBox.h + 'px'
  } : undefined;
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: fsStyle,
    className: 'vipvp' + (visible || fs ? '' : ' vipvp--idle') + (fs ? ' vipvp--fs' : ''),
    onMouseMove: showBar,
    onMouseEnter: showBar,
    onMouseLeave: hideBar
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: blobSrc || src,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto",
    onLoadedMetadata: onMeta,
    onDurationChange: onMeta,
    onCanPlay: onCanPlay,
    onTimeUpdate: onTime,
    onPlay: () => setPlaying(true),
    onPause: () => setPlaying(false),
    onClick: toggle
  }), /*#__PURE__*/React.createElement("div", {
    className: 'vipvp__bar' + (visible || fs ? '' : ' vipvp__bar--hidden')
  }, /*#__PURE__*/React.createElement("button", {
    className: "vipvp__btn",
    onClick: toggle,
    "aria-label": playing ? 'Pause' : 'Play'
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "4",
    width: "4.5",
    height: "16",
    rx: "1",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.5",
    y: "4",
    width: "4.5",
    height: "16",
    rx: "1",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4l14 8-14 8V4z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "vipvp__track",
    ref: barRef,
    onMouseDown: e => {
      setScrubbing(true);
      seekAt(e.clientX);
    },
    onTouchStart: e => {
      setScrubbing(true);
      seekAt(e.touches[0].clientX);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vipvp__fill",
    style: {
      width: progress * 100 + '%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "vipvp__knob",
    style: {
      left: progress * 100 + '%'
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "vipvp__btn",
    onClick: () => setMuted(m => !m),
    "aria-label": muted ? 'Unmute' : 'Mute',
    "aria-pressed": !muted
  }, soundIcon), /*#__PURE__*/React.createElement("button", {
    className: "vipvp__btn",
    onClick: toggleFs,
    "aria-label": fs ? 'Reduce' : 'Zoom',
    "aria-pressed": fs
  }, fsIcon)));
}
function VipDinnerPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const stats = [{
    v: 'Wednesday',
    l: '27th of May'
  }, {
    v: 'Paris',
    l: 'Secret Venue'
  }, {
    v: 'Exclusive',
    l: 'VIP Invitations'
  }, {
    v: /*#__PURE__*/React.createElement(VipCount, {
      to: 90,
      suffix: "%"
    }),
    l: 'Executives & Founders'
  }];
  const reasons = [{
    t: 'World Class Ambiance',
    img: 'assets/vip-ambiance.jpg',
    b: 'Enjoy a magical moment of fine dining, and an unforgettable experience in one of the most beautiful places in Paris.'
  }, {
    t: 'Unparalleled Networking',
    img: 'assets/vip-networking.jpg',
    b: 'Cultivate meaningful connections among our exceptional speakers, VIPs, and exclusive partners.'
  }, {
    t: 'Front Row to the Future',
    img: 'assets/vip-frontrow.jpg',
    b: 'Be part of the moment where tomorrow\u2019s sport business vision takes shape, as SGN sets the tone for what comes next.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "vip-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "vip-hero__bg",
    src: CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg',
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__eyebrow-row"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-hero__eyebrow"
  }, "The Gala"), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__eyebrow-line",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "vip-hero__line"
  }, "An unforgettable"), /*#__PURE__*/React.createElement("h1", {
    className: "vip-hero__line vip-hero__line--gold"
  }, "evening."), /*#__PURE__*/React.createElement("h4", {
    className: "vip-hero__desc"
  }, "Set within one of Paris\u2019s most exclusive and breathtaking venues, steps away from Place de la Concorde, the VIP Dinner offers an exceptional evening of refinement and connection."))), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide vip-excl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-excl__rule reveal",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "vip-excl__title reveal"
  }, "The most exclusive evening of SportGen."), /*#__PURE__*/React.createElement("h3", {
    className: "vip-excl__desc reveal"
  }, "A private dinner bringing together VIP guests, speakers and industry leaders for an unforgettable night of dining, networking and conversation in Paris."))), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement(NativeVideo, {
    src: "assets/vip-dinner-aftermovie.mp4",
    poster: CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg'
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-stats reveal"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "vip-stat",
    key: s.l
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-stat__value"
  }, s.v), /*#__PURE__*/React.createElement("h4", {
    className: "vip-stat__label"
  }, s.l)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Why ", /*#__PURE__*/React.createElement("span", {
    className: "opps-head__gold"
  }, "attend")), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "the VIP dinner?")), /*#__PURE__*/React.createElement("div", {
    className: "vip-why"
  }, reasons.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: 'vip-why__row' + (i % 2 ? ' vip-why__row--flip' : '') + ' reveal',
    key: r.t
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-why__box"
  }, /*#__PURE__*/React.createElement("img", {
    src: r.img,
    alt: r.t,
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "vip-why__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-why__title"
  }, r.t), /*#__PURE__*/React.createElement("div", {
    className: "vip-why__point"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-why__bar",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "vip-why__desc"
  }, r.b)))))))));
}
function FrenchOpenPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const audience = ['Clubs & Federations', 'Players & Entourages', 'Brands & Sponsors', 'Media & Broadcasters', 'Investors & Partners', 'Entrepreneurs & Founders'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "vip-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "vip-hero__bg",
    src: CDN + 'XjXp4i2SmBYefo19G3YMF5dSfac.png',
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__inner"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-hero__eyebrow"
  }, "FRENCH OPEN"), /*#__PURE__*/React.createElement("h1", {
    className: "vip-hero__line"
  }, "SPORT[GEN] Summit"), /*#__PURE__*/React.createElement("h1", {
    className: "vip-hero__line vip-hero__line--gold"
  }, "during French Open week"), /*#__PURE__*/React.createElement("h4", {
    className: "vip-hero__desc"
  }, "During the first week of Roland-Garros, Paris becomes a global meeting point for sport. The Summit is designed to take place at the heart of that moment.")), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__photo reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: CDN + 'qbn1GEj8K2cSGX8P7hHOBFwnIk.jpg',
    alt: "Roland-Garros"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide fo-block reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fo-rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2"
  }, "The moment in Paris"), /*#__PURE__*/React.createElement("h3", {
    className: "fo-kicker"
  }, "a global meeting point for sport"), /*#__PURE__*/React.createElement("h4", {
    className: "fo-text"
  }, "During French Open week, Paris operates differently. Executives, athletes, brands, investors and institutions are already present in the city, attending matches, hosting meetings and activating partnerships. Conversations happen naturally. Opportunities accelerate.\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__photo reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: CDN + '3SfdkzdCUdMuWUQzsRKmBDyfKrU.jpg',
    alt: "Paris during French Open week",
    loading: "lazy"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide fo-block fo-block--center reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2"
  }, "A unique concentration of decision-makers and builders, already gathered in Paris."), /*#__PURE__*/React.createElement("div", {
    className: "fo-stats"
  }, audience.map(a => /*#__PURE__*/React.createElement("h3", {
    className: "fo-stat",
    key: a
  }, a))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide fo-block fo-block--indent reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fo-rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2"
  }, "Make the most of SportGen Summit week in Paris"), /*#__PURE__*/React.createElement("h3", {
    className: "fo-kicker"
  }, "SPORT[GEN] Summit takes place during one of the most intense weeks of the global sports calendar."), /*#__PURE__*/React.createElement("h4", {
    className: "fo-text"
  }, "With Roland-Garros in full swing, Paris becomes a natural meeting point for athletes, executives, brands, investors and entrepreneurs. SportGen week is designed to structure that momentum and turn it into meaningful business opportunities. The summit is located just 15\u201320 minutes from Roland-Garros, allowing attendees to move seamlessly between matches, meetings and key moments happening across the city."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide fo-block reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fo-rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2 fo-h2--white"
  }, "One trip to Paris."), /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2"
  }, "A full week of strategic opportunities."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row",
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "ptn-btn-dark",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Get my Ticket"), /*#__PURE__*/React.createElement("a", {
    className: "ptn-btn-dark",
    href: "#/why-attend",
    onClick: e => go(e, '#/why-attend')
  }, "Why Attend")))));
}
function PlanTripPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const {
    Button,
    GlassCard
  } = window.SPORTGENDesignSystem_882f1e;
  const [copied, setCopied] = useP3State(false);
  const venuePhotos = ['rYpJNXjr8xzmk2BZdqWExWzCDo.jpg', 'zDy0ENPINKceFJsj4KBh1YJTy4.jpg', '4ubXh0Hd70r6NKHcMbQZ7CTic.jpg'];
  const airports = [{
    code: 'CDG',
    name: 'Charles de Gaulle',
    time: '~35 min',
    sub: 'North of Paris, served by RER B, taxis & private transfers.'
  }, {
    code: 'ORY',
    name: 'Paris-Orly',
    time: '~30 min',
    sub: 'South of Paris, served by Orlybus, tram T7 & private transfers.'
  }];
  const ti = paths => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, paths);
  const transports = [{
    icon: ti(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7",
      cy: "17",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 17h6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "17",
      r: "2"
    }))),
    label: 'Taxi / VTC',
    desc: 'G7, Uber and Bolt operate 24/7 from both airports to central Paris.'
  }, {
    icon: ti(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      width: "16",
      height: "16",
      x: "4",
      y: "3",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 11h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3v8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8 19-2 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m18 22-2-3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 15h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 15h.01"
    }))),
    label: 'Metro & RER',
    desc: 'Lines 1, 9 and 13 stop closest to the venue.'
  }, {
    icon: ti(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 18H9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.7a1 1 0 0 0-.2-.6l-3.5-4.4A1 1 0 0 0 17.5 8H14"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "18",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7",
      cy: "18",
      r: "2"
    }))),
    label: 'Private Transfer',
    desc: 'Pre-book your airport shuttle or private car for a seamless door-to-door ride.'
  }, {
    icon: ti(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "18.5",
      cy: "17.5",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "5.5",
      cy: "17.5",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "5",
      r: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 17.5V14l-3-3 4-3 2 3h2"
    }))),
    label: "Vélib' & Scooter",
    desc: "Paris's bike-share and e-scooters (Lime, Dott) are perfect for last-mile travel."
  }];
  const hotels = [{
    zone: '8th arr.',
    label: 'Champs-Élysées / Concorde',
    desc: 'Closest to the venue. Home to the Grand Palais, luxury hotels and the iconic avenue.',
    badge: 'Recommended'
  }, {
    zone: '1st arr.',
    label: 'Louvre / Opéra',
    desc: 'Walking distance from the Tuileries and central Paris landmarks.'
  }, {
    zone: '7th arr.',
    label: 'Eiffel Tower / Invalides',
    desc: 'Calm, residential, great for a Parisian feel with easy metro access.'
  }, {
    zone: '16th arr.',
    label: 'Trocadéro / Passy',
    desc: 'Upscale neighbourhood across the Seine, with great views of the Eiffel Tower.'
  }];
  const metroLines = [{
    line: '1',
    stop: 'Champs-Élysées – Clemenceau'
  }, {
    line: '9',
    stop: 'Franklin D. Roosevelt'
  }, {
    line: '13',
    stop: 'Miromesnil'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero page-hero--tall pyt-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "page-hero__img",
    src: "assets/paris-aerial.jpg",
    alt: "Paris aerial view",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pyt-hero__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-container page-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-hero__eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Plan Your Trip"), /*#__PURE__*/React.createElement("span", {
    className: "pyt-hero__rule",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "pyt-hero__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pyt-hero__title--gold"
  }, "Everything you need"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "pyt-hero__title--white"
  }, "to know for the event")), /*#__PURE__*/React.createElement("p", {
    className: "page-hero__sub"
  }, "Everything you need to prepare your stay and make", /*#__PURE__*/React.createElement("br", null), "the most of SPORT[GEN] Summit week in Paris."), /*#__PURE__*/React.createElement("div", {
    className: "page-hero__cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "pyt-hero__btn",
    href: "#/tickets",
    onClick: e => {
      e.preventDefault();
      window.location.hash = '/tickets';
    }
  }, "Get my ticket")))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "airline reveal sg-glass"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Official Airline Partner"), /*#__PURE__*/React.createElement("p", {
    className: "airline__title"
  }, "Air France"), /*#__PURE__*/React.createElement("p", {
    className: "airline__copy"
  }, "Save on your flights to Paris with the exclusive SPORT[GEN] Summit booking code.")), /*#__PURE__*/React.createElement("div", {
    className: "airline__right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "airline__hint"
  }, "Click to copy your promo code"), /*#__PURE__*/React.createElement("button", {
    className: 'airline__code' + (copied ? ' airline__code--done' : ''),
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }, copied ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\u2713"), " Code Copied!") : 'GME60585AF'))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "venue"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "The Venue"), /*#__PURE__*/React.createElement("h2", {
    className: "pyt-h2"
  }, "In the heart of ", /*#__PURE__*/React.createElement("span", {
    className: "pyt-h2__gold"
  }, "Paris")), /*#__PURE__*/React.createElement("p", {
    className: "pyt-sub"
  }, "Steps from the Champs-\xC9lys\xE9es and Place de la Concorde, one of Paris's most iconic venues.")), /*#__PURE__*/React.createElement("div", {
    className: "pyt-venue reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-venue__photos"
  }, venuePhotos.map((src, i) => /*#__PURE__*/React.createElement("figure", {
    className: 'pyt-venue__fig pyt-venue__fig--' + i,
    key: src
  }, /*#__PURE__*/React.createElement("img", {
    src: CDN + src,
    alt: "The venue in Paris",
    loading: "lazy"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pyt-venue__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-info-block"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pyt-info-block__title"
  }, "Address"), /*#__PURE__*/React.createElement("p", {
    className: "pyt-info-block__text"
  }, "5 Avenue Gabriel", /*#__PURE__*/React.createElement("br", null), "75008 Paris, France"), /*#__PURE__*/React.createElement("a", {
    className: "pyt-map-link",
    href: "https://maps.google.com/?q=5+Avenue+Gabriel+75008+Paris",
    target: "_blank",
    rel: "noopener"
  }, "View on Google Maps \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "pyt-info-block"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pyt-info-block__title"
  }, "Metro"), /*#__PURE__*/React.createElement("div", {
    className: "pyt-metro-list"
  }, metroLines.map(({
    line,
    stop
  }) => /*#__PURE__*/React.createElement("div", {
    className: "pyt-metro-item",
    key: line
  }, /*#__PURE__*/React.createElement("span", {
    className: 'pyt-metro-badge pyt-metro-badge--' + line
  }, line), /*#__PURE__*/React.createElement("span", {
    className: "pyt-metro-stop"
  }, stop))))), /*#__PURE__*/React.createElement("div", {
    className: "pyt-info-block"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pyt-info-block__title"
  }, "Bus"), /*#__PURE__*/React.createElement("p", {
    className: "pyt-info-block__text"
  }, "Lines 28, 42, 72, 73, 83, 93", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Champs-\xC9lys\xE9es \u2013 Clemenceau"))), /*#__PURE__*/React.createElement("div", {
    className: "pyt-info-block"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pyt-info-block__title"
  }, "Parking"), /*#__PURE__*/React.createElement("p", {
    className: "pyt-info-block__text"
  }, "Marigny \u2013 Champs-\xC9lys\xE9es", /*#__PURE__*/React.createElement("br", null), "Concorde (underground)")))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Getting to Paris"), /*#__PURE__*/React.createElement("h2", {
    className: "pyt-h2"
  }, "Two international ", /*#__PURE__*/React.createElement("span", {
    className: "pyt-h2__gold"
  }, "airports"))), /*#__PURE__*/React.createElement("div", {
    className: "pyt-airports reveal"
  }, airports.map(a => /*#__PURE__*/React.createElement("div", {
    className: "pyt-airport sg-glass",
    key: a.code
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-airport__code"
  }, a.code), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "pyt-airport__name"
  }, a.name), /*#__PURE__*/React.createElement("p", {
    className: "pyt-airport__time"
  }, a.time, " from the venue"), /*#__PURE__*/React.createElement("p", {
    className: "pyt-airport__sub"
  }, a.sub))))), /*#__PURE__*/React.createElement("div", {
    className: "pyt-transport-grid reveal"
  }, transports.map((t, i) => /*#__PURE__*/React.createElement(GlassCard, {
    hover: true,
    key: t.label,
    className: "pyt-transport-card",
    style: {
      transitionDelay: i * 60 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pyt-transport-icon"
  }, t.icon), /*#__PURE__*/React.createElement("h4", {
    className: "pyt-transport-label"
  }, t.label), /*#__PURE__*/React.createElement("p", {
    className: "pyt-transport-desc"
  }, t.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Accommodation"), /*#__PURE__*/React.createElement("h2", {
    className: "pyt-h2"
  }, "Stay in the heart ", /*#__PURE__*/React.createElement("span", {
    className: "pyt-h2__gold"
  }, "of Paris")), /*#__PURE__*/React.createElement("p", {
    className: "pyt-sub"
  }, "Partner hotels are available across the most prestigious Parisian neighbourhoods, all within easy reach of the venue.")), /*#__PURE__*/React.createElement("div", {
    className: "pyt-hotels reveal"
  }, hotels.map((h, i) => /*#__PURE__*/React.createElement("div", {
    className: 'pyt-hotel sg-glass' + (h.badge ? ' pyt-hotel--featured' : ''),
    key: h.zone,
    style: {
      transitionDelay: i * 70 + 'ms'
    }
  }, h.badge && /*#__PURE__*/React.createElement("span", {
    className: "pyt-hotel__badge"
  }, h.badge), /*#__PURE__*/React.createElement("p", {
    className: "pyt-hotel__zone"
  }, h.zone), /*#__PURE__*/React.createElement("h4", {
    className: "pyt-hotel__label"
  }, h.label), /*#__PURE__*/React.createElement("p", {
    className: "pyt-hotel__desc"
  }, h.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-bottom-grid reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-app sg-glass"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Networking App"), /*#__PURE__*/React.createElement("h3", {
    className: "pyt-app__title"
  }, "Connect before you arrive"), /*#__PURE__*/React.createElement("p", {
    className: "pyt-app__body"
  }, "Available ", /*#__PURE__*/React.createElement("strong", null, "3 weeks before the event"), ", browse the full attendee list, schedule 1:1 meetings, build your personalized agenda and receive real-time updates."), /*#__PURE__*/React.createElement("ul", {
    className: "opps__list",
    style: {
      marginTop: '1.2rem'
    }
  }, /*#__PURE__*/React.createElement("li", null, "Full attendee directory"), /*#__PURE__*/React.createElement("li", null, "1:1 meeting scheduler"), /*#__PURE__*/React.createElement("li", null, "Personalized agenda"), /*#__PURE__*/React.createElement("li", null, "Real-time event updates"))), /*#__PURE__*/React.createElement("div", {
    className: "pyt-assist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyt-assist__card sg-glass"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Visa & Entry"), /*#__PURE__*/React.createElement("h3", {
    className: "pyt-assist__title"
  }, "Need an invitation letter?"), /*#__PURE__*/React.createElement("p", {
    className: "pyt-assist__body"
  }, "We issue official invitation letters on request to support your visa application."), /*#__PURE__*/React.createElement("a", {
    className: "pyt-assist__link",
    href: "mailto:info@sportgensummit.com"
  }, "info@sportgensummit.com \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "pyt-assist__card sg-glass"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Need Assistance?"), /*#__PURE__*/React.createElement("h3", {
    className: "pyt-assist__title"
  }, "Our team is here to help"), /*#__PURE__*/React.createElement("p", {
    className: "pyt-assist__body"
  }, "Any questions about logistics, accommodation or access, reach out directly and we'll get back to you."), /*#__PURE__*/React.createElement("a", {
    className: "pyt-assist__link",
    href: "mailto:info@sportgensummit.com"
  }, "info@sportgensummit.com \u2192")))))), /*#__PURE__*/React.createElement(TicketsBlock, null));
}
function FaqPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const MEETING_URL = 'https://meetings-eu1.hubspot.com/matias-pagura/matias-ticketing-call?uuid=462b5be6-304';
  const faq = [{
    q: 'How can I register for the SportGen Summit?',
    a: 'You can register your interest on our event website, and we\u2019ll notify you by email as soon as tickets go live. You\u2019ll also be able to take advantage of special early-bird pricing when registration opens.'
  }, {
    q: 'Will the summit be available online for remote attendees?',
    a: 'The summit is an exclusive in-person event and will not be livestreamed. However, selected content will be shared after the event through our media partners and SGN social media channels.'
  }, {
    q: 'Can I apply for the Startup Competition?',
    a: 'Applications are now open on our Startup Competition page. Eligible startups must have raised less than $5M in total funding.'
  }, {
    q: 'How can I become a sponsor or exhibitor at the event?',
    a: 'To explore partnership opportunities, please visit the \u201cPartner\u201d section on our website. You\u2019ll be able to book a meeting with our team, who will be happy to guide you through the available packages and benefits.'
  }, {
    q: 'Will there be opportunities for networking at the summit?',
    a: 'The summit will feature a wide range of networking opportunities, including dedicated lounges, afterwork gatherings, private meeting rooms, exhibitor booths, and curated side events. You\u2019ll have ample chances to connect with speakers, attendees, and industry leaders in both structured and informal settings.'
  }, {
    q: 'What is the dress code for the event?',
    a: 'The dress code is business professional, as you\u2019ll be meeting and networking with leaders and experts from across the industry.'
  }];
  const [open, setOpen] = React.useState(-1);
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const venueImgs = ['rYpJNXjr8xzmk2BZdqWExWzCDo.jpg', 'zDy0ENPINKceFJsj4KBh1YJTy4.jpg', '4ubXh0Hd70r6NKHcMbQZ7CTic.jpg'];
  const mailIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  }));
  const calIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "17",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4M16 2v4M3 9h18"
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "faqp-hero",
    "data-screen-label": "FAQ"
  }, /*#__PURE__*/React.createElement("img", {
    className: "faqp-hero__bg",
    src: CDN + 'YS423by22cxS7BAwz4vMTZoCQs.png',
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "faqp-hero__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "faqp-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__eyebrow-row reveal"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-hero__eyebrow"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__eyebrow-line",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "faqp-hero__line"
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    className: "faqp-hero__line faqp-hero__line--gold"
  }, "with us today.")), /*#__PURE__*/React.createElement("div", {
    className: "faqp-contacts reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faqp-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faqp-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "faqp-card__icon"
  }, mailIcon), /*#__PURE__*/React.createElement("p", {
    className: "faqp-card__title"
  }, "Email Us")), /*#__PURE__*/React.createElement("p", {
    className: "faqp-card__desc"
  }, "Reach out to our team to know more & get our brochure"), /*#__PURE__*/React.createElement("a", {
    className: "faqp-card__link",
    href: "mailto:partnerships@sportgensummit.com"
  }, "partnerships@sportgensummit.com")), /*#__PURE__*/React.createElement("div", {
    className: "faqp-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faqp-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "faqp-card__icon"
  }, calIcon), /*#__PURE__*/React.createElement("p", {
    className: "faqp-card__title"
  }, "Book a Meeting")), /*#__PURE__*/React.createElement("p", {
    className: "faqp-card__desc"
  }, "We'll be able to share directly all the details you need"), /*#__PURE__*/React.createElement("div", {
    className: "faqp-card__btn"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: MEETING_URL,
    target: "_blank",
    rel: "noreferrer"
  }, "Book a meeting")))))), /*#__PURE__*/React.createElement("section", {
    className: "section faqp-venue"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faqp-title reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "faqp-h2"
  }, "Explore our"), /*#__PURE__*/React.createElement("h2", {
    className: "faqp-h2 faqp-h2--gold"
  }, "venue and location details")), /*#__PURE__*/React.createElement("div", {
    className: "faqp-venue__imgs reveal"
  }, venueImgs.map(src => /*#__PURE__*/React.createElement("figure", {
    className: "faqp-venue__fig",
    key: src
  }, /*#__PURE__*/React.createElement("img", {
    src: CDN + src,
    alt: "The venue in Paris",
    loading: "lazy"
  })))), /*#__PURE__*/React.createElement("h4", {
    className: "faqp-venue__text reveal"
  }, /*#__PURE__*/React.createElement("strong", null, "Address:"), " 5 Avenue Gabriel, 75008 Paris, France", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Metro:"), /*#__PURE__*/React.createElement("br", null), "- Line 1 ", /*#__PURE__*/React.createElement("em", null, "Champs-\xC9lys\xE9es\u2013Clemenceau"), /*#__PURE__*/React.createElement("br", null), "- Line 9 ", /*#__PURE__*/React.createElement("em", null, "Franklin D. Roosevelt"), /*#__PURE__*/React.createElement("br", null), "- Line 13 ", /*#__PURE__*/React.createElement("em", null, "Miromesnil"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Bus:"), " 28, 42, 72, 73, 83, 93 \u2013 ", /*#__PURE__*/React.createElement("em", null, "Champs-\xC9lys\xE9es\u2013Clemenceau"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Parking:"), " Marigny \u2013 Champs-\xC9lys\xE9es, Concorde"))), /*#__PURE__*/React.createElement("section", {
    className: "section faqp-faqs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faqp-title reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "faqp-h2"
  }, "All the important details before attending"), /*#__PURE__*/React.createElement("h2", {
    className: "faqp-h2 faqp-h2--gold"
  }, "SportGen")), /*#__PURE__*/React.createElement("div", {
    className: "faqp-acc reveal"
  }, faq.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: 'faqp-acc__item' + (open === i ? ' is-open' : ''),
    key: f.q,
    role: "button",
    tabIndex: 0,
    onClick: () => setOpen(open === i ? -1 : i),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(open === i ? -1 : i);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "faqp-acc__row"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "faqp-acc__q"
  }, f.q), /*#__PURE__*/React.createElement("span", {
    className: "faqp-acc__plus",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))), /*#__PURE__*/React.createElement("div", {
    className: "faqp-acc__a"
  }, /*#__PURE__*/React.createElement("p", null, f.a))))))));
}
function PartnerPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const BROCHURE_URL = '#/download-brochure';
  const MEETING_URL = 'https://meetings-eu1.hubspot.com/aurelien-linyer/discovery-call?uuid=b569f199-9acb-4240-9d21-5907804ca26b';
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const whyBlocks = [{
    t: 'Maximize brand impact and ROI at SGN',
    p: 'Connect with 1,500+ global leaders and decision-makers'
  }, {
    t: 'Lead the discussions shaping tomorrow',
    p: 'Stand out as a speaker on topics such as capital, women\u2019s sports, technology, media rights or brand experience. Establish your brand as a reference.'
  }, {
    t: 'Forge strategic partnerships for growth',
    p: 'Engage with industry influencers, generate leads and grow your pipeline through exclusive networking'
  }];
  const pStats = [{
    number: 40,
    suffix: '+',
    label: 'Countries'
  }, {
    number: 1200,
    suffix: '',
    label: 'Professionals'
  }, {
    number: 100,
    suffix: '+',
    label: 'Media'
  }, {
    number: 300,
    suffix: '',
    label: 'Companies'
  }];
  const involved = [{
    photo: CDN + 'ycGYCN2zkEXQO8r7PV24MYWBO9A.png',
    title: 'Super Early bid tickets now available',
    body: 'Join 1500+ professionals shaping the future of sports',
    cta: 'See Tickets',
    href: '#/tickets'
  }, {
    photo: CDN + 'ZB5lV6jVnptMEbenZJHFLVX2V1s.png',
    title: 'Position your brand at SGN',
    body: 'Connect with key decision-makers and make a lasting impact'
  }, {
    photo: CDN + 'kBEDN4Fur4jNB7ieUl88td0bC08.png',
    title: 'Become a speaker and take the stage',
    body: 'Join 100 world-class voices redefining the business of sport.',
    cta: 'See 2026 Speakers',
    href: '#/speakers'
  }, {
    photo: CDN + 'M8ZEBZWVvM9a4GcqTMeFXBk.png',
    title: 'The best startups will be at The Draft',
    body: 'Become a competition partner and be the first to discover the next-gen innovations.',
    cta: 'Learn more',
    href: '#/startup-competition'
  }, {
    photo: CDN + 'JQvj6lEGqjagf8qfs0RINSysC7E.png',
    title: 'Experiences beyond the summit',
    body: 'Let us craft for you the ideal side-event for your guests',
    cta: 'Learn more',
    href: '#/side-events'
  }];
  const premium = [{
    t: 'International',
    p: 'Over 70% of attendees are flying in from abroad, bringing together senior leaders from North America, Asia, or the MENA region for a truly global exchange of insights, opportunities, and partnerships.'
  }, {
    t: 'Market\u2019s leading organizations in convergence',
    p: 'Meet the market-shaping brands and their senior decision-makers leading major investments and seeking high-value partnerships.'
  }, {
    t: 'Elevated, seamless experience in an iconic setting',
    p: 'Enjoy a curated experience designed for efficiency and comfort, from effortless access to premium hospitality, all set within one of Paris\u2019s most exclusive venues.'
  }];
  const stageItems = ['Stage naming rights', 'Exhibition space', 'Private meeting rooms', 'VIP dinner', 'Panel discussion', 'Side events', 'and more\u2026'];
  const check = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 29 18.5",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 L 10.5 18.5 L 29 0",
    fill: "transparent",
    strokeWidth: "4",
    stroke: "var(--gold)"
  }));
  const featCards = [{
    t: 'Connect at scale',
    p: 'Reach 1,500+ global sport leaders and an elite audience of investors, brands and rights holders across the summit.',
    ico: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.6"
    }))
  }, {
    t: 'Own the conversation',
    p: 'Take a speaker slot or host a session on the topics shaping sport \u2013 from capital and media rights to women\u2019s sport and fan experience.',
    ico: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "13",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 17 L8 21 L13 17"
    }))
  }, {
    t: 'Build your pipeline',
    p: 'Onsite signage, digital presence and social amplification extend your visibility before, during and after the summit.',
    ico: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "13",
      width: "4",
      height: "8",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "8",
      width: "4",
      height: "13",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "3",
      width: "4",
      height: "18",
      rx: "1"
    }))
  }, {
    t: 'Go beyond the booth',
    p: 'From VIP dinners to side events and private meeting rooms, every touchpoint is an opportunity to connect.',
    ico: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 15 L15 9 M15 9 h-4 M15 9 v4"
    }))
  }];
  const arrowUR = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12 L12 4 M6 4 h6 v6"
  }));
  const activations = [{
    photo: 'assets/photos/side-events-hero.png',
    title: 'SPORT[GEN] Summit',
    body: 'The flagship two-day gathering in the heart of Paris. Mainstage keynotes, deep-dive tracks and unrivalled networking with the global sport-business community.',
    cta: '2026 Tickets',
    href: '#/tickets'
  }, {
    photo: 'assets/sgn-investment-summit-concorde.jpg',
    logoOverlay: 'assets/brand/sgn-investment-summit-white.png',
    title: 'SGN Invest',
    body: 'The capital-focused day connecting founders with the funds, family offices and strategics actively deploying into sport. Sponsor to sit at the deal table.',
    cta: 'About the Summit',
    href: '#/investment-summit'
  }, {
    photo: 'assets/photos/the-draft-stage.jpg',
    title: 'The Draft',
    body: 'The startup competition inside SGN, built for the ventures ready to be taken seriously by investors and buyers. Become a partner and discover the next-gen first.',
    cta: 'About The Draft',
    href: '#/startup-competition'
  }, {
    photo: 'assets/closing-talk.jpg',
    title: 'Side Events & VIP Dinners',
    body: 'From VIP dinners to private meeting rooms and curated side events across the week, every touchpoint is an opportunity to host and connect.',
    cta: 'Explore Side Events',
    href: '#/side-events'
  }];
  const ctaRow = /*#__PURE__*/React.createElement("div", {
    className: "cta-row cta-row--center"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ptn-btn-light",
    href: BROCHURE_URL,
    onClick: e => go(e, BROCHURE_URL)
  }, "Download our Brochure"), /*#__PURE__*/React.createElement("a", {
    className: "ptn-btn-dark",
    href: MEETING_URL,
    target: "_blank",
    rel: "noopener"
  }, "Book a Meeting"));
  return /*#__PURE__*/React.createElement("div", {
    className: "ptn-page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "vip-hero ptn-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "vip-hero__bg",
    src: "assets/sponsor-hero-bg.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ptn-hero__inner"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-hero__eyebrow"
  }, "SPONSOR"), /*#__PURE__*/React.createElement("h1", {
    className: "ptn-hero__title"
  }, "Partner with us"), /*#__PURE__*/React.createElement("p", {
    className: "ptn-hero__desc"
  }, "Become a SportGen partner and shape the future of the sports industry."), ctaRow)), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal",
    style: {
      alignItems: 'flex-start',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Why become an ", /*#__PURE__*/React.createElement("span", {
    className: "opps-head__gold"
  }, "SGN partner ?"))), /*#__PURE__*/React.createElement("div", {
    className: "ptn-why reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-why__photo",
    style: {
      backgroundImage: 'url(' + CDN + 'baiAmsXQKLDQ9xQKpp3N1Pc2g.jpg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ptn-why__list"
  }, whyBlocks.map(b => /*#__PURE__*/React.createElement("div", {
    className: "ptn-why__block",
    key: b.t
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ptn-why__title"
  }, b.t), /*#__PURE__*/React.createElement("div", {
    className: "vip-why__point"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-why__bar",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "ptn-why__p"
  }, b.p))))), /*#__PURE__*/React.createElement("a", {
    className: "ptn-btn-dark",
    href: MEETING_URL,
    target: "_blank",
    rel: "noopener"
  }, "Book a Meeting")))), /*#__PURE__*/React.createElement("section", {
    className: "section ptn-feat-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-feat-sec__glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Why sponsor ", /*#__PURE__*/React.createElement("span", {
    className: "opps-head__gold"
  }, "SGN 2026")), /*#__PURE__*/React.createElement("h4", {
    className: "ptn-sub"
  }, "As a partner, your brand appears across the full SportGen experience \u2013 from the main stage and exhibition floor to networking sessions and digital touchpoints.")), /*#__PURE__*/React.createElement("div", {
    className: "ptn-feat__grid reveal"
  }, featCards.map(c => /*#__PURE__*/React.createElement("div", {
    className: "ptn-feat__card",
    key: c.t
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-feat__ico"
  }, c.ico), /*#__PURE__*/React.createElement("h3", {
    className: "ptn-feat__ttl"
  }, c.t), /*#__PURE__*/React.createElement("p", {
    className: "ptn-feat__p"
  }, c.p)))), /*#__PURE__*/React.createElement("div", {
    className: "ptn-feat__cta reveal"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ptn-btn-dark",
    href: MEETING_URL,
    target: "_blank",
    rel: "noopener"
  }, "Book a Meeting with SGN")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-cstage reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-cstage__text"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Put your brand on ", /*#__PURE__*/React.createElement("span", {
    className: "opps-head__gold"
  }, "center stage")), /*#__PURE__*/React.createElement("p", {
    className: "ptn-cstage__sub"
  }, "We connect innovative companies with the future of sport: unlocking strategic partnerships and amplifying global impact. Partner opportunities include:"), /*#__PURE__*/React.createElement("ul", {
    className: "ptn-cstage__list"
  }, stageItems.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, check, /*#__PURE__*/React.createElement("span", null, s))))), /*#__PURE__*/React.createElement("figure", {
    className: "ptn-cstage__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/partner-bnp-stage.png",
    alt: "BNP Paribas Stage at SPORT[GEN] Summit",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("figcaption", {
    className: "ptn-stage__cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ptn-stage__cap-eyebrow"
  }, "Real activation \xB7 2026"), /*#__PURE__*/React.createElement("span", {
    className: "ptn-stage__cap-line"
  }, "The BNP Paribas Stage, a founding partner\u2019s name on the SPORT[GEN] main stage.")))))), /*#__PURE__*/React.createElement(PartnerCounterBand, {
    stats: pStats,
    goldLabels: true
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "A summit of moments to ", /*#__PURE__*/React.createElement("span", {
    className: "opps-head__gold"
  }, "pick your activation")), /*#__PURE__*/React.createElement("h4", {
    className: "ptn-sub"
  }, "There are many ways to show up powerfully at SGN \u2013 from sponsoring the mainstage and The Draft, to hosting VIP dinners and branded activations across the week. Every option is built around your objectives.")), /*#__PURE__*/React.createElement("div", {
    className: "ptn-act__grid reveal"
  }, activations.map(a => /*#__PURE__*/React.createElement("article", {
    className: "ptn-act__card",
    key: a.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-act__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: a.photo,
    alt: a.title,
    loading: "lazy"
  }), a.logoOverlay ? /*#__PURE__*/React.createElement("div", {
    className: "hf-pcard__grid-veil",
    "aria-hidden": "true"
  }) : null, a.logoOverlay ? /*#__PURE__*/React.createElement("img", {
    className: "ptn-act__logo",
    src: a.logoOverlay,
    alt: a.title
  }) : null), /*#__PURE__*/React.createElement("h3", {
    className: "ptn-act__ttl"
  }, a.title), /*#__PURE__*/React.createElement("p", {
    className: "ptn-act__p"
  }, a.body), /*#__PURE__*/React.createElement("a", {
    className: "ptn-act__btn",
    href: a.href,
    onClick: e => go(e, a.href)
  }, a.cta, " ", arrowUR)))), /*#__PURE__*/React.createElement("div", {
    className: "ptn-act__more reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-row cta-row--center"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ptn-btn-light",
    href: "#/side-events",
    onClick: e => go(e, '#/side-events')
  }, "Explore SGN Week"), /*#__PURE__*/React.createElement("a", {
    className: "ptn-btn-dark",
    href: MEETING_URL,
    target: "_blank",
    rel: "noopener"
  }, "Host your Event with SGN"))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-aud reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-aud__text"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "A premium audience ", /*#__PURE__*/React.createElement("span", {
    className: "opps-head__gold"
  }, "in the heart of Paris")), premium.map(b => /*#__PURE__*/React.createElement("div", {
    className: "ptn-why__block",
    key: b.t
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ptn-why__title"
  }, b.t), /*#__PURE__*/React.createElement("div", {
    className: "vip-why__point"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-why__bar",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "ptn-why__p"
  }, b.p))))), /*#__PURE__*/React.createElement("div", {
    className: "ptn-aud__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/photos/gala-handshake.png",
    alt: "SportGen premium audience networking in Paris",
    loading: "lazy"
  }))))), /*#__PURE__*/React.createElement(PartnerTiers, null), /*#__PURE__*/React.createElement("section", {
    className: "section ptn-final"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptn-final__bg",
    style: {
      backgroundImage: 'url(' + CDN + 'SpjULns9r4OFcvBqDV58zVwvM.jpg)'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ptn-final__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-container ptn-final__inner reveal"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ptn-hero__title"
  }, "Partner with us"), ctaRow)));
}

// Partner-page counter band: same layout as home, gold gradient labels
function PartnerCounterBand({
  stats
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--cband"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cband cband--gold-labels",
    ref: ref
  }, stats.map(s => /*#__PURE__*/React.createElement(CounterBandItem, {
    key: s.label,
    on: on,
    number: s.number,
    suffix: s.suffix,
    label: s.label
  }))));
}
Object.assign(window, {
  AgendaPage,
  StartupPage,
  MediasPage,
  SideEventsPage,
  VipDinnerPage,
  FrenchOpenPage,
  PlanTripPage,
  FaqPage,
  PartnerPage,
  VipVideoPlayer,
  NativeVideo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages4.jsx
try { (() => {
/* SPORT[GEN], legal pages, 404, brochure download pages (extracted 1:1 from the live site export) */

function LegalBody({
  doc
}) {
  const out = [];
  let list = null;
  doc.items.forEach(([tag, text], i) => {
    if (tag === 'li') {
      if (!list) {
        list = [];
        out.push({
          ul: list,
          key: 'ul' + i
        });
      }
      list.push(text);
      return;
    }
    list = null;
    out.push({
      tag,
      text,
      key: tag + i
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "legal__body"
  }, out.map(b => {
    if (b.ul) return /*#__PURE__*/React.createElement("ul", {
      key: b.key
    }, b.ul.map((t, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, t)));
    if (b.tag === 'h2') return /*#__PURE__*/React.createElement("h2", {
      key: b.key
    }, b.text);
    if (b.tag === 'h3') return /*#__PURE__*/React.createElement("h3", {
      key: b.key
    }, b.text);
    if (b.tag === 'h4') return /*#__PURE__*/React.createElement("h4", {
      key: b.key
    }, b.text);
    return /*#__PURE__*/React.createElement("p", {
      key: b.key
    }, b.text);
  }));
}
function LegalPage({
  docKey
}) {
  const doc = window.SGLegal[docKey];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "legal-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "legal-hero__title"
  }, doc.title))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container legal"
  }, /*#__PURE__*/React.createElement(LegalBody, {
    doc: doc
  }))));
}
function TermsPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    docKey: "terms"
  });
}
function PrivacyPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    docKey: "privacy"
  });
}
function ContestRulesPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    docKey: "contest"
  });
}
function NotFoundPage() {
  const go = e => {
    e.preventDefault();
    window.location.hash = '/';
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "nf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container nf__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "nf__code"
  }, "404"), /*#__PURE__*/React.createElement("p", {
    className: "nf__text"
  }, "Even champions miss sometimes. Let\u2019s get you back on track."), /*#__PURE__*/React.createElement("a", {
    className: "nf__btn",
    href: "#/",
    onClick: go
  }, /*#__PURE__*/React.createElement("span", null, "Return to the Summit"), /*#__PURE__*/React.createElement("span", {
    className: "nf__arrow",
    "aria-hidden": "true"
  }, "\u2192"))));
}
function BrochurePage({
  startup
}) {
  const {
    interests
  } = window.SGData;
  const loop = interests.concat(interests);
  return /*#__PURE__*/React.createElement("section", {
    className: "git-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide git"
  }, /*#__PURE__*/React.createElement("div", {
    className: "git__left reveal"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "git__title"
  }, startup ? 'Download our Startup Brochure' : 'Download our Brochure'), /*#__PURE__*/React.createElement("h4", {
    className: "git__text"
  }, startup ? 'Everything about The Draft, startup tickets and exhibition opportunities, straight to your inbox.' : 'Discover the full SportGen Summit experience, program, audience, partners and opportunities.'), /*#__PURE__*/React.createElement("img", {
    className: "git__brochure",
    src: "https://framerusercontent.com/images/6e0sW65RJ23al9vnYbjjTEhbStw.png",
    alt: "SportGen Summit brochure",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "git__right reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "git__form-panel"
  }, /*#__PURE__*/React.createElement(HubspotForm, null)), /*#__PURE__*/React.createElement("div", {
    className: "git__chips",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "git__chips-track"
  }, loop.map((c, i) => /*#__PURE__*/React.createElement("span", {
    className: "git-chip",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "git-chip__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "git-chip__label"
  }, c))))))));
}
function DownloadBrochurePage() {
  return /*#__PURE__*/React.createElement(BrochurePage, null);
}
function DownloadBrochureStartupPage() {
  return /*#__PURE__*/React.createElement(BrochurePage, {
    startup: true
  });
}
const SITEMAP_GROUPS = [{
  label: 'The Summit',
  blurb: 'The two days in Paris, who, what and why.',
  links: [['Home', '#/', 'Overview of the 2027 edition'], ['Agenda 2026', '#/agenda', 'Full programme across all stages'], ['Why Attend', '#/why-attend', 'The case for joining'], ['Speakers', '#/speakers', '71 leaders shaping sport'], ['Startup Competition', '#/startup-competition', 'The Draft, pitch on the main stage'], ['Content Themes', '#/tracks', 'The tracks structuring the agenda'], ['Media', '#/medias', 'Press, coverage and assets']]
}, {
  label: 'SGN Week',
  blurb: 'Everything happening around the Summit in Paris.',
  links: [['SGN Week', '#/side-events', 'A full week of sport in the city'], ['Investor Breakfast', '#/investor-breakfast', 'Day 1, deals before the day begins'], ['Half-Time Drinks', '#/half-time-drinks', 'Day 1, sundown on the terrace'], ['VIP Dinner', '#/vip-dinner', 'An evening near Place de la Concorde'], ['Closing Drinks', '#/closing-drinks', 'Day 2, one last toast'], ['French Open', '#/french-open', 'Roland-Garros experiences'], ['Plan Your Trip', '#/plan-your-trip', 'Travel, stay and getting around']]
}, {
  label: 'Tickets & Contact',
  blurb: 'Secure your place and reach the team.',
  links: [['Tickets', '#/tickets', 'Passes and VIP options'], ['Get in Touch', '#/get-in-touch', 'Message us or book a call'], ['FAQ', '#/faq', 'Answers to common questions'], ['Partner / Sponsor', '#/partner', 'Partnership opportunities']]
}, {
  label: 'Resources & Legal',
  blurb: 'Downloads, policies and the rest of the site.',
  links: [['Download Brochure', '#/download-brochure', 'The full Summit experience'], ['Startup Brochure', '#/download-brochure-startup', 'The Draft & startup tickets'], ['Terms & Conditions', '#/terms-and-conditions', 'Site and ticketing terms'], ['Privacy Policy', '#/privacy', 'How we handle your data'], ['Official Contest Rules', '#/official-contest-rules', 'The Draft competition rules'], ['404, Not Found', '#/404', 'The page we serve when lost']]
}];
function SitemapPage() {
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  const total = SITEMAP_GROUPS.reduce((n, g) => n + g.links.length, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "legal-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sitemap__eyebrow"
  }, "Sitemap"), /*#__PURE__*/React.createElement("h1", {
    className: "legal-hero__title"
  }, "All pages"), /*#__PURE__*/React.createElement("p", {
    className: "sitemap__lede"
  }, "Every page on sportgensummit.com, ", total, " in total, grouped the way the navigation is organised."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sitemap"
  }, SITEMAP_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
    className: "sitemap__group reveal",
    key: g.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "sitemap__group-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sitemap__group-title"
  }, g.label), /*#__PURE__*/React.createElement("p", {
    className: "sitemap__group-blurb"
  }, g.blurb)), /*#__PURE__*/React.createElement("ul", {
    className: "sitemap__list"
  }, g.links.map(([label, href, desc]) => /*#__PURE__*/React.createElement("li", {
    key: href
  }, /*#__PURE__*/React.createElement("a", {
    className: "sitemap__link",
    href: href,
    onClick: e => go(e, href)
  }, /*#__PURE__*/React.createElement("span", {
    className: "sitemap__link-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sitemap__link-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "sitemap__link-desc"
  }, desc)), /*#__PURE__*/React.createElement("span", {
    className: "sitemap__arrow",
    "aria-hidden": "true"
  }, "\u2192"))))))))));
}
Object.assign(window, {
  TermsPage,
  PrivacyPage,
  ContestRulesPage,
  NotFoundPage,
  DownloadBrochurePage,
  DownloadBrochureStartupPage,
  SitemapPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages4.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages5.jsx
try { (() => {
/* SPORT[GEN], side-event pages.
   Half-Time Drinks + Closing Drinks are now merged into a single "Side Events"
   page (one hero using the Half-Time photo, both events shown as sections).
   Both still appear as separate cards on the SGN Week recap page. */

function SideEventCta({
  title,
  sub
}) {
  const {
    Button
  } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section sgnw-cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sgnw-cta-band__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sgnw-cta-band__h2 reveal"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "sgnw-cta-band__sub"
  }, sub), /*#__PURE__*/React.createElement("div", {
    className: "cta-row cta-row--center"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#/side-events",
    onClick: e => go(e, '#/side-events')
  }, "Explore SGN Week"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#/tickets",
    onClick: e => go(e, '#/tickets')
  }, "Buy 2027 Ticket"))));
}

/* ── SIDE EVENTS (Half-Time Drinks + Closing Drinks merged) ─────── */
function SideEventsMergedPage() {
  const {
    NativeVideo
  } = window;
  const halfStats = [{
    v: 'Day 1',
    l: '18:00 – 20:00'
  }, {
    v: 'Summit venue',
    l: 'Open-air terrace'
  }, {
    v: 'All pass holders',
    l: 'No invitation needed'
  }, {
    v: 'Eiffel Tower',
    l: 'In full view'
  }];
  const halfGallery = [{
    src: 'assets/halftime-eiffel.jpg',
    alt: 'Drinks with a view of the Eiffel Tower'
  }, {
    src: 'assets/halftime-crowd.jpg',
    alt: 'Guests gathering at golden hour'
  }, {
    src: 'assets/halftime-talk.jpg',
    alt: 'A conversation between two attendees'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "vip-hero vip-hero--fit",
    "data-screen-label": "Side Events"
  }, /*#__PURE__*/React.createElement("img", {
    className: "vip-hero__bg",
    src: "assets/halftime-crowd.jpg",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__eyebrow-row"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-hero__eyebrow"
  }, "SGN Week \xB7 Side Events"), /*#__PURE__*/React.createElement("div", {
    className: "vip-hero__eyebrow-line",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "vip-hero__line"
  }, "Side Events,"), /*#__PURE__*/React.createElement("h1", {
    className: "vip-hero__line vip-hero__line--gold"
  }, "the week after hours."), /*#__PURE__*/React.createElement("h4", {
    className: "vip-hero__desc"
  }, "The best conversations rarely happen on the conference floor. From golden-hour drinks on Day 1 to the final toast on Day 2, the evenings are where the room stays and the partnerships get sealed."))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    "data-screen-label": "Half-Time Drinks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Half-Time Drinks,"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line opps-head__line--gold"
  }, "as the sun goes down."))), /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide vip-excl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-excl__rule reveal",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "vip-excl__title reveal"
  }, "The easiest introduction you\u2019ll make all week."), /*#__PURE__*/React.createElement("h3", {
    className: "vip-excl__desc reveal"
  }, "No badge-scanning, no schedule, just a relaxed reception where the keynote you watched an hour ago becomes the person standing next to you, with the Eiffel Tower over one shoulder."), /*#__PURE__*/React.createElement("div", {
    className: "vip-stats reveal"
  }, halfStats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "vip-stat",
    key: s.l
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-stat__value"
  }, s.v), /*#__PURE__*/React.createElement("h4", {
    className: "vip-stat__label"
  }, s.l))))), /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "se-trio reveal"
  }, halfGallery.map((m, i) => /*#__PURE__*/React.createElement("figure", {
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: m.src,
    alt: m.alt,
    loading: "lazy"
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    "data-screen-label": "Closing Drinks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opps-head reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line"
  }, "Closing Drinks,"), /*#__PURE__*/React.createElement("h2", {
    className: "opps-head__line opps-head__line--gold"
  }, "one last toast."))), /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide fo-block reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fo-rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2 fo-h2--white"
  }, "Two days of business,"), /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2"
  }, "raised in a single glass."), /*#__PURE__*/React.createElement("h4", {
    className: "fo-text"
  }, "Nobody\u2019s checking a schedule anymore. The Closing Drinks is where the summit exhales, on a club moored on the Seine between the Grand Palais and Pont Alexandre III, and where the relationships built over two intense days are sealed before everyone scatters back across the world.")), /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: '900px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(NativeVideo, {
    src: "assets/closing-aftermovie.mp4"
  })))), /*#__PURE__*/React.createElement(SideEventCta, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Be there, from the ", /*#__PURE__*/React.createElement("span", {
      className: "sgnw-gold"
    }, "terrace to the final toast.")),
    sub: "Both evenings are open to every pass holder. Secure your 2027 ticket and the week after hours takes care of itself."
  }));
}

/* ── INVESTOR BREAKFAST ───────────────────────────────────────── */
function InvestorBreakfastPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const run = [{
    time: '07:45',
    title: 'Doors & coffee',
    body: 'A quiet start. Espresso, pastries and the first handshakes before the city is fully awake.'
  }, {
    time: '08:10',
    title: 'Table introductions',
    body: 'Every guest, one line each, who you are, what you\u2019re building or backing, and what you came to find.'
  }, {
    time: '08:30',
    title: 'Off-the-record conversation',
    body: 'A short, candid exchange between a leading fund and a founder. No slides. No recording.'
  }, {
    time: '09:15',
    title: 'Open networking',
    body: 'Follow up with the two or three people you most wanted to meet, before the main stage even opens.'
  }];
  const room = [{
    v: '30',
    l: 'Seats, and only 30'
  }, {
    v: '$2B+',
    l: 'Capital around the table'
  }, {
    v: '1:1',
    l: 'Curated introductions'
  }, {
    v: 'Day 1',
    l: 'Before the keynotes'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Side Event \xB7 Day 1 \xB7 Morning",
    art: "orbit",
    bgImage: CDN + 'fgOqDRsDf4r3haBleHzcp5GSE.jpg',
    titleWhite: "Investor Breakfast.",
    titleGold: "Deals before the day begins.",
    stacked: true,
    sub: "The smallest room of the week, and often the most valuable. Funds, family offices and founders open the summit over coffee, by invitation, off the record.",
    ctaLabel: "Request a seat",
    ctaHref: "#/get-in-touch"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide fo-block fo-block--center reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fo-rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2 fo-h2--white"
  }, "Thirty people. One table."), /*#__PURE__*/React.createElement("h2", {
    className: "fo-h2"
  }, "A head start on the whole summit."), /*#__PURE__*/React.createElement("h4", {
    className: "fo-text"
  }, "By the time the main stage opens, the people at this table have already had the conversation everyone else is hoping to have over the next two days."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sgnw-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sgnw-eyebrow sgnw-eyebrow--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sgnw-eyebrow__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sg-eyebrow sg-eyebrow--gold"
  }, "Run of show"), /*#__PURE__*/React.createElement("span", {
    className: "sgnw-eyebrow__rule",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "sgnw-head__h2"
  }, "How the ", /*#__PURE__*/React.createElement("span", {
    className: "sgnw-gold"
  }, "breakfast"), " runs.")), /*#__PURE__*/React.createElement("div", {
    className: "sgnw-tl reveal"
  }, run.map(r => /*#__PURE__*/React.createElement("div", {
    className: "sgnw-tl__row",
    key: r.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "sgnw-tl__when"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sgnw-tl__day"
  }, "Morning"), r.time), /*#__PURE__*/React.createElement("div", {
    className: "sgnw-tl__what"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "sgnw-tl__title"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "sgnw-tl__body"
  }, r.body))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-container--wide vip-excl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vip-excl__rule reveal",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "vip-excl__title reveal"
  }, "Who\u2019s around the table."), /*#__PURE__*/React.createElement("div", {
    className: "vip-stats reveal"
  }, room.map(s => /*#__PURE__*/React.createElement("div", {
    className: "vip-stat",
    key: s.l
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vip-stat__value"
  }, s.v), /*#__PURE__*/React.createElement("h4", {
    className: "vip-stat__label"
  }, s.l)))))), /*#__PURE__*/React.createElement(SideEventCta, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Want a ", /*#__PURE__*/React.createElement("span", {
      className: "sgnw-gold"
    }, "seat"), " at the table?"),
    sub: "The Investor Breakfast is strictly by invitation. Tell us about you and our team will be in touch about access."
  }));
}

/* Both event routes now resolve to the single merged Side Events page. */
const HalfTimeDrinksPage = SideEventsMergedPage;
const ClosingDrinksPage = SideEventsMergedPage;
Object.assign(window, {
  SideEventsMergedPage,
  HalfTimeDrinksPage,
  InvestorBreakfastPage,
  ClosingDrinksPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages5.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GhostHeading = __ds_scope.GhostHeading;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.LogoChip = __ds_scope.LogoChip;

__ds_ns.SpeakerCard = __ds_scope.SpeakerCard;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.TicketCard = __ds_scope.TicketCard;

})();
