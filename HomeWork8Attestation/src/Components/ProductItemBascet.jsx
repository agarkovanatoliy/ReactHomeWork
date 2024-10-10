import { Link } from "react-router-dom";
import { removeFromBasket, updateBasketItemQuantity } from "../store/basketReducer";
import { useDispatch } from "react-redux";

function ProductItemBascet({product, key, id, src, alt, title, size, price, quantity}) {

  const dispatch = useDispatch();

  const handleQuantityChange = (e, product) => {
    const value = Number(e.target.value);
    dispatch(updateBasketItemQuantity({ product, value }));
  };

  const removeProductFromBascet = (product) => {
    dispatch(removeFromBasket(product));
  };

  return (
    <div key={key} className="shoppingCart__content-item" id={id}>
      <div className="shoppingCart__content-item-info">
          <Link className="shoppingCart__content-item-info-img" to="/product">
              <img className="shoppingCart__content-item-img" src={src} alt={alt} />
          </Link>
          <div className="shoppingCart__content-item-description">
              <h3 className="shoppingCart__content-item-name">{title}</h3>
              <span className="shoppingCart__content-item-colorSize">Color:&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="shoppingCart__content-item-colorSize-data">Red</span><br/>
                  Size:&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="shoppingCart__content-item-colorSize-data">{size}</span>
              </span>
          </div>
      </div>
      <span className="shoppingCart__content-item-price">{price}$</span>
      <input
          className="shoppingCart__content-item-inputField"
          type="number"
          id={id}
          min="1"
          value={quantity}
          onChange={(e) => handleQuantityChange(e, product)}
      />
      <span className="shoppingCart__content-item-shipping">FREE</span>
      <span className="shoppingCart__content-item-subtotal">{quantity * price}</span>
      <button className="shoppingCart__content-item-action" onClick={() => removeProductFromBascet(product)}>
          <img className="shoppingCart__content-item-action-img" src="img/remove_icon.png" alt="del"/>
      </button>
    </div>
  );
}

export default ProductItemBascet;