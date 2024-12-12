import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-log"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const WithOfferLabel = (RestaurantCard) => {
  return (props) => {
    const { offer, resData } = props;
    return (
      <div className="relative">
        <div className="absolute bottom-[40%] right-[40px] gap-x-2 flex items-center font-extrabold text-xl text-white">
          <label>{offer?.header}</label>
          <label>{offer?.subHeader}</label>
        </div>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};

export default RestaurantCard;
