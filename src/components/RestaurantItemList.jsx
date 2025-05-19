import { CDN_URL } from "../utils/constants";

/* eslint-disable no-unsafe-optional-chaining */
const RestaurantItemList = ({ items }) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => {
        const { name, price, description, imageId, id } = item?.card?.info;
        return (
          <div key={id} className="flex gap-5 border-b border-gray-200 p-4">
            <div className="text-left w-9/12">
              <h2 className="font-bold">{name}</h2>
              <h3>₹ {price / 100}</h3>
              <p className="text-sm">{description}</p>
            </div>
            <div className="w-3/12 relative">
              <div className="w-full">
                <img src={CDN_URL + imageId} alt="" />
              </div>
              <button className="absolute bottom-0 left-1/2 -translate-1/2 bg-black rounded-lg p-2 text-sm font-medium text-white">
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantItemList;
