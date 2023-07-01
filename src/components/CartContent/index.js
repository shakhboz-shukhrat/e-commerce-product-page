import "./_cart-content.scss";
import deleteIcon from "../../assets/images/icon-delete.svg";
import product from "../../assets/images/image-product-1-thumbnail.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { deleteProduct } from "../../store/slices/products/product";

const CartContent = () => {
  const { cost } = useSelector((state) => state.products);
  const { count } = useSelector((state) => state.products);
  const [overAll, setOverAll] = useState(cost * count);
  const dispatch = useDispatch();
  useEffect(() => {
    setOverAll(cost * count);
  }, [count]);
  return (
    <div className="cartContent">
      <div className="products">
        <img src={product} alt="product" />
        <div className="text">
          <p className="pa1">Fall Limited Edition Sneakers</p>
          <p className="pa2">
            <span className="span1">{`$${cost}.00 x ${count}`}</span>
            <span className="span2">{"$" + overAll}</span>
          </p>
        </div>
        <img
          src={deleteIcon}
          alt="delete icon"
          onClick={() => dispatch(deleteProduct())}
          className="delete"
        />
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartContent;
