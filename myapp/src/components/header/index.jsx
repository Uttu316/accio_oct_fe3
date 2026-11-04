import { NavLink, Link } from "react-router";
import logo from "../../assets/react.svg";
import { FaCartShopping as CartIcon } from "react-icons/fa6";
import style from "./header.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const Header = ({ title }) => {
  const { cartLength } = useContext(CartContext);
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
        <NavItem label={"Products"} link={"/products"} />
        <NavItem label={"About"} link={"/about"} />
        <NavItem label={"Contact"} link={"/contact"} />
        <NavItem
          label={<CartIcon />}
          badge={cartLength > 99 ? "99+" : cartLength}
          link={"/cart"}
        />
      </nav>
    </header>
  );
};

const NavItem = ({ label, link, badge }) => {
  const isBadge = badge != null;
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        (isActive ? style.active : "") + " " + style.header_link
      }
    >
      <span className={style.navItem}>
        {label}
        {isBadge && <span className={style.badge}>{badge}</span>}
      </span>
    </NavLink>
  );
};
export default Header;
