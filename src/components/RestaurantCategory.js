import ItemList from "./ItemList";
const RestaurantCategory = ({ data  , showItems , setShowIndex} ) => {
//   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="bg-gray-100 p-4 mx-auto shadow-lg w-6/12 my-4 ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
