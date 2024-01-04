import ResturantCard, { withPromtedLabel } from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
import { API } from "../../utlis/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utlis/useOnlineStatus";
import UserContext from "../../utlis/UserContext";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResturantCardPromoted = withPromtedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API);

    const json = await data.json();
    // console.log(json);
    setListOfResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };
  const onlineStatus = useOnlineStatus();

  // console.log(listOfResturant);
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return <h1>You are offline. Please connect to the internet!!</h1>;

  if (listOfResturant.length === 0) {
    return <Shimmer />;
  } else
    return (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4 w-1/2">
            <input
              type="text"
              className="search-box border border-black rounded-sm w-9/12 h-10"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="search-btn px-4 py-1 h-10 bg-blue-200 m-4 rounded-lg hover:bg-blue-500 shadow-xl hover:font-bold hover:text-white"
              onClick={() => {
                // Filter the restuarant that is searched and show in UI
                const filterResturant = listOfResturant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredResturant(filterResturant);
                // console.log(searchText);
              }}
            >
              <i className="fa-solid fa-magnifying-glass"> </i>
               Search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center">
            <button
              className="filter-btn m-4 px-4 py-2 h-10 bg-orange-300 rounded-lg hover:bg-orange-500 hover:font-bold  hover:text-white"
              onClick={() => {
                const topRatedResturant = listOfResturant.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredResturant(topRatedResturant);
              }}
            >
              Top Rated Resturant
            </button>
          </div>
          <div className="m-4 p-4 flex items-center ">
            <p className=" hover:bg-gray-600 rounded-sm hover:text-white hover:font-bold">User Name :</p>
            <input
              className="border border-black"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="res-cont flex flex-wrap">
          {filteredResturant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/resturants/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.5 ? (
                <ResturantCardPromoted resData={restaurant} />
              ) : (
                <ResturantCard resData={restaurant} />
              )}
            </Link>
          ))}
          ;
        </div>
      </div>
    );
};

export default Body;
