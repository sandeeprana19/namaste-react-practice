import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart!</h1>}
      <div className="w-6/12 mx-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
