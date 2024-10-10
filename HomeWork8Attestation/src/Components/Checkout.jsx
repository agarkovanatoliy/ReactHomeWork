import Footer from "./Footer";
import Header from "./Header";

function Checkout() {
  return (
    <>
      <Header/>
      <section className="sliderBaner">
        <div className="sliderBaner__title  container">
            <div className="sliderBaner__title-heading">
                <h1 className="sliderBaner__title-heading-h1">New Arrivals</h1>
            </div>
            <div className="sliderBaner__title-nav">
                <a href="./index.html" className="sliderBaner__banner-product-link">Home /</a>
                <a href="#" className="sliderBaner__banner-product-link">Men /</a>
                <a href="#" className="sliderBaner__banner-product-link sliderBaner__banner-product-link1">New Arrivals</a>
            </div>
        </div>
    </section>
    <section className="checkout center container">
        <div className="checkout__line">
            <details className="checkout__line-details" open>
                <summary className="checkout__line-summary">01. Shipping Adress</summary>
                <div className="checkout__shippingAdress">
                    <div className="checkout__shippingAdress-left">
                        <p className="checkout__shippingAdress-title">Check as a guest or register</p>
                        <p className="checkout__shippingAdress-instructions">Register with us for future convenience</p>
                        <div className="checkout__shippingAdress-label">
                            <label className="checkout__shippingAdress-label-item" htmlFor="">
                                <input type="radio" name="radAnswer" id="1"/>
                                <span className="checkout__shippingAdress-label-item-text">CHECK AS A GUEST</span>
                            </label>
                            <label className="checkout__shippingAdress-label-item" htmlFor="">
                                <input type="radio" name="radAnswer" id="1"/>
                                <span>REGISTER</span>
                            </label>
                        </div>
                        <p className="checkout__shippingAdress-title">register and save time!</p>
                        <p className="checkout__shippingAdress-instructions">Register with us for future convenience</p>
                        <p className="checkout__shippingAdress-instructions-fa"><i className="fa fa-angle-double-right"></i> Fast and easy
                            checkout
                        </p>
                        <p className="checkout__shippingAdress-instructions-fa"><i className="fa fa-angle-double-right"></i> Easy access to
                            your
                            order history and status</p>
                        <button className="checkout__shippingAdress-button">Continue</button>
                    </div>
                    <div className="checkout__shippingAdress-right">
                        <p className="checkout__shippingAdress-title">Already registed?</p>
                        <p className="checkout__shippingAdress-instructions">Please log in below</p>
                        <p className="checkout__shippingAdress-title">EMAIL ADDRESS<span className="checkout__requiredText">*</span></p>
                        <input className="checkout__shippingAdress-right-input" type="email" defaultValue="EMAIL ADDRESS"/>
                        <p className="checkout__shippingAdress-title">PASSWORD<span className="checkout__requiredText">*</span></p>
                        <input className="checkout__shippingAdress-right-input" type="password" defaultValue="PASSWORD"/>
                        <p className="checkout__requiredText">* Required fields</p>
                        <div className="checkout__shippingAdress-right-loginForgot">
                            <button className="checkout__shippingAdress-button" type="submit">log in</button>
                            <a href="#">
                                <p className="checkout__shippingAdress-forgotlink">Forgot Password?</p>
                            </a>
                        </div>
                    </div>
                </div>
            </details>
        </div>
        <div className="checkout__line">
            <details className="checkout__line-details">
                <summary className="checkout__line-summary">02. BILLING INFORMATION</summary>
                <p className="checkout__shippingAdress-instructions">Information to be updated in this section...</p>
            </details>
        </div>
        <div className="checkout__line">
            <details className="checkout__line-details">
                <summary className="checkout__line-summary">03. Shipping information</summary>
                <p className="checkout__shippingAdress-instructions">Information to be updated in this section...</p>
            </details>
        </div>
        <div className="checkout__line">
            <details className="checkout__line-details">
                <summary className="checkout__line-summary">04. Shipping Method</summary>
                <p className="checkout__shippingAdress-instructions">Information to be updated in this section...</p>
            </details>
        </div>
        <div className="checkout__line">
            <details className="checkout__line-details">
                <summary className="checkout__line-summary">05. Payment method</summary>
                <p className="checkout__shippingAdress-instructions">Information to be updated in this section...</p>
            </details>
        </div>
        <div className="checkout__line">
            <details className="checkout__line-details">
                <summary className="checkout__line-summary">06. Order review</summary>
                <p className="checkout__shippingAdress-instructions">Information to be updated in this section...</p>
            </details>
        </div>
    </section>
      <Footer/>
    </>
  );
}

export default Checkout;