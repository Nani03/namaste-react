import React from "react";
import { useState, useRef } from "react";

const Search = ({ resData, filteredResList, setFilteredResList }) => {
  const [searchValue, setSearchValue] = useState("");
  
  const debounceTimeout = useRef(null);

  const topRatedFilterBtnHandler = () => {
    const filteredData = filteredResList.filter((res) => res.info.avgRating > 4.3);
    setFilteredResList(filteredData);
  };

  const searchHandler = () => {
    const filteredData = resData.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredResList(filteredData);
  };
  const searchInputHandler = (e) => {
    setSearchValue(e.target.value);

    // Clear the previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new timeout
    debounceTimeout.current = setTimeout(() => {
      searchHandler();
    }, 100);
  };
  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          className="search"
          placeholder="Search for restaurants"
          value={searchValue}
          onChange={searchInputHandler}
        />
      </div>
      <button className="search-btn" onClick={searchHandler}>
        Search
      </button>

      <button className="filter-btn" onClick={topRatedFilterBtnHandler}>
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default Search;