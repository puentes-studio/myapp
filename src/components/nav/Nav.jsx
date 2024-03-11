import { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useName } from "../../../Context/Name.Context";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { nameState } = useName();

  return (
    <>
      <nav className="navBar">
        <h1>
          <NavLink className="nav-title" to="/home">
            {nameState.name}
          </NavLink>
          <p className="is-recruiting">is Recruiting</p>
        </h1>

        <div className="menu-wrapper">
          <div
            className="menu-toggle"
            id="mobile-menu"
            onClick={() => {
              setShowMenu(!showMenu); // Toggle the state between true and false
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {showMenu ? (
            <ul className="mobile-nav">
              <li>
                <NavLink to="/house">About Me</NavLink>
              </li>
              <li>
                <NavLink to="/rock">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/jazz">Contact</NavLink>
              </li>
            </ul>
          ) : null}
          <ul className="nav-list">
            <li>
              <NavLink to="/house">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/rock">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/jazz">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
