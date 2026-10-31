import logo from "../../assets/react.svg";

import style from "./header.module.css";
const Header = ({ title }) => {
  return (
    <header className={style.header}>
      <div className={style.header_brand}>
        <img className={style.header_logo} src={logo} alt="logo" />
        <h1 className={style.header_title + " " + style.text}>
          {title || "My App"}
        </h1>
      </div>
      <nav className={style.header_nav}>
        <a className={style.header_link} href="#">
          Contact
        </a>
        <a className={style.header_link} href="#">
          About
        </a>
      </nav>
    </header>
  );
};
export default Header;
