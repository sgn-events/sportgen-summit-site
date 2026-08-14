/* @ds-bundle: {"format":4,"namespace":"SPORTGENDesignSystem_882f1e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GhostHeading","sourcePath":"components/core/GhostHeading.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"LogoChip","sourcePath":"components/showcase/LogoChip.jsx"},{"name":"SpeakerCard","sourcePath":"components/showcase/SpeakerCard.jsx"},{"name":"StatTile","sourcePath":"components/showcase/StatTile.jsx"},{"name":"TicketCard","sourcePath":"components/showcase/TicketCard.jsx"}],"sourceHashes":{"blocks.jsx":"9271b25c6afc","components/core/Badge.jsx":"2bf9bfc75b90","components/core/Button.jsx":"c0aaac163001","components/core/Eyebrow.jsx":"bdb303c967a2","components/core/GhostHeading.jsx":"4feada9174ac","components/core/GlassCard.jsx":"0dad22863c30","components/core/IconButton.jsx":"87ac5f209d3c","components/showcase/LogoChip.jsx":"0f229b57dea5","components/showcase/SpeakerCard.jsx":"706ebe1d1e06","components/showcase/StatTile.jsx":"9052e8221b3f","components/showcase/TicketCard.jsx":"110fdb2568c4","tweaks-panel.jsx":"4f181eb354cd","ui_kits/website/App.jsx":"afb88c1cc725","ui_kits/website/Footer.jsx":"5899432d1bdb","ui_kits/website/Hero.jsx":"400553310b01","ui_kits/website/InvestmentSummit.jsx":"11f3ddc8427e","ui_kits/website/Nav.jsx":"9089dc05ec76","ui_kits/website/News.jsx":"bcc6b9bebb6c","ui_kits/website/SisApp.jsx":"390f12086346","ui_kits/website/SisFooter.jsx":"96be32abed0e","ui_kits/website/SisNav.jsx":"e99e80df5027","ui_kits/website/SisPages.jsx":"62c20a881f41","ui_kits/website/blocks.jsx":"8499d422221a","ui_kits/website/data.js":"6dc00362c160","ui_kits/website/legal.js":"29e66f91c6f4","ui_kits/website/pages1.jsx":"e7a080e672e2","ui_kits/website/pages2.jsx":"b21ace3b1392","ui_kits/website/pages3.jsx":"10771a87687c","ui_kits/website/pages4.jsx":"2748656b8b15","ui_kits/website/pages5.jsx":"75468cfa725f"},"inlinedExternals":[],"unexposedExports":[]} */

/* NOTE — ce bundle a ete retaille a la main. L'original genere embarquait en plus
   une copie figee du site entier (App, Nav, Footer, data.js, legal.js, pages1-5 et
   le site SIS), soit 438 des 499 Ko, et la RENDAIT dans #root avant que les vrais
   .jsx ne se chargent et re-rendent par-dessus. Seuls les composants du design
   system et le panneau Tweaks sont utilises par index.html.
   Le manifeste @ds-bundle ci-dessus decrit donc l'original, pas ce fichier : si le
   bundle est un jour regenere par son outil d'origine, refaire ce retaillage. */

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
