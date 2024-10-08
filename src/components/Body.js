import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setUserInfo, loggedInUser } = useContext(UserContext);
  const RestaurentCardWithOffer = withOfferLabel(RestaurantCard);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !!! Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex">
        <div className=" p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg shadow-sm"
            onClick={() => {
              console.log(listOfRestaurants);
              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurents(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg shadow-sm"
            onClick={() => {
              setFilteredRestaurents(
                listOfRestaurants.filter((res) => res.info.avgRating > 4.4)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>Call me by nick name </label>
          <input
            className=" mx-2 p-2 border border-black rounded-lg shadow-lg"
            value={loggedInUser}
            onChange={(e) => {
              console.log("e", e.target.value);
              setUserInfo(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurents.map((res) => (
          <Link to={`/restaurant/${res.info.id}`}>
            {res?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestaurentCardWithOffer key={res.info.id} resData={res} />
            ) : (
              <RestaurantCard key={res.info.id} resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
