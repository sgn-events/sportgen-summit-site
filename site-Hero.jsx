/* SPORT[GEN], Home hero with gold-streak backdrop, founding partner + partner marquee */
function Hero() {
  const { Button } = window.SPORTGENDesignSystem_882f1e;
  const { marquee, heroVideo, foundingLogo } = window.SGData;
  const loop = marquee.concat(marquee);
  const go = (e, href) => { e.preventDefault(); window.location.hash = href.replace('#', ''); };

  // Loop the hero video but skip its final 6 seconds.
  const trimTail = (e) => {
    const v = e.currentTarget;
    if (v.duration && v.currentTime >= v.duration - 6) v.currentTime = 0;
  };

  // Size each logo to fill its card based on its own aspect ratio,
  // so wide marks and square marks both read at a comparable visual weight.
  const fitLogo = (e) => {
    const img = e.currentTarget;
    const ar = img.naturalWidth / img.naturalHeight || 1;
    let h;
    if (ar >= 4) h = 26;          // very wide wordmarks
    else if (ar >= 2.6) h = 32;
    else if (ar >= 1.8) h = 36;
    else if (ar >= 1.2) h = 40;
    else h = 44;                  // square / tall marks
    img.style.height = h + 'px';
    img.style.width = 'auto';
  };

  return (
    <section className="hero" id="top">
      <video className="hero__video" autoPlay loop muted playsInline preload="metadata" aria-hidden="true" onTimeUpdate={trimTail}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner sg-container">
        <div className="hero__eyebrow">
          <span>26 &amp; 27 May 2027</span><i /><span>Paris, France</span>
        </div>

        <h1 className="hero__title">
          Connect with Leaders.<br />
          <span className="sg-gold-text">Build the Future of Sport.</span>
        </h1>

        <div className="hero__founding">
          <span className="sg-eyebrow sg-eyebrow--gold">Founding Partner</span>
          <img className="hero__founding-logo" src={foundingLogo} alt="BNP Paribas" />
        </div>
      </div>

      <div className="hero__marquee">
        <div className="hero__marquee-label">Trusted by the industry leaders</div>
        <div className="marquee">
          <div className="marquee__track">
            {loop.map((src, i) => (
              <span className="marquee__chip" key={i}><img src={src} alt="" loading="lazy" onLoad={fitLogo} /></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
