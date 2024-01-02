import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utlis/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m-5 p-5 text-center">
      <h1 className="text-2xl font-bold"> Cart</h1>
      <div className="m-auto w-6/12">
        <button
          className="bg-black text-white rounded-lg p-2 m-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {
            cartItems.length === 0 && <h1>
                Cart is empty. Please add some items.
            </h1>
        }
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
