import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";

import logo from "./assets/Hearts_2.png"

function Navbar() {
  return (
    <header>
      <div class="left">
          <img src={logo}></img>
          <p>Hearts Of Love</p>
      </div>
      <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/join">Join Us</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/shop">Shop</Link>
          <Link>Contact Us</Link>
      </div>
    </header>
  );
}

export default Navbar;