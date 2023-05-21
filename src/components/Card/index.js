import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Card({
  title,
  imageUrl,
  price,
  id,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const { isItemAdded } = React.useContext(AppContext);

  const handleClickPlus = () => {
    onPlus({ id, parentID: id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price, isFavorite });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={178}
          height={252}
          viewBox="0 0 178 252"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="178" height="130" />
          <rect x="0" y="145" rx="3" ry="3" width="178" height="15" />
          <rect x="0" y="165" rx="3" ry="3" width="90" height="15" />
          <rect x="0" y="228" rx="7" ry="7" width="80" height="25" />
          <rect x="146" y="220" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            {onFavorite && <img
              onClick={onClickFavorite}
              src={isFavorite ? "img/like-on.svg" : "img/like-off.svg"}
              alt="Unliked"
            />}
          </div>
          <img width="100%" height={135} src={imageUrl} alt="sneakers" />
          <h5>{title}</h5>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>Цена</span>
              <b>{price}</b>
            </div>

            {onPlus && <img
              className={styles.plus}
              onClick={handleClickPlus}
              src={isItemAdded(id) ? "img/btn-on.svg" : "img/btn-off.svg"}
              alt="add"
            />}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
