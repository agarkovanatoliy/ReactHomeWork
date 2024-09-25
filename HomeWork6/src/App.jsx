import AddProduct from "./components/AddProduct";
import { EditProduct } from "./components/EditProduct";
import ProductList from "./components/ProductList";


function App() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <AddProduct />
      <ProductList />
      <EditProduct />
    </div>
  );
}

export default App;
