import { useEffect, useState } from "react";
import getRestaurantMenu from "../services/getRestaurantMenu";
import { useParams } from "react-router";
import Shimmer from "../components/Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const Restaurants = () => {
  const { resId } = useParams();
  

  const {resMenu, loading} = useRestaurantMenu(resId);
 
  if (loading) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, city } =
    resMenu?.data?.cards[2]?.card?.card?.info || {};
  const menuItems =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];
  console.log("Menu items:", menuItems);
  return (
    <div>
      <h1>{name}</h1>
      <p>{costForTwoMessage}</p>
      <p>{cuisines?.join(", ")}</p>
      <p>{city}</p>

      <section>
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => {
            return <li key={item.card?.info?.id}>{item.card?.info?.name} --Rs.{item.card?.info?.price/100}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Restaurants;
