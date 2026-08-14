/* [SGN] INVESTMENT SUMMIT, sub-pages: Speakers · Media · Sponsor · Agenda
   Light / graphite / mono DA (reuses .inv--light + .inv-* atoms from invest.css). */
const { useRef: useSisRef, useState: useSisState, useEffect: useSisEffect } = React;

const SIS_BUY = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
const SIS_BOOK_CALL = 'https://meetings-eu1.hubspot.com/aurelien-linyer/discovery-call?uuid=b569f199-9acb-4240-9d21-5907804ca26b';
const SIS_CDN = 'https://framerusercontent.com/images/';
const sisGo = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };

/* The leading investment voices at the Summit, same lineup as the SIS home. */
const SIS_VOICES = [
  ['Marc Lasry', 'Co-Founder, Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png'],
  ['Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg'],
  ['Paolo Della Rovere', 'Managing Director', 'Morgan Stanley', 'pdvLJbsdJnsLkLnZcQRwHa8edfM.png'],
  ['Arnaud Caudoux', 'Deputy CEO', 'Bpifrance', '7X49U9IfeLJzZYasFXCHPvLZrE.png'],
  ['Mofses Kechichian', 'Managing Director', 'TRAIL Capital', 'SC5jKA69BcOxMSril0AxRPtLLqg.webp'],
  ['Kyang Yung', 'Chief Investment Officer', 'Gamma Waves Partners', 'NPxvIK1ahJtK6aTBHkdSslw.jpg'],
  ['Danny Menken', 'Co-Founder & General Partner', 'Athvance Capital', 'm9f95fpcRMqDIYHr5nWy622oONE.png'],
  ['Mark Wyatt', 'Managing Director', 'Alvarez & Marsal', 'v9vatvO0s2B6K43xRT7bxN1gXk.jpg'],
  ['Kushaan Ahuja', 'Partner', 'Will Ventures', 'ZIezVLEQ6WTmMov8zVurQ9bUI.webp'],
  ['Arjun Kapur', 'Vice President', 'Left Lane Capital', 'jW9ZIvK1FFDsYJ67Ep7xOzwD6k.jpg'],
  ['Charlie Stebbings', 'Head of Sport', '20VC', 'BuPSqhLT52NQIR9BN64DO9d3Ec.jpg'],
  ['Andy Marston', 'Head of Corporate Ventures', 'The Players Fund', 'KkyQMkFZGwFse8tkTEFCbCjThXc.png'],
  ['Adriana Crovetto', 'Investor', 'Gamma Waves Partners', 'G8JCKXENjWIMdqZJ8T2iPOFgI8.jpg'],
  ['António Caçorino', 'CEO & Founder', 'APEX', 'OoVzkBGf4K24lUhuRZoKcvb4.jpg'],
  ['Bex Smith', 'CEO & Founder', 'Crux Football', 'cSUoLhNbaT5EgvvrrJdgyz5ss4.jpg'],
];

