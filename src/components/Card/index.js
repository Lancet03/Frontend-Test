import React from "react";
import styles from "./Card.module.scss";

function Card({title, imageUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleClickPlus = () => {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/like-off.svg" alt="Unliked" />
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
