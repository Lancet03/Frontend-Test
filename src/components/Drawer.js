function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className="drawerBG">
      <div className="drawer">

        <h2>
          Корзина <img className="removeBtn" onClick={onClose} src="/img/btn-remove.svg" alt="Close" />
        </h2>




        {
          items.length > 0 ?
            (
              <div>
                <div className="items">
                  {items.map((obj) => (
                    <div key={obj.id} className="cartItem">
                      <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg">
                      </div>

                      <div className="cartItemInfo">
                        <p>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                  ))}
                </div>
                <div className="cartTotalBlock">
                  <ul>
                    <li>
                      <span>Итого:</span>
                      <div></div>
                      <b>21 498 руб.</b>
                    </li>
                    <li>
                      <span>Налог 5%</span>
                      <div></div>
                      <b>1074 руб.</b>
                    </li>
                  </ul>
                  <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
              </div>
            )
            :
            (
              <div className="cardEmpty">
                <img className="emptyCardImg" width={120} height={120} src="/img/empty-card.png" alt="EmptyCard" />
                <h2>Корзина пустая</h2>
                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button onClick={onClose} className="greenButton">
                  <img src="/img/arrow.svg" alt="Arrow" />
                  Вернуться назад
                </button>
              </div>

            )
        }


      </div>
    </div>

  )
}

export default Drawer