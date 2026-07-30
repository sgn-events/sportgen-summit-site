/* SPORT[GEN], side-event pages.
   Half-Time Drinks + Closing Drinks are now merged into a single "Side Events"
   page (one hero using the Half-Time photo, both events shown as sections).
   Both still appear as separate cards on the SGN Week recap page. */

function SideEventCta({ title, sub }) {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  return (
    <section className="section sgnw-cta-band">
      <div className="sg-container sgnw-cta-band__inner">
        <h2 className="sgnw-cta-band__h2 reveal">{title}</h2>
        <p className="sgnw-cta-band__sub">{sub}</p>
        <div className="cta-row cta-row--center">
          <Button variant="secondary" href="#/side-events" onClick={(e) => go(e, '#/side-events')}>Explore SGN Week</Button>
          <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Buy 2027 Ticket</Button>
        </div>
      </div>
    </section>
  );
}

/* ── SIDE EVENTS (Half-Time Drinks + Closing Drinks merged) ─────── */
function SideEventsMergedPage() {
  const { NativeVideo } = window;

  const halfGallery = [
    { src: 'assets/halftime-eiffel.jpg', alt: 'Drinks with a view of the Eiffel Tower' },
    { src: 'assets/halftime-crowd.jpg', alt: 'Guests gathering at golden hour' },
    { src: 'assets/halftime-talk.jpg', alt: 'A conversation between two attendees' },
  ];

  return (
    <React.Fragment>
      <section className="vip-hero vip-hero--fit" data-screen-label="Side Events">
        <img className="vip-hero__bg" src="assets/halftime-crowd.jpg" alt="" aria-hidden="true" />
        <div className="vip-hero__shade" aria-hidden="true"></div>
        <div className="vip-hero__inner">
          <div className="vip-hero__eyebrow-row">
            <h3 className="vip-hero__eyebrow">SGN Week · Side Events</h3>
            <div className="vip-hero__eyebrow-line" aria-hidden="true"></div>
          </div>
          <h1 className="vip-hero__line">Side Events,</h1>
          <h1 className="vip-hero__line vip-hero__line--gold">the week after hours.</h1>
          <h4 className="vip-hero__desc">The best conversations rarely happen on the conference floor. From golden-hour drinks on Day 1 to the final toast on Day 2, the evenings are where the room stays and the partnerships get sealed.</h4>
        </div>
      </section>

      {/* ── HALF-TIME DRINKS ── */}
      <section className="section" data-screen-label="Half-Time Drinks">
        <div className="sg-container sg-container--wide">
          <div className="opps-head reveal">
            <h2 className="opps-head__line">Half-Time Drinks,</h2>
            <h2 className="opps-head__line opps-head__line--gold">as the sun goes down.</h2>
          </div>
        </div>
        <div className="sg-container sg-container--wide vip-excl">
          <div className="vip-excl__rule reveal" aria-hidden="true"></div>
          <h2 className="vip-excl__title reveal">Close the first day, set up the second.</h2>
          <h3 className="vip-excl__desc reveal">As day one winds down, drinks in hand: a relaxed moment to recharge, trade the day&rsquo;s best takeaways and line up the conversations that shape day two &mdash; with the Eiffel Tower over one shoulder and the Paris sun going down.</h3>
        </div>
        <div className="sg-container sg-container--wide">
          <div className="se-trio reveal">
            {halfGallery.map((m, i) => (<figure key={i}><img src={m.src} alt={m.alt} loading="lazy" /></figure>))}
          </div>
        </div>
      </section>

      {/* ── CLOSING DRINKS ── */}
      <section className="section" data-screen-label="Closing Drinks">
        <div className="sg-container sg-container--wide">
          <div className="opps-head reveal">
            <h2 className="opps-head__line">Closing Drinks,</h2>
            <h2 className="opps-head__line opps-head__line--gold">one last toast.</h2>
          </div>
        </div>
        <div className="sg-container sg-container--wide fo-block fo-block--center reveal">
          <div className="fo-rule" aria-hidden="true"></div>
          <h2 className="fo-h2 fo-h2--white">Two days of business,</h2>
          <h2 className="fo-h2">raised in a single glass.</h2>
          <h4 className="fo-text">One last toast on a boat on the Seine, between the Grand Palais and Pont Alexandre III &mdash; where two days of connections are sealed before the room heads home.</h4>
        </div>
        <div className="sg-container sg-container--wide">
          <div className="reveal" style={{ maxWidth: '900px', margin: 'clamp(32px, 4vw, 60px) auto 0' }}>
            <NativeVideo src="assets/closing-aftermovie.mp4" />
          </div>
        </div>
      </section>

      <SideEventCta title={<React.Fragment>Be there, from the <span className="sgnw-gold">terrace to the final toast.</span></React.Fragment>}
        sub="Both evenings are open to every pass holder. Secure your 2027 ticket and the week after hours takes care of itself." />
    </React.Fragment>
  );
}

