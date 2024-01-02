import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utlis/constant";
import { addItem } from "../../utlis/cartSlice";
import Header from "./Header";

const ItemList = ({ items }) => {
  //   console.log(items);
  
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span className="py-2 font-bold">{item.card.info.name}</span>
              <span> -- ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ">
            <div className="absolute">
              <button className="bg-black text-white   mx-1 rounded-lg p-2 shadow-lg" 
              onClick={()=>handleAddItem(item)}>
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
