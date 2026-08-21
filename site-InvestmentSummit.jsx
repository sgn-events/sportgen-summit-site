/* SGN INVESTMENT SUMMIT, standalone art-direction page (graphite / mono).
   Self-contained DA, sits under the shared Nav/Footer as an Explore-SGN route. */
const { useState: useInvState, useEffect: useInvEffect, useRef: useInvRef } = React;

const INV_CDN = 'https://framerusercontent.com/images/';

/* The leading investment voices, pulled from the speakers already on the site.
   Feedback aout 2026 : une ligne de moins sur la home, retrait de Mark Wyatt,
   Andy Marston et Danny Menken (toujours presents sur la page Speakers SIS). */
const INV_VOICES = [
  ['Marc Lasry', 'Co-Founder, Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png'],
  ['Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg'],
  ['Paolo Della Rovere', 'Managing Director', 'Morgan Stanley', 'pdvLJbsdJnsLkLnZcQRwHa8edfM.png'],
  ['Arnaud Caudoux', 'Deputy CEO', 'Bpifrance', '7X49U9IfeLJzZYasFXCHPvLZrE.png'],
  ['Mofses Kechichian', 'Managing Director', 'TRAIL Capital', 'SC5jKA69BcOxMSril0AxRPtLLqg.webp'],
  ['Kyang Yung', 'Chief Investment Officer', 'Gamma Waves Partners', 'NPxvIK1ahJtK6aTBHkdSslw.jpg'],
  ['Kushaan Ahuja', 'Partner', 'Will Ventures', 'ZIezVLEQ6WTmMov8zVurQ9bUI.webp'],
  ['Arjun Kapur', 'Vice President', 'Left Lane Capital', 'jW9ZIvK1FFDsYJ67Ep7xOzwD6k.jpg'],
  ['Charlie Stebbings', 'Head of Sport', '20VC', 'BuPSqhLT52NQIR9BN64DO9d3Ec.jpg'],
  ['Adriana Crovetto', 'Investor', 'Gamma Waves Partners', 'G8JCKXENjWIMdqZJ8T2iPOFgI8.jpg'],
  ['António Caçorino', 'CEO & Founder', 'APEX', 'OoVzkBGf4K24lUhuRZoKcvb4.jpg'],
  ['Bex Smith', 'CEO & Founder', 'Crux Football', 'cSUoLhNbaT5EgvvrrJdgyz5ss4.jpg'],
];

/* Pull-quotes from leading investment voices on stage. */
const INV_QUOTES = [
  ['“The best returns in sport go to those who read the game before the spreadsheet.”', 'Marc Lasry', 'Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png'],
  ['“Private capital is no longer a spectator in sport, it is shaping how the industry gets built.”', 'Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg'],
  ['“The biggest opportunity in sport is the blind spot everyone else keeps overlooking.”', 'António Caçorino', 'CEO & Founder', 'APEX', 'OoVzkBGf4K24lUhuRZoKcvb4.jpg'],
];

/* Investment-led main-stage sessions (real, from the 2026 agenda). */
const INV_SESSIONS = [
  ['Fireside with Marc Lasry', 'Avenue Capital'],
  ['Private capital in sport', 'Carlyle · TRAIL · Morgan Stanley'],
  ['Smart money in sport', 'Will Ventures · Left Lane · 20VC'],
  ["France as Europe's sports investment hub", 'Bpifrance'],
  ['The blind spot of Private Equity', 'APEX'],
  ["The women's sport investment window", 'Mastercard · Crux · BJK Cup'],
];

/* Who's in the room, real organisations from the site, grouped. */
const INV_PARTICIPANTS = [
  ['Private Equity & Institutional', ['The Carlyle Group', 'Avenue Capital', 'APEX', 'TRAIL Capital']],
  ['Venture & Growth Capital', ['Will Ventures', 'Left Lane Capital', '20VC', 'Athvance Capital', 'Gamma Waves Partners', 'Clubhouse Ventures', 'The Players Fund']],
];

/* Billetterie masquee (aout 2026) : cache la section Passes de la home Invest
   (sis.html et #/investment-summit) sans rien supprimer. Repasser a false pour reafficher. */
const INV_TICKETS_HIDDEN = true;

