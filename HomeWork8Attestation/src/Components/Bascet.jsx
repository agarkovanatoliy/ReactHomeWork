import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItemBascet from "./ProductItemBascet";

function Bascet() {
    const basketItems = useSelector(state => state.basketItems.basketItems);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        basketItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotalPrice(total);
    }, [basketItems]);

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
    <section className="shoppingCart center">
        <div className="shoppingCart__content container">
            <div className="shoppingCart__content-title">
                <h2 className="shoppingCart__content-title-item shoppingCart__content-title-item-first">Product Details</h2>
                <h2 className="shoppingCart__content-title-item">Unite Price</h2>
                <h2 className="shoppingCart__content-title-item">Quantity</h2>
                <h2 className="shoppingCart__content-title-item">Shipping</h2>
                <h2 className="shoppingCart__content-title-item">Subtotal</h2>
                <h2 className="shoppingCart__content-title-item">Action</h2>
            </div>
            {basketItems.map(product => (
                <ProductItemBascet
                    product={product}
                    key={product.id}
                    id={product.id}
                    src={product.img}
                    alt={product.title}
                    title={product.title}
                    size={product.size}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
        </div>
        <div className="shoppingCart__button container">
            <button className="shoppingCart__button-item">CLEAR SHOPPING CART</button>
            <button className="shoppingCart__button-item">CONTINUE SHOPPING</button>
        </div>
        <div className="shoppingCart__info container">
            <div className="shoppingCart__info-addres">
                <h2 className="shoppingCart__info-title">Shipping Address</h2>
                <select className="shoppingCart__info-select" name="" id="">
                    <option selected="selected">Bangladesh</option>
                </select>
                <input className="shoppingCart__info-input" type="text" defaultValue="State"/>
                <input className="shoppingCart__info-input" type="int" defaultValue="Postcode / Zip"/>
                <button className="shoppingCart__info-button">Get a Quote</button>
            </div>
            <div className="shoppingCart__info-discount">
                <h2 className="shoppingCart__info-title">Coupon Discount</h2>
                <span className="shoppingCart__info-discount-description">Enter your coupon code if you have one</span>
                <input className="shoppingCart__info-input" type="text" defaultValue="State"/>
                <button className="shoppingCart__info-button">Apply coupon</button>
            </div>
            <div className="shoppingCart__info-checkout">
                <p className="shoppingCart__info-checkout-price">Sub total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${totalPrice}</p>
                <p className="shoppingCart__info-checkout-priceFinal">
                    GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="shoppingCart__info-checkout-priceFinal-colored">${totalPrice*0.5}</span>
                </p>
                <Link to="/checkout">
                    <button className="shoppingCart__info-checkout-button">Proceed to checkout</button>
                </Link>
            </div>
        </div>
        </section>
        <Footer/>
    </>
    );
}

export default Bascet;