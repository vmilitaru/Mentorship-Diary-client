import React from "react";
import "./navBar.css";

function NavBar() {
  return (
      <div  className="nav">
    <nav className="nav-bar">
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>
          History
          <select name="dates" id="dates">
            <option value="09/11/20">09/11/20</option>
            <option value="02/11/20">02/11/20</option>
            <option value="26/10/20">26/10/20</option>
            <option value="19/10/20">19/10/20</option>
          </select>
        </li>
      </ul>
    </nav>
    </div>
  );
}
export default NavBar;
