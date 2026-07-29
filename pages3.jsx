/* SPORT[GEN], remaining routes */
const { useState: useP3State } = React;

function Accordion({ items }) {
  const [open, setOpen] = useP3State(0);
  return (
    <div className="accordion">
      {items.map((it, i) => (
        <div className={'accordion__item reveal' + (open === i ? ' accordion__item--open' : '')} key={it.q}>
          <button className="accordion__q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.q}</span><span className="accordion__icon" aria-hidden="true">{open === i ? '−' : '+'}</span>
          </button>
          {open === i ? <div className="accordion__a">{it.a}</div> : null}
        </div>
      ))}
    </div>
  );
}

function FeatureColumns({ cards }) {
  const { GlassCard } = window.SPORTGENDesignSystem_882f1e;
  return (
    <div className="cols3">
      {cards.map((c, i) => (
        <GlassCard hover key={c.title} className="reveal col3" style={{ transitionDelay: i * 70 + 'ms' }}>
          <h3 className="col3__title">{c.title}</h3>
          <ul className="opps__list">{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
        </GlassCard>
      ))}
    </div>
  );
}

function AgendaPage() {
  const { agendaLive } = window.SGData;
  const [stage, setStage] = useP3State('main');
  const [day, setDay] = useP3State('27');
  const sessions = agendaLive[stage + '-' + day];
  return (
    <React.Fragment>
      <PageHero eyebrow="Agenda" titleGold="The SportGen Summit" titleWhite="2026 Agenda is here" goldFirst stacked
        sub="Discover the ideas, people, and technologies shaping the future of sport." />
      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="ag-tabs reveal">
            <div className="ag-tabbar">
              {[['main', 'Main Stage'], ['elysee', 'Élysée Stage']].map(([k, label]) => (
                <button key={k} className={'ag-tab' + (stage === k ? ' is-active' : '')} onClick={() => setStage(k)}>
                  <span className="ag-tab__line" aria-hidden="true"></span>{label}
                </button>
              ))}
            </div>
            <div className="ag-tabbar">
              {[['27', '27 May'], ['28', '28 May']].map(([k, label]) => (
                <button key={k} className={'ag-tab' + (day === k ? ' is-active' : '')} onClick={() => setDay(k)}>
                  <span className="ag-tab__line" aria-hidden="true"></span>{label}
                </button>
              ))}
            </div>
          </div>
          {sessions ? (
            <div className="ag-list">
              {sessions.map((s) => (
                <div className="ag-session reveal" key={s.time + s.title}>
                  <div className="ag-session__timecol"><h4 className="ag-session__time">{s.time}</h4></div>
                  <div className="ag-session__content">
                    <div className="ag-session__event">
                      <h3 className="ag-session__title">{s.title}</h3>
                      {s.desc ? <h4 className="ag-session__desc">{s.desc}</h4> : null}
                    </div>
                    <div className="ag-guests">
                      {s.guests.map((g) => (
                        <div className={'ag-guest' + (g.mod ? ' ag-guest--mod' : '')} key={g.name + g.org}>
                          {g.mod ? <p className="ag-guest__modlabel">MODERATED BY</p> : null}
                          <div className="ag-guest__row">
                            <div className="ag-guest__photo">{g.photo ? <img src={g.photo} alt={g.name} loading="lazy" /> : null}</div>
                            <div className="ag-guest__profile">
                              <h4 className="ag-guest__name">{g.name}</h4>
                              {g.role ? <p className="ag-guest__role">{g.role}</p> : null}
                              {g.org ? <p className="ag-guest__org">{g.org}</p> : null}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="ag-empty reveal">
              <h3>This agenda will be announced soon.</h3>
              <p>Sessions for this stage and day are being finalized, check back shortly.</p>
            </div>
          )}
        </div>
      </section>
      <TicketsBlock />
    </React.Fragment>
  );
}

function StartupPage() {
  const { startupSteps, startupWinners, startupJury, startupFaq, startup } = window.SGData;
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const [draftIdx, setDraftIdx] = useP3State(0);
  const [juryIdx, setJuryIdx] = useP3State(0);
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const [faqOpen, setFaqOpen] = React.useState(0);
  const [actOpen, setActOpen] = React.useState(0);
  const chev = (
    <svg className="acc__chev" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd"></path></svg>
  );
  return (
    <React.Fragment>
      <PageHero eyebrow="Startups" titleWhite="Connect with decision-makers." titleGold="Scale faster." stacked bgImage={startup.heroBg}
        sub="Meet clubs, leagues, brands, media outlets and investors actively looking for innovative solutions. Join the Startup Competition to pitch your vision and solution on stage." ctaLabel="Startup Tickets" ctaHref="#/tickets" />

      <section className="section section--partners-band">
        <div className="sg-container sg-container--wide">
          <p className="partners-band__label reveal">Competition Partners</p>
          <div className="sponsor-mq reveal">
            <div className="sponsor-mq__track">
              {startup.sponsors.concat(startup.sponsors).map((s, i) => (
                <div className="sponsor-card" key={i}><img src={s} alt={i < startup.sponsors.length ? 'Competition partner ' + (i + 1) : ''} loading="lazy" /></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container">
          <div className="opps-head reveal">
            <h2 className="opps-head__line">Take your startup to</h2>
            <h2 className="opps-head__line opps-head__line--gold">the next stage</h2>
          </div>
          <OppCards cards={startup.cards} />
          <div className="cta-row cta-row--center reveal">
            <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Buy Tickets</Button>
            <Button variant="secondary" href="#/get-in-touch" onClick={(e) => go(e, '#/get-in-touch')}>Book a Meeting</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="acts reveal">
            <img className="acts__bg" src={startup.activitiesBg} alt="" aria-hidden="true" />
            <div className="acts__inner">
              <div className="acts__text">
                <h3 className="acts__title">Activities for Startups</h3>
                <h4 className="acts__desc">Designed to help startups connect with decision-makers, build partnerships and accelerate growth across the global sports industry.</h4>
                <div className="cta-row">
                  <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get a Startup Ticket</Button>
                  <Button variant="secondary" href="#/download-brochure-startup" onClick={(e) => go(e, '#/download-brochure-startup')}>Download our Startup Brochure</Button>
                </div>
              </div>
              <div className="acts__list">
                {startup.activities.map((a, i) => (
                  <div className={'acc' + (i === actOpen ? ' is-open' : '')} key={a.label}>
                    <button type="button" className="acc__q" aria-expanded={i === actOpen} onClick={() => setActOpen((o) => (o === i ? -1 : i))}>
                      <p className="acc__label">{a.label}</p>{chev}
                    </button>
                    <div className="acc__body">
                      <div className="acc__body-inner">
                        <p className="acc__text">{a.body}</p>
                        {a.cta ? <div className="cta-row"><Button variant="primary" href={a.href} onClick={(e) => go(e, a.href)}>{a.cta}</Button></div> : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="wstart">
            <div className="wstart__imgs reveal">
              <img src={startup.whereImgs[0]} alt="Startup exhibition at SportGen Summit" loading="lazy" />
              <img src={startup.whereImgs[1]} alt="Networking at SportGen Summit" loading="lazy" />
            </div>
            <div className="wstart__side reveal">
              <h2 className="wstart__line">Where your startup</h2>
              <h2 className="wstart__line wstart__line--gold">meets the right people</h2>
              <p className="wstart__desc">Exhibit your solution, host meetings on-site, and connect with decision-makers actively looking for innovation.</p>
              <div className="cta-row">
                <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Buy Tickets</Button>
                <Button variant="secondary" href="#/get-in-touch" onClick={(e) => go(e, '#/get-in-touch')}>Book a Meeting</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide draft2">
          <div className="draft__head draft__head--center reveal">
            <h2 className="draft__title">The Draft</h2>
            <h4 className="draft__lead">Join the Startup Competition and pitch your startup on stage in front of industry leaders.</h4>
          </div>
          <ol className="hiw__list reveal">
            {startupSteps.map((s, i) => (
              <li className="hiw__item" key={s.label}>
                <div className="hiw__rail">
                  <span className="hiw__node"><span className="hiw__node-num">{String(i + 1).padStart(2, '0')}</span></span>
                  {i < startupSteps.length - 1 ? <span className="hiw__line" aria-hidden="true"></span> : null}
                </div>
                <div className="hiw__body">
                  <span className="hiw__date">{s.date}</span>
                  <h3 className="hiw__title">{s.label}</h3>
                  <p className="hiw__copy">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="cta-row cta-row--center reveal">
            <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Buy Tickets</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="opps-head opps-head--center reveal">
            <span className="ptn-eyebrow win__eyebrow"><span className="win__dot" aria-hidden="true"></span>2026 success story</span>
            <h2 className="opps-head__line">Our <span className="opps-head__gold">2026</span> winners</h2>
            <h4 className="ptn-sub win__sub">Out of 200+ applicants, only a select few pitch live on the Main Stage. These three startups stood out from the 2026 cohort as the top tier of innovation.</h4>
          </div>
          <div className="win__grid reveal">
            {startupWinners.map((w) => (
              <article className={'win__card win__card--r' + w.rank} key={w.name}>
                {w.rank !== 1 ? <span className="win__rank" aria-hidden="true">{w.rank}</span> : null}
                <div className="win__top">
                  <img className="win__photo" src={w.photo} alt={w.name} loading="lazy" />
                  <div className="win__veil" aria-hidden="true"></div>
                  <div className="win__profile">
                    <span className="win__name">{w.name}</span>
                    <span className="win__role">{w.role}</span>
                  </div>
                </div>
                <div className="win__logobar"><img src={w.logo} alt="" loading="lazy" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide jury">
          <div className="jury__text reveal">
            <span className="ptn-eyebrow win__eyebrow"><span className="win__dot" aria-hidden="true"></span>The final jury</span>
            <h2 className="jury__title">Judged by the investors <span className="opps-head__gold">shaping sport</span></h2>
            <p className="jury__desc">The Draft jury brings the decision-makers of the sports economy into one room — the funds, operators and founders who write the cheques and open the doors across SportGen&rsquo;s global network.</p>
            <p className="jury__desc">Pitch on the SportGen Main Stage and your startup lands in front of a panel that has scaled category-defining companies. One pitch is all it takes to turn a demo into partnerships, capital and industry-wide visibility.</p>
            <div className="cta-row">
              <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Buy Tickets</Button>
            </div>
          </div>
          <div className="jury__media reveal">
            {startupJury[juryIdx].pair ? (
              <div className="jury__card jury__card--split">
                {startupJury[juryIdx].pair.map((p) => (
                  <div className="jury__half" key={p.name}>
                    <img className="jury__photo" src={p.photo} alt={p.name} loading="lazy" style={p.pos ? { objectPosition: p.pos } : undefined} />
                    <div className="jury__veil" aria-hidden="true"></div>
                    <div className="jury__bottom">
                      <div className="jury__meta">
                        <span className="jury__name">{p.name}</span>
                        <span className="jury__role">{p.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="jury__card">
                <img className="jury__photo" src={startupJury[juryIdx].photo} alt={startupJury[juryIdx].name} loading="lazy" style={startupJury[juryIdx].pos ? { objectPosition: startupJury[juryIdx].pos } : undefined} />
                <div className="jury__veil" aria-hidden="true"></div>
                <div className="jury__bottom">
                  <span className="jury__cool">Member of our jury</span>
                  <div className="jury__meta">
                    <span className="jury__name">{startupJury[juryIdx].name}</span>
                    <span className="jury__role">{startupJury[juryIdx].role}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="jury__logos" role="tablist">
              {startupJury.map((j, i) => (
                <button key={j.name} type="button" role="tab" aria-selected={i === juryIdx} aria-label={j.name}
                  className={'jury__logo-btn' + (i === juryIdx ? ' is-active' : '')}
                  onClick={() => setJuryIdx(i)}>
                  <img src={j.logo} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container">
          <div className="opps-head opps-head--center reveal">
            <h2 className="opps-head__line">Frequently Asked</h2>
            <h2 className="opps-head__line opps-head__line--gold">Questions</h2>
          </div>
          <div className="faqx reveal">
            {startupFaq.map((f, i) => (
              <div className={'faqx__item' + (faqOpen === i ? ' is-open' : '')} key={f.q} role="button" tabIndex={0}
                onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
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
    </React.Fragment>
  );
}

function MediasPage() {
  const { walls, oppStar } = window.SGData;
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const CDN = 'https://framerusercontent.com/images/';
  const MEDIA_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLScDx0Ycp8zuil1oCCb_ZGZjHPkMTygoxAyF7bT2Adfi89eTig/viewform';
  const cards = [
    { title: 'Meet the Future of Sport', photo: CDN + 'bYVI6HO8cxnNKsF6MAd1FtWec.jpg', items: ['Top entrepreneurs', 'International scaleups', 'Innovation Room'] },
    { title: 'Access to Global Leaders', photo: 'assets/news/sportgen-panel.jpg', items: ['World renowned speakers', 'Business leaders', 'Experts & trend setters'] },
    { title: 'Create Multi Platform Content', photo: CDN + 'Ia440MI3OIGoYp0KDRROqwrm0.jpg', items: ['Interview Area', 'Podcast Studio', 'Event Video Stories'] },
  ];
  const chev = (
    <svg className="acc__chev" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd"></path></svg>
  );
  return (
    <React.Fragment>
      <PageHero eyebrow="Medias" art="network" titleWhite="SportGen Summit" titleGold="for Media."
        sub="A must-attend event for global media, with unparalleled access to exclusive stories and the sport's most influential leaders." ctaLabel="Become a Media Partner" ctaHref={MEDIA_FORM} />
      <section className="section">
        <div className="sg-container">
          <div className="opps-head reveal">
            <h2 className="opps-head__line">Innovation &amp; Leadership Stories</h2>
            <h2 className="opps-head__line opps-head__line--gold">Powering the Next Era of Sport</h2>
          </div>
          <OppCards cards={cards} />
          <div className="cta-row cta-row--center reveal">
            <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Buy Ticket</Button>
            <Button variant="secondary" href="#/download-brochure" onClick={(e) => go(e, '#/download-brochure')}>Book a Meeting</Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="acts reveal">
            <img className="acts__bg" src={CDN + 'xRx1aVzgK86KpAErMhUxLw66zI.jpg'} alt="" aria-hidden="true" />
            <div className="acts__inner">
              <div className="acts__text">
                <h3 className="acts__title">Activities for Medias</h3>
                <h4 className="acts__desc">Don’t just cover the future of sport, help shape it at SportGen Summit 2027. Join leading global outlets for exclusive access to key insights, major announcements, and direct engagement with the leaders redefining sport, technology, and culture.</h4>
                <div className="cta-row">
                  <Button variant="primary" href={MEDIA_FORM} target="_blank" rel="noopener">Apply for Media Pass</Button>
                </div>
              </div>
              <div className="acts__list">
                {['Media Area', 'Media Lounge', 'Podcast Studio'].map((a) => (
                  <div className="acc" key={a}>
                    <div className="acc__q"><p className="acc__label">{a}</p>{chev}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--partners">
        <div className="sg-container sg-container--wide">
          <LogoWalls groups={walls} />
        </div>
      </section>
    </React.Fragment>
  );
}

function SideEventsPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };

  // 2025 recap, real photography from the live site + local event shots.
  const mosaic = [
    { src: 'assets/halftime-eiffel.jpg', cls: 'se-m--tall', alt: 'Half-Time Drinks with a view of the Eiffel Tower' },
    { src: 'assets/halftime-crowd.jpg', cls: 'se-m--wide', alt: 'Guests gathering at golden hour' },
    { src: 'assets/halftime-talk.jpg', cls: '', alt: 'A conversation between attendees' },
    { src: CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg', cls: '', alt: 'VIP Dinner in Paris' },
    { src: CDN + 'fgOqDRsDf4r3haBleHzcp5GSE.jpg', cls: 'se-m--wide', alt: 'Conversations between leaders' },
  ];

  const events = [
    {
      t: 'SGN Invest', meta: '25 May', href: 'sis.html', img: 'assets/sgn-investment-summit-concorde.jpg',
      b: 'The investment community of sport, funds, family offices and rights holders, convened for a focused half-day near Place de la Concorde. Senior, concentrated, and built to move capital.',
      tag: 'Investors',
    },
    {
      t: 'The VIP Dinner', meta: 'Day 1 · Evening', href: '#/vip-dinner', img: CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg',
      b: 'Steps from Place de la Concorde, a private dinner brought together speakers, senior executives and partners for the most exclusive evening of the week, the kind of room where a seating plan becomes a deal.',
      tag: 'Invitation only',
    },
    {
      t: 'Half-Time Drinks', meta: 'Day 1 · After hours', href: '#/half-time-drinks', img: 'assets/halftime-crowd.jpg',
      b: 'As the first day closed, the room kept talking, drinks in hand, the Eiffel Tower over one shoulder and the Paris sun going down. A relaxed reception that turned keynote moments into the introductions people came for.',
      tag: 'All pass holders',
    },
    {
      t: 'Closing Drinks', meta: 'Day 2 · Evening', href: '#/closing-drinks', img: 'assets/closing-golden.jpg',
      b: 'One last toast to close the summit. A celebratory send-off where the week\u2019s new partnerships were sealed and the next edition was already being planned over a glass.',
      tag: 'All pass holders',
    },
  ];

  const stats = [
    { v: '4', l: 'Signature evenings' },
    { v: '200+', l: 'VIP dinner guests' },
    { v: '90%', l: 'C-level & founders' },
    { v: 'Paris', l: 'Iconic private venues' },
  ];

  return (
    <React.Fragment>
      <PageHero eyebrow="SGN Week · 2026 Recap" art="frame" heroClass="sgnw-rec-hero" bgImage={'assets/photos/sgn-week-montage.png'}
        titleWhite="Where the summit" titleGold="carries on after dark." stacked
        sub="The conversations that matter rarely happen on a conference floor. Around SportGen, a curated series of dinners, breakfasts and drinks gives the room a reason to stay in Paris."
        ctaLabel="Be part of 2027" ctaHref="#/get-in-touch" />

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="se-intro reveal">
            <div className="se-intro__rule" aria-hidden="true"></div>
            <h2 className="se-intro__h2">A few <em>unforgettable nights</em>, woven through two days of business.</h2>
            <p className="se-intro__lead">Here is what this year&rsquo;s side events looked like, and the kind of moments returning in 2027.</p>
          </div>
          <div className="se-mosaic reveal">
            {mosaic.map((m, i) => (
              <figure className={m.cls} key={i}>
                <img src={m.src} alt={m.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="opps-head reveal">
            <h2 className="opps-head__line">The signature</h2>
            <h2 className="opps-head__line opps-head__line--gold">side events</h2>
          </div>
          <div className="vip-why">
            {events.map((ev, i) => (
              <div className={'vip-why__row' + (i % 2 ? ' vip-why__row--flip' : '') + ' reveal'} key={ev.t}>
                <div className="vip-why__box">
                  <img src={ev.img} alt={ev.t} loading="lazy" />
                  <span className="se-card__tag">{ev.tag}</span>
                </div>
                <div className="vip-why__text">
                  <span className="se-meta sg-eyebrow sg-eyebrow--gold">{ev.meta}</span>
                  <h3 className="vip-why__title"><a className="se-evt-link" href={ev.href} onClick={(e) => { if (ev.href.startsWith('#')) go(e, ev.href); }}>{ev.t} <span aria-hidden="true">&rarr;</span></a></h3>
                  <div className="vip-why__point">
                    <div className="vip-why__bar" aria-hidden="true"></div>
                    <p className="vip-why__desc">{ev.b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide vip-excl">
          <div className="vip-excl__rule reveal" aria-hidden="true"></div>
          <h2 className="vip-excl__title reveal">The 2026 edition, in numbers.</h2>
          <div className="vip-stats reveal">
            {stats.map((s) => (
              <div className="vip-stat" key={s.l}>
                <h3 className="vip-stat__value">{s.v}</h3>
                <h4 className="vip-stat__label">{s.l}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sgnw-cta-band">
        <div className="sg-container sgnw-cta-band__inner">
          <h2 className="sgnw-cta-band__h2 reveal">Want a seat at the <span className="sgnw-gold">table in 2027?</span></h2>
          <p className="sgnw-cta-band__sub">Some evenings are open to all pass holders, others are strictly by invitation. Tell us about you and our team will be in touch about access.</p>
          <div className="cta-row cta-row--center">
            <Button variant="secondary" href="#/get-in-touch" onClick={(e) => go(e, '#/get-in-touch')}>Request access</Button>
            <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Buy 2027 Ticket</Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function VipCount({ to, suffix }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf;
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) {
        const t0 = performance.now(), dur = 1400;
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(e * to));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  return <span ref={ref}>{val}{suffix}</span>;
}

// Classic native-controls video with a fullscreen button that falls back to a
// fixed full-viewport overlay when the browser/sandbox blocks native fullscreen.
function NativeVideo({ src, poster }) {
  const ref = React.useRef(null);
  const wrapRef = React.useRef(null);
  const [overlayFs, setOverlayFs] = React.useState(false);
  const [blobUrl, setBlobUrl] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    let alive = true, url;
    setLoading(true); setBlobUrl(null);
    fetch(src).then((r) => r.blob()).then((b) => {
      if (!alive) return; url = URL.createObjectURL(b); setBlobUrl(url); setLoading(false);
    }).catch(() => { if (alive) setLoading(false); });
    return () => { alive = false; if (url) URL.revokeObjectURL(url); };
  }, [src]);
  const previewing = React.useRef(false);
  React.useEffect(() => {
    const v = ref.current; if (!v || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      const e = entries[0]; if (!e || overlayFs) return;
      if (e.isIntersecting && e.intersectionRatio >= 0.5) {
        if (v.paused) { previewing.current = true; v.muted = true; try { v.currentTime = 0; } catch (err) {} const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      } else {
        if (previewing.current && v.muted) { previewing.current = false; v.pause(); try { v.currentTime = 0; } catch (err) {} }
      }
    }, { threshold: [0, 0.5] });
    io.observe(v);
    return () => io.disconnect();
  }, [overlayFs, blobUrl]);
  const goFs = () => {
    if (overlayFs) { setOverlayFs(false); return; }
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); return; }
    const wrap = wrapRef.current, el = ref.current; if (!el) return;
    const target = wrap && wrap.requestFullscreen ? wrap : el;
    const req = (wrap && wrap.requestFullscreen) || el.requestFullscreen || el.webkitRequestFullscreen || el.webkitEnterFullscreen;
    if (req) {
      try { const p = req.call(target); if (p && p.catch) p.catch(() => setOverlayFs(true)); return; } catch (e) {}
    }
    setOverlayFs(true);
  };
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOverlayFs(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <div ref={wrapRef} className={'vidembed-wrap' + (overlayFs ? ' vidembed-wrap--fs' : '')}>
      <video ref={ref} className="vidembed" src={blobUrl || src} poster={poster} controls playsInline preload="metadata" onVolumeChange={() => { if (ref.current && !ref.current.muted) previewing.current = false; }}></video>
      {loading ? <div className="vidembed__load" aria-hidden="true"><span className="vidembed__spin"></span></div> : null}
      <button type="button" className="vidembed__fs" onClick={goFs} aria-label={overlayFs ? 'Exit fullscreen' : 'Fullscreen'}>
        {overlayFs
          ? <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"></path></svg>
          : <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"></path></svg>}
      </button>
    </div>
  );
}

function VipVideoPlayer({ src }) {
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
    let url, cancelled = false;
    fetch(src).then(r => r.blob()).then(b => {
      if (cancelled) return;
      const v = ref.current;
      if (v && v.currentTime > 0.2) pendingSeek.current = v.currentTime; // restore position across the src swap
      url = URL.createObjectURL(b); setBlobSrc(url);
    }).catch(() => {});
    return () => { cancelled = true; if (url) URL.revokeObjectURL(url); };
  }, [src]);

  const showBar = () => {
    setVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => { if (!scrubbing) setVisible(false); }, 1000);
  };
  const hideBar = () => { clearTimeout(hideTimer.current); if (!scrubbing) setVisible(false); };
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
    const sizeBox = () => setFsBox({ w: document.documentElement.clientWidth, h: document.documentElement.clientHeight });
    sizeBox();
    window.addEventListener('resize', sizeBox);
    return () => {
      window.removeEventListener('resize', sizeBox);
      document.documentElement.style.overflow = prevOverflow;
      touched.forEach(([node, t, f, p, tr]) => { node.style.transform = t; node.style.filter = f; node.style.perspective = p; node.style.transition = tr; });
    };
  }, [fs]);
  // Sync state when native full screen is exited via Esc / browser chrome.
  React.useEffect(() => {
    const onChange = () => { if (!document.fullscreenElement && !document.webkitFullscreenElement) setFs(false); };
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    return () => { document.removeEventListener('fullscreenchange', onChange); document.removeEventListener('webkitfullscreenchange', onChange); };
  }, []);

  const toggle = () => {
    const v = ref.current; if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  React.useEffect(() => { const v = ref.current; if (v) v.muted = muted; }, [muted, blobSrc]);
  const soundIcon = muted ? (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5L6 9H2v6h4l5 4z"></path><line x1="22" y1="9" x2="16" y2="15"></line><line x1="16" y1="9" x2="22" y2="15"></line>
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5L6 9H2v6h4l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path>
    </svg>
  );
  const onMeta = () => {
    const v = ref.current; if (!v) return;
    if (isFinite(v.duration) && v.duration > 0) setDuration(v.duration);
  };
  const onTime = () => {
    const v = ref.current; if (!v || scrubbing) return;
    const d = isFinite(v.duration) ? v.duration : duration;
    if (d > 0) setProgress(v.currentTime / d);
  };
  const seekAt = (clientX) => {
    const v = ref.current, bar = barRef.current; if (!v || !bar) return;
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
    if (seekable) { v.currentTime = target; pendingSeek.current = null; }
    else { pendingSeek.current = target; }
  };
  const onCanPlay = () => {
    const v = ref.current; if (!v) return;
    if (pendingSeek.current != null && v.seekable.length > 0) {
      v.currentTime = pendingSeek.current; pendingSeek.current = null;
    }
  };
  const fmt = (s) => { s = Math.max(0, s || 0); const m = Math.floor(s / 60); const ss = Math.floor(s % 60); return m + ':' + String(ss).padStart(2, '0'); };

  // Toggle classic full screen: native if available, else the fixed overlay fallback.
  const toggleFs = () => {
    const el = wrapRef.current;
    const inNative = document.fullscreenElement || document.webkitFullscreenElement;
    if (fs || inNative) {
      if (inNative) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); }
      setFs(false);
      return;
    }
    setFs(true);
    if (el) {
      if (el.requestFullscreen) { el.requestFullscreen().catch(() => {}); }
      else if (el.webkitRequestFullscreen) { el.webkitRequestFullscreen(); }
      else if (ref.current && ref.current.webkitEnterFullscreen) { ref.current.webkitEnterFullscreen(); }
    }
  };
  React.useEffect(() => {
    if (!fs) return;
    const onKey = (e) => { if (e.key === 'Escape') setFs(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [fs]);
  const fsIcon = fs ? (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"></path>
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3"></path>
    </svg>
  );

  React.useEffect(() => {
    if (!scrubbing) return;
    const move = (e) => seekAt(e.touches ? e.touches[0].clientX : e.clientX);
    const up = () => setScrubbing(false);
    window.addEventListener('mousemove', move); window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move); window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move); window.removeEventListener('touchend', up);
    };
  }, [scrubbing]);

  const dur = duration;
  const fsStyle = fs && fsBox ? { width: fsBox.w + 'px', height: fsBox.h + 'px' } : undefined;

  return (
    <div ref={wrapRef} style={fsStyle} className={'vipvp' + ((visible || fs) ? '' : ' vipvp--idle') + (fs ? ' vipvp--fs' : '')} onMouseMove={showBar} onMouseEnter={showBar} onMouseLeave={hideBar}>
      <video ref={ref} src={blobSrc || src} autoPlay loop muted playsInline preload="auto"
        onLoadedMetadata={onMeta} onDurationChange={onMeta} onCanPlay={onCanPlay}
        onTimeUpdate={onTime} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onClick={toggle}></video>
      <div className={'vipvp__bar' + ((visible || fs) ? '' : ' vipvp__bar--hidden')}>
        <button className="vipvp__btn" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
          {playing
            ? <svg viewBox="0 0 24 24" width="18" height="18"><rect x="5" y="4" width="4.5" height="16" rx="1" fill="currentColor"/><rect x="14.5" y="4" width="4.5" height="16" rx="1" fill="currentColor"/></svg>
            : <svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 4l14 8-14 8V4z" fill="currentColor"/></svg>}
        </button>
        <div className="vipvp__track" ref={barRef}
          onMouseDown={(e) => { setScrubbing(true); seekAt(e.clientX); }}
          onTouchStart={(e) => { setScrubbing(true); seekAt(e.touches[0].clientX); }}>
          <div className="vipvp__fill" style={{ width: (progress * 100) + '%' }}></div>
          <div className="vipvp__knob" style={{ left: (progress * 100) + '%' }}></div>
        </div>
        <button className="vipvp__btn" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Unmute' : 'Mute'} aria-pressed={!muted}>
          {soundIcon}
        </button>
        <button className="vipvp__btn" onClick={toggleFs} aria-label={fs ? 'Reduce' : 'Zoom'} aria-pressed={fs}>
          {fsIcon}
        </button>
      </div>
    </div>
  );
}

function VipDinnerPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const stats = [
    { v: 'Wednesday', l: '27th of May' },
    { v: 'Paris', l: 'Secret Venue' },
    { v: 'Exclusive', l: 'VIP Invitations' },
    { v: <VipCount to={90} suffix="%" />, l: 'Executives & Founders' },
  ];
  const reasons = [
    { t: 'World Class Ambiance', img: 'assets/vip-ambiance.jpg', b: 'Enjoy a magical moment of fine dining, and an unforgettable experience in one of the most beautiful places in Paris.' },
    { t: 'Unparalleled Networking', img: 'assets/vip-networking.jpg', b: 'Cultivate meaningful connections among our exceptional speakers, VIPs, and exclusive partners.' },
    { t: 'Front Row to the Future', img: 'assets/vip-frontrow.jpg', b: 'Be part of the moment where tomorrow\u2019s sport business vision takes shape, as SGN sets the tone for what comes next.' },
  ];
  return (
    <React.Fragment>
      <section className="vip-hero">
        <img className="vip-hero__bg" src={CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg'} alt="" aria-hidden="true" />
        <div className="vip-hero__shade" aria-hidden="true"></div>
        <div className="vip-hero__inner">
          <div className="vip-hero__eyebrow-row">
            <h3 className="vip-hero__eyebrow">The Gala</h3>
            <div className="vip-hero__eyebrow-line" aria-hidden="true"></div>
          </div>
          <h1 className="vip-hero__line">An unforgettable</h1>
          <h1 className="vip-hero__line vip-hero__line--gold">evening.</h1>
          <h4 className="vip-hero__desc">Set within one of Paris&rsquo;s most exclusive and breathtaking venues, steps away from Place de la Concorde, the VIP Dinner offers an exceptional evening of refinement and connection.</h4>
        </div>
      </section>

      <section className="section section--tight-b">
        <div className="sg-container sg-container--wide vip-excl">
          <div className="vip-excl__rule reveal" aria-hidden="true"></div>
          <h2 className="vip-excl__title reveal">The most exclusive evening of SportGen.</h2>
          <h3 className="vip-excl__desc reveal">A private dinner bringing together VIP guests, speakers and industry leaders for an unforgettable night of dining, networking and conversation in Paris.</h3>
        </div>
      </section>

      <section className="section section--tight-t">
        <div className="sg-container sg-container--wide">
          <NativeVideo src="assets/vip-dinner-aftermovie.mp4" poster={CDN + 'bANilaK7upt6HZwAfunCY1YBkiw.jpeg'} />
        </div>
      </section>

      <section className="section section--tight-t">
        <div className="sg-container sg-container--wide">
          <div className="vip-stats reveal">
            {stats.map((s) => (
              <div className="vip-stat" key={s.l}>
                <h3 className="vip-stat__value">{s.v}</h3>
                <h4 className="vip-stat__label">{s.l}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="opps-head reveal">
            <h2 className="opps-head__line">Why <span className="opps-head__gold">attend</span></h2>
            <h2 className="opps-head__line">the VIP dinner?</h2>
          </div>
          <div className="vip-why">
            {reasons.map((r, i) => (
              <div className={'vip-why__row' + (i % 2 ? ' vip-why__row--flip' : '') + ' reveal'} key={r.t}>
                <div className="vip-why__box">
                  <img src={r.img} alt={r.t} loading="lazy" />
                </div>
                <div className="vip-why__text">
                  <h3 className="vip-why__title">{r.t}</h3>
                  <div className="vip-why__point">
                    <div className="vip-why__bar" aria-hidden="true"></div>
                    <p className="vip-why__desc">{r.b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function FrenchOpenPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const audience = ['Clubs & Federations', 'Players & Entourages', 'Brands & Sponsors', 'Media & Broadcasters', 'Investors & Partners', 'Entrepreneurs & Founders'];
  return (
    <React.Fragment>
      <section className="vip-hero">
        <img className="vip-hero__bg" src={CDN + 'XjXp4i2SmBYefo19G3YMF5dSfac.png'} alt="" aria-hidden="true" />
        <div className="vip-hero__shade" aria-hidden="true"></div>
        <div className="vip-hero__inner">
          <h3 className="vip-hero__eyebrow">FRENCH OPEN</h3>
          <h1 className="vip-hero__line">SPORT[GEN] Summit</h1>
          <h1 className="vip-hero__line vip-hero__line--gold">during French Open week</h1>
          <h4 className="vip-hero__desc">During the first week of Roland-Garros, Paris becomes a global meeting point for sport. The Summit is designed to take place at the heart of that moment.</h4>
        </div>
        <div className="vip-hero__photo reveal">
          <img src={CDN + 'qbn1GEj8K2cSGX8P7hHOBFwnIk.jpg'} alt="Roland-Garros" />
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide fo-block reveal">
          <div className="fo-rule" aria-hidden="true"></div>
          <h2 className="fo-h2">The moment in Paris</h2>
          <h3 className="fo-kicker">a global meeting point for sport</h3>
          <h4 className="fo-text">During French Open week, Paris operates differently. Executives, athletes, brands, investors and institutions are already present in the city, attending matches, hosting meetings and activating partnerships. Conversations happen naturally. Opportunities accelerate.&rdquo;</h4>
        </div>
        <div className="vip-hero__photo reveal">
          <img src={CDN + '3SfdkzdCUdMuWUQzsRKmBDyfKrU.jpg'} alt="Paris during French Open week" loading="lazy" />
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide fo-block fo-block--center reveal">
          <h2 className="fo-h2">A unique concentration of decision-makers and builders, already gathered in Paris.</h2>
          <div className="fo-stats">
            {audience.map((a) => <h3 className="fo-stat" key={a}>{a}</h3>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide fo-block fo-block--indent reveal">
          <div className="fo-rule" aria-hidden="true"></div>
          <h2 className="fo-h2">Make the most of SportGen Summit week in Paris</h2>
          <h3 className="fo-kicker">SPORT[GEN] Summit takes place during one of the most intense weeks of the global sports calendar.</h3>
          <h4 className="fo-text">With Roland-Garros in full swing, Paris becomes a natural meeting point for athletes, executives, brands, investors and entrepreneurs. SportGen week is designed to structure that momentum and turn it into meaningful business opportunities. The summit is located just 15&ndash;20 minutes from Roland-Garros, allowing attendees to move seamlessly between matches, meetings and key moments happening across the city.</h4>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide fo-block reveal">
          <div className="fo-rule" aria-hidden="true"></div>
          <h2 className="fo-h2 fo-h2--white">One trip to Paris.</h2>
          <h2 className="fo-h2">A full week of strategic opportunities.</h2>
          <div className="cta-row" style={{ marginTop: '24px' }}>
            <a className="ptn-btn-dark" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get my Ticket</a>
            <a className="ptn-btn-dark" href="#/why-attend" onClick={(e) => go(e, '#/why-attend')}>Why Attend</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function PlanTripPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const { Button, GlassCard } = window.SPORTGENDesignSystem_882f1e;
  const [copied, setCopied] = useP3State(false);

  const venuePhotos = ['rYpJNXjr8xzmk2BZdqWExWzCDo.jpg', 'zDy0ENPINKceFJsj4KBh1YJTy4.jpg', '4ubXh0Hd70r6NKHcMbQZ7CTic.jpg'];

  const airports = [
    { code: 'CDG', name: 'Charles de Gaulle', time: '~35 min', sub: 'North of Paris, served by RER B, taxis & private transfers.' },
    { code: 'ORY', name: 'Paris-Orly', time: '~30 min', sub: 'South of Paris, served by Orlybus, tram T7 & private transfers.' },
  ];

  const ti = (paths) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths}</svg>
  );
  const transports = [
    { icon: ti(<React.Fragment><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></React.Fragment>), label: 'Taxi / VTC', desc: 'G7, Uber and Bolt operate 24/7 from both airports to central Paris.' },
    { icon: ti(<React.Fragment><rect width="16" height="16" x="4" y="3" rx="2" /><path d="M4 11h16" /><path d="M12 3v8" /><path d="m8 19-2 3" /><path d="m18 22-2-3" /><path d="M8 15h.01" /><path d="M16 15h.01" /></React.Fragment>), label: 'Metro & RER', desc: 'Lines 1, 9 and 13 stop closest to the venue.' },
    { icon: ti(<React.Fragment><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.7a1 1 0 0 0-.2-.6l-3.5-4.4A1 1 0 0 0 17.5 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></React.Fragment>), label: 'Private Transfer', desc: 'Pre-book your airport shuttle or private car for a seamless door-to-door ride.' },
    { icon: ti(<React.Fragment><circle cx="18.5" cy="17.5" r="3.5" /><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="15" cy="5" r="1" /><path d="M12 17.5V14l-3-3 4-3 2 3h2" /></React.Fragment>), label: "Vélib' & Scooter", desc: "Paris's bike-share and e-scooters (Lime, Dott) are perfect for last-mile travel." },
  ];

  const hotels = [
    { zone: '8th arr.', label: 'Champs-Élysées / Concorde', desc: 'Closest to the venue. Home to the Grand Palais, luxury hotels and the iconic avenue.', badge: 'Recommended' },
    { zone: '1st arr.', label: 'Louvre / Opéra', desc: 'Walking distance from the Tuileries and central Paris landmarks.' },
    { zone: '7th arr.', label: 'Eiffel Tower / Invalides', desc: 'Calm, residential, great for a Parisian feel with easy metro access.' },
    { zone: '16th arr.', label: 'Trocadéro / Passy', desc: 'Upscale neighbourhood across the Seine, with great views of the Eiffel Tower.' },
  ];

  const metroLines = [
    { line: '1', stop: 'Champs-Élysées – Clemenceau' },
    { line: '9', stop: 'Franklin D. Roosevelt' },
    { line: '13', stop: 'Miromesnil' },
  ];

  return (
    <React.Fragment>
      <section className="page-hero page-hero--tall pyt-hero">
        <img className="page-hero__img" src="assets/paris-aerial.jpg" alt="Paris aerial view" aria-hidden="true" />
        <div className="pyt-hero__shade" aria-hidden="true"></div>
        <div className="sg-container page-hero__inner">
          <div className="pyt-hero__eyebrow-row">
            <span className="sg-eyebrow sg-eyebrow--gold">Plan Your Trip</span>
            <span className="pyt-hero__rule" aria-hidden="true"></span>
          </div>
          <h1 className="pyt-hero__title">
            <span className="pyt-hero__title--gold">Everything you need</span>
            <br />
            <span className="pyt-hero__title--white">to know for the event</span>
          </h1>
          <p className="page-hero__sub">Everything you need to prepare your stay and make<br />the most of SPORT[GEN] Summit week in Paris.</p>
          <div className="page-hero__cta">
            <a className="pyt-hero__btn" href="#/tickets" onClick={(e) => { e.preventDefault(); window.location.hash = '/tickets'; }}>Get my ticket</a>
          </div>
        </div>
      </section>

      {/* ── Airline Partner ──────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="sg-container">
          <div className="airline reveal sg-glass">
            <div>
              <div className="sg-eyebrow sg-eyebrow--gold">Official Airline Partner</div>
              <p className="airline__title">Air France</p>
              <p className="airline__copy">Save on your flights to Paris with the exclusive SPORT[GEN] Summit booking code.</p>
            </div>
            <div className="airline__right">
              <p className="airline__hint">Click to copy your promo code</p>
              <button className={'airline__code' + (copied ? ' airline__code--done' : '')}
                onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }}>
                {copied
                  ? <React.Fragment><span>✓</span> Code Copied!</React.Fragment>
                  : 'GME60585AF'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Venue ──────────────────────────────────── */}
      <section className="section" id="venue">
        <div className="sg-container sg-container--wide">
          <div className="pyt-section-head reveal">
            <span className="sg-eyebrow sg-eyebrow--gold">The Venue</span>
            <h2 className="pyt-h2">In the heart of <span className="pyt-h2__gold">Paris</span></h2>
            <p className="pyt-sub">Steps from the Champs-Élysées and Place de la Concorde, one of Paris's most iconic venues.</p>
          </div>
          <div className="pyt-venue reveal">
            <div className="pyt-venue__photos">
              {venuePhotos.map((src, i) => (
                <figure className={'pyt-venue__fig pyt-venue__fig--' + i} key={src}>
                  <img src={CDN + src} alt="The venue in Paris" loading="lazy" />
                </figure>
              ))}
            </div>
            <div className="pyt-venue__info">
              <div className="pyt-info-block">
                <h4 className="pyt-info-block__title">Address</h4>
                <p className="pyt-info-block__text">5 Avenue Gabriel<br />75008 Paris, France</p>
                <a className="pyt-map-link" href="https://maps.google.com/?q=5+Avenue+Gabriel+75008+Paris" target="_blank" rel="noopener">
                  View on Google Maps →
                </a>
              </div>
              <div className="pyt-info-block">
                <h4 className="pyt-info-block__title">Metro</h4>
                <div className="pyt-metro-list">
                  {metroLines.map(({ line, stop }) => (
                    <div className="pyt-metro-item" key={line}>
                      <span className={'pyt-metro-badge pyt-metro-badge--' + line}>{line}</span>
                      <span className="pyt-metro-stop">{stop}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pyt-info-block">
                <h4 className="pyt-info-block__title">Bus</h4>
                <p className="pyt-info-block__text">Lines 28, 42, 72, 73, 83, 93<br /><em style={{ color: 'var(--text-muted)' }}>Champs-Élysées – Clemenceau</em></p>
              </div>
              <div className="pyt-info-block">
                <h4 className="pyt-info-block__title">Parking</h4>
                <p className="pyt-info-block__text">Marigny – Champs-Élysées<br />Concorde (underground)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting to Paris ───────────────────────────── */}
      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="pyt-section-head reveal">
            <span className="sg-eyebrow sg-eyebrow--gold">Getting to Paris</span>
            <h2 className="pyt-h2">Two international <span className="pyt-h2__gold">airports</span></h2>
          </div>
          <div className="pyt-airports reveal">
            {airports.map((a) => (
              <div className="pyt-airport sg-glass" key={a.code}>
                <div className="pyt-airport__code">{a.code}</div>
                <div>
                  <p className="pyt-airport__name">{a.name}</p>
                  <p className="pyt-airport__time">{a.time} from the venue</p>
                  <p className="pyt-airport__sub">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pyt-transport-grid reveal">
            {transports.map((t, i) => (
              <GlassCard hover key={t.label} className="pyt-transport-card" style={{ transitionDelay: i * 60 + 'ms' }}>
                <span className="pyt-transport-icon">{t.icon}</span>
                <h4 className="pyt-transport-label">{t.label}</h4>
                <p className="pyt-transport-desc">{t.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accommodation ──────────────────────────────── */}
      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="pyt-section-head reveal">
            <span className="sg-eyebrow sg-eyebrow--gold">Accommodation</span>
            <h2 className="pyt-h2">Stay in the heart <span className="pyt-h2__gold">of Paris</span></h2>
            <p className="pyt-sub">Partner hotels are available across the most prestigious Parisian neighbourhoods, all within easy reach of the venue.</p>
          </div>
          <div className="pyt-hotels reveal">
            {hotels.map((h, i) => (
              <div className={'pyt-hotel sg-glass' + (h.badge ? ' pyt-hotel--featured' : '')} key={h.zone} style={{ transitionDelay: i * 70 + 'ms' }}>
                {h.badge && <span className="pyt-hotel__badge">{h.badge}</span>}
                <p className="pyt-hotel__zone">{h.zone}</p>
                <h4 className="pyt-hotel__label">{h.label}</h4>
                <p className="pyt-hotel__desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Networking App + Visa ──────────────────────── */}
      <section className="section">
        <div className="sg-container">
          <div className="pyt-bottom-grid reveal">
            <div className="pyt-app sg-glass">
              <span className="sg-eyebrow sg-eyebrow--gold">Networking App</span>
              <h3 className="pyt-app__title">Connect before you arrive</h3>
              <p className="pyt-app__body">Available <strong>3 weeks before the event</strong>, browse the full attendee list, schedule 1:1 meetings, build your personalized agenda and receive real-time updates.</p>
              <ul className="opps__list" style={{ marginTop: '1.2rem' }}>
                <li>Full attendee directory</li>
                <li>1:1 meeting scheduler</li>
                <li>Personalized agenda</li>
                <li>Real-time event updates</li>
              </ul>
            </div>
            <div className="pyt-assist">
              <div className="pyt-assist__card sg-glass">
                <span className="sg-eyebrow sg-eyebrow--gold">Visa &amp; Entry</span>
                <h3 className="pyt-assist__title">Need an invitation letter?</h3>
                <p className="pyt-assist__body">We issue official invitation letters on request to support your visa application.</p>
                <a className="pyt-assist__link" href="mailto:info@sportgensummit.com">info@sportgensummit.com →</a>
              </div>
              <div className="pyt-assist__card sg-glass">
                <span className="sg-eyebrow sg-eyebrow--gold">Need Assistance?</span>
                <h3 className="pyt-assist__title">Our team is here to help</h3>
                <p className="pyt-assist__body">Any questions about logistics, accommodation or access, reach out directly and we'll get back to you.</p>
                <a className="pyt-assist__link" href="mailto:info@sportgensummit.com">info@sportgensummit.com →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TicketsBlock />
    </React.Fragment>
  );
}

function FaqPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const MEETING_URL = 'https://meetings-eu1.hubspot.com/matias-pagura/matias-ticketing-call?uuid=462b5be6-304';
  const faq = [
    { q: 'How can I register for the SportGen Summit?', a: 'You can register your interest on our event website, and we\u2019ll notify you by email as soon as tickets go live. You\u2019ll also be able to take advantage of special early-bird pricing when registration opens.' },
    { q: 'Will the summit be available online for remote attendees?', a: 'The summit is an exclusive in-person event and will not be livestreamed. However, selected content will be shared after the event through our media partners and SGN social media channels.' },
    { q: 'Can I apply for the Startup Competition?', a: 'Applications are now open on our Startup Competition page. Eligible startups must have raised less than $5M in total funding.' },
    { q: 'How can I become a sponsor or exhibitor at the event?', a: 'To explore partnership opportunities, please visit the \u201cPartner\u201d section on our website. You\u2019ll be able to book a meeting with our team, who will be happy to guide you through the available packages and benefits.' },
    { q: 'Will there be opportunities for networking at the summit?', a: 'The summit will feature a wide range of networking opportunities, including dedicated lounges, afterwork gatherings, private meeting rooms, exhibitor booths, and curated side events. You\u2019ll have ample chances to connect with speakers, attendees, and industry leaders in both structured and informal settings.' },
    { q: 'What is the dress code for the event?', a: 'The dress code is business professional, as you\u2019ll be meeting and networking with leaders and experts from across the industry.' },
  ];
  const [open, setOpen] = React.useState(-1);
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const venueImgs = ['rYpJNXjr8xzmk2BZdqWExWzCDo.jpg', 'zDy0ENPINKceFJsj4KBh1YJTy4.jpg', '4ubXh0Hd70r6NKHcMbQZ7CTic.jpg'];
  const mailIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>
  );
  const calIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"></rect><path d="M8 2v4M16 2v4M3 9h18"></path></svg>
  );
  return (
    <React.Fragment>
      <section className="faqp-hero" data-screen-label="FAQ">
        <img className="faqp-hero__bg" src={CDN + 'YS423by22cxS7BAwz4vMTZoCQs.png'} alt="" aria-hidden="true" />
        <div className="faqp-hero__shade" aria-hidden="true"></div>
        <div className="faqp-hero__inner">
          <div className="vip-hero__eyebrow-row reveal">
            <h3 className="vip-hero__eyebrow">Contact</h3>
            <div className="vip-hero__eyebrow-line" aria-hidden="true"></div>
          </div>
          <div className="reveal">
            <h1 className="faqp-hero__line">Get in touch</h1>
            <h1 className="faqp-hero__line faqp-hero__line--gold">with us today.</h1>
          </div>
          <div className="faqp-contacts reveal">
            <div className="faqp-card">
              <div className="faqp-card__head">
                <span className="faqp-card__icon">{mailIcon}</span>
                <p className="faqp-card__title">Email Us</p>
              </div>
              <p className="faqp-card__desc">Reach out to our team to know more &amp; get our brochure</p>
              <a className="faqp-card__link" href="mailto:partnerships@sportgensummit.com">partnerships@sportgensummit.com</a>
            </div>
            <div className="faqp-card">
              <div className="faqp-card__head">
                <span className="faqp-card__icon">{calIcon}</span>
                <p className="faqp-card__title">Book a Meeting</p>
              </div>
              <p className="faqp-card__desc">We'll be able to share directly all the details you need</p>
              <div className="faqp-card__btn"><Button variant="primary" href={MEETING_URL} target="_blank" rel="noreferrer">Book a meeting</Button></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section faqp-venue">
        <div className="sg-container sg-container--wide">
          <div className="faqp-title reveal">
            <h2 className="faqp-h2">Explore our</h2>
            <h2 className="faqp-h2 faqp-h2--gold">venue and location details</h2>
          </div>
          <div className="faqp-venue__imgs reveal">
            {venueImgs.map((src) => (
              <figure className="faqp-venue__fig" key={src}><img src={CDN + src} alt="The venue in Paris" loading="lazy" /></figure>
            ))}
          </div>
          <h4 className="faqp-venue__text reveal">
            <strong>Address:</strong> 5 Avenue Gabriel, 75008 Paris, France<br /><br />
            <strong>Metro:</strong><br />
            - Line 1 <em>Champs-Élysées–Clemenceau</em><br />
            - Line 9 <em>Franklin D. Roosevelt</em><br />
            - Line 13 <em>Miromesnil</em><br /><br />
            <strong>Bus:</strong> 28, 42, 72, 73, 83, 93 – <em>Champs-Élysées–Clemenceau</em><br /><br />
            <strong>Parking:</strong> Marigny – Champs-Élysées, Concorde
          </h4>
        </div>
      </section>
      <section className="section faqp-faqs">
        <div className="sg-container sg-container--wide">
          <div className="faqp-title reveal">
            <h2 className="faqp-h2">All the important details before attending</h2>
            <h2 className="faqp-h2 faqp-h2--gold">SportGen</h2>
          </div>
          <div className="faqp-acc reveal">
            {faq.map((f, i) => (
              <div className={'faqp-acc__item' + (open === i ? ' is-open' : '')} key={f.q} role="button" tabIndex={0}
                onClick={() => setOpen(open === i ? -1 : i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(open === i ? -1 : i); } }}>
                <div className="faqp-acc__row">
                  <h4 className="faqp-acc__q">{f.q}</h4>
                  <span className="faqp-acc__plus" aria-hidden="true"><i></i><i></i></span>
                </div>
                <div className="faqp-acc__a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function PartnerPage() {
  const CDN = 'https://framerusercontent.com/images/';
  const BROCHURE_URL = '#/download-brochure';
  const MEETING_URL = 'https://meetings-eu1.hubspot.com/aurelien-linyer/discovery-call?uuid=b569f199-9acb-4240-9d21-5907804ca26b';
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };

  const whyBlocks = [
    { t: 'Maximize brand impact and ROI at SGN', p: 'Connect with 1,500+ global leaders and decision-makers' },
    { t: 'Lead the discussions shaping tomorrow', p: 'Stand out as a speaker on topics such as capital, women\u2019s sports, technology, media rights or brand experience. Establish your brand as a reference.' },
    { t: 'Forge strategic partnerships for growth', p: 'Engage with industry influencers, generate leads and grow your pipeline through exclusive networking' },
  ];
  const pStats = [
    { number: 40, suffix: '+', label: 'Countries' },
    { number: 1200, suffix: '', label: 'Professionals' },
    { number: 100, suffix: '+', label: 'Media' },
    { number: 300, suffix: '', label: 'Companies' },
  ];
  const involved = [
    { photo: CDN + 'ycGYCN2zkEXQO8r7PV24MYWBO9A.png', title: 'Super Early bid tickets now available', body: 'Join 1500+ professionals shaping the future of sports', cta: 'See Tickets', href: '#/tickets' },
    { photo: CDN + 'ZB5lV6jVnptMEbenZJHFLVX2V1s.png', title: 'Position your brand at SGN', body: 'Connect with key decision-makers and make a lasting impact' },
    { photo: CDN + 'kBEDN4Fur4jNB7ieUl88td0bC08.png', title: 'Become a speaker and take the stage', body: 'Join 100 world-class voices redefining the business of sport.', cta: 'See 2026 Speakers', href: '#/speakers' },
    { photo: CDN + 'M8ZEBZWVvM9a4GcqTMeFXBk.png', title: 'The best startups will be at The Draft', body: 'Become a competition partner and be the first to discover the next-gen innovations.', cta: 'Learn more', href: '#/startup-competition' },
    { photo: CDN + 'JQvj6lEGqjagf8qfs0RINSysC7E.png', title: 'Experiences beyond the summit', body: 'Let us craft for you the ideal side-event for your guests', cta: 'Learn more', href: '#/side-events' },
  ];
  const premium = [
    { t: 'International', p: 'Over 70% of attendees are flying in from abroad, bringing together senior leaders from North America, Asia, or the MENA region for a truly global exchange of insights, opportunities, and partnerships.' },
    { t: 'Market\u2019s leading organizations in convergence', p: 'Meet the market-shaping brands and their senior decision-makers leading major investments and seeking high-value partnerships.' },
    { t: 'Elevated, seamless experience in an iconic setting', p: 'Enjoy a curated experience designed for efficiency and comfort, from effortless access to premium hospitality, all set within one of Paris\u2019s most exclusive venues.' },
  ];
  const stageItems = ['Stage naming rights', 'Exhibition space', 'Private meeting rooms', 'VIP dinner', 'Panel discussion', 'Side events', 'and more\u2026'];
  const check = <svg viewBox="0 0 29 18.5" aria-hidden="true"><path d="M 0 8 L 10.5 18.5 L 29 0" fill="transparent" strokeWidth="4" stroke="var(--gold)"></path></svg>;
  const featCards = [
    { t: 'Connect at scale', p: 'Reach 1,500+ global sport leaders and an elite audience of investors, brands and rights holders across the summit.',
      ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" rx="1.6"></rect><rect x="14" y="3" width="7" height="7" rx="1.6"></rect><rect x="3" y="14" width="7" height="7" rx="1.6"></rect><rect x="14" y="14" width="7" height="7" rx="1.6"></rect></svg> },
    { t: 'Own the conversation', p: 'Take a speaker slot or host a session on the topics shaping sport \u2013 from capital and media rights to women\u2019s sport and fan experience.',
      ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="3"></rect><path d="M8 17 L8 21 L13 17"></path></svg> },
    { t: 'Build your pipeline', p: 'Onsite signage, digital presence and social amplification extend your visibility before, during and after the summit.',
      ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="13" width="4" height="8" rx="1"></rect><rect x="10" y="8" width="4" height="13" rx="1"></rect><rect x="17" y="3" width="4" height="18" rx="1"></rect></svg> },
    { t: 'Go beyond the booth', p: 'From VIP dinners to side events and private meeting rooms, every touchpoint is an opportunity to connect.',
      ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9 15 L15 9 M15 9 h-4 M15 9 v4"></path></svg> },
  ];
  const arrowUR = <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12 L12 4 M6 4 h6 v6"></path></svg>;
  const activations = [
    { photo: 'assets/photos/side-events-hero.png', title: 'SPORT[GEN] Summit', body: 'The flagship two-day gathering in the heart of Paris. Mainstage keynotes, deep-dive tracks and unrivalled networking with the global sport-business community.', cta: '2026 Tickets', href: '#/tickets' },
    { photo: 'assets/sgn-investment-summit-concorde.jpg', logoOverlay: 'assets/brand/sgn-investment-summit-white.png', title: 'SGN Invest', body: 'The capital-focused day connecting founders with the funds, family offices and strategics actively deploying into sport. Sponsor to sit at the deal table.', cta: 'About the Summit', href: '#/investment-summit' },
    { photo: 'assets/photos/the-draft-stage.jpg', title: 'The Draft', body: 'The startup competition inside SGN, built for the ventures ready to be taken seriously by investors and buyers. Become a partner and discover the next-gen first.', cta: 'About The Draft', href: '#/startup-competition' },
    { photo: 'assets/closing-talk.jpg', title: 'Side Events & VIP Dinners', body: 'From VIP dinners to private meeting rooms and curated side events across the week, every touchpoint is an opportunity to host and connect.', cta: 'Explore Side Events', href: '#/side-events' },
  ];

  const ctaRow = (
    <div className="cta-row cta-row--center">
      <a className="ptn-btn-light" href={BROCHURE_URL} onClick={(e) => go(e, BROCHURE_URL)}>Download our Brochure</a>
      <a className="ptn-btn-dark" href={MEETING_URL} target="_blank" rel="noopener">Book a Meeting</a>
    </div>
  );

  return (
    <div className="ptn-page">
      <section className="vip-hero ptn-hero">
        <img className="vip-hero__bg" src="assets/sponsor-hero-bg.png" alt="" aria-hidden="true" />
        <div className="vip-hero__shade" aria-hidden="true"></div>
        <div className="ptn-hero__inner">
          <h3 className="vip-hero__eyebrow">SPONSOR</h3>
          <h1 className="ptn-hero__title">Partner with us</h1>
          <p className="ptn-hero__desc">Become a SportGen partner and shape the future of the sports industry.</p>
          {ctaRow}
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="opps-head reveal" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
            <h2 className="opps-head__line">Why become an <span className="opps-head__gold">SGN partner ?</span></h2>
          </div>
          <div className="ptn-why reveal">
            <div className="ptn-why__photo" style={{ backgroundImage: 'url(' + CDN + 'baiAmsXQKLDQ9xQKpp3N1Pc2g.jpg)' }}></div>
            <div className="ptn-why__list">
              {whyBlocks.map((b) => (
                <div className="ptn-why__block" key={b.t}>
                  <h3 className="ptn-why__title">{b.t}</h3>
                  <div className="vip-why__point">
                    <div className="vip-why__bar" aria-hidden="true"></div>
                    <p className="ptn-why__p">{b.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="ptn-btn-dark" href={MEETING_URL} target="_blank" rel="noopener">Book a Meeting</a>
          </div>
        </div>
      </section>

      <section className="section ptn-feat-sec">
        <div className="ptn-feat-sec__glow" aria-hidden="true"></div>
        <div className="sg-container sg-container--wide">
          <div className="opps-head reveal">
            <h2 className="opps-head__line">Why sponsor <span className="opps-head__gold">SGN 2026</span></h2>
            <h4 className="ptn-sub">As a partner, your brand appears across the full SportGen experience &ndash; from the main stage and exhibition floor to networking sessions and digital touchpoints.</h4>
          </div>
          <div className="ptn-feat__grid reveal">
            {featCards.map((c) => (
              <div className="ptn-feat__card" key={c.t}>
                <div className="ptn-feat__ico">{c.ico}</div>
                <h3 className="ptn-feat__ttl">{c.t}</h3>
                <p className="ptn-feat__p">{c.p}</p>
              </div>
            ))}
          </div>
          <div className="ptn-feat__cta reveal">
            <a className="ptn-btn-dark" href={MEETING_URL} target="_blank" rel="noopener">Book a Meeting with SGN</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="ptn-cstage reveal">
            <div className="ptn-cstage__text">
              <h2 className="opps-head__line">Put your brand on <span className="opps-head__gold">center stage</span></h2>
              <p className="ptn-cstage__sub">We connect innovative companies with the future of sport: unlocking strategic partnerships and amplifying global impact. Partner opportunities include:</p>
              <ul className="ptn-cstage__list">
                {stageItems.map((s) => (
                  <li key={s}>{check}<span>{s}</span></li>
                ))}
              </ul>
            </div>
            <figure className="ptn-cstage__photo">
              <img src="assets/partner-bnp-stage.png" alt="BNP Paribas Stage at SPORT[GEN] Summit" loading="lazy" />
              <figcaption className="ptn-stage__cap">
                <span className="ptn-stage__cap-eyebrow">Real activation · 2026</span>
                <span className="ptn-stage__cap-line">The BNP Paribas Stage, a founding partner&rsquo;s name on the SPORT[GEN] main stage.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <PartnerCounterBand stats={pStats} goldLabels />

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="opps-head reveal">
            <h2 className="opps-head__line">A summit of moments to <span className="opps-head__gold">pick your activation</span></h2>
            <h4 className="ptn-sub">There are many ways to show up powerfully at SGN &ndash; from sponsoring the mainstage and The Draft, to hosting VIP dinners and branded activations across the week. Every option is built around your objectives.</h4>
          </div>
          <div className="ptn-act__grid reveal">
            {activations.map((a) => (
              <article className="ptn-act__card" key={a.title}>
                <div className="ptn-act__media">
                  <img src={a.photo} alt={a.title} loading="lazy" />
                  {a.logoOverlay ? <div className="hf-pcard__grid-veil" aria-hidden="true"></div> : null}
                  {a.logoOverlay ? <img className="ptn-act__logo" src={a.logoOverlay} alt={a.title} /> : null}
                </div>
                <h3 className="ptn-act__ttl">{a.title}</h3>
                <p className="ptn-act__p">{a.body}</p>
                <a className="ptn-act__btn" href={a.href} onClick={(e) => go(e, a.href)}>{a.cta} {arrowUR}</a>
              </article>
            ))}
          </div>
          <div className="ptn-act__more reveal">
            <div className="cta-row cta-row--center">
              <a className="ptn-btn-light" href="#/side-events" onClick={(e) => go(e, '#/side-events')}>Explore SGN Week</a>
              <a className="ptn-btn-dark" href={MEETING_URL} target="_blank" rel="noopener">Host your Event with SGN</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="ptn-aud reveal">
            <div className="ptn-aud__text">
              <h2 className="opps-head__line">A premium audience <span className="opps-head__gold">in the heart of Paris</span></h2>
              {premium.map((b) => (
                <div className="ptn-why__block" key={b.t}>
                  <h3 className="ptn-why__title">{b.t}</h3>
                  <div className="vip-why__point">
                    <div className="vip-why__bar" aria-hidden="true"></div>
                    <p className="ptn-why__p">{b.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ptn-aud__photo">
              <img src="assets/photos/gala-handshake.png" alt="SportGen premium audience networking in Paris" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <PartnerTiers />

      <section className="section ptn-final">
        <div className="ptn-final__bg" style={{ backgroundImage: 'url(' + CDN + 'SpjULns9r4OFcvBqDV58zVwvM.jpg)' }} aria-hidden="true"></div>
        <div className="ptn-final__shade" aria-hidden="true"></div>
        <div className="sg-container ptn-final__inner reveal">
          <h1 className="ptn-hero__title">Partner with us</h1>
          {ctaRow}
        </div>
      </section>
    </div>
  );
}

// Partner-page counter band: same layout as home, gold gradient labels
function PartnerCounterBand({ stats }) {
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
    <section className="section section--cband">
      <div className="cband cband--gold-labels" ref={ref}>
        {stats.map((s) => <CounterBandItem key={s.label} on={on} number={s.number} suffix={s.suffix} label={s.label} />)}
      </div>
    </section>
  );
}

Object.assign(window, { AgendaPage, StartupPage, MediasPage, SideEventsPage, VipDinnerPage, FrenchOpenPage, PlanTripPage, FaqPage, PartnerPage, VipVideoPlayer, NativeVideo });
