/* SPORT[GEN], News / Blog: featured article + latest articles grid + in-page reader */
const { useState: useNewsState } = React;

const NEWS_ARTICLES = [
  {
    slug: 'sportgen-returns-paris-2027',
    category: 'Announcements',
    date: 'June 16, 2026',
    readTime: '3 min read',
    author: 'SportGen Newsroom',
    image: 'assets/news/sportgen-stage.jpg',
    title: 'SPORT[GEN] Summit is coming back to Paris in May 2027!',
    excerpt: 'After a record-breaking edition, the global gathering for the business of sport returns to Paris, two days on the main stage and a full week across the city.',
    featured: true,
    body: [
      { h: null, p: 'SPORT[GEN] Summit returns to Paris on 26 & 27 May 2027, bringing together the founders, investors, federations and brands shaping the next era of sport. After a record-breaking edition, we are back in the heart of Paris, steps from the Champs-Élysées, with an expanded programme across two days on the main stage.' },
      { h: 'A week, not just a summit', p: 'Around the two main days, SGN Week unfolds across the city, from the Investor Breakfast and Half-Time Drinks to the now-signature VIP Dinner and Closing Drinks. Each moment is built for the kind of conversation that simply doesn’t happen on a conference floor.' },
      { h: 'At the heart of the season', p: 'Holding the summit during one of the most intense weeks of the global sports calendar is deliberate. It places our delegates at the centre of the moment, with access to the people and stories defining the year ahead.' },
      { h: null, p: 'Super Early Bird tickets for the 2027 edition are live now, with early allocations reserved for returning partners and members of the SportGen community.' },
    ],
  },
  {
    slug: 'world-cup-2026-media-rights',
    category: 'Media Rights',
    date: 'June 12, 2026',
    readTime: '5 min read',
    author: 'SportGen Newsroom',
    image: 'assets/news/worldcup.png',
    title: 'The 2026 World Cup is the most-sold media event ever, and deals are still closing at kick-off',
    excerpt: 'With 104 matches across three nations, FIFA\u2019s first 48-team World Cup has redrawn the global rights map, right down to agreements signed hours before the opener.',
    body: [
      { h: null, p: 'The 48-team, 104-match tournament staged across the United States, Canada and Mexico is the largest World Cup ever held, and the most valuable from a media standpoint. Through the spring, broadcasters and streamers raced to lock down territories, with several agreements reportedly signed only hours before the opening match.' },
      { h: 'A streaming-first tournament', p: 'The balance has tipped decisively from traditional pay-TV toward global platforms. DAZN secured rights to all 104 matches for subscribers across several South American markets, underlining how central streaming has become to FIFA\u2019s distribution strategy.' },
      { h: 'Negotiated to the final whistle', p: 'Thai telecoms group Jasmine International agreed a World Cup rights deal only hours before kick-off, a reminder that even the biggest event in sport is now negotiated down to the wire.' },
      { h: null, p: 'For rights holders watching from Paris, the lesson is clear: scarcity and global reach still command record fees, but the buyers, and the screens they sell, have fundamentally changed.' },
    ],
  },
  {
    slug: 'nfl-franchise-valuations-seahawks',
    category: 'Franchise Valuations',
    date: 'June 10, 2026',
    readTime: '4 min read',
    author: 'SportGen Newsroom',
    image: 'assets/news/seahawks.png',
    title: 'A possible $9bn Seahawks bid would reset the ceiling for sports franchises',
    excerpt: 'Reports that Chelsea co-owner Todd Boehly is weighing a bid of up to $9bn for the Seattle Seahawks would shatter the NFL\u2019s ownership record, and signal where valuations are heading.',
    body: [
      { h: null, p: 'Todd Boehly, alongside Guggenheim Partners chief executive Mark Walter, is reported to be exploring a bid of up to $9bn for the Seattle Seahawks, with Middle East investors floated as potential partners. A deal at that level would eclipse the roughly $6bn paid for the Washington Commanders, the current NFL record.' },
      { h: 'Why the number matters', p: 'Every new high resets the benchmark used to value the other teams in a league, and the assumptions investors carry into competitions worldwide. Limited supply, durable media income and global demand keep pushing top-tier franchises into territory once reserved for entire portfolios.' },
      { h: null, p: 'The names linked to the deal, from Guggenheim to sovereign-backed capital, show just how global the buyer pool for elite sports assets has become.' },
    ],
  },
  {
    slug: 'mlb-rights-fragmentation',
    category: 'Broadcast',
    date: 'June 4, 2026',
    readTime: '4 min read',
    author: 'SportGen Newsroom',
    image: 'assets/news/mlb.png',
    title: 'Baseball\u2019s new TV deal splits the season across NBC, Netflix and ESPN',
    excerpt: 'MLB\u2019s reshuffled national rights, spread across a broadcaster, a streamer and a sports-media giant, is a case study in how live sport is being unbundled.',
    body: [
      { h: null, p: 'Major League Baseball confirmed new national agreements with NBCUniversal, Netflix and ESPN, alongside its existing deals with Fox and Turner. NBC takes Sunday-night and Wild Card games on Peacock and its relaunched cable network; Netflix adds marquee one-offs including the Home Run Derby and an Opening Night game; ESPN gains the right to sell the out-of-market MLB.TV product.' },
      { h: 'The unbundling continues', p: 'Where a league once sold its season to one or two networks, it now stitches together broadcasters and streamers, each taking the windows that suit its model. Reach goes up; for the fan, simplicity goes down.' },
      { h: null, p: 'For every rights holder, the trade-off raises the question SportGen keeps returning to: how much fragmentation is worth the incremental dollar?' },
    ],
  },
  {
    slug: 'private-equity-european-football',
    category: 'Private Equity',
    date: 'June 7, 2026',
    readTime: '5 min read',
    author: 'SportGen Newsroom',
    image: 'assets/news/reggina.png',
    title: 'New money, smaller clubs: private equity goes hunting in the mid-market',
    excerpt: 'From a celebrity-backed takeover of Italy\u2019s Reggina to multi-billion interest in Napoli, investors are no longer chasing only the giants.',
    body: [
      { h: null, p: 'Underdog Global Partners acquired historic Serie D side AS Reggina 1914, with Kelly Ripa and Mark Consuelos among the co-investors, and set out a five-to-seven-year plan to climb back toward Serie A. The same group has been linked with a reported approach of around $2.3bn for SSC Napoli.' },
      { h: 'The thesis', p: 'Lower down the pyramid, valuations are a fraction of the elite, the upside sits several promotions away, and operators believe modern commercial and data playbooks can close the gap faster than ever. It is precisely the mid-market that SportGen\u2019s investor community keeps circling.' },
      { h: null, p: 'Whether patient capital can withstand the volatility of sporting results is the open question, but the money is no longer waiting at the top of the table.' },
    ],
  },
  {
    slug: 'liv-golf-sovereign-funding',
    category: 'Capital & Influence',
    date: 'June 9, 2026',
    readTime: '4 min read',
    author: 'SportGen Newsroom',
    image: 'assets/news/liv-pif.png',
    title: 'LIV Golf and the limits of sovereign money',
    excerpt: 'As Saudi Arabia\u2019s PIF backing is tested, LIV\u2019s push to raise up to $350m from outside investors shows even state-funded leagues need a commercial model.',
    body: [
      { h: null, p: 'LIV Golf chief executive Scott O\u2019Neil said he must \u201ctake PIF at their word\u201d on continued support, while the league races to close an external raise of up to $350m, holding a series of investor meetings through the summer.' },
      { h: 'From subsidy to sustainability', p: 'State capital can launch a property at extraordinary speed, but the next phase is harder to buy: independent revenue, durable audiences and a credible path to profit. The transition from funded to self-sustaining is where many new leagues will ultimately be judged.' },
      { h: null, p: 'It is a live test of a question every founder-backed and sovereign-backed venture eventually has to answer.' },
    ],
  },
  {
    slug: 'sponsorship-records-womens-sport',
    category: 'Sponsorship',
    date: 'June 5, 2026',
    readTime: '4 min read',
    author: 'SportGen Newsroom',
    image: 'assets/news/wnba.png',
    title: 'Sponsorship is concentrating, and women\u2019s sport is where the new growth is',
    excerpt: 'NBA team sponsorship hit a record $1.8bn this season even as brands consolidate spend, while women\u2019s competitions keep converting rising audiences into commercial value.',
    body: [
      { h: null, p: 'League-wide, NBA team sponsorship revenue reached a record of roughly $1.8bn for the 2025-26 season, up around 11% year-on-year, with brands concentrating budgets into fewer, larger partnerships. The pattern repeats across sport: bigger deals, fewer of them, deeper integrations.' },
      { h: 'The women\u2019s sport window', p: 'Audiences and broadcast slots for women\u2019s competitions keep expanding, and the brands moving early are pricing in growth the rest of the market is still catching up to. In investors\u2019 words, the window is still open.' },
      { h: null, p: 'For partners, the strategic question is no longer whether to back women\u2019s sport, but how quickly, before the window\u2019s economics reset.' },
    ],
  },
];

