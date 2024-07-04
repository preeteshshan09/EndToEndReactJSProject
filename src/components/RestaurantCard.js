import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props,
    { name, locality, avgRating, costForTwo, cloudinaryImageId } =
      resData?.info,
    { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="rest-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