/* Section Sponsorship opportunities de la home (feedback aout 2026, format Machina,
   texte propre a SGN Invest). */
const INV_CALL_URL = 'https://meetings-eu1.hubspot.com/aurelien-linyer/discovery-call?uuid=b569f199-9acb-4240-9d21-5907804ca26b';
const INV_SPON_POINTS = [
  ['Be seen by the people who sign', '200 vetted investors and 80+ limited partners in one room: visibility measured in decision-makers, not badge counts.'],
  ['Turn two days into a pipeline', 'Curated introductions, investor lounges and closed-door formats built to turn a first conversation into a working relationship.'],
  ['Own a moment of the summit', 'From the stage to the investor dinners, sponsors carry the high-signal touchpoints of the programme, and the follow-ups that come after it.'],
];

/* Investment Summit dedicated passes (prices to confirm). */
const INV_TICKETS = [
  { tier: 'LP Pass', price: 'On request', intro: 'FOR LIMITED PARTNERS:', perks: [
    'Full access to both summit days + SGN Invest programme',
    'Access to the LP & investor networking lounge',
    'Introductions to GPs and funds raising',
  ] },
  { tier: 'Investor Pass', price: 'On request', intro: 'FOR ACTIVE INVESTORS:', perks: [
    'Full access to both summit days + SGN Invest programme',
    'Access to the investor networking lounge',
    'Curated deal-flow & startup access',
    'Investor-only roundtables',
  ] },
  { tier: 'VIP Investor Pass', featured: true, price: 'On request', intro: 'PERKS OF AN INVESTOR PASS PLUS:', perks: [
    'Invitation to the VIP Dinner',
    'Access to the VIP Lounge on both days',
    'Private meeting rooms for deal-making',
    'Concierge introductions to LPs & founders',
  ] },
];

/* Chiffres officiels harmonises sur tout SGN Invest (aout 2026) :
   200 Investors · 80+ LP's · 90% Director level. */
const INV_FIGURES = [
  ['200', '', 'Investors', ''],
  ['80', '+', "LP's", ''],
  ['90', '%', 'Director level', ''],
];

/* count-up gated by viewport */
function InvCountUp({ value, suffix }) {
  const target = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
  const hasComma = String(value).indexOf(',') >= 0;
  const ref = useInvRef(null);
  const [val, setVal] = useInvState(0);
  useInvEffect(() => {
    let raf; const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) {
        io.disconnect();
        const t0 = performance.now(), dur = 1500;
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * e));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [target]);
  const fmt = hasComma ? val.toLocaleString('en-US') : String(val);
  return <span className="inv-fig__num" ref={ref}>{fmt}{suffix}</span>;
}

/* Curated fund logos for the listed firms. [name, src, asis?]
   `asis` = render in natural form (no black-silhouette filter) for two-tone marks.
   Still missing (no logo file): Will Ventures, Clubhouse Ventures. */
const INV_LOGO_CDN = 'https://framerusercontent.com/images/';
const INV_LOGOS = [
  ['The Carlyle Group', INV_LOGO_CDN + '0wKm4XbrfMQTfvoWUOheFFPe7ys.png'],
  ['Avenue Capital', INV_LOGO_CDN + 'HZaR7L01XlCApAMTJDGF1DhqV18.png'],
  ['APEX', INV_LOGO_CDN + 'bkMmpr6NP0OUpWnewViZQLRfc.png'],
  ['TRAIL Capital', 'assets/logos/trail.png'],
  ['Left Lane Capital', 'assets/logos/left-lane.png'],
  ['20VC', INV_LOGO_CDN + 'T9cbGVkT9VMMbAhR50Z9LLCHOw.png'],
  ['Athvance Capital', 'assets/logos/athvance.png'],
  ['Gamma Waves Partners', INV_LOGO_CDN + '3cAhKpkihqzD6n5pZc2CDMSlVM.png'],
  ['The Players Fund', 'assets/logos/players-fund.png'],
];

/* Investors strip on the SIS home, real funds + institutions in the room.
   Hauteur par defaut 34px (.inv-invmarq__cell img) ; `h` recalibre les logos
   dont les proportions les font paraitre trop petits (feedback aout 2026). */
