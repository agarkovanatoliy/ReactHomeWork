import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../store/basketReducer";

function ProductItemMain({product, key, src, alt, title, price, size}) {

  const dispatch = useDispatch();

  const addProductToBasket = (product) => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="product__card" key={key} >
      <Link to="/cart" className="product__card-link">
          <img src={src} alt={alt} className="product__card-img"/>
          <div className="product__card-text">
              <h3 className="product__card-text-dsc">{title}</h3>
              <h3 className="product__card-text-dsc">{size}</h3>
              <p className="product__card-text-price">$ {price}</p>
          </div>
      </Link>
      <div className="product__card-add-box">
          <button className="product__card-link-add" onClick={() => addProductToBasket(product)}>
              <img className="product__card-link-add-pic" src="img/bascet.svg" alt="добавить"/>
              <p className="product__card-link-add-title">Add to Cart</p>
          </button>
      </div>
    </div>
  );
}

export default ProductItemMain;