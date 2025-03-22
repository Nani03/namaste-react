import { SWIGGY_MENU_URL } from "../utils/constants";

const getRestaurantMenu = async (resId) => {
  const response = await fetch(SWIGGY_MENU_URL + resId);
  const data = await response.json();
  return data;
};

export default getRestaurantMenu;