function newsBySlug(slug) { return NEWS_ARTICLES.find((a) => a.slug === slug) || null; }

/* ---- Reusable placeholder media block (team drops real images here) ---- */
function NewsThumb({ label, className, src }) {
  return (
    <div className={'news-thumb' + (className ? ' ' + className : '')} aria-hidden="true">
      {src
        ? <img className="news-thumb__img" src={src} alt="" loading="lazy" />
        : <span className="news-thumb__ph">{label || 'IMG · 16:10'}</span>}
    </div>
  );
}

function NewsMeta({ a, withRead }) {
  return (
    <div className="news-meta">
      <span className="news-meta__dot" aria-hidden="true">•</span>
      <span>Published on {a.date}</span>
      {withRead ? <React.Fragment><span className="news-meta__dot" aria-hidden="true">•</span><span>{a.readTime}</span></React.Fragment> : null}
    </div>
  );
}

/* ---- Single article reader ---- */
function ArticleView({ article, onBack }) {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  return (
    <article className="article">
      <div className="article__bg page-hero__bg page-hero__bg--network" aria-hidden="true" />
      <div className="sg-container article__inner">
        <button className="article__back" onClick={onBack}>
          <span aria-hidden="true">&larr;</span> All News
        </button>
        <span className="news-eyebrow">{article.category}</span>
        <h1 className="article__title">{article.title}</h1>
        <NewsMeta a={article} withRead />
        <NewsThumb label="ARTICLE HERO · 16:9" className="news-thumb--hero" src={article.image} />
        <div className="article__body">
          {article.body.map((blk, i) => (
            <React.Fragment key={i}>
              {blk.h ? <h2>{blk.h}</h2> : null}
              <p>{blk.p}</p>
            </React.Fragment>
          ))}
        </div>
        <div className="article__foot">
          <button className="article__back" onClick={onBack}><span aria-hidden="true">&larr;</span> Back to all news</button>
          <div className="cta-row">
            <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get Your Ticket</Button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---- News index (hero + featured + latest grid) ---- */
function NewsPage() {
  const [open, setOpen] = useNewsState(null);   // open article slug

  if (open) {
    const a = newsBySlug(open);
    if (a) return <ArticleView article={a} onBack={() => { setOpen(null); window.scrollTo(0, 0); }} />;
  }

  const openArticle = (slug) => { setOpen(slug); window.scrollTo(0, 0); };
  const featured = NEWS_ARTICLES.find((a) => a.featured) || NEWS_ARTICLES[0];
  const rest = NEWS_ARTICLES.filter((a) => a !== featured);

  return (
    <React.Fragment>
      <PageHero eyebrow="News" art="network" titleWhite="The latest from" titleGold="SportGen." stacked
        sub="Announcements, partnerships and perspectives on the business of sport, straight from the team building the summit." />

      <section className="section">
        <div className="sg-container sg-container--wide">
          {/* Featured */}
          <button className="news-feat reveal" onClick={() => openArticle(featured.slug)}>
            <NewsThumb label="FEATURED · 16:9" className="news-feat__media" src={featured.image} />
            <div className="news-feat__body">
              <span className="news-eyebrow news-eyebrow--gold">
                <span className="news-eyebrow__dot" aria-hidden="true"></span>Featured Article
              </span>
              <h2 className="news-feat__title">{featured.title}</h2>
              <NewsMeta a={featured} />
              <p className="news-feat__excerpt">{featured.excerpt}</p>
              <span className="news-card__more">Read Article <span aria-hidden="true">&rarr;</span></span>
            </div>
          </button>

          {/* Latest */}
          <h2 className="news-latest-head reveal">Latest articles</h2>
          <div className="news-grid">
            {rest.map((a, i) => (
              <button className="news-card reveal" style={{ transitionDelay: (i % 3) * 60 + 'ms' }} key={a.slug} onClick={() => openArticle(a.slug)}>
                <div className="news-card__media">
                  <NewsThumb label={a.category} src={a.image} />
                </div>
                <div className="news-card__body">
                  <NewsMeta a={a} withRead />
                  <h3 className="news-card__title">{a.title}</h3>
                  <p className="news-card__excerpt">{a.excerpt}</p>
                  <span className="news-card__more">Read Article <span aria-hidden="true">&rarr;</span></span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { NewsPage });
