import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props,
    { name, locality, avgRating, costForTwo, cloudinaryImageId } =
      resData?.info,
    { deliveryTime } = resData?.info?.sla;
  return (
    <div className="p-4 m-4 rounded-md w-[250px] bg-gray-100">
      <img
        className="rounded-md"
        alt="rest-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{locality}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-4 rounded-lg">
          {props.resData.info.aggregatedDiscountInfoV3.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
