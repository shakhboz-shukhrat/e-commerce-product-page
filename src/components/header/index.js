import "./_header.scss";
import Nav from "../nav";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import { useState } from "react";
import Cart from "../cart";
import { useDispatch, useSelector } from "react-redux";
import menu from "../../assets/images/icon-menu.svg";
import { setImageZoomed } from "../../store/slices/products/product";

const Header = () => {
  const { count } = useSelector((state) => state.products);
  const { show } = useSelector((state) => state.products);
  const [cartVisible, setCartVisible] = useState(false);
  const dispatch = useDispatch();
  let productCount = null;
  if (count > 0) {
    productCount = <p className="product-count">{count}</p>;
  }
  const handleCartClick = () => {
    setCartVisible(!cartVisible);
  };
  return (
    <div className="header">
      <img
        onClick={() => dispatch(setImageZoomed(!show))}
        src={menu}
        alt="menu icon"
        className="menu"
      />
      <img className="logo" src={logo} alt="logo" />
      <Nav />
      <img onClick={handleCartClick} className="cart" src={cart} alt="cart" />
      {productCount}
      <img
        className="hero"
        src={require("../../assets/images/image-avatar.png")}
        alt="avatar"
      />
      {cartVisible && <Cart />}
    </div>
  );
};

export default Header;
