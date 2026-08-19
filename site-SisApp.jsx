/* [SGN] INVESTMENT SUMMIT, standalone site router (hash-based, own nav + footer) */
const { useState: useSisAppState, useEffect: useSisAppEffect } = React;

const SIS_ROUTES = {
  '': 'InvestmentSummitPage', '/': 'InvestmentSummitPage', '/home': 'InvestmentSummitPage',
  '/speakers': 'SisSpeakersPage',
  '/media': 'SisMediaPage',
  '/media-pass': 'SisMediaPassPage',
  '/sponsor': 'SisSponsorPage',
  '/agenda': 'SisAgendaPage',
  '/why-lp': 'SisLpPage',
  '/get-in-touch': 'SisGetInTouchPage',
  '/tickets': 'InvestTicketsPage',
};

/* Billetterie masquee (aout 2026) : la page Tickets SIS reste dans le code mais n'est
   plus servie, on renvoie vers le formulaire Get in Touch de SGN Invest.
   Vider cet objet pour la retablir (meme mecanique que HIDDEN_ROUTE_REDIRECTS cote SGN). */
const SIS_HIDDEN_ROUTE_REDIRECTS = {
  '/tickets': '/get-in-touch',
};

function sisCurrentPath() {
  const h = window.location.hash.replace(/^#/, '');
  const p = h || '/';
  return SIS_HIDDEN_ROUTE_REDIRECTS[p] || p;
}

function SisAppRoot() {
  const { SisNav, SisFooter } = window;
  const [path, setPath] = useSisAppState(sisCurrentPath());

  useSisAppEffect(() => {
    const onHash = () => { setPath(sisCurrentPath()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Normalise l'URL des routes masquees (sisCurrentPath rend deja la bonne page).
  useSisAppEffect(() => {
    const raw = window.location.hash.replace(/^#/, '') || '/';
    if (SIS_HIDDEN_ROUTE_REDIRECTS[raw]) window.location.replace('#' + SIS_HIDDEN_ROUTE_REDIRECTS[raw]);
  }, [path]);

  // Wire scroll-reveal on each route (mirrors the SGN app)
  useSisAppEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.reveal--in), .inv-rv:not(.is-in)'));
    if (!('IntersectionObserver' in window)) { els.forEach((e) => { e.classList.add('reveal--in'); e.classList.add('is-in'); }); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('reveal--in'); e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    const t = setTimeout(() => els.forEach((e) => { e.classList.add('reveal--in'); e.classList.add('is-in'); }), 2600);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [path]);

  const PageName = SIS_ROUTES[path] || 'InvestmentSummitPage';
  const Page = window[PageName] || window.InvestmentSummitPage;

  return (
    <React.Fragment>
      <SisNav />
      <main key={path}>
        <Page />
      </main>
      <SisFooter />
    </React.Fragment>
  );
}

const __sisRootEl = document.getElementById('root');
// This file is also compiled into the shared _ds_bundle.js, which other pages (the SGN
// site) load, so guard the mount to ONLY run on the standalone SIS page, otherwise it
// would hijack #root on every page that includes the bundle.
if (__sisRootEl && document.body && document.body.classList.contains('sis-body')) {
  window.__sisRoot = window.__sisRoot || ReactDOM.createRoot(__sisRootEl);
  window.__sisRoot.render(<SisAppRoot />);
}