function SisShell({ idx, kicker, title, sub, children }) {
  return (
    <div className="inv inv--light sis-page">
      <div className="inv-grid" aria-hidden="true"></div>
      <div className="inv-wrap">
        <header className="sis-phead">
          <span className="sis-phead__idx">{idx}, {kicker}</span>
          <h1>{title}</h1>
          {sub ? <p className="sis-phead__sub">{sub}</p> : null}
        </header>
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────── SPEAKERS ─────────────────────────── */
function SisSpeakersPage() {
  return (
    <SisShell idx="[01]" kicker="The room speaks"
      title={<>The voices shaping<br />the capital of sport</>}
      sub="Limited partners, fund managers, bankers and the operators they back, the people defining how money moves through sport, on stage across two days in Paris.">
      <div className="sis-spk-grid">
        {SIS_VOICES.map((s, i) => (
          <article className="sis-spk" key={s[0] + i}>
            <div className="sis-spk__media">
              <span className="sis-spk__idx">{String(i + 1).padStart(2, '0')}</span>
              <img src={SIS_CDN + s[3]} alt={s[0]} loading="lazy" />
            </div>
            <div className="sis-spk__body">
              <div className="sis-spk__name">{s[0]}</div>
              <div className="sis-spk__role">{s[1]}</div>
              <div className="sis-spk__org">{s[2]}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="inv-voices__foot inv-rv" style={{ marginTop: 'clamp(36px,5vw,56px)' }}>
        <span className="inv-voices__note">+ 100 speakers across the full SPORT[GEN] programme. Updated continuously toward May 2027.</span>
        <a className="inv-btn" href={SIS_BUY} target="_blank" rel="noopener">Request your pass <span className="inv-btn__arrow">→</span></a>
      </div>
    </SisShell>
  );
}

/* ─────────────────────────── MEDIA ─────────────────────────── */
const SIS_MEDIA_REASONS = [
  ['[ 01 ]', 'Where the deals surface first', 'Fund launches, raises, M&A and rights deals are announced and debated on stage, original stories for finance and business desks.'],
  ['[ 02 ]', 'Access you can quote', 'On-record fireside chats and briefings with managing partners, CIOs and CEOs, plus a dedicated press room for one-to-one interviews.'],
  ['[ 03 ]', 'Numbers behind the noise', 'Proprietary data on capital flows into sport, valuations, deal volume and where institutional money is moving next.'],
  ['[ 04 ]', 'The European angle', 'Held during Roland-Garros week in Paris: the European story on sports investment, with global funds in the room.'],
];

const SIS_PRESS = [
  ['Bloomberg', 'Markets'],
  ['Financial Times', 'Companies'],
  ['Les Échos', 'Finance'],
  ['Reuters', 'Deals'],
  ['Sportico', 'Business of Sport'],
  ['SportBusiness', 'Industry'],
];

function SisMediaPage() {
  return (
    <SisShell idx="[02]" kicker="Press & media"
      title={<>A finance story,<br />told from inside sport</>}
      sub="SGN Invest is built for finance, economics and business media. Accreditation gives you the room where sport's capital is raised, priced and deployed.">
      <div className="sis-media-grid">
        {SIS_MEDIA_REASONS.map((r) => (
          <div className="sis-media-card" key={r[1]}>
            <span className="sis-media-card__idx">{r[0]}</span>
            <h3>{r[1]}</h3>
            <p>{r[2]}</p>
          </div>
        ))}
      </div>

      <div className="sis-press">
        <div>
          <span className="inv-eyebrow inv-rv">Who covers it</span>
          <h2 className="inv-h2 inv-rv" style={{ marginTop: '14px' }}>Finance &amp; sport-business desks in the room</h2>
          <p className="sis-phead__sub" style={{ marginTop: '18px' }}>
            A non-exhaustive picture of the outlets we host. Media passes are complimentary for credentialed journalists; we review every request individually.
          </p>
          <a className="inv-btn" href="#/get-in-touch" style={{ marginTop: '28px' }}>
            Apply for media accreditation <span className="inv-btn__arrow">→</span>
          </a>
        </div>
        <div className="sis-press__list">
          {SIS_PRESS.map((p) => (
            <div className="sis-press__row" key={p[0]}><span>{p[0]}</span><span>{p[1]}</span></div>
          ))}
        </div>
      </div>
    </SisShell>
  );
}

/* ─────────────────────────── SPONSOR ─────────────────────────── */
const SIS_FIG = [
  ['200', '+', 'Active investors'],
  ['300', '+', 'Organizations'],
  ['70', '%', 'Director-level & up'],
];

const SIS_SPON_DECK = '#/get-in-touch';
const SIS_SPON_CALL = SIS_BOOK_CALL;

function SisSponIcon({ name }) {
  const p = {
    connect: <><circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="12" cy="18" r="2.4" /><path d="M7.6 7.6 11 15M16.4 7.6 13 15M8 6h8" /></>,
    tech: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /><circle cx="12" cy="12" r="3.2" /></>,
    handshake: <><path d="M3 9l4-2 5 3 5-3 4 2" /><path d="M12 10v8M8 12l4 3 4-3" /></>,
    future: <><path d="M4 20V8M10 20V4M16 20v-9M22 20H2" /></>,
    learn: <><path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" /><path d="M9.3 19.5h5.4M10 21.5h4" /></>,
    flow: <><path d="M12 3c1.4 2.6.6 4.4-.6 6C10 10.8 9 12.3 9 14a3 3 0 0 0 6 0c0-1-.3-1.9-.8-2.7.9.4 1.8 1.4 1.8 3.2A5 5 0 1 1 8 11.2C9.6 9 12 7 12 3Z" /></>,
    globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" /></>,
    room: <><rect x="4" y="5" width="16" height="14" rx="1.5" /><path d="M4 10h16M9 5v14" /></>,
    convert: <><path d="M4 18l5-6 4 3 7-8" /><path d="M20 7v4h-4" /></>,
    beyond: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" /></>,
  }[name];
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{p}</svg>
  );
}

const SIS_EXPERIENCE = [
  ['connect', 'Connect with capital', 'Meet the LPs, GPs and family offices actively writing cheques across sport.'],
  ['tech', 'See the deal flow first', 'First-hand access to the funds, founders and rights holders shaping the market.'],
  ['handshake', 'Forge lasting partnerships', 'Turn introductions into pilots, co-investments and commercial deals.'],
  ['future', 'Shape the future', 'Be part of the group defining how capital gets deployed across European sport.'],
];

const SIS_WHY = [
  ['room', 'Access the room', "Direct access to 1,500+ founders, investors and enterprise leaders. Over 70% hold director-level or investment authority, the most targeted sport-investment audience on a single floor in Europe."],
  ['convert', 'Visibility that converts', 'Position your brand alongside the funds, banks and rights holders defining the next era of sport. Sponsoring SGN places you at the center of the most significant sport-investment conversation in Europe.'],
  ['beyond', 'Outcomes beyond the event', 'SGN is where pilots get scoped, partnerships begin and capital meets conviction. Sponsors gain dedicated touchpoints on the floor, converting presence into relationships that extend well beyond the summit.'],
];

function SisCount({ value, suffix }) {
  const target = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
  const ref = useSisRef(null);
  const [val, setVal] = useSisState(0);
  useSisEffect(() => {
    let raf; const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) {
        io.disconnect();
        const t0 = performance.now(), dur = 1300;
        const tick = (t) => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); setVal(Math.round(target * e)); if (p < 1) raf = requestAnimationFrame(tick); };
        raf = requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [target]);
  return <span className="inv-fig__num" ref={ref}>{val}{suffix}</span>;
}

function SisSponsorPage() {
  return (
    <SisShell idx="[03]" kicker="Partner with us"
      title={<>Put your brand<br />where capital meets</>}
      sub="Reach the most senior, hardest-to-access audience in sport: the funds, family offices and banks deciding where the next decade of investment goes.">
      <div className="sis-spon-cta inv-rv">
        <a className="inv-btn" href={SIS_SPON_DECK} onClick={(e) => sisGo(e, '#/get-in-touch')}>Explore Sponsorship Opportunities <span className="inv-btn__arrow">→</span></a>
        <a className="inv-btn inv-btn--ghost" href={SIS_SPON_DECK} onClick={(e) => sisGo(e, '#/get-in-touch')}>Download Sponsorship Deck</a>
      </div>

      <div className="inv-figs" style={{ marginTop: 'clamp(20px,3vw,36px)' }}>
        {SIS_FIG.map((f) => (
          <div className="inv-fig" key={f[2]}>
            <SisCount value={f[0]} suffix={f[1]} />
            <span className="inv-fig__label">{f[2]}</span>
          </div>
        ))}
      </div>

      {/* ── Build your presence ── */}
      <section className="sis-spon-build">
        <h2 className="sis-spon-build__title inv-rv">Build your presence at<br />SGN Invest 2027</h2>
        <p className="sis-spon-build__lead inv-rv">SGN is where European sport makes its most consequential investment decisions. Position your brand alongside the funds, banks and family offices deploying capital across the game.</p>
        <p className="sis-spon-build__lead inv-rv">Sponsoring SGN does not put your logo on a banner. It puts your brand inside that conversation, in front of the people actively building, buying and funding sport at scale.<br />The room is being filled. Make sure your brand is in it.</p>
        <div className="sis-spon-cta sis-spon-cta--center inv-rv">
          <a className="inv-btn" href={SIS_SPON_DECK} onClick={(e) => sisGo(e, '#/get-in-touch')}>Request the Sponsorship Deck <span className="inv-btn__arrow">→</span></a>
          <a className="inv-btn inv-btn--ghost" href={SIS_SPON_CALL} target="_blank" rel="noopener">Book a Call</a>
        </div>
      </section>

      {/* ── The SGN experience ── */}
      <section className="sis-spon-xp">
        <h2 className="sis-spon-xp__title inv-rv">The SGN Experience</h2>
        <div className="sis-spon-xp__grid">
          {SIS_EXPERIENCE.map((x) => (
            <div className="sis-spon-xp__cell inv-rv" key={x[1]}>
              <span className="sis-spon-xp__ico"><SisSponIcon name={x[0]} /></span>
              <div>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sis-spon-cta sis-spon-cta--center inv-rv">
          <a className="inv-btn" href={SIS_SPON_DECK} onClick={(e) => sisGo(e, '#/get-in-touch')}>Explore Sponsorship Opportunities <span className="inv-btn__arrow">→</span></a>
        </div>
      </section>

      {/* ── Why sponsor ── */}
      <section className="sis-spon-why">
        <h2 className="sis-spon-why__title inv-rv">Why Sponsor SGN Invest</h2>
        <div className="sis-spon-why__grid">
          {SIS_WHY.map((w) => (
            <div className="sis-spon-why__col inv-rv" key={w[1]}>
              <span className="sis-spon-why__ico"><SisSponIcon name={w[0]} /></span>
              <h3>{w[1]}</h3>
              <p>{w[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="inv-voices__foot inv-rv" style={{ marginTop: 'clamp(36px,5vw,56px)' }}>
        <span className="inv-voices__note">Custom packages available, we build partnerships around your objectives.</span>
        <a className="inv-btn" href="#/get-in-touch">Talk to the team <span className="inv-btn__arrow">→</span></a>
      </div>
    </SisShell>
  );
}

/* ─────────────────────────── AGENDA ─────────────────────────── */
const SIS_AGENDA = [
  ['Day 1, 27 May 2027', [
    ['09:00', 'Opening: the state of sports capital', 'Where money is flowing across leagues, teams and infrastructure, and what changed this year.'],
    ['09:40', 'Fireside with Marc Lasry', 'Avenue Capital, building a portfolio at the intersection of sport and entertainment.'],
    ['10:30', 'Private capital in sport', 'Carlyle · TRAIL · Morgan Stanley on PE, control deals and the new buyer landscape.'],
    ['11:30', 'Smart money in sport', 'Will Ventures · Left Lane · 20VC, where venture is underwriting the next sports businesses.'],
    ['14:00', 'France as Europe\u2019s sports investment hub', 'Bpifrance on the institutional thesis for backing the sector at scale.'],
    ['15:00', 'The blind spot of Private Equity', 'APEX on the deals the market keeps mispricing.'],
  ]],
  ['Day 2, 28 May 2027', [
    ['09:30', 'LP perspectives', 'What allocators need to see before they commit to sport as an asset class.'],
    ['10:30', 'The women\u2019s sport investment window', 'Mastercard · Crux · BJK Cup on pricing the fastest-growing opportunity in sport.'],
    ['11:30', 'Rights, media & the value chain', 'How distribution shifts are repricing the assets underneath every deal.'],
    ['14:00', 'Family offices & sovereign capital', 'Private money entering sport, patient, strategic and increasingly hands-on.'],
    ['15:00', 'Deal-making roundtables', 'Closed-door sessions matching capital with operators and rights holders.'],
    ['16:00', 'Closing & investor reception', 'Where the conversations started on stage continue off it.'],
  ]],
];

function SisAgendaPage() {
  return (
    <SisShell idx="[04]" kicker="Two days in Paris"
      title={<>The programme<br />where deals begin</>}
      sub="An investment-led agenda across the SPORT[GEN] Summit. Sessions, fireside chats and closed-door roundtables, built for the people raising and deploying capital. Times subject to change.">
      <div className="sis-agenda">
        {SIS_AGENDA.map((day) => (
          <div key={day[0]}>
            <div className="sis-agenda__day">{day[0]}</div>
            {day[1].map((s, i) => (
              <div className="sis-agenda__row" key={i}>
                <span className="sis-agenda__time">{s[0]}</span>
                <span>
                  <span className="sis-agenda__t">{s[1]}</span>
                  <span className="sis-agenda__d">{s[2]}</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="inv-voices__foot inv-rv" style={{ marginTop: 'clamp(36px,5vw,56px)' }}>
        <span className="inv-voices__note">Full SPORT[GEN] programme runs alongside SGN Invest.</span>
        <a className="inv-btn" href={SIS_BUY} target="_blank" rel="noopener">Request your pass <span className="inv-btn__arrow">→</span></a>
      </div>
    </SisShell>
  );
}

/* ─────────────────────────── WHY ATTEND AS AN LP ─────────────────────────── */
function sisBold(str) {
  return str.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((c, i) =>
    c.startsWith('**') && c.endsWith('**')
      ? <b key={i} style={{ color: 'inherit' }}>{c.slice(2, -2)}</b>
      : <React.Fragment key={i}>{c}</React.Fragment>
  );
}

const SIS_LP_WHY = [
  ['learn', 'Sharpen your strategy', 'Gain forward-looking perspectives through **peer learning, expert-led sessions** and **curated content** designed to help LPs navigate strategy shifts, manager selection and private-markets trends with confidence.'],
  ['flow', 'Source differentiated deal flow', 'Identify differentiated deal flow through targeted meetings with **leading and emerging GPs**, structured **networking formats** and a **digital platform** showcasing funds in market and company insights.'],
  ['globe', 'Join the community', 'Connect with a high-quality **international community of investors**, share challenges and benchmarks, and build relationships that extend far beyond the two days of SGN Invest.'],
];

const SIS_LP_BREAKFAST = [
  'Invite-only table of Limited Partners and senior allocators',
  'Chatham House rule, candid, off-record conversation',
  'Curated seating around live allocation themes',
  'Hosted ahead of the main-stage programme',
];

function SisLpPage() {
  return (
    <SisShell idx="[05]" kicker="For Limited Partners"
      title={<>LPs at<br />SGN Invest</>}
      sub="The one room in Europe where the people allocating capital into sport meet the managers, operators and rights holders deploying it. Complimentary access for verified Limited Partners.">
      <div className="sis-spon-cta inv-rv">
        <a className="inv-btn" href="#/get-in-touch" onClick={(e) => sisGo(e, '#/get-in-touch')}>Apply for an LP Pass <span className="inv-btn__arrow">→</span></a>
        <a className="inv-btn inv-btn--ghost" href="#/agenda" onClick={(e) => sisGo(e, '#/agenda')}>See the programme</a>
      </div>

      {/* ── Why attend as an LP ── */}
      <section className="sis-spon-why">
        <h2 className="sis-spon-why__title inv-rv">Why Attend as an LP</h2>
        <div className="sis-spon-why__grid">
          {SIS_LP_WHY.map((w) => (
            <div className="sis-spon-why__col inv-rv" key={w[1]}>
              <span className="sis-spon-why__ico"><SisSponIcon name={w[0]} /></span>
              <h3>{w[1]}</h3>
              <p>{sisBold(w[2])}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LP-only breakfast side event ── */}
      <section className="sis-lp-break">
        <div className="sis-lp-break__main">
          <span className="inv-eyebrow inv-rv">Side event</span>
          <h2 className="inv-h2 inv-rv" style={{ marginTop: '14px' }}>LP-Only Investor Breakfast</h2>
          <p className="sis-phead__sub inv-rv" style={{ marginTop: '18px' }}>
            A closed-door breakfast reserved for Limited Partners, held before the main programme opens. A smaller, senior room to compare notes on allocation, manager selection and where sport sits in the portfolio, before the floor fills up.
          </p>
          <a className="inv-btn inv-rv" href="#/get-in-touch" onClick={(e) => sisGo(e, '#/get-in-touch')} style={{ marginTop: '28px' }}>
            Request an invitation <span className="inv-btn__arrow">→</span>
          </a>
        </div>
        <div className="sis-lp-break__side inv-rv">
          <div className="sis-lp-break__meta">
            <div><span>Day 1</span><b>28 May 2027</b></div>
            <div><span>Time</span><b>08:00, 09:00</b></div>
            <div><span>Location</span><b>Investor Lounge, Paris</b></div>
          </div>
          <ul className="sis-lp-break__list">
            {SIS_LP_BREAKFAST.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </section>

      <div className="inv-voices__foot inv-rv" style={{ marginTop: 'clamp(36px,5vw,56px)' }}>
        <span className="inv-voices__note">LP passes are complimentary for verified Limited Partners.</span>
        <a className="inv-btn" href="#/get-in-touch" onClick={(e) => sisGo(e, '#/get-in-touch')}>Apply for an LP Pass <span className="inv-btn__arrow">→</span></a>
      </div>
    </SisShell>
  );
}

/* ─────────────────────────── GET IN TOUCH ─────────────────────────── */
const SIS_GIT_POINTS = [
  'Instant access to the SGN Invest 2027 deck',
  'Tailored access for funds, LPs, sponsors and delegations',
  'Newsletter and early ticket release',
  'Speak directly with the SGN Invest team',
];

function SisGetInTouchPage() {
  const { BrevoForm } = window;
  const [sent, setSent] = React.useState(false);
  const deckPdf = window.BREVO_FORMS['deck-invest'].pdf;
  return (
    <SisShell idx="[06]" kicker="Talk to us"
      title={<>Get in<br />touch</>}
      sub="Learn more about the event, subscribe to our newsletter and gain exclusive access. Our team will contact you today.">
      <div className="sis-git">
        <div className="sis-git__side inv-rv">
          <ul className="sis-lp-break__list">
            {SIS_GIT_POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <a className="inv-btn inv-btn--ghost sis-git__call" href={SIS_BOOK_CALL} target="_blank" rel="noopener">
            Book a call instead
          </a>
        </div>
        <div className="sis-git__form inv-rv">
          <BrevoForm form="deck-invest" onSuccess={() => setSent(true)} />
          {sent ? (
            <p className="sis-git__note">
              Opening the deck. If nothing happens,{' '}
              <a href={deckPdf}>open it here</a>.
            </p>
          ) : null}
        </div>
      </div>
    </SisShell>
  );
}

Object.assign(window, { SisSpeakersPage, SisMediaPage, SisSponsorPage, SisAgendaPage, SisLpPage, SisGetInTouchPage });
