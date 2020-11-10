import React from "react";
import "./navBar.css";


function NavBar() {

//function to update the drop down dates based on the database dates that have been submitted

  return (
      <div  className="nav">
    <nav className="nav-bar">
      <ul>
        <Link to="../App"><li>Home</li></Link>
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
