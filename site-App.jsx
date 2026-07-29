/* SPORT[GEN], hash router + scroll-reveal wiring */
const { useState: useAppState, useEffect: useAppEffect } = React;

const ROUTES = {
  '': 'HomePage', '/': 'HomePage', '/home': 'HomePage',
  '/agenda': 'AgendaPage', '/why-attend': 'WhyAttendPage', '/speakers': 'SpeakersPage',
  '/tracks': 'TracksPage', '/startup-competition': 'StartupPage', '/medias': 'MediasPage', '/news': 'NewsPage',
  '/side-events': 'SideEventsPage', '/vip-dinner': 'VipDinnerPage', '/french-open': 'FrenchOpenPage',
  '/half-time-drinks': 'HalfTimeDrinksPage', '/investor-breakfast': 'InvestorBreakfastPage', '/closing-drinks': 'ClosingDrinksPage',
  '/investment-summit': 'InvestmentSummitPage',
  '/investment-summit/tickets': 'InvestTicketsPage',
  '/plan-your-trip': 'PlanTripPage', '/get-in-touch': 'GetInTouchPage', '/tickets': 'TicketsPage',
  '/faq': 'FaqPage', '/partner': 'PartnerPage', '/sponsor': 'PartnerPage',
  '/terms-and-conditions': 'TermsPage', '/privacy': 'PrivacyPage', '/official-contest-rules': 'ContestRulesPage',
  '/download-brochure': 'DownloadBrochurePage', '/download-brochure-startup': 'DownloadBrochureStartupPage',
  '/sitemap': 'SitemapPage',
  '/404': 'NotFoundPage',
};

function currentPath() {
  const h = window.location.hash.replace(/^#/, '');
  return h || '/';
}

/* Tweaks — sitewide "feel" controls, applied by writing CSS custom properties
   onto :root so every component that already consumes var(--gold), var(--dur-base),
   the hero filter vars etc. recolors/retimes/remoods together (no per-component wiring). */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "gold",
  "motion": "live",
  "heroMood": "balanced"
}/*EDITMODE-END*/;

const ACCENT_PALETTES = {
  gold:    { hi: '#FFEBAF', bright: '#FFD089', base: '#FFB049', deep: '#F0871E', rgb: '255,176,73' },
  ice:     { hi: '#DCEEFF', bright: '#9CCBFF', base: '#4FA0F0', deep: '#215FC7', rgb: '79,160,240' },
  emerald: { hi: '#DCFBEA', bright: '#8FE3B8', base: '#2FBF80', deep: '#127A50', rgb: '47,191,128' },
};

const MOTION_PRESETS = {
  calm:    { fast: '240ms', base: '420ms', slow: '900ms', scale: '1.5' },
  live:    { fast: '160ms', base: '280ms', slow: '600ms', scale: '1' },
  intense: { fast: '90ms',  base: '160ms', slow: '340ms', scale: '0.55' },
};

const HERO_MOODS = {
  bright:   { brightness: '0.92', contrast: '1.0',  saturate: '1.1',  veil1: '0.5',  veil2: '0.34', veil3: '0.18' },
  balanced: { brightness: '0.72', contrast: '1.05', saturate: '1.05', veil1: '0.78', veil2: '0.6',  veil3: '0.46' },
  noir:     { brightness: '0.5',  contrast: '1.28', saturate: '0.12', veil1: '0.88', veil2: '0.76', veil3: '0.62' },
};

