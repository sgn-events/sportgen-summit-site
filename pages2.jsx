/* SPORT[GEN], core content pages */
const { useState: usePageState } = React;

function SpeakersPage() {
  const { speakersAll } = window.SGData;
  const { Badge } = window.SPORTGENDesignSystem_882f1e;
  return (
    <React.Fragment>
      <PageHero eyebrow="Speakers" art="stage" titleWhite="Leading minds in sports." titleGold="Exclusive insights."
        sub="A curated group of top executives, visionaries, athletes, and experts shaping the new landscape of sports and entertainment." ctaLabel="Get my ticket" ctaHref="#/tickets" />
      <section className="section">
        <div className="sg-container sg-container--wide">
          <h2 className="home-h2 reveal" style={{ marginBottom: '2rem' }}>Our <span className="home-h2__gold">2026 Speakers</span></h2>
          <SpeakerGrid speakers={speakersAll} cols={5} />
        </div>
      </section>
      <TicketsBlock />
    </React.Fragment>
  );
}

function PersonaPicker({ personas, selected, onPick }) {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  return (
    <section className="section persona-pick">
      <div className="sg-container persona-pick__inner">
        <div className="persona-pick__head reveal">
          <span className="sg-eyebrow sg-eyebrow--gold">Make it yours</span>
          <h2 className="persona-pick__title">What brings you to <span className="sg-gold-text">SPORT[GEN]</span>?</h2>
          <p className="persona-pick__lead">Tell us where you sit in the ecosystem and we'll tailor the case for attending to you.</p>
        </div>
        <div className="persona-grid reveal" role="radiogroup" aria-label="Which best describes you?">
          {personas.map((p) => {
            const active = selected === p.key;
            return (
              <Button key={p.key} variant={active ? 'primary' : 'secondary'} size="lg"
                type="button" role="radio" aria-checked={active}
                onClick={() => onPick(active ? null : p.key)}>
                {p.label}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PersonaResult({ persona }) {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  // Le CTA secondaire depend du persona (data.js). Certains pointent hors du routeur
  // par hash (sis.html) : on ne prend la main que sur les liens en "#".
  const go = (e, href) => {
    if (!href || href.charAt(0) !== '#') return;
    e.preventDefault(); window.location.hash = href.replace('#', '');
  };
  const cta = persona.cta || { label: 'See the full agenda', href: '#/agenda' };
  return (
    <section className="section persona-result" key={persona.key}>
      <div className="sg-container sg-container--wide">
        <div className="persona-result__head reveal">
          <span className="sg-eyebrow sg-eyebrow--gold">Tailored for {persona.label}</span>
          <h2 className="persona-result__title">{persona.titleWhite} <span className="sg-gold-text">{persona.titleGold}</span></h2>
          <p className="persona-result__lead">{persona.intro}</p>
        </div>
        <div className="why-grid">
          {persona.reasons.map((r, i) => (
            <div className="why-card reveal" style={{ transitionDelay: i * 70 + 'ms' }} key={r[0]}>
              <span className="why-card__dot" aria-hidden="true" />
              <h3>{r[0]}</h3>
              <p>{r[1]}</p>
            </div>
          ))}
        </div>
        <div className="persona-result__cta reveal">
          <Button variant="primary" size="lg" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get your ticket</Button>
          <Button variant="secondary" size="lg" href={cta.href} onClick={(e) => go(e, cta.href)}>{cta.label}</Button>
        </div>
      </div>
    </section>
  );
}

function WhyAttendPage() {
  const { walls, personas } = window.SGData;
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const cats = [
    ['Right Holders (Teams, Leagues...)', 'Teams, leagues and federations seeking partners, capital and new commercial models.'],
    ['Brands', 'Brands looking to connect with rights holders and reach engaged global audiences.'],
    ['Investment & Advisory', 'Investors and advisors scouting the next wave of value creation in sport.'],
    ['Agencies', 'Agencies building the partnerships and campaigns that move the industry.'],
    ['Tech', 'Technology and data platforms reshaping how sport is produced and consumed.'],
    ['Media', 'Media and entertainment companies defining how the story gets told.'],
  ];
  const [persona, setPersona] = usePageState(() => {
    try { return window.localStorage.getItem('sg_persona') || null; } catch (e) { return null; }
  });
  const active = personas.find((p) => p.key === persona) || null;
  const [open, setOpen] = usePageState(active ? active.acc : -1);

  const pick = (key) => {
    setPersona(key);
    try { key ? window.localStorage.setItem('sg_persona', key) : window.localStorage.removeItem('sg_persona'); } catch (e) {}
    const next = personas.find((p) => p.key === key);
    setOpen(next ? next.acc : -1);
    if (key && typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(() => {
        const el = document.getElementById('persona-result');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
      });
    }
  };
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };
  return (
    <React.Fragment>
      <PageHero eyebrow="Why Attend" art="curve" titleWhite="The global platform for" titleGold="sport leaders."
        sub="Where deals happen. Where the next era is defined." ctaLabel="See 2027 Tickets" ctaHref="#/tickets" />
      <PersonaPicker personas={personas} selected={persona} onPick={pick} />
      {active ? <div id="persona-result"><PersonaResult persona={active} /></div> : null}
      <Opportunities />
      <CounterBand />
      <section className="section">
        <div className="sg-container sg-container--wide">
          <div className="vision reveal">
            <div className="vision__text">
              <h2 className="vision__title">Where vision meets opportunity.</h2>
              <h4 className="vision__desc">SportGen Summit connects the global sports ecosystem to drive partnerships, innovation, and sustainable growth, giving every stakeholder a reason to attend.</h4>
              <Button variant="primary" href="#/tickets" onClick={(e) => go(e, '#/tickets')}>Get your ticket</Button>
            </div>
            <div className="vision__list">
              {cats.map((c, i) => (
                <div key={c[0]} className={'acc' + (open === i ? ' acc--open' : '') + (active && active.acc === i ? ' acc--match' : '')} onClick={() => setOpen(open === i ? -1 : i)} role="button" tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(open === i ? -1 : i); } }}>
                  <div className="acc__q">
                    <p className="acc__label">{c[0]}</p>
                    <svg className="acc__chev" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd"></path></svg>
                  </div>
                  <div className="acc__a"><p>{c[1]}</p></div>
                </div>
              ))}
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

function TicketsPage() {
  const { speakersAll } = window.SGData;
  const names = ['Eno Polo', 'Kameryn Stanhouse', 'Teodora Ivanova - L.', 'Jamie Horowitz', 'Adnan Khalef', 'Dominic Thiem', 'Ugo Valensi', 'Raquel Braun', 'Richard Heaselgrave', 'Charlie Dewhurst'];
  const list = names
    .map((n) => speakersAll.find((s) => s.name === n))
    .filter(Boolean)
    .map((s) => {
      if (s.name === 'Dominic Thiem') return { ...s, role: s.org, org: s.role };
      if (s.name === 'Richard Heaselgrave') return { ...s, role: 'CRO' };
      return s;
    });
  return (
    <React.Fragment>
      <TicketsBlock first />
      <section className="section">
        <div className="sg-container sg-container--wide">
          <h2 className="home-h2 reveal">Hear from our <span className="home-h2__gold">leaders and visionaries</span></h2>
          <SpeakerGrid speakers={list} />
        </div>
      </section>
      <Opportunities />
    </React.Fragment>
  );
}

// Real HubSpot form (EU1 portal) with styled fallback while it loads / if blocked
const HS_PORTAL = '146907186';
const HS_FORM = '754ae578-af1c-4e00-94fd-9658986f999f';

function HubspotForm({ targetId, onSubmitted }) {
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
        onFormReady: () => { if (!cancelled) setStatus('ready'); },
        onFormSubmitted: () => { if (submitCb.current) submitCb.current(); },
      });
      // Watchdog: the embed can inject a 0-height iframe in sandboxed/blocked
      // contexts and never fire onFormReady, poll for a real rendered form.
      let tries = 0;
      const poll = setInterval(() => {
        if (cancelled) { clearInterval(poll); return; }
        const el = ref.current && (ref.current.querySelector('form') || ref.current.querySelector('iframe'));
        const h = el ? el.getBoundingClientRect().height : 0;
        if (h > 60) { clearInterval(poll); setStatus('ready'); }
        else if (++tries > 16) { clearInterval(poll); setStatus((s) => (s === 'ready' ? s : 'failed')); }
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
    const onMsg = (e) => {
      const fromHs = typeof e.origin === 'string' && /hsforms\.net$/.test(e.origin.replace(/^https?:\/\//, '').split('/')[0]);
      let raw = '';
      try { raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data); } catch (err) { raw = ''; }
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
        if (!baseH) { baseH = h; stable = 0; return; }
        if (Math.abs(h - baseH) < 8) { stable++; return; }
        if (stable >= 2 && baseH - h > 120) { clearInterval(probe); hit(); return; }
        baseH = h; stable = 0;
      }
      // Inline (classic) embeds swap the thank-you into our own DOM.
      if (!frame && /thank|update you|submitted/i.test(el.textContent || '')) { clearInterval(probe); hit(); }
    }, 500);
    if (ref.current && window.MutationObserver) {
      mo = new MutationObserver(() => {
        if (ref.current && ref.current.querySelector('.submitted-message, .hs-form__thank-you, [class*="submitted-message"]')) {
          mo.disconnect();
          hit();
        }
      });
      mo.observe(ref.current, { childList: true, subtree: true });
    }
    const cleanupExtras = () => { window.removeEventListener('message', onMsg); clearInterval(probe); if (mo) mo.disconnect(); };
    if (window.hbspt) { create(); return cleanupExtras; }
    let s = document.getElementById('hs-forms-v2');
    if (!s) {
      s = document.createElement('script');
      s.id = 'hs-forms-v2';
      s.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
      s.async = true;
      document.head.appendChild(s);
    }
    const onLoad = () => create();
    const onError = () => { if (!cancelled) setStatus('failed'); };
    s.addEventListener('load', onLoad);
    s.addEventListener('error', onError);
    const t = setTimeout(() => { if (!cancelled && !window.hbspt) setStatus('failed'); }, 8000);
    return () => { cancelled = true; clearTimeout(t); cleanupExtras(); s.removeEventListener('load', onLoad); s.removeEventListener('error', onError); };
  }, [id]);
  return (
    <React.Fragment>
      <div id={id} className={'git__hsform' + (status === 'failed' ? ' git__hsform--hidden' : '')} ref={ref}></div>
      {status === 'loading' ? <p className="git__form-note">Loading form…</p> : null}
      {status === 'failed' ? <FallbackForm onSubmitted={onSubmitted} /> : null}
    </React.Fragment>
  );
}

function FallbackForm({ onSubmitted }) {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const [sent, setSent] = usePageState(false);
  if (sent) return <div className="contact__done"><h3>Thank you.</h3><p>Our team will contact you today.</p></div>;
  return (
    <form className="contact__form" onSubmit={(e) => { e.preventDefault(); setSent(true); if (onSubmitted) onSubmitted(); }}>
      <div className="field"><label>First name</label><input type="text" required placeholder="Jane" /></div>
      <div className="field"><label>Last name</label><input type="text" required placeholder="Doe" /></div>
      <div className="field"><label>Work email</label><input type="email" required placeholder="jane@company.com" /></div>
      <div className="field"><label>Company</label><input type="text" placeholder="Company" /></div>
      <div className="field field--full"><label>What are you interested in?</label><textarea rows="3" placeholder="Tell us a little about your goals…"></textarea></div>
      <Button variant="primary" size="lg" type="submit">Submit</Button>
    </form>
  );
}

// HubSpot meetings scheduler (discovery call), embedded with a clean fallback link
const MEETING_URL = 'https://meetings-eu1.hubspot.com/aurelien-linyer/discovery-call?uuid=b569f199-9acb-4240-9d21-5907804ca26b';

function BookCall() {
  const [loaded, setLoaded] = usePageState(false);
  return (
    <div className="git2__call">
      {!loaded ? <p className="git2__form-note">Loading calendar…</p> : null}
      <iframe
        className="git2__cal"
        src={MEETING_URL + (MEETING_URL.includes('?') ? '&' : '?') + 'embed=true'}
        title="Book a call with the SPORT[GEN] team"
        loading="lazy"
        onLoad={() => setLoaded(true)}
      ></iframe>
      <p className="git2__form-note">
        Calendar not loading? <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">Open the scheduler in a new tab →</a>
      </p>
    </div>
  );
}

function GetInTouchPage() {
  const [mode, setMode] = usePageState('form'); // form | call
  return (
    <section className="git2">
      <div className="git2__bg" aria-hidden="true">
        <img src="assets/git-networking-bg.png" alt="" />
        <div className="git2__scrim"></div>
      </div>
      <div className="sg-container sg-container--wide git2__inner">
        <div className="git2__head reveal">
          <span className="git2__eyebrow">SPORT[GEN] Summit 2027</span>
          <h1 className="git2__title">Get in Touch</h1>
          <p className="git2__text">Learn more about the event, subscribe to our newsletter and gain exclusive access. Tell us how you'd like to connect, our team will get back to you today.</p>
          <ul className="git2__points">
            <li><span className="git2__points-dot"></span>Tailored access for sponsors, partners and delegations</li>
            <li><span className="git2__points-dot"></span>Newsletter &amp; early ticket release</li>
            <li><span className="git2__points-dot"></span>Speak directly with our team</li>
          </ul>
        </div>

        <div className="git2__panel reveal">
          <div className="git2__tabs" role="tablist" aria-label="Choose how to contact us">
            <button
              className={'git2__tab' + (mode === 'form' ? ' is-active' : '')}
              role="tab" aria-selected={mode === 'form'} onClick={() => setMode('form')}
            >
              <span className="git2__tab-title">Get in Touch</span>
              <span className="git2__tab-sub">Show your interest, and get contacted by our team</span>
            </button>
            <button
              className={'git2__tab' + (mode === 'call' ? ' is-active' : '')}
              role="tab" aria-selected={mode === 'call'} onClick={() => setMode('call')}
            >
              <span className="git2__tab-title">Book a Call</span>
              <span className="git2__tab-sub">Pick a time that suits you</span>
            </button>
          </div>
          <div className="git2__body">
            {mode === 'form' ? <window.BrevoForm form="get-in-touch" /> : <BookCall />}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SpeakersPage, WhyAttendPage, TicketsPage, GetInTouchPage, HubspotForm, FallbackForm });
