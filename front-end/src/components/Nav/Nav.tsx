import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        JA
      </Link>

      <Link className="nav__item" to="/1" >
        Books by Month
      </Link>

      <Link className="nav__item" to="/2" >
        2024 Summary
      </Link>
    </div>
  );
};

export default Nav;
