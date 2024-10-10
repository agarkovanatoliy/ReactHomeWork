import Footer from "./Footer";
import Header from "./Header";

function Cart() {
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
    <section className="singlePage center">
        <div className="singlePage__slide">
            <div className="singlePage__slide-arrow"><img src="img/arrowLeft.png" alt="стрелка"/></div>
            <img className="singlePage__slide-image" src="img/single_page_woman.jpg" alt=""/>
            <div className="singlePage__slide-arrow"><img src="img/arrowRight.png" alt="стрелка"/></div>
        </div>
        <section className="singlePage__content container">
            <div className="singlePage__content-productDescription">
                <h3 className="singlePage__content-productDescription-collectionTitle">WOMEN COLLECTION</h3>
                <div className="singlePage__content-productDescription-borderMiddle"></div>
                <h2 className="singlePage__content-productDescription-title">Moschino Cheap And Chic;</h2>
                <p className="singlePage__content-productDescription-description">Compellingly actualize fully researched processes before proactive
                    outsourcing. Progressively syndicate
                    collaborative architectures before cutting-edge services. Completely visualize parallel core
                    competencies rather than exceptional portals.</p>
                <div className="singlePage__content-productDescription-production">
                    <span className="singlePage__content-productDescription-production-category">MATERIAL: <span
                            className="singlePage__content-productDescription-production-categoryValue">COTTON</span></span>
                    <span className="singlePage__content-productDescription-production-category">DESIGNER: <span
                            className="singlePage__content-productDescription-production-categoryValue">BINBURHAN</span></span>
                </div>
                <span className="singlePage__content-productDescription-price">$561</span>
                <div className="singlePage__content-productDescription-paramChoice">
                    <div>
                        <h2 className="singlePage__content-productDescription-production-categoryValue">CHOOSE COLOR</h2>
                        <select className="singlePage__content-productDescription-paramChoice-select" name="" id="">
                            <option className="singlePage__content-productDescription-paramChoice-selectValue" selected="selected">
                                <span className="singlePage__content-productDescription-paramChoice-selectValueColor">Red</span>
                            </option>
                        </select>
                    </div>
                    <div>
                        <h2 className="singlePage__content-productDescription-production-categoryValue">CHOOSE SIZE</h2>
                        <select className="singlePage__content-productDescription-paramChoice-select" name="" id="">
                            <option className="singlePage__content-productDescription-paramChoice-selectValue" selected="selected">XXL</option>
                        </select>
                    </div>
                    <div>
                        <h2 className="singlePage__content-productDescription-production-categoryValue">QUANTITY</h2>
                        <input className="singlePage__content-productDescription-paramChoice-input" type="text" value="2"/>
                    </div>
                </div>
                <a href="shoppingCart.html"><button className="singlePage__content-productDescription-button">
                        <img className="singlePage__content-productDescription-button-image" src="img/addCart.png" alt=""/>
                        <span className="singlePage__content-productDescription-button-add">Add to Cart</span></button></a>
            </div>
            <div className="singlePage__content-productCart">
                <div className="singlePage__content-productCart-title">you may like also</div>
                <div className="singlePage__content-productCart-itemsBox">
                    <div className="product__card">
                        <a href="./singlePage.html" className="product__card-link">
                            <img src="img/singlePageProduct1.png" alt="товар" className="product__card-img"/>
                            <div className="product__card-text">
                                <h3 className="product__card-text-dsc">Mango  People  T-shirt</h3>
                                <p className="product__card-text-price">$52.00</p>
                            </div>
                        </a>
                        <div className="product__card-add-box">
                            <a href="#" className="product__card-link-add">
                                <img className="product__card-link-add-pic" src="img/bascet.svg" alt="добавить"/>
                                <p className="product__card-link-add-title">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div className="product__card">
                        <a href="./singlePage.html" className="product__card-link">
                            <img src="img/singlePageProduct2.png" alt="товар" className="product__card-img"/>
                            <div className="product__card-text">
                                <h3 className="product__card-text-dsc">Mango  People  T-shirt</h3>
                                <p className="product__card-text-price">$52.00</p>
                            </div>
                        </a>
                        <div className="product__card-add-box">
                            <a href="#" className="product__card-link-add">
                                <img className="product__card-link-add-pic" src="img/bascet.svg" alt="добавить"/>
                                <p className="product__card-link-add-title">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div className="product__card">
                        <a href="./singlePage.html" className="product__card-link">
                            <img src="img/singlePageProduct3.png" alt="товар" className="product__card-img"/>
                            <div className="product__card-text">
                                <h3 className="product__card-text-dsc">Mango  People  T-shirt</h3>
                                <p className="product__card-text-price">$52.00</p>
                            </div>
                        </a>
                        <div className="product__card-add-box">
                            <a href="#" className="product__card-link-add">
                                <img className="product__card-link-add-pic" src="img/bascet.svg" alt="добавить"/>
                                <p className="product__card-link-add-title">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div className="product__card">
                        <a href="./singlePage.html" className="product__card-link">
                            <img src="img/singlePageProduct4.png" alt="товар" className="product__card-img"/>
                            <div className="product__card-text">
                                <h3 className="product__card-text-dsc">Mango  People  T-shirt</h3>
                                <p className="product__card-text-price">$52.00</p>
                            </div>
                        </a>
                        <div className="product__card-add-box">
                            <a href="#" className="product__card-link-add">
                                <img className="product__card-link-add-pic" src="img/bascet.svg" alt="добавить"/>
                                <p className="product__card-link-add-title">Add to Cart</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </section>
      <Footer/>
    </>
  );
}

export default Cart;