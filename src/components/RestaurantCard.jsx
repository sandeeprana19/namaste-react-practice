import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRatingString} stars</h3>
      <h3>{sla?.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
