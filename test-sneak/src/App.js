function App() {
  return (
    <div className="wrapper">
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
        <h1>Все кроссовки</h1>
        <div className="sneakers">
        <div className="card">
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