const INV_STRIP = [
  { name: 'The Carlyle Group', src: INV_LOGO_CDN + '0wKm4XbrfMQTfvoWUOheFFPe7ys.png' },
  { name: 'Avenue Capital', src: 'assets/logos/avenue-capital.png' },
  { name: 'BNP Paribas', src: 'https://framerusercontent.com/images/slCL53NvqEbZ8mCu0dMoIJNesTI.png', h: 46 },
  { name: 'Left Lane Capital', src: 'assets/logos/left-lane.png' },
  { name: 'Morgan Stanley', word: 'Morgan Stanley' },
  { name: 'APEX', src: INV_LOGO_CDN + 'bkMmpr6NP0OUpWnewViZQLRfc.png', h: 52 },
  { name: 'TRAIL Capital', src: 'assets/logos/trail.png' },
  { name: '20VC', src: INV_LOGO_CDN + 'T9cbGVkT9VMMbAhR50Z9LLCHOw.png' },
  { name: 'Athvance Capital', src: 'assets/logos/athvance.png' },
  { name: 'Gamma Waves Partners', src: INV_LOGO_CDN + '3cAhKpkihqzD6n5pZc2CDMSlVM.png' },
  { name: 'The Players Fund', src: 'assets/logos/players-fund.png' },
];

