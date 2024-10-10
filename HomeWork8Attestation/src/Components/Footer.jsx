function Footer() {
  return (
    <footer className="footer">
      <section className="footer__subscribe">
        <div className="footer__subscribe-beckgraund">
          <div className="footer__subscribe-position container">
            <div className="footer__subscribe-info">
              <img src="img/subsc_photo.png" alt=""/>
              <div className="footer__subscribe-info-text">
                <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                  a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                <h3>Bin Burhan <span>Dhaka, Bd</span></h3>
                <div className="footer__subscribe-rectangle">
                  <div className="footer__rectangle__1"></div>
                  <div className="footer__rectangle__2"></div>
                  <div className="footer__rectangle__1"></div>
                </div>
              </div>
              </div>
                <div className="footer__subscribe-subsc">
                  <div className="footer__subscribe-subsc-text">
                    <h2>SUBSCRIBE </h2>
                    <p>FOR OUR NEWLETTER AND PROMOTION</p>
                  </div>
                  <div className="footer__subscribe-subsc-form">
                    <form action="#">
                      <input required type="email" placeholder="Enter Your Email"/>
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      </section>
      <section className="footer__info container">
        <div className="footer__info-brand">
            <div className="heder__left-logo">
                <a href="index.html" className="heder__left-logo-a">
                    <img className="heder__left-img" src="img/logo.png" alt="logo"/>
                    <h2 className="heder__left-h2">BRAN<span className="heder__left-h2-span">D</span></h2>
                </a>
            </div>
            <article>
                <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
                <p>
                    Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                </p>
                <p>
                    Objectively strategize seamless relationships via resource sucking testing procedures. Proactively cultivate next-generation results for value-added methodologies. Dynamically plagiarize unique methodologies after performance based methodologies. Monotonectally empower stand-alone mindshare rather than ubiquitous opportunities. Dynamically orchestrate resource sucking scenarios after alternative synergy.
                </p>
                <p>
                    Compellingly envisioneer corporate methods of empowerment before standards compliant technologies. Objectively facilitate progressive.
                </p>
            </article>
        </div>
        <div className="footer__info-box">
            <div className="footer__info-box-item">
                <h3>COMPANY</h3>
                <a href="#" className="footer__info-box-item-link">Home </a>
                <a href="#" className="footer__info-box-item-link">Shop</a>
                <a href="#" className="footer__info-box-item-link">About</a>
                <a href="#" className="footer__info-box-item-link">How It Works</a>
                <a href="#" className="footer__info-box-item-link">Contact</a>
            </div>
            <div className="footer__info-box-item">
                <h3>INFORMATION</h3>
                <a href="#" className="footer__info-box-item-link">Tearms & Condition</a>
                <a href="#" className="footer__info-box-item-link">Privacy Policy</a>
                <a href="#" className="footer__info-box-item-link">How to Buy</a>
                <a href="#" className="footer__info-box-item-link">How to Sell</a>
                <a href="#" className="footer__info-box-item-link">Promotion</a>
            </div>
            <div className="footer__info-box-item">
                <h3>SHOP CATEGORY</h3>
                <a href="#" className="footer__info-box-item-link">Men</a>
                <a href="#" className="footer__info-box-item-link">Women</a>
                <a href="#" className="footer__info-box-item-link">Child</a>
                <a href="#" className="footer__info-box-item-link">Apparel</a>
                <a href="#" className="footer__info-box-item-link">Brows All</a>
            </div>
        </div>
    </section>
    <section className="footer__footer">
        <div className="footer__nav container">
            <p>© 2022  Brand  All Rights Reserved.</p>
            <div className="footer__nav-icons">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-pinterest-p"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-google-plus"></a>
            </div>
        </div>
    </section>
  </footer>
  );
}

export default Footer;