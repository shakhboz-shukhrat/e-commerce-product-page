import "./_main.scss";
import Header from "../header";
import Product from "../product";
import Info from "../Info";
import { useSelector } from "react-redux";

const Main = () => {
  const { show } = useSelector((state) => state.products);
  return (
    <div className="main">
      <Header />
      <hr />
      <div className="content">
        <Product product1="product-container" />
        {show && <Product product1="product-container2" />}
        <Info />
      </div>
    </div>
  );
};

export default Main;
