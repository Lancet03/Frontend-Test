import Card from "./components/Card";
import Header from "./components/Header"
import Drawer from "./components/Drawer";

const arr = [
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageUrl: "/img/sneakers/1.jpg"},
  {title:"Мужские Кроссовки Nike Air Max 270", price: 12999, imageUrl: "/img/sneakers/2.jpg"},
  {title:"Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, imageUrl: "/img/sneakers/3.jpg"},
  {title:"Кроссовки Puma X Aka Boku Future Rider", price: 8999, imageUrl: "/img/sneakers/4.jpg"}
]

function App() {
  return (
    <div className="wrapper">
     <Drawer/>
    <Header/>




      <div className="content">
        <div className="topContent">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>



        <div className="sneakers">
          {
            arr.map((obj) => (
              <Card title={obj.title}
              price={obj.price} 
              imageUrl = {obj.imageUrl}
              onClick={() => console.log(obj)}/>
            ))
          }


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
