import React from "react";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
//   console.log(cartItems);
  return (
    <div>
      {cartItems.map((el) => (
        <div>
          <p> {el.Name} </p>
          <p>{el._id}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
