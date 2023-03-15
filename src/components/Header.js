import { Link } from "react-router-dom"

function Header(props) {
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
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="/img/liked.svg" alt="ControleButton"></img>
          </Link>

        </li>
        <li>
          <img src="/img/profile.svg" alt="ControleButton"></img>
        </li>
      </ul>
    </header>
  )
}

export default Header