import React from "react";
import { Link } from "react-router-dom";
import AppContext from "./context";

function Header(props) {
  const { cardItems} = React.useContext(AppContext);
  const totalPrice = cardItems.reduce((sum, obj) => obj.price + sum, 0)

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img src="/img/logo.png" alt="LogoType"></img>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>

        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={props.onClickCard}>
          <img src="/img/cart.svg" alt="ControleButton"></img>
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="/img/liked.svg" alt="ControleButton"></img>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img src="/img/profile.svg" alt="ControleButton"></img>
          </Link> 
        </li>
      </ul>
    </header>
  )
}

export default Header