function InvestmentSummitPage() {
  const D = window.SGData;
  const investLogos = INV_LOGOS.map(([alt, src, asis]) => ({ src, alt, asis: !!asis }));
  const rootRef = useInvRef(null);

  /* DA locked to White, Dark DA removed */
  const light = true;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const BUY_URL = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';

  const tickets = INV_TICKETS;
  const marqWords = ['Private Equity', 'Venture', 'Sovereign Capital', 'M&A', 'Family Offices', 'Growth', 'Rights & Media'];

  return (
    <div className={'inv' + (light ? ' inv--light' : '')} ref={rootRef}>
      <div className="inv-grid" aria-hidden="true"></div>

      {/* ───────── HERO (refonte aout 2026 : tout aligne a gauche, style Machina.
           Logo + lieu/date remplacent l'ancienne barre meta bordee.) ───────── */}
      <header className="inv-hero">
        <div className="inv-hero__glow" aria-hidden="true"></div>
        <div className="inv-wrap inv-hero__main">
          <div className="inv-hero__brand inv-rv">
            {/* ?v=2 : le png est servi en cache immuable (vercel.json), incrementer si le fichier change */}
            <img src="assets/brand/sgn-invest-horizontal.png?v=2" alt="[SGN] Invest" />
          </div>
          <div className="inv-hero__meta inv-rv">
            <span>Automobile Club de France</span>
            <span>Paris</span>
            <span>May 2027</span>
          </div>

          <div className="inv-hero__head">
            <h1 className="inv-h1">
              <span className="inv-mask"><span>Where sport meets</span></span>
              <span className="inv-mask"><span className="inv-silver">institutional capital</span></span>
            </h1>
          </div>

          <div className="inv-hero__lower">
            <p className="inv-hero__lead inv-rv">
              Two days in Paris where the people allocating capital to sport meet the people deploying it. <b>200 investors. 80+ Limited Partners.</b> The funds, family offices, banks and rights holders that decide how the industry gets financed in one room, during Roland-Garros week.
            </p>
            <div className="inv-hero__cta inv-rv">
              <a className="inv-btn" href="#/get-in-touch" onClick={(e) => go(e, '#/get-in-touch')}>Register your Interest <span className="inv-btn__arrow">→</span></a>
              <a className="inv-btn inv-btn--ghost" href="#/sponsor" onClick={(e) => go(e, '#/sponsor')}>Sponsor SGN Invest</a>
            </div>
          </div>
        </div>

        <div className="inv-wrap">
          <div className="inv-tvoices">
            <h2 className="inv-tvoices__title inv-rv">Top voices at SGN Invest</h2>
            <div className="inv-tvcards">
              {INV_QUOTES.map((q, i) => (
                <figure className="inv-tvcard inv-rv" key={q[1]} style={{ animationDelay: (i * 70) + 'ms' }}>
                  <blockquote className="inv-tvcard__quote">{q[0]}</blockquote>
                  <figcaption className="inv-tvcard__who">
                    <img className="inv-tvcard__ph" src={INV_CDN + q[4]} alt={q[1]} loading="lazy" />
                    <div className="inv-tvcard__name">{q[1]}</div>
                    <div className="inv-tvcard__role">{q[2]}</div>
                    <div className="inv-tvcard__org">{q[3]}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ───────── INVESTORS BAND ───────── */}
      <section className="inv-section inv-section--light" style={{ paddingTop: 'clamp(20px,3vw,40px)', paddingBottom: 'clamp(24px,3vw,44px)' }}>
        <div className="inv-wrap">
          <h2 className="inv-invhead inv-rv">Who was in the room in 2026</h2>
        </div>
        <div className="inv-invmarq" aria-hidden="true">
          <div className="inv-invmarq__track">
            {INV_STRIP.concat(INV_STRIP).map((c, i) => (
              <div className="inv-invmarq__cell" key={c.name + i}>
                {c.word
                  ? <span className="inv-invword">{c.word}</span>
                  : <img src={c.src} alt={c.name} loading="lazy" style={c.h ? { height: c.h + 'px' } : undefined} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WHY / FIGURES ───────── */}
      <section className="inv-section" style={{ paddingTop: 'clamp(40px,5vw,70px)' }}>
        <div className="inv-wrap">
          <div className="inv-shead">
            <span className="inv-shead__idx inv-rv">[01]</span>
            <div className="inv-shead__main">
              <span className="inv-eyebrow inv-rv">Why the room matters</span>
              <h2 className="inv-h2 inv-rv">A room built on qualification, not volume</h2>
              <p className="inv-shead__sub inv-rv">Every investor pass is reviewed before it is issued. We cap the room deliberately: 200 investors, 80 of them limited partners. The result is a floor where a GP meets allocators instead of vendors, and an LP meets managers instead of a queue.</p>
            </div>
          </div>

          <div className="inv-figs">
            {INV_FIGURES.map((f, i) => (
              <div className="inv-fig inv-rv" key={f[2]} style={{ animationDelay: (i * 70) + 'ms' }}>
                <InvCountUp value={f[0]} suffix={f[1]} />
                <span className="inv-fig__label">{f[2]}</span>
                {f[3] ? <span className="inv-fig__note">{f[3]}</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── VOICES ───────── */}
      <section className="inv-section" id="inv-voices" style={{ paddingBottom: 'clamp(40px,5vw,64px)' }}>
        <div className="inv-wrap">
          <div className="inv-shead">
            <span className="inv-shead__idx inv-rv">[02]</span>
            <div className="inv-shead__main">
              <span className="inv-eyebrow inv-rv">Top voices</span>
              <h2 className="inv-h2 inv-rv">The people writing<br />the cheques, on the record</h2>
            </div>
          </div>

          <div className="inv-voices">
            {INV_VOICES.map((v, i) => (
              <article className="inv-voice inv-rv" key={v[0]} style={{ animationDelay: ((i % 4) * 60) + 'ms' }}>
                <div className="inv-voice__media">
                  <span className="inv-voice__idx">{String(i + 1).padStart(2, '0')}</span>
                  <img src={INV_CDN + v[3]} alt={v[0]} loading="lazy" />
                </div>
                <div className="inv-voice__body">
                  <div className="inv-voice__name">{v[0]}</div>
                  <div className="inv-voice__role">{v[1]}</div>
                  <div className="inv-voice__org">{v[2]}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="inv-voices__foot inv-rv">
            <span className="inv-voices__note">+ 100 speakers across the full SPORT[GEN] programme</span>
            <a className="inv-btn inv-btn--ghost" href="#/speakers" onClick={(e) => go(e, '#/speakers')}>All 2026 speakers <span className="inv-btn__arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* ───────── PASSES (masquee tant que INV_TICKETS_HIDDEN) ───────── */}
      {INV_TICKETS_HIDDEN ? null : (
      <section className="inv-section" style={{ paddingTop: 0 }}>
        <div className="inv-wrap">
          <div className="inv-shead">
            <span className="inv-shead__idx inv-rv">[04]</span>
            <div className="inv-shead__main">
              <span className="inv-eyebrow inv-rv">Passes</span>
              <h2 className="inv-h2 inv-rv">Secure your place in the room</h2>
              <p className="inv-shead__sub inv-rv">One ticket, full access to both days of the SPORT[GEN] Summit and the SGN Invest programme. Super Early Bird pricing.</p>
            </div>
          </div>

          <div className="invtx-grid">
            {INV_TIX_PASSES.map((t) => (
              <div className={'invtx-card inv-rv' + (t.featured ? ' invtx-card--feat' : '')} key={t.tier}>
                <div className="invtx-card__head">
                  <span className="invtx-card__tier">{t.tier}</span>
                  {t.featured ? <span className="invtx-card__flag">★ Free for LPs</span> : null}
                </div>
                <div className="invtx-card__price">
                  <span className="invtx-card__amt">{t.price}</span>
                  {t.unit ? <span className="invtx-card__unit">{t.unit}</span> : null}
                </div>
                <p className="invtx-card__note">{invTixNote(t.note)}</p>
                <a className="inv-btn invtx-card__cta" href={t.href} target={t.href.startsWith('#') ? undefined : '_blank'} rel="noopener" onClick={t.href.startsWith('#') ? (e) => go(e, t.href) : undefined}>{t.cta}</a>
                <div className="invtx-card__rule" aria-hidden="true"></div>
                <ul className="invtx-list">
                  {t.perks.map((p) => <li key={p}><InvTixCheck /><span>{p}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ───────── SPONSORSHIP OPPORTUNITIES (feedback aout 2026, calque Machina) ───────── */}
      <section className="inv-section inv-spon">
        <div className="inv-wrap">
          <h2 className="inv-h2 inv-spon__title inv-rv">Sponsorship opportunities</h2>
          <p className="inv-spon__lead inv-rv">SGN Invest gathers the people who decide how sport gets financed. Sponsoring the summit places your brand at the table where funds, family offices and banks put capital to work.</p>
          <div className="inv-spon__grid">
            {INV_SPON_POINTS.map(([t, b], i) => (
              <div className="inv-spon__cell inv-rv" key={t} style={{ animationDelay: (i * 70) + 'ms' }}>
                <span className="inv-spon__idx">[ 0{i + 1} ]</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
          <div className="inv-spon__cta inv-rv">
            <a className="inv-btn" href="#/get-in-touch" onClick={(e) => go(e, '#/get-in-touch')}>Download Sponsorship Deck <span className="inv-btn__arrow">→</span></a>
            <a className="inv-btn inv-btn--ghost" href={INV_CALL_URL} target="_blank" rel="noopener">Book a Call</a>
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="inv-cta">
        <div className="inv-wrap">
          <span className="inv-eyebrow inv-cta__eyebrow inv-rv">[ 26 May 2027 · Paris ]</span>
          <h2 className="inv-rv">Applications for the<br />2027 room <span className="inv-silver">are open.</span></h2>
          <p className="inv-cta__sub inv-rv">LP passes are complimentary and reviewed individually. Investor and sponsor places are limited by design.</p>
          <div className="inv-cta__btns inv-rv">
            <a className="inv-btn" href="#/get-in-touch" onClick={(e) => go(e, '#/get-in-touch')}>Register interest <span className="inv-btn__arrow">→</span></a>
            <a className="inv-btn inv-btn--ghost" href="#/get-in-touch" onClick={(e) => go(e, '#/get-in-touch')}>Talk to the team</a>
          </div>
        </div>
      </section>

      <a className="inv-lpbar" href="#/why-lp" onClick={(e) => go(e, '#/why-lp')}>
        <div className="inv-lpbar__track">
          {Array.from({ length: 12 }).map((_, i) => (
            <span className="inv-lpbar__item" key={i}>Complimentary for verified LPs · Apply for an LP Pass <span className="inv-lpbar__sep">✦</span></span>
          ))}
        </div>
      </a>
    </div>
  );
}

window.InvestmentSummitPage = InvestmentSummitPage;


/* ============================================================
   [SGN] INVESTMENT SUMMIT, Tickets page (#/investment-summit/tickets)
   ============================================================ */

const INV_TIX_BUY = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
const INV_TIX_PRESS = '#/get-in-touch';

const INV_TIX_PASSES = [
  {
    tier: 'LP Pass', price: 'Free', unit: 'for qualified LPs', featured: true,
    note: 'Complimentary two-day pass for **verified Limited Partners**',
    cta: 'Apply for an LP Pass', href: INV_TIX_BUY,
    perks: [
      'Full access to both summit days + SGN Invest programme',
      'Access to the LP & investor networking lounge',
      'Curated introductions to GPs and funds raising',
      'Invitation to the LP-only investor breakfast',
    ],
  },
  {
    tier: 'Investor Pass', price: '€1,290', unit: 'ex. VAT',
    note: 'Two-day pass for **active investors & funds**',
    cta: 'Buy a Ticket', href: INV_TIX_BUY,
    perks: [
      'Full access to both summit days + SGN Invest programme',
      'Access to the investor networking lounge',
      'Curated deal-flow & startup access',
      'Investor-only roundtables',
    ],
  },
  {
    tier: 'VIP Investor Pass', price: '€2,490', unit: 'ex. VAT',
    note: '**Everything** on an **Investor Pass** plus...',
    cta: 'Buy a Ticket', href: INV_TIX_BUY,
    perks: [
      'Invitation to the exclusive VIP Dinner',
      'Access to the VIP Lounge on both days',
      'Private meeting rooms for deal-making',
      'Concierge introductions to LPs & founders',
    ],
  },
];

const INV_TIX_PRESS_PASS = {
  tier: 'Press Accreditation',
  note: 'Apply for press accreditation to cover SGN Invest 2027 on-site. Approved applicants receive media access, assets, and coordination support ahead of the summit.',
  cta: 'Media Pass Application', href: INV_TIX_PRESS,
  perks: [
    'Access to press updates, assets, and on-site support',
    'Interview opportunities with speakers, partners, and investors',
    'Application reviewed on a rolling basis',
  ],
};

const INV_TIX_GROUP = {
  tier: 'Group Discount',
  note: 'Attending as a team? Groups of 3+ from the same organisation receive a reduced rate across Investor and VIP passes. Get in touch for a tailored group quote.',
  cta: 'Request a Group Rate', href: INV_TIX_PRESS,
  perks: [
    'Discounted rate for 3 or more passes',
    'Single invoice & coordinated registration',
    'Ideal for funds, LPs and portfolio teams',
  ],
};

const INV_TIX_EXPERIENCE = [
  ['Meet the capital', 'Sit across from the LPs, GPs and family offices actually writing cheques in sport.'],
  ['See the deal flow', 'First-hand access to the funds, founders and rights holders shaping the market.'],
  ['Forge partnerships', 'Turn introductions into term sheets, co-investments and commercial deals.'],
  ['Shape the market', 'Be part of the group defining how capital gets deployed across sport in Europe.'],
];

function InvTixCheck() {
  return (
    <svg className="invtx-check" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function invTixNote(str) {
  return str.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((chunk, i) =>
    chunk.startsWith('**') && chunk.endsWith('**')
      ? <b key={i}>{chunk.slice(2, -2)}</b>
      : <React.Fragment key={i}>{chunk}</React.Fragment>
  );
}

function InvestTicketsPage() {
  const investLogos = INV_LOGOS.map(([alt, src, asis]) => ({ src, alt, asis: !!asis }));
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };

  return (
    <div className="inv inv--light">
      <div className="inv-grid" aria-hidden="true"></div>

      {/* ───────── HERO ───────── */}
      <header className="invtx-hero">
        <div className="inv-wrap">
          <span className="invtx-idx inv-rv">007 / Get access</span>
          <h1 className="invtx-title inv-rv">Tickets for<br />SGN Invest</h1>
          <p className="invtx-sub inv-rv">Europe's leading sport investment event.</p>
          <div className="invtx-hero__cta inv-rv">
            <a className="inv-btn" href={INV_TIX_BUY} target="_blank" rel="noopener">Buy a Ticket <span className="inv-btn__arrow">→</span></a>
            <a className="inv-btn inv-btn--ghost" href="#/sponsor" onClick={(e) => go(e, '#/sponsor')}>Partner with SGN</a>
          </div>
        </div>
      </header>

      {/* ───────── PASS GRID ───────── */}
      <section className="inv-section">
        <div className="inv-wrap">
          <div className="inv-shead">
            <span className="inv-shead__idx inv-rv">[01]</span>
            <div className="inv-shead__main">
              <span className="inv-eyebrow inv-rv">Passes</span>
              <h2 className="inv-h2 inv-rv">Book your ticket</h2>
              <p className="inv-shead__sub inv-rv">One ticket, full access to both days of the SPORT[GEN] Summit and the SGN Invest programme. LP passes are complimentary for verified Limited Partners.</p>
            </div>
          </div>

          <div className="invtx-grid">
            {INV_TIX_PASSES.map((t) => (
              <div className={'invtx-card inv-rv' + (t.featured ? ' invtx-card--feat' : '')} key={t.tier}>
                <div className="invtx-card__head">
                  <span className="invtx-card__tier">{t.tier}</span>
                  {t.featured ? <span className="invtx-card__flag">★ Free for LPs</span> : null}
                </div>
                <div className="invtx-card__price">
                  <span className="invtx-card__amt">{t.price}</span>
                  {t.unit ? <span className="invtx-card__unit">{t.unit}</span> : null}
                </div>
                <p className="invtx-card__note">{invTixNote(t.note)}</p>
                <a className="inv-btn invtx-card__cta" href={t.href} target={t.href.startsWith('#') ? undefined : '_blank'} rel="noopener" onClick={t.href.startsWith('#') ? (e) => go(e, t.href) : undefined}>{t.cta}</a>
                <div className="invtx-card__rule" aria-hidden="true"></div>
                <ul className="invtx-list">
                  {t.perks.map((p) => <li key={p}><InvTixCheck /><span>{p}</span></li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Press accreditation + group discount, side by side */}
          <div className="invtx-duo">
            <div className="invtx-press inv-rv">
              <span className="invtx-card__tier">{INV_TIX_PRESS_PASS.tier}</span>
              <p className="invtx-press__note">{INV_TIX_PRESS_PASS.note}</p>
              <ul className="invtx-list invtx-press__list">
                {INV_TIX_PRESS_PASS.perks.map((p) => <li key={p}><InvTixCheck /><span>{p}</span></li>)}
              </ul>
              <a className="inv-btn inv-btn--ghost invtx-press__cta" href={INV_TIX_PRESS_PASS.href} onClick={(e) => go(e, INV_TIX_PRESS_PASS.href)}>{INV_TIX_PRESS_PASS.cta} <span className="inv-btn__arrow">→</span></a>
            </div>
            <div className="invtx-press inv-rv">
              <span className="invtx-card__tier">{INV_TIX_GROUP.tier}</span>
              <p className="invtx-press__note">{INV_TIX_GROUP.note}</p>
              <ul className="invtx-list invtx-press__list">
                {INV_TIX_GROUP.perks.map((p) => <li key={p}><InvTixCheck /><span>{p}</span></li>)}
              </ul>
              <a className="inv-btn inv-btn--ghost invtx-press__cta" href={INV_TIX_GROUP.href} onClick={(e) => go(e, INV_TIX_GROUP.href)}>{INV_TIX_GROUP.cta} <span className="inv-btn__arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── EXPERIENCE ───────── */}
      <section className="inv-section inv-section--light">
        <div className="inv-wrap">
          <div className="inv-shead">
            <span className="inv-shead__idx inv-rv">[02]</span>
            <div className="inv-shead__main">
              <span className="inv-eyebrow inv-rv">Attendance value</span>
              <h2 className="inv-h2 inv-rv">The SGN Invest experience</h2>
            </div>
          </div>
          <div className="invtx-xp">
            {INV_TIX_EXPERIENCE.map(([t, b], i) => (
              <div className="invtx-xp__cell inv-rv" key={t} style={{ animationDelay: (i * 70) + 'ms' }}>
                <span className="invtx-xp__idx">0{i + 1}</span>
                <h3 className="invtx-xp__title">{t}</h3>
                <p className="invtx-xp__body">{b}</p>
              </div>
            ))}
          </div>
          <div className="invtx-xp__cta inv-rv">
            <a className="inv-btn" href={INV_TIX_BUY} target="_blank" rel="noopener">Buy a Ticket <span className="inv-btn__arrow">→</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}

window.InvestTicketsPage = InvestTicketsPage;
