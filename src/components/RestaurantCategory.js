import ListItems from "./ListItems";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };

  return (
    <div className="mx-auto max-w-8/12">
      <div
        onClick={clickHandler}
        className="items-center cursor-pointer my-4 shadow-gray-400 drop-shadow-sm bg-gray-50 flex justify-between p-4"
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ListItems items={data?.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
