import { NavLink, Link } from "react-router";
import logo from "../../assets/react.svg";

import style from "./header.module.css";
const Header = ({ title }) => {
  return (
    <header className={style.header}>
      <div className={style.header_brand}>
        <Link to="/">
          {" "}
          <img className={style.header_logo} src={logo} alt="logo" />
        </Link>
        <h1 className={style.header_title + " " + style.text}>
          {title || "My App"}
        </h1>
      </div>
      <nav className={style.header_nav}>
        <NavItem label={"About"} link={"/about"} />
        <NavItem label={"Contact"} link={"/contact"} />
      </nav>
    </header>
  );
};

const NavItem = ({ label, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        (isActive ? style.active : "") + " " + style.header_link
      }
    >
      {label}
    </NavLink>
  );
};
export default Header;
