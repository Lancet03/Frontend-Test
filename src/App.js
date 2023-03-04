function App() {
  return (
    <div className="wrapper">

      <div className="drawerBG">
        <div className="drawer">
          <h2>Корзина</h2>
          <div className="items">
            <div className="cartItem">
              <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="cartItemImg">
              </div>

              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cartItem">
              <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="cartItemImg">
              </div>

              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
          <ul>
            <li>
              <span></span>
              <div></div>
              <b></b>
            </li>
            <li>
              <span></span>
              <div></div>
              <b></b>
            </li>
          </ul>

        </div>
      </div>




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


      <div className="content">
        <div className="topContent">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>



        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <img src="/img/like-off.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>


          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>



          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>



          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