/* ── INVESTOR BREAKFAST ───────────────────────────────────────── */
function InvestorBreakfastPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const run = [
    { time: '07:45', title: 'Doors & coffee', body: 'A quiet start. Espresso, pastries and the first handshakes before the city is fully awake.' },
    { time: '08:10', title: 'Table introductions', body: 'Every guest, one line each, who you are, what you\u2019re building or backing, and what you came to find.' },
    { time: '08:30', title: 'Off-the-record conversation', body: 'A short, candid exchange between a leading fund and a founder. No slides. No recording.' },
    { time: '09:15', title: 'Open networking', body: 'Follow up with the two or three people you most wanted to meet, before the main stage even opens.' },
  ];
  const room = [
    { v: '30', l: 'Seats, and only 30' },
    { v: '$2B+', l: 'Capital around the table' },
    { v: '1:1', l: 'Curated introductions' },
    { v: 'Day 1', l: 'Before the keynotes' },
  ];
  return (
    <React.Fragment>
      <PageHero eyebrow="Side Event · Day 1 · Morning" art="orbit" bgImage={CDN + 'fgOqDRsDf4r3haBleHzcp5GSE.jpg'}
        titleWhite="Investor Breakfast." titleGold="Deals before the day begins." stacked
        sub="The smallest room of the week, and often the most valuable. Funds, family offices and founders open the summit over coffee, by invitation, off the record."
        ctaLabel="Request a seat" ctaHref="#/get-in-touch" />

      <section className="section">
        <div className="sg-container sg-container--wide fo-block fo-block--center reveal">
          <div className="fo-rule" aria-hidden="true"></div>
          <h2 className="fo-h2 fo-h2--white">Thirty people. One table.</h2>
          <h2 className="fo-h2">A head start on the whole summit.</h2>
          <h4 className="fo-text">By the time the main stage opens, the people at this table have already had the conversation everyone else is hoping to have over the next two days.</h4>
        </div>
      </section>

      <section className="section">
        <div className="sg-container">
          <div className="sgnw-head reveal">
            <div className="sgnw-eyebrow sgnw-eyebrow--center">
              <span className="sgnw-eyebrow__rule" aria-hidden="true"></span>
              <span className="sg-eyebrow sg-eyebrow--gold">Run of show</span>
              <span className="sgnw-eyebrow__rule" aria-hidden="true"></span>
            </div>
            <h2 className="sgnw-head__h2">How the <span className="sgnw-gold">breakfast</span> runs.</h2>
          </div>
          <div className="sgnw-tl reveal">
            {run.map((r) => (
              <div className="sgnw-tl__row" key={r.title}>
                <div className="sgnw-tl__when"><span className="sgnw-tl__day">Morning</span>{r.time}</div>
                <div className="sgnw-tl__what">
                  <h4 className="sgnw-tl__title">{r.title}</h4>
                  <p className="sgnw-tl__body">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide vip-excl">
          <div className="vip-excl__rule reveal" aria-hidden="true"></div>
          <h2 className="vip-excl__title reveal">Who&rsquo;s around the table.</h2>
          <div className="vip-stats reveal">
            {room.map((s) => (
              <div className="vip-stat" key={s.l}><h3 className="vip-stat__value">{s.v}</h3><h4 className="vip-stat__label">{s.l}</h4></div>
            ))}
          </div>
        </div>
      </section>

      <SideEventCta title={<React.Fragment>Want a <span className="sgnw-gold">seat</span> at the table?</React.Fragment>}
        sub="The Investor Breakfast is strictly by invitation. Tell us about you and our team will be in touch about access." />
    </React.Fragment>
  );
}

/* Both event routes now resolve to the single merged Side Events page. */
const HalfTimeDrinksPage = SideEventsMergedPage;
const ClosingDrinksPage = SideEventsMergedPage;

Object.assign(window, { SideEventsMergedPage, HalfTimeDrinksPage, InvestorBreakfastPage, ClosingDrinksPage });
