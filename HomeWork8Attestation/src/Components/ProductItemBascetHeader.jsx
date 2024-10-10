import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromBasket } from "../store/basketReducer";

function ProductItemBascetHeader({product, key, id, src, alt, title, price, quantity}) {

  const dispatch = useDispatch();

  const removeProductFromBascet = (product) => {
    dispatch(removeFromBasket(product));
  };
  return (
    <div className="basket__content-item" key={key} id={id}>
      <Link to="/basket">
          <img src={src} alt={alt} className="basket__produkt"/>
      </Link>
      <div className="basket__product-info">
          <h2 className="basket__produkt-title">{title}</h2>
          <img src="./img/star.png" alt="star" className="basket__produkt-star"/>
          <h2 className="basket__produkt-price">{quantity}*{price}$</h2>
      </div>
      <button className="basket__del" onClick={() => removeProductFromBascet(product)}>
          <img src="img/__1827.png" alt="отказ" className="basket__rejection"/>
      </button>
    </div>
  );
}

export default ProductItemBascetHeader;