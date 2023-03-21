import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./components/pages/Favorites";
import Orders from "./components/pages/Orders";
import axios from "axios";
import AppContext from "./components/context";

function App() {
  const [cardOpened, setCardOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cardItems, setCardItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]) // Используется так как нет возможности создать бд на mockapi


  React.useEffect(() => {
    async function fetchData() {
      try{setIsLoading(true);
      const [cardResponce, itemsResponce] = await Promise.all([
        axios.get("https://6407626877c1a905a0f7698a.mockapi.io/card"),
        axios.get("https://6407626877c1a905a0f7698a.mockapi.io/items")
      ])
      // const cardResponce = await 
      // const itemsResponce = await axios.get("https://6407626877c1a905a0f7698a.mockapi.io/items");
      setIsLoading(false);
      setCardItems(cardResponce.data);
      setItems(itemsResponce.data);}
      catch(error){
        alert("Ошибка при запросе данных")
        console.error(error)
      }
    };
    fetchData();
  }, [])

  const onAddToCard = async (obj) => {
    // if (obj.isAdded) {
    //   onRemoveItem(obj.id)
    // } else {
    //   axios.post("https://6407626877c1a905a0f7698a.mockapi.io/card", obj);
    //   setCardItems((prev) => [...prev, obj])
    // }
    // console.log(obj)
    try {
      const findItem = cardItems.find((item) => Number(item.parentID) === Number(obj.id));
      if (findItem) {
        setCardItems(prev => prev.filter(item => Number(item.parentID) !== Number(obj.id)))
        await axios.delete(`https://6407626877c1a905a0f7698a.mockapi.io/card/${findItem.id}`)
      } else {
        setCardItems((prev) => [...prev, obj]);
        const {data} = await axios.post("https://6407626877c1a905a0f7698a.mockapi.io/card", obj);
        setCardItems((prev) => prev.map(item => {
          if(item.parentID === data.parentID){
            return{
              ...item, 
              id: data.id
            };
          } else{
            return item;
          }

        }));
      }
    } catch (error) {
      alert("Ошибка при добавлении товара!")
    }

  }

  const onRemoveItem = (id) => {
    
    try{axios.delete(`https://6407626877c1a905a0f7698a.mockapi.io/card/${id}`);
    setCardItems((prev) => prev.filter(item => Number(item.parentID) !== Number(id)));}
    catch(error){
      alert("Не удалость удалить товар из корзины")
      console.error(error)
    }
  }

  const onAddToFavorite = (e) => {
    try{if (favorites.find((obj) => Number(obj.id) === Number(e.id))) {
      setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(e.id))
      );
    } else {
      setFavorites((prev) => [...prev, e])
    }}
    catch(error){
      alert("Не удалось добавить товар в закладки");
      console.log(error);
    }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const isItemAdded = (id) => {
    return cardItems.some((obj) => Number(obj.parentID) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      items,
      cardItems,
      favorites,
      isItemAdded,
      onAddToFavorite,
      setCardOpened,
      setCardItems,
      orders, 
      setOrders
    }}>
      <div className="wrapper">
      <Drawer
            onClose={() => {
              setCardOpened(false);
            }}
            onRemove={onRemoveItem}
            items={cardItems}
            opened={cardOpened}
          />

        <Header
          onClickCard={() => {
            setCardOpened(true);
          }}
        />

        <Routes>
          <Route exact path="/" element={
            <Home
              items={items}
              cardItems={cardItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
              isLoading={isLoading} />
          } />
          <Route exact path="/favorites" element={
            <Favorites
            // items={favorites}
            />
          } />
          <Route path="/orders" element={
          <Orders/>
          }/>
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;
