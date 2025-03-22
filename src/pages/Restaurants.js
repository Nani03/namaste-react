import { useEffect, useState } from "react";
import getRestaurantMenu from "../services/getRestaurantMenu";
import { useParams } from "react-router";
import Shimmer from "../components/Shimmer";

const Restaurants = () => {
  const { resId } = useParams();
  const [resMenu, setResmenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurantMenu(resId);
        setResmenu(data);
      } catch (error) {
        console.log("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading || !resMenu) {
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
