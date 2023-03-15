import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./components/pages/Favorites";
import axios from "axios";

function App() {
  const [cardOpened, setCardOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cardItems, setCardItems] = React.useState([]);


  React.useEffect(() => {
    axios.get("https://6407626877c1a905a0f7698a.mockapi.io/items").then(res => {
      setItems(res.data)
    });
    axios.get("https://6407626877c1a905a0f7698a.mockapi.io/card").then(res => {
      setCardItems(res.data)
    });

  }, [])

  const onAddToCard = (obj) => {
    if (obj.isAdded) {
      onRemoveItem(obj.id)
    } else {
      axios.post("https://6407626877c1a905a0f7698a.mockapi.io/card", obj);
      setCardItems((prev) => [...prev, obj])
    }
    console.log(obj);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6407626877c1a905a0f7698a.mockapi.io/card/${id}`)
    setCardItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (e) => {
    if(favorites.find((obj) => obj.id === e.id)){
      setFavorites((prev)=>{
        // prev.filter((item) => item.id !== e.id)
      })
    }else{
      setFavorites((prev) => [...prev, e])
    }

    console.log(favorites)
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }



  return (
    <div className="wrapper">
      {cardOpened && (
        <Drawer
          onClose={() => {
            setCardOpened(false);
          }}
          onRemove={onRemoveItem}
          items={cardItems}
        />
      )}

      <Header
        onClickCard={() => {
          setCardOpened(true);
        }}
      />

      <Routes>
        <Route exact path="/" element={
          <Home 
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCard={onAddToCard} />
        }/>
        <Route exact path="/favorites" element={
          <Favorites items={favorites}
          onAddToFavorite={onAddToFavorite}/>
        }/>
      </Routes>

    </div>
  );
}

export default App;
