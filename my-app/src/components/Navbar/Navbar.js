import React from "react";

const Navbar = props => (
  <nav className="navbar">
    <ul>
      <li>DC Memory Game</li>
      <li>Score: {props.score}</li>
    </ul>
  </nav>
);
export default Navbar;
