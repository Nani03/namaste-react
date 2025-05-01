import React from "react";
import { useSelector } from "react-redux";
import ListItems from "../components/ListItems";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button className="border-2 border-red-700 rounded-2xl p-1 px-4" onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <div className="text-center m-5 p-5">
          <h1 className="font-bold text-2xl">Your Cart is Empty</h1>
        </div>
      )}
      <div className="w-6/12 m-auto">
        <ListItems items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
