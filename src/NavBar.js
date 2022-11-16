import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/dietcoke">
        Diet Coke
      </NavLink>
      <NavLink exact to="/swedishfish">
        Swedish Fish
      </NavLink>
    </nav>
  );
}

export default NavBar;
