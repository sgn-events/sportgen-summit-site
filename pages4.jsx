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

function BrochurePage({ startup }) {
  const { interests } = window.SGData;
  const loop = interests.concat(interests);
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
            <HubspotForm />
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

Object.assign(window, { TermsPage, PrivacyPage, ContestRulesPage, NotFoundPage, DownloadBrochurePage, DownloadBrochureStartupPage, SitemapPage });
