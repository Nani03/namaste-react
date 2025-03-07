import restaurantData from "../utils/dummyResData";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { useState } from "react";

const Body = () => {
  const [resData, setResData] = useState(restaurantData);
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
