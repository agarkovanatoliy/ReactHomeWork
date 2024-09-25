import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";
import { useState } from "react";
import "./product.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && description && price) {
      dispatch(
        addProduct({ name, description, price: parseFloat(price), available }),
      );
      setName("");
      setDescription("");
      setPrice("");
      setAvailable(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className="input"
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        className="textarea"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
      className="input"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button className="button" type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
