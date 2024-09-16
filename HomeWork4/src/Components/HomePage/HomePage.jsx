import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='App'>
      <h1>Главная страница</h1>
      <Link to="/about">Перейти на страницу &quot; О нас &quot;</Link>
    </div>
  );
}

export default HomePage;