import RestaurantCard from "./RestaurantCard";
import restlist from "../utils/mockData";
const Body = () => {
  return (
    <div>
      <div className="search">search</div>
      <div className="res-container">
        {restlist.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
