import React from 'react'
import AppContext from '../context';

const Info = ({title, description, image}) => {

    const { setCardOpened } = React.useContext(AppContext);

    return (
        <div className="cardEmpty">
            <img className="emptyCardImg" width={120} src={image} alt="EmptyCard" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setCardOpened(false)} className="greenButton">
                <img src="img/arrow.svg" alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;
