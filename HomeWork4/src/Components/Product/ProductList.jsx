import { BoxProduct } from "../Boxes/BoxProduct";
import s from "../Boxes/Box.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

function ProductList({ items }) {

  return (
    <div className={classNames(s.productBox)}>
      {items.map((item) => (
        <BoxProduct key={item.id}>
          <article>{item.title}</article>
          <p>Цена&nbsp;&nbsp;&nbsp;&nbsp;{item.price}</p>
          <Link to={`/product/${item.id}`}>Детали</Link>
        </BoxProduct>
      ))}
    </div>
  );
}

export default ProductList;
