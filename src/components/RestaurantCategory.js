import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItemList, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="bg-gray-50 p-4 w-6/12 mx-auto my-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-black">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItemList && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
