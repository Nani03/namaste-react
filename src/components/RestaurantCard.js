import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  const deliveryTime = resData?.info?.sla?.deliveryTime;
  return (
    <div className="restaurantContainer">
      <div className="restaurantCard">
        <img
          className="restaurantImage"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
        />
        <h4>{name}</h4>
        <h3>{cuisines.join(", ")}</h3>
        <p>Rating : {avgRating}</p>
        <p>{deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
