import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cardOpened, setCardOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6407626877c1a905a0f7698a.mockapi.io/items")
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, [])

  const onAddToCard = (obj) => {
    setCardItems(prev => [...prev, obj])
  }

  console.log(cardItems)

  return (
    <div className="wrapper">
      {cardOpened && (
        <Drawer
          onClose={() => {
            setCardOpened(false);
          }}
          items={cardItems}
        />
      )}
      <Header
        onClickCard={() => {
          setCardOpened(true);
        }}
      />

      <div className="content">
        <div className="topContent">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => {
                console.log("Нажали лайк");
              }}
              onPlus={(obj) => {onAddToCard(obj)}}
            />
          ))}

          {/* <div className="card">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
