import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={"Meghana Foods"}
        className="rounded-lg"
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    const { header } = props?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <h1 className="absolute top-2 left-2 text-white text-base p-2 bg-black rounded-lg font-normal">
          {header.includes("OFF") && header}
        </h1>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
