import React from "react";
import "./Header.css";
import logo from "../../images/profile-3.svg";
const Header = () => {
  return (
    <div>
      <nav className="header">
        <div>
          <h2>Knowledge Cafe</h2>
        </div>
        <div>
          <div className="menu">
            <p>Home</p>
            <p>About</p>
            <p>Cafe</p>
            <img src={logo} alt="" />
          </div>
        </div>
      </nav>
      <hr className="line" />
    </div>
  );
};

export default Header;
