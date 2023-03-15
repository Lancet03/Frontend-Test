import Card from "../Card";


function Home({
    items,
searchValue,
setSearchValue,
onChangeSearchInput,
onAddToFavorite,
onAddToCard
}){
    return(
        <div className="content">
        <div className="topContent">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={() => { setSearchValue("") }} className="clearBtn" src="/img/btn-remove.svg" alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
            <Card
              key={item.id}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => { onAddToCard(obj) }}
              {...item}
            />
          ))}
        </div>
      </div>
  
    )
}

export default Home