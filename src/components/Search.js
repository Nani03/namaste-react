import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";


const Search = ({ resData, filteredResList, setFilteredResList }) => {
  const [searchValue, setSearchValue] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

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
    }, 400);
  };
  return (
    <div className="search-container flex mx-5 p-4">
      <div className="search">
        <input
          type="text"
          className="border-1 border-gray-400 rounded-lg p-2 w-60"
          placeholder="Search for restaurants"
          value={searchValue}
          onChange={searchInputHandler}
        />
      </div>
      <button className="bg-green-100 rounded-lg px-4 mx-4" onClick={searchHandler}>
        Search
      </button>

      <button className="filter-btn rounded-lg bg-gray-100 px-4" onClick={topRatedFilterBtnHandler}>
        Top Rated Restaurants
      </button>
      <input value={loggedInUser} onChange={(e) => setUserName(e.target.value)} className=" border-2 rounded-md mx-4 border-red-400"/>  
    </div>

  );
};

export default Search;