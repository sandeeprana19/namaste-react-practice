import RestaurantItemList from "./RestaurantItemList";

/* eslint-disable no-unsafe-optional-chaining */
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleItemList = () => {
    setShowIndex();
  };

  return (
    <div className="my-4 bg-gray-100 shadow-lg">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={handleItemList}
      >
        <span className="font-bold">
          {title} ({itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      {showItems && (
        <RestaurantItemList key={itemCards?.card?.info?.id} items={itemCards} />
      )}
    </div>
  );
};

export default RestaurantCategory;
