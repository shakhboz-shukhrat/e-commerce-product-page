import { useSelector } from "react-redux";
import "./_cart.scss";
import { useState, useEffect } from "react";
import CartContent from "../CartContent";

const Cart = () => {
  const { count } = useSelector((state) => state.products);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setCart(true);
    } else {
      setCart(false);
    }
  }, [count]);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <hr></hr>

      {cart ? <CartContent /> : <p>Your cart is empty.</p>}
    </div>
  );
};

export default Cart;
