import RestaurantCard from "./RestaurantCard";
import getRestaurantData from "../services/getRestaurantData";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurantData();
      setResData(
        data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
      );
      setFilteredResList(
        data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
      );
    };

    fetchData();
  }, []);

  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <Search resData={resData} filteredResList ={filteredResList} setFilteredResList={setFilteredResList} />
      <div className="cards-container">
        {filteredResList.map((res) => {
          return <Link key={res.info.id} to={"/restaurants/" + res.info.id}><RestaurantCard  resData={res} /></Link>
        })}
      </div>
    </div>
  );
};

export default Body;
