import { useDispatch, useSelector } from "react-redux";
import cart from "../../assets/images/icon-cart.svg";
import plus from "../../assets/images/icon-plus.svg";
import minus from "../../assets/images/icon-minus.svg";
import "./_info.scss";
import { decrement, increment } from "../../store/slices/products/product";

const Info = () => {
  const { count } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="info">
      <p className="p1">Sneaker Company</p>
      <p className="p2">Fall Limited Edition Sneakers</p>
      <p className="p3">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="numbers">
        <div className="cost">
          <p className="number1">$125.00</p>
          <p className="number2">$250.00</p>
        </div>
        <p className="number3">50%</p>
      </div>
      <div className="addCart">
        <div className="functionality">
          <img
            src={minus}
            alt="minus icon"
            onClick={() => dispatch(decrement())}
          />
          <p className="count">{count}</p>
          <img
            className="plus"
            src={plus}
            alt="plus icon"
            onClick={() => dispatch(increment())}
          />
        </div>
        <button>
          <img src={cart} alt="cart icon" />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Info;
