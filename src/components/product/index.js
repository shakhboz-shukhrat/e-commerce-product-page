// Product.js
import { useSelector, useDispatch } from "react-redux";
import products, { setImageZoomed } from "../../store/slices/products/product";
import { useState } from "react";
import "./_product.scss";
import close from "../../assets/images/icon-close.svg";
import prev from "../../assets/images/icon-previous.svg";
import next from "../../assets/images/icon-next.svg";
import navLinks from "../../store/slices/navLinks";

const Product = (props) => {
  const { show } = useSelector((state) => state.products);
  const { count } = useSelector((state) => state.products);
  const { images } = useSelector((state) => state.products);
  const link = useSelector(navLinks.getInitialState);
  const dispatch = useDispatch();
  const [productItem, setProductItem] = useState(0);
  console.log(images);

  const handleItemClick = (parametr) => {
    setProductItem(parametr);
  };
  const handleItemButtonClick = (parametr) => {
    if (parametr == "+") {
      if (productItem == 4) {
        setProductItem(0);
      } else {
        setProductItem(productItem + 1);
      }
    } else {
      if (productItem == 0) {
        setProductItem(3);
      } else setProductItem(productItem - 1);
    }
  };
  return (
    <div className={props.product1}>
      <img
        onClick={() => dispatch(setImageZoomed(!show))}
        src={close}
        alt="close icon"
        className="close"
      />
      <img
        src={prev}
        onClick={() => handleItemButtonClick("-")}
        alt="prev icon"
        className="prev"
      />
      <img
        src={next}
        onClick={() => handleItemButtonClick("+")}
        alt="next icon"
        className="next"
      />
      <div className="link">
        <ul className="ul">
          {link.map((item, index) => {
            return (
              <li className="li" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="div"></div>
      <img
        onClick={() => dispatch(setImageZoomed(!show))}
        src={images[productItem]}
        alt="product"
      />
      <div className="products">
        <img src={images[0]} alt="item1" onClick={() => handleItemClick(0)} />
        <img src={images[1]} alt="item2" onClick={() => handleItemClick(1)} />
        <img src={images[2]} alt="item3" onClick={() => handleItemClick(2)} />
        <img src={images[3]} alt="item4" onClick={() => handleItemClick(3)} />
      </div>
    </div>
  );
};

export default Product;
