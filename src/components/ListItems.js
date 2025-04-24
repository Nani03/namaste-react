import React from "react";
import { CDN_URL } from "../utils/constants";

const ListItems = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            className=" bg-gray-50 mt4  text-left pb-2"
            key={item?.card?.info?.id}
          >
            <div className="mx-4 p-4 flex justify-between">
              <div className="w-3/4">
                <p>{item?.card?.info?.name}</p>
                <p className="font-serif font-thin">
                  &#8377;{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </p>
                <p className="text-sm mt-4">{item?.card?.info?.description}</p>
              </div>
              <div className="w-1/4 flex justify-end flex-col items-center">
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="dish image"
                  className=" mx-4 w-30 h-30 rounded-md object-cover"
                ></img>
                <button className="absolute -mb-[15px] p-1 w-20 bg-red-700 rounded-xl shadow font-bold text-white ">ADD</button>
              </div>
            </div>

            <hr className="mx-4 mt-4 text-gray-400"></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
