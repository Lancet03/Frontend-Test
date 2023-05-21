import Card from "../Card";
import React from "react";
import AppContext from "../context";
import EmptyPage from "./EmptyPage";
import { useNavigate } from "react-router-dom";

function Orders() {
  const { orders } = React.useContext(AppContext);
  const ordersArr = orders.flat()
  console.log(ordersArr)

  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="topContent">
      <div className="backButton">
          <img onClick={() => navigate(-1)} src="img/goBack.svg" alt="Вернуться назад" />
        <h1>Мои заказы</h1>
      </div>
      </div>
      {orders.length > 0 ?
        <div className="sneakers">
          {ordersArr.map((item => (
            <Card
              key={item.id}
              {...item}
            />
          )
          ))}
        </div>
        :
        <EmptyPage
        imgSrc="img/noOrders.png"
        headerCaption="У вас нет заказов!"
        additionTextCaption="Оформите хотя бы один заказ."/>
        }
    </div>

  )
}

export default Orders