import React from "react";
import styles from "./Card.module.scss";


function Card({title, imageUrl, price, id, onFavorite, onPlus, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const handleClickPlus = () => {
    onPlus({title, imageUrl, price, id, isAdded})
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({title, imageUrl, price, id, isFavorite})
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={onClickFavorite} src={isFavorite ? "/img/like-on.svg" : "/img/like-off.svg"} alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Цена</span>
          <b>{price}</b>
        </div>

        <img
          className={styles.plus}
          onClick={handleClickPlus}
          src={isAdded ? "/img/btn-on.svg" : "/img/btn-off.svg"}
          alt="add"
        />
      </div>
    </div>
  );
}

export default Card;
