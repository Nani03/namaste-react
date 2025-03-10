//using the fetch api to get the real time data from the swiggy api

const getRestaurantData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await response.json();
    return data
}

export default getRestaurantData;