import Card from "../Card"
import React from "react"
import AppContext from "../context";
import EmptyPage from "./EmptyPage";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);
  const navigate = useNavigate();


  return (
    <div className="content">
      <div className="topContent">
        <div className="backButton">
          <img onClick={() => navigate(-1)} src="img/goBack.svg" alt="Вернуться назад" />
          <h1>Мои закладки</h1>
        </div>
        
      </div>
      {favorites.length > 0 ?
        <div className="sneakers">
          {favorites
            .filter((card) => card.isFavorite === false)
            .map((item => (
              <Card
                key={item.id}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
            )
            ))}
        </div>
        :
        <EmptyPage
        imgSrc="img/noFavorites.png"
        headerCaption="Закладок нет!"
        additionTextCaption="Вы ничего не добавляли в закладки"
        />
        }
    </div>

  )
}

export default Favorites