function applyTweaks(t) {
  const root = document.documentElement.style;
  const acc = ACCENT_PALETTES[t.accent] || ACCENT_PALETTES.gold;
  root.setProperty('--gold-highlight', acc.hi);
  root.setProperty('--gold-bright', acc.bright);
  root.setProperty('--gold', acc.base);
  root.setProperty('--amber-deep', acc.deep);
  root.setProperty('--accent', acc.base);
  root.setProperty('--accent-bright', acc.hi);
  root.setProperty('--accent-deep', acc.deep);
  root.setProperty('--border-gold', `rgba(${acc.rgb},0.55)`);
  root.setProperty('--glow-gold-sm', `0 0 24px -2px rgba(${acc.rgb},0.35)`);
  root.setProperty('--glow-gold-lg', `0 -30px 70px -30px rgba(${acc.rgb},0.55)`);
  root.setProperty('--glow-gold-base', `radial-gradient(120% 90% at 50% 130%, rgba(${acc.rgb},0.30) 0%, rgba(${acc.rgb},0.06) 45%, rgba(${acc.rgb},0) 70%)`);
  root.setProperty('--glow-gold-corner', `radial-gradient(50% 50%, ${acc.deep} 0%, rgba(${acc.rgb},0) 100%)`);
  root.setProperty('--gradient-gold', `radial-gradient(50% 50% at 50% 50%, ${acc.hi} 62%, ${acc.base} 100%)`);
  root.setProperty('--gradient-gold-h', `linear-gradient(90deg, ${acc.hi} 0%, ${acc.bright} 45%, ${acc.base} 100%)`);
  root.setProperty('--hero-glow-rgb', acc.rgb);

  const mo = MOTION_PRESETS[t.motion] || MOTION_PRESETS.live;
  root.setProperty('--dur-fast', mo.fast);
  root.setProperty('--dur-base', mo.base);
  root.setProperty('--dur-slow', mo.slow);
  root.setProperty('--motion-scale', mo.scale);

  const hm = HERO_MOODS[t.heroMood] || HERO_MOODS.balanced;
  root.setProperty('--hero-brightness', hm.brightness);
  root.setProperty('--hero-contrast', hm.contrast);
  root.setProperty('--hero-saturate', hm.saturate);
  root.setProperty('--hero-veil-1', hm.veil1);
  root.setProperty('--hero-veil-2', hm.veil2);
  root.setProperty('--hero-veil-3', hm.veil3);
}

function App() {
  const { Nav, Footer } = window;
  const [path, setPath] = useAppState(currentPath());
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useAppEffect(() => { applyTweaks(t); }, [t]);


  useAppEffect(() => {
    const onHash = () => { setPath(currentPath()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Toggle a route-level class so Home can widen its page margins AND so every
  // other route gets its own full-page background plate (see kit2.css body::before):
  // nav + content + footer all read --gutter from <body class="route-home">.
  useAppEffect(() => {
    const name = ROUTES[path] || 'NotFoundPage';
    const slug = (path.replace(/^\//, '').split('/')[0]) || 'home';
    Array.from(document.body.classList)
      .filter((c) => c.indexOf('route-') === 0)
      .forEach((c) => document.body.classList.remove(c));
    document.body.classList.add('route-' + slug);
    document.body.classList.toggle('route-home', name === 'HomePage');
  }, [path]);

  // (Re)wire scroll-reveal whenever the route changes
  useAppEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.reveal--in)'));
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('reveal--in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('reveal--in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    const t = setTimeout(() => els.forEach((e) => e.classList.add('reveal--in')), 2600);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [path]);

  const PageName = ROUTES[path] || 'NotFoundPage';
  const Page = window[PageName] || window.HomePage;

  return (
    <React.Fragment>
      <Nav />
      <main key={path}>
        <Page />
      </main>
      <Footer />
      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor label="Accent" value={ACCENT_PALETTES[t.accent].base}
                    options={[ACCENT_PALETTES.gold.base, ACCENT_PALETTES.ice.base, ACCENT_PALETTES.emerald.base]}
                    onChange={(v) => {
                      const found = Object.keys(ACCENT_PALETTES).find((k) => ACCENT_PALETTES[k].base === v);
                      setTweak('accent', found || 'gold');
                    }} />
        <TweakSection label="Feel" />
        <TweakRadio label="Motion" value={t.motion}
                    options={[
                      { value: 'calm', label: 'Calm' },
                      { value: 'live', label: 'Live' },
                      { value: 'intense', label: 'Intense' },
                    ]}
                    onChange={(v) => setTweak('motion', v)} />
        <TweakRadio label="Hero mood" value={t.heroMood}
                    options={[
                      { value: 'bright', label: 'Bright' },
                      { value: 'balanced', label: 'Balanced' },
                      { value: 'noir', label: 'Noir' },
                    ]}
                    onChange={(v) => setTweak('heroMood', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

// Reuse a single root across hot re-executions (avoids the "createRoot called twice" warning)
const __sgRootEl = document.getElementById('root');
window.__sgRoot = window.__sgRoot || ReactDOM.createRoot(__sgRootEl);
window.__sgRoot.render(<App />);
