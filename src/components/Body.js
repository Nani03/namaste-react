import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";
import getRestaurantData from "../services/getRestaurantData";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";


const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const onlineStatus = useOnlineStatus();

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
  if (onlineStatus === false) {
    return (
      <div className="offline-container">
        <h1>
          Looks like you are offline, please check your internet connection
        </h1>
      </div>
    );
  }
  const RestaurantCardOpen = withIsOpenLabel(RestaurantCard);
  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <Search
        resData={resData}
        filteredResList={filteredResList}
        setFilteredResList={setFilteredResList}
      />
      <div className="flex flex-wrap justify-center">
        {filteredResList.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              {res.info.sla.deliveryTime < 30 ? (
                <RestaurantCardOpen resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
