import { useSelector } from "react-redux";
import "./_nav.scss";
import navLinks from "../../store/slices/navLinks";

const Nav = () => {
  const links = useSelector(navLinks.getInitialState);
  return (
    <div className="navDiv">
      <ul>
        {links.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Nav;
