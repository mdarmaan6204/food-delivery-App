import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../../utlis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "../../utlis/appStore";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-2xl my-5 "> {name}</h1>
      <p className="font-serif text-lg text-gray-500">
        {cuisines.join(",")} -{costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          <Provider store={appStore}>
            <RestaurantCategory
              key= {category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex && true}
              setShowIndex={() =>
                showIndex === index ? setShowIndex() : setShowIndex(index)
              }
            />
            ;
          </Provider>
        );
      })}
    </div>
  );
};

export default ResturantMenu;
