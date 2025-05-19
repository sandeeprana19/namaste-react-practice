/* eslint-disable no-unsafe-optional-chaining */
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const info = resData?.info;
  const {
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRatingString} stars</h3>
      <h3>{sla?.deliveryTime} minutes</h3>
    </div>
  );
};

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props?.resData?.info;
    return (
      <div>
        <label className="absolute top-1/2 left-1/2 -translate-1/2 text-2xl font-black text-white">
          {aggregatedDiscountInfoV3?.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
