import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, isOpen } = resData?.info;
  const deliveryTime = resData?.info?.sla?.deliveryTime;
  return (
      <div className="m-4 p-4 w-50 bg-gray-50 rounded-md hover:bg-gray-200 shadow-lg">
        <img
          className="rounded-md"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
        />
        <h4 className="font-semibold pb-2">{name}</h4>
        <h3 className="">{cuisines.join(", ")}</h3>
        <p>Rating : <span className="font-semibold">{avgRating}</span></p>
        <p>{deliveryTime} mins</p>
      </div>
  );
};


export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg ml-4 px-1">Fast Delivery</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
