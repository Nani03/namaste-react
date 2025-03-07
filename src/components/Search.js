import React from 'react'



const Search = ({resData, setResData}) => {
    const topRatedFilterBtnHandler = () => {
        const filteredData = resData.filter((res) => res.info.avgRating > 4);
        setResData(filteredData);
        console.log(filteredData)
      }
  return (
    <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Search for restaurants"
        />
        <button className="filter-btn" onClick={topRatedFilterBtnHandler}>Top Rated Restaurants</button>
      </div>
  )
}

export default Search