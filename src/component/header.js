import React from "react";
const Header = () => {
  return (
    <div className="header">
     
      <a href="#"> <img
        className="irc"
        src="https://nowymarketing.pl/i/articles/14057_original.jpg"
        style={{ width: "200px" }}></img></a>
      <ul className="header-menu">
        <li className="header-menu-list">
          <a href="#">
            <p>About us</p>
          </a>
        </li>
        <li className="header-menu-list">
          <a href="#">
            <p>Career</p>
          </a>
        </li>
        <li className="header-menu-list">
          <a href="#">
            <p>Departments</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
