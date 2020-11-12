import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../SideBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import socLogoPng from "../images/soc-logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  console.log(currentUser);
  const [sidebar, setSidebar] = useState(false);
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
          <img
            src={socLogoPng}
            alt="soc sign"
            style={{ height: "50px", display: "flex" }}
          ></img>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <button
              style={{ color: "blue", margin: " 10px 50px" }}
              className="pText"
              variant="link"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
