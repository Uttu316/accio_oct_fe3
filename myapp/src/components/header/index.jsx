import logo from "../../assets/react.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_brand">
        <img className="header_logo" src={logo} alt="logo" />
        <h1 className="header_title">My App</h1>
      </div>
      <nav className="header_nav">
        <a className="header_link" href="#">
          Contact
        </a>
        <a className="header_link" href="#">
          About
        </a>
      </nav>
    </header>
  );
};
export default Header;
