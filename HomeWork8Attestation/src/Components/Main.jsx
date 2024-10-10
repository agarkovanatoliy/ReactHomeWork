import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../store/productsReducer';
import { useEffect } from "react";
import { addToBasket } from "../store/basketReducer";

function Main() {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchProductsRequest())
    },[dispatch]);

    return (
    <>
        <Header/>
        <div className="slider__banner">
        <div className="slider__banner-text">
            <h1>THE BRAND</h1>
            <h2>OF LUXERIOUS <span>FASHION</span></h2>
        </div>
        </div>
        <section className="banner container">
            <div className="banner__card banner__big-card1">
                <a href="#">
                    <div className="banner__img">
                        <img src="img/man.png" alt="man"/>
                    </div>
                    <div className="banner__text">
                        <h2>HOT DEAL</h2>
                        <h1>FOR MEN</h1>
                    </div>
                </a>
            </div>
            <div className="banner__card">
                <a href="#">
                    <div className="banner__img">
                        <img src="img/accesories.png" alt="accesories"/>
                    </div>
                    <div className="banner__text">
                        <h2>LUXIROUS & TRENDY</h2>
                        <h1>ACCESORIES</h1>
                    </div>
                </a>
            </div>
            <div className="banner__card ">
                <a href="#">
                    <div className="banner__img">
                        <img src="img/women.png" alt="women"/>
                    </div>
                    <div className="banner__text">
                        <h2>30% OFFER</h2>
                        <h1>WOMEN</h1>
                    </div>
                </a>
            </div>
            <div className="banner__card banner__big-card2">
                <a href="#">
                    <div className="banner__img">
                        <img src="img/kids.png" alt="kids"/>
                    </div>
                    <div className="banner__text">
                        <h2>NEW ARRIVALS</h2>
                        <h1>FOR KIDS</h1>
                    </div>
                </a>
            </div>
        </section>
        <section className="product container">
        <div className="product__title">
            <h2 className="product__title-dsc">Fetured Items</h2>
            <p className="product__title-text">Shop for items based on what we featured in this week</p>
        </div>
        <div className="product__section-card">
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка {error}</p>}
            {products.slice(8).map(el => (
                    <div className="product__card" key={el.id} >
                        <Link to="/cart" className="product__card-link">
                            <img src={el.img} alt={el.title} className="product__card-img"/>
                            <div className="product__card-text">
                                <h3 className="product__card-text-dsc">{el.title}</h3>
                                <p className="product__card-text-price">$ {el.price}</p>
                            </div>
                        </Link>
                        <div className="product__card-add-box">
                            <button className="product__card-link-add" onClick={() => dispatch(addToBasket(el))}>
                                <img className="product__card-link-add-pic" src="img/bascet.svg" alt="добавить"/>
                                <p className="product__card-link-add-title">Add to Cart</p>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>

        <Link to='/product' className="product__link">
            <button className="product__button">Browse All Product</button>
        </Link>
    </section>
    <section className="feature1">
        <div className="feature container">
            <div className="feature__banner">
                <img src="img/winter_woman.png" alt="баннер" className="feature__banner-img"/>
                <div className="feature__banner-text">
                    <h1>30% <span>OFFER</span></h1>
                    <h2>FOR WOMEN</h2>
                </div>
            </div>
            <div className="feature__info">
                <div className="feature__info-card">
                    <img src="img/car.png" alt="car" className="feature__info-card-img"/>
                    <div className="feature__info-card-text">
                        <h3>Free Delivery</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div className="feature__info-card">
                    <img src="img/discount.png" alt="car" className="feature__info-card-img"/>
                    <div className="feature__info-card-text">
                        <h3>Sales & discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div className="feature__info-card">
                    <img src="img/crown.png" alt="car" className="feature__info-card-img"/>
                    <div className="feature__info-card-text">
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
    );
}

export default Main;