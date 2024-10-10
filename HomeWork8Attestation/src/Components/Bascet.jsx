import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeFromBasket, updateBasketItemQuantity } from "../store/basketReducer";

function Bascet() {
    const basketItems = useSelector(state => state.basketItems.basketItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let total = 0;
        basketItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotalPrice(total);
    }, [basketItems]);

    const handleQuantityChange = (e, product) => {
        const value = Number(e.target.value);
        dispatch(updateBasketItemQuantity({ product, value }));
    };

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
            {basketItems.map(el => (
                <div key={el.id} className="shoppingCart__content-item" id="${el.id}">
                    <div className="shoppingCart__content-item-info">
                        <Link className="shoppingCart__content-item-info-img" to="/product">
                            <img className="shoppingCart__content-item-img" src={el.img} alt={el.title} />
                        </Link>
                        <div className="shoppingCart__content-item-description">
                            <h3 className="shoppingCart__content-item-name">{el.title}</h3>
                            <span className="shoppingCart__content-item-colorSize">Color:&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="shoppingCart__content-item-colorSize-data">Red</span><br/>
                                Size:&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="shoppingCart__content-item-colorSize-data">{el.size}</span>
                            </span>
                        </div>
                    </div>
                    <span className="shoppingCart__content-item-price">{el.price}$</span>
                    <input
                        className="shoppingCart__content-item-inputField"
                        type="number"
                        id={el.id}
                        min="1"
                        value={el.quantity}
                        onChange={(e) => handleQuantityChange(e, el)}
                    />
                    <span className="shoppingCart__content-item-shipping">FREE</span>
                    <span className="shoppingCart__content-item-subtotal">{el.quantity * el.price}</span>
                    <button className="shoppingCart__content-item-action" onClick={() => dispatch(removeFromBasket(el))}>
                        <img className="shoppingCart__content-item-action-img" src="img/remove_icon.png" alt="del"/>
                    </button>
                </div>))}
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