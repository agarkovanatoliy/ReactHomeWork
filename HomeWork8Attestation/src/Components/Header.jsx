import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProductItemBascetHeader from './ProductItemBascetHeader';



function Header() {
    const basketItems = useSelector(state => state.basketItems.basketItems);
    const [totalPrice, setTotalPrice] = useState(0);

    const totalItems = basketItems.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        let total = 0;
        basketItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotalPrice(total);
    }, [basketItems]);

    return (
    <>
    <header className="heder__border center">
    <div className="heder container">
        <div className="heder__left">
            <div className="heder__left-logo">
                <Link to="/" href="#" className="heder__left-logo-a">
                    <img className="heder__left-img" src="img/logo.png" alt="logo"/>
                    <h2 className="heder__left-h2">BRAN<span className="heder__left-h2-span">D</span></h2>
                </Link>
            </div>
            <div className="heder__left-search">
                <div className="browse">
                    <details className="browse__details">
                        <summary className="browse__summary"><span className="browse__summary-span">Browse</span></summary>
                        <div className="browse__content">
                            <details className="browse__content-item">
                                <summary className="browse__content-summary"><span className="browse__content-title">Women</span></summary>
                                <div className="browse__content-link">
                                    <a href="#" className="browse__link">Dresses</a>
                                    <a href="#" className="browse__link">Tops</a>
                                    <a href="#" className="browse__link">Sweaters/Knits</a>
                                    <a href="#" className="browse__link">Jackets/Coats</a>
                                    <a href="#" className="browse__link">Blazers</a>
                                    <a href="#" className="browse__link">Denim</a>
                                    <a href="#" className="browse__link">Leggings/Pants</a>
                                    <a href="#" className="browse__link">Skirts/Shorts</a>
                                    <a href="#" className="browse__link">Accessories</a>
                                </div>
                            </details>
                        </div>
                    </details>
                </div>
                <div className="heder__left-search-form">
                    <form>
                    <input type="text" placeholder="Search for Item..." defaultValue="1111"/>
                    <button type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
        <div className="heder__right">
            <div className="basket">
                <details className="basket__details">
                    <summary className="basket__summary">
                        <img src="img/basket1.png" alt="basket"/>
                        <span className="basket_count">{totalItems}</span>
                    </summary>
                    <div className="basket__content">
                        {basketItems.map(product => (
                            <ProductItemBascetHeader
                                product={product}
                                key={product.id}
                                id={product.id}
                                src={product.img}
                                alt={product.title}
                                title={product.title}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        ))}
                        <h2 className="basket__content-total">TOTAL:
                            <span className="basket__content-total-sum">{totalPrice}$</span>
                        </h2>
                        <Link to="/checkout" className="basket__content-link">
                            <button className="basket__content-button">Checkout</button>
                        </Link>
                        <Link to="/basket" className="basket__content-link">
                            <button className="basket__content-button">Go to basket</button>
                        </Link>
                    </div>
                </details>
            </div>
            <button className="heder__right-button-account">
                My Account
            </button>
        </div>
    </div>
    </header>
    <section className="slider center">
        <div className="slider__nav">
            <ul className="slider__nav-menu">
                <li className="nav-menu-list"><Link to="/" className="slider__nav-link">Home</Link></li>
                <Menu nameClass="nav-menu-list" name="Men"/>
                <Menu nameClass="nav-menu-list" name="Women"/>
                <Menu nameClass="nav-menu-list" name="Kids"/>
                <Menu nameClass="nav-menu-list last" name="Accoseriese"/>
                <Menu nameClass="nav-menu-list last" name="Featured"/>
                <Menu nameClass="nav-menu-list last" name="Hot Deals"/>
            </ul>
        </div>
    </section>
    </>

    );
}

export default Header;