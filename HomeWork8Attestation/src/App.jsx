import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style/style.scss";
import Main from "./Components/Main";
import Product from "./Components/Product";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import Bascet from "./Components/Bascet";


function App() {


  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/basket" element={<Bascet />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
