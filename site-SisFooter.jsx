/* [SGN] INVESTMENT SUMMIT, footer (dark mono) */
// Self-contained: each script/bundle module gets its own scope, so define the URL locally
// rather than relying on a const from SisNav.jsx.
const SIS_FOOT_BUY = 'https://pointenoire.swoogo.com/sportgensummit2027/Registration';
function SisFooter() {
  const ext = { target: '_blank', rel: 'noopener' };
  return (
    <footer className="sis-foot">
      <div className="inv-wrap">
        <div className="sis-foot__top">
          <a className="sis-foot__brand" href="#/">
            <img src="assets/brand/sgn-investment-summit-white.png" alt="[SGN] Invest" />
          </a>
          <div className="sis-foot__meta">
            <span>26 May 2027</span><span>Paris, France</span>
          </div>
        </div>

        <nav className="sis-foot__links">
          <a href="#/speakers">Speakers</a>
          <a href="#/media">Media</a>
          <a href="#/sponsor">Sponsor</a>
          <a href="#/agenda">Agenda</a>
          <a href={SIS_FOOT_BUY} {...ext}>Get Your Pass</a>
          <a href="index.html">Explore SGN Summit</a>
        </nav>

        <div className="sis-foot__bar">
          <span>© 2026 SPORT[GEN] Summit · A SPORT[GEN] event</span>
          <span>
            <a href="index.html#/terms-and-conditions">Terms</a> ·{' '}
            <a href="index.html#/privacy">Privacy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.SisFooter = SisFooter;
