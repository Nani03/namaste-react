import RestaurantCard from "./RestaurantCard";
import getRestaurantData from "../services/getRestaurantData";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurantData();
      setResData(
        data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
      );
    };

    fetchData();
  }, []);

  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <Search resData={resData} setResData={setResData} />
      <div className="cards-container">
        {resData.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
