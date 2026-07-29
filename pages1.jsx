/* SPORT[GEN], Home page */
function PartnerTiers() {
  const { partnerTiers } = window.SGData;
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

    if (reduce) { order.forEach((el) => el.classList.add('ptier-lit')); return; }

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

    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply); } };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [partnerTiers]);

  return (
    <section className="section section--partner-tiers section--ptiers-pyramid" id="partners" ref={sectionRef}>
      <div className="sg-container">
        <h2 className="ptiers__heading reveal">SPORT<span style={{color:'var(--white)'}}>&#91;GEN&#93;</span> <span className="ptiers__heading__gold">2026 Partners</span></h2>
        {partnerTiers.map((tier, i) => (
          <React.Fragment key={tier.label}>
            {i > 0 ? <hr className="ptiers__divider" /> : null}
            <div className={'ptier ptier--' + tier.tier}>
              <p className="ptier__label">{tier.label}</p>
              <div className="ptier__logos">
                {tier.logos.map((l, j) => (
                  <div className="ptier__logo" key={j}>
                    <img src={l.src} alt={l.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function HomeFeatures() {
  const { homeFeatures } = window.SGData;
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  const scroller = React.useRef(null);
  const nudge = (dir) => {
    const el = scroller.current; if (!el) return;
    const card = el.querySelector('.hf-pcard');
    const dx = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * dx, behavior: 'smooth' });
  };
  return (
    <section className="section section--features">
      <div className="sg-container sg-container--wide">
        <div className="hf-head reveal">
          <h2 className="home-h2 home-h2--flush">Be part of SportGen <span className="home-h2__gold">this May</span></h2>
          <div className="hf-nav">
            <button className="hf-nav__btn" type="button" aria-label="Scroll left" onClick={() => nudge(-1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"></path></svg>
            </button>
            <button className="hf-nav__btn" type="button" aria-label="Scroll right" onClick={() => nudge(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"></path></svg>
            </button>
          </div>
        </div>
        <div className="hf-scroller" ref={scroller}>
          {homeFeatures.map((f, i) => (
            <article className="hf-pcard reveal" key={f.title} style={{ transitionDelay: i * 60 + 'ms' }}>
              <div className="hf-pcard__media">
                {f.grid ? (
                  <div className="hf-pcard__grid">
                    {f.grid.map((g, k) => (
                      <img key={k} src={g} alt="" loading="lazy" />
                    ))}
                    <div className="hf-pcard__grid-veil" aria-hidden="true"></div>
                    {f.logo ? <img className="hf-pcard__grid-logo" src={f.logo} alt="SGN" /> : null}
                  </div>
                ) : (
                  <React.Fragment>
                    <img className="hf-pcard__img" src={f.photo} alt="" loading="lazy" style={{ transform: f.zoom ? 'scale(' + f.zoom + ')' : undefined, transformOrigin: f.zoom ? (f.objpos || 'center') : undefined, objectPosition: f.objpos }} />
                    {f.logoOverlay ? <div className="hf-pcard__grid-veil" aria-hidden="true"></div> : null}
                    {f.logoOverlay ? <img className="hf-pcard__grid-logo" src={f.logoOverlay} alt={f.title} /> : null}
                  </React.Fragment>
                )}
                <span className="hf-pcard__num">[ {String(i + 1).padStart(2, '0')} ]</span>
              </div>
              <div className="hf-pcard__body">
                <h4 className="hf-pcard__title">{f.title}</h4>
                <p className="hf-pcard__sub">{f.body}</p>
              </div>
              <a className="hf-pcard__cta" href={f.href} onClick={f.href && !f.href.startsWith('#') ? undefined : (e) => go(e, f.href)}>
                <span>{f.cta}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Gated "attendee snapshot" section: stats + scrolling attendee wall + lead-capture modal.
   The modal embeds the SAME HubSpot form as Get in Touch, then opens the PDF on submit.
   The PDF is fetched as a blob first, so it also works in sandboxed previews where a
   direct file URL in a new tab is rejected. */
function deliverSnapshot() {
  const { snapshotPdf } = window.SGData;
  const open = (url) => {
    const w = window.open(url, '_blank', 'noopener');
    if (!w) { // popup blocked, fall back to a click-driven navigation
      const a = document.createElement('a');
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      document.body.appendChild(a); a.click(); a.remove();
    }
  };
  fetch(snapshotPdf)
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.blob(); })
    .then((b) => {
      const url = URL.createObjectURL(b.slice(0, b.size, 'application/pdf'));
      open(url);
      setTimeout(() => URL.revokeObjectURL(url), 120000);
    })
    .catch(() => open(snapshotPdf));
}

function SnapshotGate({ open, onClose }) {
  const { snapshotPdf } = window.SGData;
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const [done, setDone] = React.useState(false);
  const fired = React.useRef(false);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  React.useEffect(() => { if (open) { setDone(false); fired.current = false; } }, [open]);
  if (!open) return null;
  return (
    <div className="snapgate" role="dialog" aria-modal="true" aria-label="Download the 2026 attendee snapshot" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="snapgate__panel">
        <button className="snapgate__close" type="button" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
        </button>
        {done ? (
          <div className="snapgate__done">
            <p className="sg-eyebrow">Your download is ready</p>
            <h3 className="snapgate__title">Thank you. <span className="home-h2__gold">Enjoy the read.</span></h3>
            <p className="snapgate__lede">The 2026 attendee snapshot opened in a new tab. If your browser blocked it, use the button below.</p>
            <Button variant="primary" size="lg" type="button" onClick={deliverSnapshot}>Open the PDF</Button>
          </div>
        ) : (
          <React.Fragment>
            <p className="sg-eyebrow">2026 Attendee Snapshot</p>
            <h3 className="snapgate__title">Tell us who you are, <span className="home-h2__gold">and it's yours.</span></h3>
            <p className="snapgate__lede">A curated extract of who was in the room: roles and organizations across teams, leagues, brands, media, investors and tech.</p>
            <div className="snapgate__hs">
              {/* HubspotForm lives in pages2.jsx (separate Babel scope), read off window at render time */}
              <window.HubspotForm targetId="hs-form-snapshot" onSubmitted={() => {
                if (fired.current) return;
                fired.current = true;
                try { window.localStorage.setItem('sgn_snapshot_access', '1'); } catch (err) { /* no storage */ }
                setDone(true);
                deliverSnapshot();
              }} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function AttendeeSnapshot() {
  const { snapshotStats, snapshotAttendees } = window.SGData;
  // One attendee per line: interleave the three source columns into a single list.
  const snapshotLines = React.useMemo(() => {
    const out = [];
    const max = Math.max.apply(null, snapshotAttendees.map((c) => c.length));
    for (let i = 0; i < max; i++) {
      snapshotAttendees.forEach((c) => { if (c[i]) out.push(c[i]); });
    }
    return out;
  }, [snapshotAttendees]);
  const [gate, setGate] = React.useState(false);
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  // The form is the gate: always open it, so the section stays demoable and the lead is always captured.
  const onCta = () => setGate(true);
  return (
    <section className="section section--snapshot" id="attendee-snapshot">
      <div className="sg-container sg-container--wide">
        <h2 className="home-h2 snap__heading reveal">The ultimate gathering of <span className="home-h2__gold">sports business professionals</span></h2>
        <div className="snap__grid">
          <div className="snap__stats reveal">
            {snapshotStats.map((s) => (
              <div className="snap__stat" key={s.label}>
                <span className="snap__stat-value">{s.value}</span>
                <span className="snap__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="snap__wall reveal" aria-label="A sample of 2026 attendees">
            <div className="snap__col">
              <div className="snap__track">
                {snapshotLines.concat(snapshotLines).map((a, j) => (
                  <p className="snap__line" key={j} aria-hidden={j >= snapshotLines.length ? 'true' : undefined}>
                    <span className="snap__line-role">{a.role}</span>
                    <span className="snap__line-sep" aria-hidden="true"></span>
                    <span className="snap__line-entity">{a.entity}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="snap__cta reveal">
          <Button variant="primary" size="lg" type="button" onClick={onCta}>
            Download the 2026 Attendee Snapshot
          </Button>
          <p className="snap__cta-note"></p>
        </div>
      </div>
      <SnapshotGate open={gate} onClose={() => setGate(false)} />
    </section>
  );
}

function HomePage() {
  const { speakersHome, walls } = window.SGData;
  return (
    <React.Fragment>
      <Hero />
      <div className="home-figbg">
        <div className="home-figbg__bg" aria-hidden="true" />
        <CounterBand />
        <section className="section section--atmo-network" id="speakers">
          <div className="sg-container sg-container--wide">
            <h2 className="home-h2 reveal">Our <span className="home-h2__gold">2026 Speakers</span></h2>
            <SpeakerGrid speakers={speakersHome} footer cols={5} />
          </div>
        </section>
        <HomeFeatures />
        <SpeakersReel />
        <PartnerTiers />
        <AttendeeSnapshot />
        <TicketsBlock />
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { HomePage, PartnerTiers, AttendeeSnapshot, SnapshotGate });
