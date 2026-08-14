/* SPORT[GEN], legal pages, 404, brochure download pages (extracted 1:1 from the live site export) */

function LegalBody({ doc }) {
  const out = [];
  let list = null;
  doc.items.forEach(([tag, text], i) => {
    if (tag === 'li') {
      if (!list) { list = []; out.push({ ul: list, key: 'ul' + i }); }
      list.push(text);
      return;
    }
    list = null;
    out.push({ tag, text, key: tag + i });
  });
  return (
    <div className="legal__body">
      {out.map((b) => {
        if (b.ul) return <ul key={b.key}>{b.ul.map((t, j) => <li key={j}>{t}</li>)}</ul>;
        if (b.tag === 'h2') return <h2 key={b.key}>{b.text}</h2>;
        if (b.tag === 'h3') return <h3 key={b.key}>{b.text}</h3>;
        if (b.tag === 'h4') return <h4 key={b.key}>{b.text}</h4>;
        return <p key={b.key}>{b.text}</p>;
      })}
    </div>
  );
}

function LegalPage({ docKey }) {
  const doc = window.SGLegal[docKey];
  return (
    <React.Fragment>
      <section className="legal-hero">
        <div className="sg-container"><h1 className="legal-hero__title">{doc.title}</h1></div>
      </section>
      <section className="section">
        <div className="sg-container legal">
          <LegalBody doc={doc} />
        </div>
      </section>
    </React.Fragment>
  );
}

function TermsPage() { return <LegalPage docKey="terms" />; }
function PrivacyPage() { return <LegalPage docKey="privacy" />; }
function ContestRulesPage() { return <LegalPage docKey="contest" />; }

