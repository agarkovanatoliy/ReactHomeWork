import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import s from "./Components/Boxes/Box.module.css"
import Text from './Components/Text/Text';
import { List } from './Components/List/List';
import ProductList from './Components/Product/ProductList';
import Product from './Components/Product/Product';

const arr = ["пункт 1", "пункт 2", "пункт 3"];

const goods = [
  {
    id: 1,
    title: "Xiaomi",
    price: "30000",
  },
  {
    id: 2,
    title: "Samsung",
    price: "50000",
  },
  {
    id: 3,
    title: "iPhone",
    price: "80000",
  },
];

function App() {
  const renderItem = (item, i) => {
    const style = { border: `2px solid ${i % 2 ? "green" : "red"}`};
    return <article style={style}>{item}</article>;
  };

  const styleActiveLink = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <BrowserRouter>
      <nav className={s.link}>
        <NavLink className={styleActiveLink} to="/">
          Главная
        </NavLink>
        <NavLink className={styleActiveLink} to="/about">
          О нас
        </NavLink>
        <NavLink className={styleActiveLink} to="/text">
          Текст
        </NavLink>
        <NavLink className={styleActiveLink} to="/list">
          Пункты
        </NavLink>
        <NavLink className={styleActiveLink} to="/product">
          Страница товаров
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/text" element={<Text />} />
        <Route path="/list" element={<List items={arr} renderItem={renderItem} />} />
        <Route path="/product" element={<ProductList items={goods} />} />
        <Route path="/product/:productId" element={<Product products={goods} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;