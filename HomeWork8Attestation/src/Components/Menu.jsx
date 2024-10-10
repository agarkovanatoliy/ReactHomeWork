function Menu( {nameClass, name} ) {
  return (
    <li className={nameClass} ><a href="#" className="slider__nav-link">{name}</a>
      <div className="mega-box">
        <div className="mega-box__item">
          <h3 className="mega-box__title">{name}</h3>
            <a href="#" className="mega-box__link">Dresses</a>
            <a href="#" className="mega-box__link">Tops</a>
            <a href="#" className="mega-box__link">Sweaters/Knits</a>
            <a href="#" className="mega-box__link">Jackets/Coats</a>
            <a href="#" className="mega-box__link">Blazers</a>
            <a href="#" className="mega-box__link">Denim</a>
            <a href="#" className="mega-box__link">Leggings/Pants</a>
            <a href="#" className="mega-box__link">Skirts/Shorts</a>
            <a href="#" className="mega-box__link">Accessories </a>
            <a href="#" className="mega-box__link">Bags/Purses</a>
            <a href="#" className="mega-box__link">Swimwear/Underwear</a>
            <a href="#" className="mega-box__link">Nightwear</a>
            <a href="#" className="mega-box__link">Shoes</a>
            <a href="#" className="mega-box__link">Beauty</a>
        </div>
        <div className="mega-box__item">
          <h3 className="mega-box__title">{name}</h3>
            <a href="#" className="mega-box__link">Dresses</a>
            <a href="#" className="mega-box__link">Tops</a>
            <a href="#" className="mega-box__link">Sweaters/Knits</a>
            <a href="#" className="mega-box__link">Jackets/Coats</a>
          <h3 className="mega-box__title  mega-box__title-middlePadding">{name}</h3>
            <a href="#" className="mega-box__link">Dresses</a>
            <a href="#" className="mega-box__link">Tops</a>
            <a href="#" className="mega-box__link">Sweaters/Knits</a>
        </div>
        <div className="mega-box__item">
          <h3 className="mega-box__title">{name}</h3>
            <a href="#" className="mega-box__link">Dresses</a>
            <a href="#" className="mega-box__link">Tops</a>
            <a href="#" className="mega-box__link">Sweaters/Knits</a>
            <a href="#" className="mega-box__link">Jackets/Coats</a>
            <a href="#" className="mega-box__link-img">
              <div className="mega-box__img">
                <div className="mega-box__img-text">
                  <p>Super</p>
                  <p>sale!</p>
                </div>
              </div>
            </a>
        </div>
      </div>
    </li>
  );
}

export default Menu;