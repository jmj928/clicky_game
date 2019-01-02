import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top  ">

    //       <span>Clicky Game</span>
    //       <span>Click an image to begin!</span>
    //       <span>Score: 0 | Top Score: 0</span>
      

    // </nav>
    <div className="nav">
    {props.children}
  </div>
  );
}

export default Navbar;
