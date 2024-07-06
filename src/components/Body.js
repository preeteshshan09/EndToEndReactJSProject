import RestaurantCard from "./RestaurantCard";
import restlist from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restlist);

  return (
    <div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
