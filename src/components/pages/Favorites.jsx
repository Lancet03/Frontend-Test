import Card from "../Card"

function Favorites({
  items,
  onAddToFavorite
}) {
  console.log(items)
  return (
    <div className="content">
      <div className="topContent">
        <h1>Мои закладки</h1>

      </div>

      <div className="sneakers">
        {items
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
    </div>

  )
}

export default Favorites