function NotFoundPage() {
  const go = (e) => { e.preventDefault(); window.location.hash = '/'; };
  return (
    <section className="nf">
      <div className="sg-container nf__inner">
        <p className="nf__code">404</p>
        <p className="nf__text">Even champions miss sometimes. Let’s get you back on track.</p>
        <a className="nf__btn" href="#/" onClick={go}>
          <span>Return to the Summit</span>
          <span className="nf__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

/* Le PDF est ouvert dans l'onglet courant par <BrevoForm>, qui lit le chemin dans
   BREVO_FORMS['brochure-sgn'].pdf. On le relit ici pour le lien de secours, visible le temps
   que la navigation parte. */
const BROCHURE_PDF = window.BREVO_FORMS['brochure-sgn'].pdf;

function BrochurePage({ startup }) {
  const { interests } = window.SGData;
  const loop = interests.concat(interests);
  const [sent, setSent] = React.useState(false);
  return (
    <section className="git-wrap">
      <div className="sg-container sg-container--wide git">
        <div className="git__left reveal">
          <h1 className="git__title">{startup ? 'Download our Startup Brochure' : 'Download our Brochure'}</h1>
          <h4 className="git__text">
            {startup
              ? 'Everything about The Draft, startup tickets and exhibition opportunities, straight to your inbox.'
              : 'Discover the full SportGen Summit experience, program, audience, partners and opportunities.'}
          </h4>
          <img className="git__brochure" src="https://framerusercontent.com/images/6e0sW65RJ23al9vnYbjjTEhbStw.png" alt="SportGen Summit brochure" loading="lazy" />
        </div>
        <div className="git__right reveal">
          <div className="git__form-panel">
            <window.BrevoForm form="brochure-sgn" onSuccess={() => setSent(true)} />
            {sent ? (
              <p className="git__form-note">
                Opening the brochure. If nothing happens,{' '}
                <a href={BROCHURE_PDF}>open it here</a>.
              </p>
            ) : null}
          </div>
          <div className="git__chips" aria-hidden="true">
            <div className="git__chips-track">
              {loop.map((c, i) => (
                <span className="git-chip" key={i}>
                  <span className="git-chip__icon"></span>
                  <span className="git-chip__label">{c}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadBrochurePage() { return <BrochurePage />; }
function DownloadBrochureStartupPage() { return <BrochurePage startup />; }

const SITEMAP_GROUPS = [
  {
    label: 'The Summit',
    blurb: 'The two days in Paris, who, what and why.',
    links: [
      ['Home', '#/', 'Overview of the 2027 edition'],
      ['Agenda 2026', '#/agenda', 'Full programme across all stages'],
      ['Why Attend', '#/why-attend', 'The case for joining'],
      ['Speakers', '#/speakers', '71 leaders shaping sport'],
      ['Startup Competition', '#/startup-competition', 'The Draft, pitch on the main stage'],
      ['Content Themes', '#/tracks', 'The tracks structuring the agenda'],
      ['Media', '#/medias', 'Press, coverage and assets'],
    ],
  },
  {
    label: 'SGN Week',
    blurb: 'Everything happening around the Summit in Paris.',
    links: [
      ['SGN Week', '#/side-events', 'A full week of sport in the city'],
      ['Investor Breakfast', '#/investor-breakfast', 'Day 1, deals before the day begins'],
      ['Half-Time Drinks', '#/half-time-drinks', 'Day 1, sundown on the terrace'],
      ['VIP Dinner', '#/vip-dinner', 'An evening near Place de la Concorde'],
      ['Closing Drinks', '#/closing-drinks', 'Day 2, one last toast'],
      ['French Open', '#/french-open', 'Roland-Garros experiences'],
      ['Plan Your Trip', '#/plan-your-trip', 'Travel, stay and getting around'],
    ],
  },
  {
    label: 'Tickets & Contact',
    blurb: 'Secure your place and reach the team.',
    links: [
      ['Tickets', '#/tickets', 'Passes and VIP options'],
      ['Get in Touch', '#/get-in-touch', 'Message us or book a call'],
      ['FAQ', '#/faq', 'Answers to common questions'],
      ['Partner / Sponsor', '#/partner', 'Partnership opportunities'],
    ],
  },
  {
    label: 'Resources & Legal',
    blurb: 'Downloads, policies and the rest of the site.',
    links: [
      ['Download Brochure', '#/download-brochure', 'The full Summit experience'],
      ['Startup Brochure', '#/download-brochure-startup', 'The Draft & startup tickets'],
      ['Terms & Conditions', '#/terms-and-conditions', 'Site and ticketing terms'],
      ['Privacy Policy', '#/privacy', 'How we handle your data'],
      ['Official Contest Rules', '#/official-contest-rules', 'The Draft competition rules'],
      ['404, Not Found', '#/404', 'The page we serve when lost'],
    ],
  },
];

function SitemapPage() {
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const total = SITEMAP_GROUPS.reduce((n, g) => n + g.links.length, 0);
  return (
    <React.Fragment>
      <section className="legal-hero">
        <div className="sg-container">
          <p className="sitemap__eyebrow">Sitemap</p>
          <h1 className="legal-hero__title">All pages</h1>
          <p className="sitemap__lede">Every page on sportgensummit.com, {total} in total, grouped the way the navigation is organised.</p>
        </div>
      </section>
      <section className="section">
        <div className="sg-container sitemap">
          {SITEMAP_GROUPS.map((g) => (
            <div className="sitemap__group reveal" key={g.label}>
              <div className="sitemap__group-head">
                <h2 className="sitemap__group-title">{g.label}</h2>
                <p className="sitemap__group-blurb">{g.blurb}</p>
              </div>
              <ul className="sitemap__list">
                {g.links.map(([label, href, desc]) => (
                  <li key={href}>
                    <a className="sitemap__link" href={href} onClick={(e) => go(e, href)}>
                      <span className="sitemap__link-main">
                        <span className="sitemap__link-label">{label}</span>
                        <span className="sitemap__link-desc">{desc}</span>
                      </span>
                      <span className="sitemap__arrow" aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

/* ── SGN networking app page (Ecosystem > SGN App) — layout & motion modeled on the RAISE app page ── */
function AppPage() {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const [faqOpen, setFaqOpen] = React.useState(0);

  // 2026 networking figures (from the internal meetings × ticketing analysis)
  const bandRef = React.useRef(null);
  const [figOn, setFigOn] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setFigOn(true); io.disconnect(); } }, { threshold: 0.3 });
    if (bandRef.current) io.observe(bandRef.current);
    return () => io.disconnect();
  }, []);
  const figures = [
    { number: 2924, suffix: '', label: '1:1 meeting requests' },
    { number: 85, suffix: '%', label: 'App adoption' },
    { number: 9700, suffix: '', label: 'In-app interactions' },
    { number: 80, prefix: '€', label: 'Avg. cost per meeting' },
  ];

  const check = <svg className="appx-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>;

  const Qr = ({ src }) => (
    <div className="appx-qr" aria-hidden="true">
      <img src={src} alt="" />
    </div>
  );

  const dl = [
    { store: 'Download on the', name: 'App Store', os: 'iOS', qr: 'assets_opt/qr-app-ios.png', url: 'https://apps.apple.com/ie/app/sportgen-summit/id6760288721' },
    { store: 'Get it on', name: 'Google Play', os: 'Android', qr: 'assets_opt/qr-app-android.png', url: 'https://play.google.com/store/apps/details?id=com.brella.sportgensummit' },
  ];
  const companion = [
    'Access the full delegate directory to identify and connect with peers before the summit begins.',
    'Schedule private meetings and manage your personalised programme updates in real time.',
    'Access venue maps and logistics to move efficiently through the Pavillon Gabriel.',
    'Your personal event QR code is available directly in the app.',
  ];
  const showcase = [
    { title: 'Your event home', body: 'One screen for the whole summit — agenda, speakers, networking, side events and sponsors, each a single tap away.', img: 'assets_opt/app-shot-home.png' },
    { title: 'Browse every speaker', body: 'Search the full line-up of executives, investors, athletes and operators, and open any profile in a tap.', img: 'assets_opt/app-shot-speakers.png' },
    { title: 'Your schedule & meetings', body: 'Every accepted meeting and session in one timeline — with times, tables and one-tap video join, synced to your own calendar.', img: 'assets_opt/app-shot-schedule.png' },
    { title: 'QR code & lead scan', body: 'Your personal QR code checks you in on-site, shares your profile in a scan, and turns every handshake into a saved lead.', img: 'assets_opt/app-shot-qr.png' },
  ];
  const faqs = [
    { q: 'What is the SGN networking app?', a: 'It is your official SPORT[GEN] Summit companion — explore the agenda, discover speakers and attendees, schedule 1:1 meetings and plan your experience before and during the event.' },
    { q: 'When will I get access to the app?', a: 'Access opens to registered attendees about 3 weeks before the summit. You sign in with the email linked to your ticket.' },
    { q: 'Can I use it to meet other attendees?', a: 'Yes. Browse attendee profiles, send meeting requests and manage your networking across both days of the summit.' },
    { q: 'What is the QR code for?', a: 'Your QR code speeds up on-site check-in, prints your badge, and lets you share your profile when another attendee scans it.' },
  ];

  return (
    <React.Fragment>
      {/* ── Hero: title + dual download cards ── */}
      <section className="section section--first appx-hero">
        <div className="sg-container sg-container--wide">
          <span className="sg-eyebrow sg-eyebrow--gold appx-appear reveal">Official networking app</span>
          <h1 className="appx-hero__title appx-appear reveal">The SGN networking <span className="sg-gold-text">app</span></h1>
          <p className="appx-hero__sub appx-appear reveal">Download the SGN networking app to access your QR code, explore the agenda, discover attendees and plan your event experience before arriving in Paris.</p>
          <div className="appx-dl">
            {dl.map((d, i) => (
              <div className="appx-dl__card sg-glass appx-appear reveal" style={{ transitionDelay: i * 90 + 'ms' }} key={d.os}>
                <Qr src={d.qr} />
                <div className="appx-dl__body">
                  <span className="appx-dl__badge"><small>{d.store}</small>{d.name}</span>
                  <p className="appx-dl__note">Scan the QR code to download the app on {d.os}. Sign in with the email used for your SGN ticket to access your profile, agenda and QR code.</p>
                  <a className="appx-dl__btn" href={d.url} target="_blank" rel="noopener">Download on {d.os}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital companion split card ── */}
      <section className="section">
        <div className="sg-container sg-container--wide">
          <span className="sg-eyebrow sg-eyebrow--gold appx-appear reveal">Digital access &amp; on-site experience</span>
          <h2 className="appx-h2 appx-appear reveal">The SGN <span className="sg-gold-text">App</span></h2>
          <div className="appx-companion sg-glass appx-appear reveal">
            <div className="appx-companion__text">
              <span className="sg-eyebrow sg-eyebrow--gold">Inside the app</span>
              <h3 className="appx-companion__title">Your digital companion for the summit</h3>
              <p className="appx-companion__lede">While SGN prioritises physical proximity and private dialogue, the app is your digital companion for the duration of the summit.</p>
              <ul className="appx-bullets">
                {companion.map((c) => <li key={c}>{check}<span>{c}</span></li>)}
              </ul>
            </div>
            <div className="appx-companion__media">
              <img src="assets/vip-networking.jpg" alt="Delegates networking at SPORT[GEN] Summit" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2026 networking figures (site "figures" band) ── */}
      <section className="section appx-figs">
        <h2 className="cband-head reveal">SPORT <span className="cband-head__bracket">&#91;GEN&#93;</span> 2026 &middot; <span className="cband-head__gold">Networking in numbers</span></h2>
        <div className="cband cband--gold-labels" ref={bandRef}>
          {figures.map((f) => <CounterBandItem key={f.label} on={figOn} number={f.number} suffix={f.suffix} prefix={f.prefix} label={f.label} />)}
        </div>
      </section>

      {/* ── Sticky aside + scrolling feature showcase ── */}
      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="appx-showcase">
            <aside className="appx-showcase__aside">
              <span className="sg-eyebrow sg-eyebrow--gold">Official networking app</span>
              <h2 className="appx-h2">Your SGN Week networking companion</h2>
              <p className="appx-showcase__lede">The SGN app helps you navigate the week, discover who is attending and connect more easily on site. From agenda planning to networking and lead scanning, it brings the full event into one place.</p>
              <p className="appx-showcase__lede">Use it before and during the summit to manage your schedule, browse speakers, explore attendees and make the most of every conversation.</p>
              <Button variant="primary" size="lg" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get your ticket</Button>
            </aside>
            <div className="appx-showcase__list">
              {showcase.map((s) => (
                <div className="appx-show sg-glass reveal" key={s.title}>
                  <div className="appx-show__text">
                    <h3 className="appx-show__title">{s.title}</h3>
                    <p className="appx-show__body">{s.body}</p>
                  </div>
                  <img className="appx-shot" src={s.img} alt={s.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (2-up glass grid) ── */}
      <section className="section">
        <div className="sg-container">
          <span className="sg-eyebrow sg-eyebrow--gold appx-appear reveal">Practical details</span>
          <h2 className="appx-h2 appx-h2--center appx-appear reveal">Frequently asked questions</h2>
          <div className="faqx reveal">
            {faqs.map((f, i) => (
              <div className={'faqx__item' + (faqOpen === i ? ' is-open' : '')} key={f.q}
                role="button" tabIndex={0} onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFaqOpen(faqOpen === i ? -1 : i); } }}>
                <div className="faqx__row">
                  <h4 className="faqx__q">{f.q}</h4>
                  <span className="faqx__plus" aria-hidden="true"><i></i><i></i></span>
                </div>
                <div className="faqx__a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA (animated glass sheen) ── */}
      <section className="section">
        <div className="sg-container">
          <div className="appx-cta sg-glass wave-cta appx-appear reveal">
            <span className="sg-eyebrow sg-eyebrow--gold">Official event app</span>
            <h2 className="appx-cta__title">Unlock the full <span className="sg-gold-text">SGN experience</span></h2>
            <p className="appx-cta__body">Use the networking app to plan your agenda, discover attendees, browse speakers and connect with the people shaping the future of sport in Paris.</p>
            <div className="appx-cta__actions">
              <Button variant="primary" size="lg" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get your ticket</Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { TermsPage, PrivacyPage, ContestRulesPage, NotFoundPage, DownloadBrochurePage, DownloadBrochureStartupPage, SitemapPage, AppPage });
