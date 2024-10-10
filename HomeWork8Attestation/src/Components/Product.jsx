import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsRequest } from "../store/productsReducer";
import { addToBasket } from "../store/basketReducer";
import ProductItemMain from "./ProductItemMain";

function Product() {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchProductsRequest())
    },[dispatch]);

    return (
    <>
        <Header/>
        <section className="sliderBaner">
            <div className="sliderBaner__title  container">
                <div className="sliderBaner__title-heading">
                    <h1 className="sliderBaner__title-heading-h1">New Arrivals</h1>
                </div>
                <div className="sliderBaner__title-nav">
                    <Link to="/" className="sliderBaner__banner-product-link">Home /</Link>
                    <a href="#" className="sliderBaner__banner-product-link">Men /</a>
                    <a href="#" className="sliderBaner__banner-product-link sliderBaner__banner-product-link1">New Arrivals</a>
                </div>
            </div>
        </section>
        <section className="contentProduct center">
            <div className="contentProduct__catalog container">
                <div className="contentProduct__catalog-nav">
                    <details className="contentProduct__details">
                        <summary className="contentProduct__summary">
                            <span className="contentProduct__title">CATEGORY</span>
                            <i className="fa fa-caret-down fa-caret-down__prod-catalogue"></i>
                        </summary>
                        <div className="contentProduct__details-link">
                            <a href="#" className="contentProduct__link">Accessories</a>
                            <a href="#" className="contentProduct__link">Bags</a>
                            <a href="#" className="contentProduct__link">Denim</a>
                            <a href="#" className="contentProduct__link">Hoodies & Sweatshirts</a>
                            <a href="#" className="contentProduct__link">Jackets & Coats</a>
                            <a href="#" className="contentProduct__link">Pants</a>
                            <a href="#" className="contentProduct__link">Polos</a>
                            <a href="#" className="contentProduct__link">Shirts</a>
                            <a href="#" className="contentProduct__link">Shoes</a>
                            <a href="#" className="contentProduct__link">Shorts</a>
                            <a href="#" className="contentProduct__link">Sweaters & Knits</a>
                            <a href="#" className="contentProduct__link">T-Shirts</a>
                            <a href="#" className="contentProduct__link">Tanks</a>
                        </div>
                    </details>
                    <details className="contentProduct__details">
                        <summary className="contentProduct__summary">
                            <span className="contentProduct__title">BRAND</span>
                            <i className="fa fa-caret-down fa-caret-down__prod-catalogue"></i>
                        </summary>
                        <div className="contentProduct__details-link">
                            <a href="#" className="contentProduct__link">Accessories</a>
                            <a href="#" className="contentProduct__link">Bags</a>
                            <a href="#" className="contentProduct__link">Denim</a>
                            <a href="#" className="contentProduct__link">Hoodies & Sweatshirts</a>
                            <a href="#" className="contentProduct__link">Jackets & Coats</a>
                            <a href="#" className="contentProduct__link">Pants</a>
                            <a href="#" className="contentProduct__link">Polos</a>
                            <a href="#" className="contentProduct__link">Shirts</a>
                            <a href="#" className="contentProduct__link">Shoes</a>
                            <a href="#" className="contentProduct__link">Shorts</a>
                            <a href="#" className="contentProduct__link">Sweaters & Knits</a>
                            <a href="#" className="contentProduct__link">T-Shirts</a>
                            <a href="#" className="contentProduct__link">Tanks</a>
                        </div>
                    </details>
                    <details className="contentProduct__details">
                        <summary className="contentProduct__summary">
                            <span className="contentProduct__title">DESIGNER</span>
                            <i className="fa fa-caret-down fa-caret-down__prod-catalogue"></i>
                        </summary>
                        <div className="contentProduct__details-link">
                            <a href="#" className="contentProduct__link">Accessories</a>
                            <a href="#" className="contentProduct__link">Bags</a>
                            <a href="#" className="contentProduct__link">Denim</a>
                            <a href="#" className="contentProduct__link">Hoodies & Sweatshirts</a>
                            <a href="#" className="contentProduct__link">Jackets & Coats</a>
                            <a href="#" className="contentProduct__link">Pants</a>
                            <a href="#" className="contentProduct__link">Polos</a>
                            <a href="#" className="contentProduct__link">Shirts</a>
                            <a href="#" className="contentProduct__link">Shoes</a>
                            <a href="#" className="contentProduct__link">Shorts</a>
                            <a href="#" className="contentProduct__link">Sweaters & Knits</a>
                            <a href="#" className="contentProduct__link">T-Shirts</a>
                            <a href="#" className="contentProduct__link">Tanks</a>
                        </div>
                    </details>
                </div>
                <div className="contentProduct__catalog-product">
                    <div className="contentProduct__catalog-product-sort">
                        <div className="contentProduct__catalog-product-sort-brand">
                            <h2 className="contentProduct__catalog-product-sort-title">TRENDING NOW</h2>
                            <div className="contentProduct__catalog-product-sort-brand-content">
                                <a href="" className="contentProduct__catalog-product-sort-brand-content-link">Bohemian</a>
                                <a href="" className="contentProduct__catalog-product-sort-brand-content-link">Floral</a>
                                <a href="" className="contentProduct__catalog-product-sort-brand-content-link">Lace</a>
                                <a href="" className="contentProduct__catalog-product-sort-brand-content-link">Floral</a>
                                <a href="" className="contentProduct__catalog-product-sort-brand-content-link">Lace</a>
                                <a href="" className="contentProduct__catalog-product-sort-brand-content-link">Bohemian</a>
                            </div>
                        </div>
                        <div className="contentProduct__catalog-product-sort-size">
                            <h2 className="contentProduct__catalog-product-sort-title">SIZE</h2>
                            <div className="contentProduct__catalog-product-sort-size-content">
                                <div className="contentProduct__catalog-product-sort-size-content-item">
                                    <input name="Size" type="checkbox"/>
                                    <label htmlFor="Size" className="contentProduct__catalog-product-sort-size-content-checkbox">XXS</label>
                                </div>
                                <div className="contentProduct__catalog-product-sort-size-content-item">
                                    <input name="Size" type="checkbox"/>
                                    <label htmlFor="Size" className="contentProduct__catalog-product-sort-size-content-checkbox">XS</label>
                                </div>
                                <div className="contentProduct__catalog-product-sort-size-content-item">
                                    <input name="Size" type="checkbox"/>
                                    <label htmlFor="Size" className="contentProduct__catalog-product-sort-size-content-checkbox">S</label>
                                </div>
                                <div className="contentProduct__catalog-product-sort-size-content-item">
                                    <input name="Size" type="checkbox"/>
                                    <label htmlFor="Size" className="contentProduct__catalog-product-sort-size-content-checkbox">M</label>
                                </div>
                                <div className="contentProduct__catalog-product-sort-size-content-item">
                                    <input name="Size" type="checkbox"/>
                                    <label htmlFor="Size" className="contentProduct__catalog-product-sort-size-content-checkbox">L</label>
                                </div>
                                <div className="contentProduct__catalog-product-sort-size-content-item">
                                    <input name="Size" type="checkbox"/>
                                    <label htmlFor="Size" className="contentProduct__catalog-product-sort-size-content-checkbox">XL</label>
                                </div>
                                <div className="contentProduct__catalog-product-sort-size-content-item">
                                    <input name="Size" type="checkbox"/>
                                    <label htmlFor="Size" className="contentProduct__catalog-product-sort-size-content-checkbox">XXL</label>
                                </div>
                            </div>
                        </div>
                        <div className="contentProduct__catalog-product-sort-price">
                            <h2 className="contentProduct__catalog-product-sort-title">PRICE</h2>
                            <div className="contentProduct__catalog-product-sort-slider">
                                <div className="contentProduct__catalog-product-sort-progress"></div>
                            </div>
                            <div className="contentProduct__catalog-product-sort-range-input">
                                <input type="range" className="contentProduct__catalog-product-sort-range-min" min="0" max="1000" value="52" step="1"/>
                                <input type="range" className="contentProduct__catalog-product-sort-range-max" min="0" max="1000" value="400" step="1"/>
                            </div>
                            <div className="contentProduct__catalog-product-sort-price-input">
                                <div className="contentProduct__catalog-product-sort-price-input-field">
                                    <span>$</span>
                                    <input type="number" className="contentProduct__catalog-product-sort-price-input-min" value="52"/>
                                </div>
                                <div className="contentProduct__catalog-product-sort-price-input-field">
                                    <span>$</span>
                                    <input type="number" className="contentProduct__catalog-product-sort-field-input-max" value="400"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentProduct__catalog-product-sortDate">
                        <div className="contentProduct__catalog-product-sortDate-name">
                            <div><span className="contentProduct__catalog-product-sortDate-select-text">Sort By</span>
                                <select className="contentProduct__catalog-product-sortDate-select" name="" id="">
                                    <option selected="selected">Name</option>
                                    <option selected="selected">Size</option>
                                    <option selected="selected">Price</option>
                                    <option selected="selected">Rating</option>
                                    <option selected="selected">Date</option>
                                </select>
                            </div>
                        </div>
                        <div className="contentProduct__catalog-product-sortDate-name">
                            <div><span className="contentProduct__catalog-product-sortDate-select-text">Show</span>
                                <select className="contentProduct__catalog-product-sortDate-select" name="" id="">
                                    <option selected="selected">09</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="contentProduct__catalog-product-content">
                    {loading && <p>Загрузка...</p>}
                    {error && <p>Ошибка {error}</p>}
                    {products.map(product => (
                        <ProductItemMain
                            product={product}
                            key={product.id}
                            id={product.id}
                            src={product.img}
                            alt={product.title}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                    </div>
                    <div className="contentProduct__catalog-product-page">
                        <div className="contentProduct__catalog-product-page-select">
                            <a href="#" className="contentProduct__catalog-product-page-select__link"><i className="fa fa-angle-left"></i></a>
                            <a href="#" className="contentProduct__catalog-product-page-select__link">1</a>
                            <a href="#" className="contentProduct__catalog-product-page-select__link">2</a>
                            <a href="#" className="contentProduct__catalog-product-page-select__link">3</a>
                            <a href="#" className="contentProduct__catalog-product-page-select__link">4</a>
                            <a href="#" className="contentProduct__catalog-product-page-select__link">5</a>
                            <a href="#" className="contentProduct__catalog-product-page-select__link">6.....20</a>
                            <a href="#" className="contentProduct__catalog-product-page-select__link"><i className="fa fa-angle-right"></i></a>
                        </div>
                        <button className="contentProduct__catalog-product-page-button">View All</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="footerFeature">
            <div className="footerFeature__info container">
                <div className="footerFeature__info-card">
                    <img src="img/car.png" alt="car" className="footerFeature__info-card-img"/>
                    <div className="footerFeature__info-card-text">
                        <h3 className="footerFeature__info-card-text-h3">Sales & discounts</h3>
                        <p className="footerFeature__info-card-text-p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div className="footerFeature__info-card">
                    <img src="img/discount.png" alt="car" className="footerFeature__info-card-img"/>
                    <div className="footerFeature__info-card-text">
                        <h3 className="footerFeature__info-card-text-h3">Sales & discounts</h3>
                        <p className="footerFeature__info-card-text-p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div className="footerFeature__info-card">
                    <img src="img/crown.png" alt="car" className="footerFeature__info-card-img"/>
                    <div className="footerFeature__info-card-text">
                        <h3 className="footerFeature__info-card-text-h3">Sales & discounts</h3>
                        <p className="footerFeature__info-card-text-p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
    );
}

export default Product;