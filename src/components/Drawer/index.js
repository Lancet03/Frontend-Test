import axios from "axios";
import React from "react";

import Info from "../Card/Info";
import AppContext from "../context";

import styles from "./Drawer.module.scss"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onClose, items = [], onRemove, opened}) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderCount, setOrderCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false)


  const { cardItems, setCardItems, setOrders } = React.useContext(AppContext);

  const totalPrice = cardItems.reduce((sum, obj) => sum + obj.price, 0)

  const onClickOrder = async () => {
    try{
    setIsLoading(true);
    setIsOrderComplete(true);
    setOrderCount((prev) => prev + 1)
    setOrders((prev) => [...prev, cardItems]);

    for(let i = 0; i < cardItems.length; i++){
      const item = cardItems[i];
      await axios.delete('https://6407626877c1a905a0f7698a.mockapi.io/card/' + item.id);
      await delay(1000);
    }
    setCardItems([]);
  }
     catch(error){
      console.log(error)
      alert("Не удалось создать заказ!")
    }
    setIsLoading(false)
  }

  

  return (
    <div className={`${styles.drawerBG} ${opened ? styles.drawerBGVisible : ''}`}>
      <div className={styles.drawer}>
        <h2>
          Корзина <img className="removeBtn" onClick={onClose} src="img/btn-remove.svg" alt="Close" />
        </h2>
        {
          items.length > 0 ?
            (
              <>
                <div className="items">
                  {items.map((obj) => (
                    <div key={obj.id} className="cartItem">
                      <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg">
                      </div>

                      <div className="cartItemInfo">
                        <p>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img onClick={() => onRemove(obj.id)} className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
                    </div>
                  ))}
                </div>
                <div className="cartTotalBlock">
                  <ul>
                    <li>
                      <span>Итого:</span>
                      <div></div>
                      <b>{totalPrice} руб.</b>
                    </li>
                    <li>
                      <span>Налог 5%</span>
                      <div></div>
                      <b>{+(totalPrice * 0.05).toFixed(2)} руб.</b>
                    </li>
                  </ul>
                  <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="Arrow" /></button>
                </div>
              </>
            )
            :
            (
              <Info title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
               description={isOrderComplete ? `Ваш заказ #${orderCount} скоро будет передан курьерской доставке`: "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
              image={isOrderComplete ? "img/complete-order.png": "img/empty-card.png"}/>

            )
        }


      </div>
    </div>

  )
}

export default Drawer