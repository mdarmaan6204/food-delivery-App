import { useContext, useState } from "react";
import { LOGO_URL } from "../../utlis/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utlis/useOnlineStatus";
import UserContext from "../../utlis/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header flex justify-between shadow-lg sm:bg-yellow-100 lg:bg-orange-300-100">
      <div className="logo-container">
        <img className="logo w-40 rounded-full" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li className="px-4  hover:bg-gray-400 rounded-lg hover:font-bold">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4  hover:bg-gray-400 rounded-lg hover:font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4  hover:bg-gray-400 rounded-lg hover:font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:bg-gray-400 rounded-lg hover:font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cart px-4 font-bold text-lg hover:bg-gray-500">
            <Link to="/cart">
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              {
                cartItems.length === 0 ? (
                <span className="text-red-500">({cartItems.length})</span>
              ) : (
                <span className="text-green-500">({cartItems.length})</span>
              )
              }
            </Link>
          </li>
          <button
            className="login-btn hover:text-blue-600 hover:font-bold"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">
            <i className="fa-solid fa-user"></i>({loggedInUser})
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
