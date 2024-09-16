import { LoremIpsum } from "react-lorem-ipsum";
import { useNavigate, useParams } from "react-router-dom";

function Product({ products }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (el) => el.id === parseInt(productId, 10)
  );

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <button onClick={goBack}>Назад</button>
      <p>{product.title}</p>
      <LoremIpsum p={2} />
      <p>Цена&nbsp;&nbsp;&nbsp;&nbsp;{product.price}</p>
    </>
  );
}

export default Product;
