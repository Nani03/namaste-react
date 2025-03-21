import RestaurantCard from "./RestaurantCard";
import getRestaurantData from "../services/getRestaurantData";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
