import React from 'react';
import { Link } from 'react-router-dom';


function EmptyPage(
    props
) {


  return (
    <div className='emptyPage'>
        <img width={70} height={70} src={props.imgSrc} alt="Пусто" />
        <h1>{props.headerCaption}</h1>
        <p>{props.additionTextCaption}</p>
        <Link to="/">
            <button className="greenButton"><img src="img/arrow.svg" alt="Arrow" /> Вернуться к товарам</button>
        </Link>
    </div>
  )
}

export default EmptyPage