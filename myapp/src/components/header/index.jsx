import { NavLink, Link } from "react-router";
import logo from "../../assets/react.svg";
import { FaCartShopping as CartIcon } from "react-icons/fa6";
import { FaUserCircle as ProfileIcon } from "react-icons/fa";
import {
  FaHeadset as SupportIcon,
  FaBoxOpen as OrdersIcon,
  FaHeart as WishlistIcon,
  FaGear as SettingsIcon,
  FaRightFromBracket as LogoutIcon,
} from "react-icons/fa6";
import style from "./header.module.css";
import { useContext, useEffect, useRef, useState } from "react";
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
        <ProfileMenu />
      </nav>
    </header>
  );
};

const MENU_ITEMS = [
  { label: "Support", icon: <SupportIcon />, link: "/support" },
  { label: "My Orders", icon: <OrdersIcon />, link: "/orders" },
  { label: "Wishlist", icon: <WishlistIcon />, link: "/wishlist" },
  { label: "Settings", icon: <SettingsIcon />, link: "/settings" },
];

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={style.profile} ref={menuRef}>
      <button
        className={style.profileBtn}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Profile menu"
        aria-expanded={open}
      >
        <ProfileIcon />
      </button>

      {open && (
        <div className={style.menu}>
          <div className={style.menuHeader}>
            <ProfileIcon />
            <div>
              <div className={style.menuName}>Guest User</div>
              <div className={style.menuEmail}>guest@lumina.shop</div>
            </div>
          </div>
          <div className={style.menuDivider} />
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className={style.menuItem}
              onClick={() => setOpen(false)}
            >
              <span className={style.menuIcon}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
          <div className={style.menuDivider} />
          <button className={`${style.menuItem} ${style.menuLogout}`}>
            <span className={style.menuIcon}>
              <LogoutIcon />
            </span>
            Sign Out
          </button>
        </div>
      )}
    </div>
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
