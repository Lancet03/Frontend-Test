function Header(){
    return(
        <header>
        <div className="headerLeft">
          <img src="/img/logo.png"></img>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img src="/img/cart.svg"></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/liked.svg"></img>
          </li>
          <li>
            <img src="/img/profile.svg"></img>
          </li>
        </ul>
      </header>
    )
}

export default Header