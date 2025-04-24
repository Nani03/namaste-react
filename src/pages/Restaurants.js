import { useState } from "react";
import { useParams } from "react-router";
import Shimmer from "../components/Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";

const Restaurants = () => {
  const { resId } = useParams();

  const { resMenu, loading } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (loading) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, city } =
    resMenu?.data?.cards[2]?.card?.card?.info || {};

  const categories =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <div className="text-center">
      <div className="font-bold mt-4 mb-4">
        <p className="text-2xl">{name}</p>
        <span className="font-semibold">{cuisines?.join(", ")}</span>
        <span className="font-semibold"> - {costForTwoMessage} </span>
      </div>

      {categories?.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex }
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}  
          />
        );
      })}
    </div>
  );
};

export default Restaurants;
