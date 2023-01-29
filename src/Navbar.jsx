import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";
import logo from "./assets/Hearts_2.png"

function Navbar() {
  return (
    <div class="nav">
        <a>
          <Link to="/"><img src={logo}></img></Link>
        </a>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/join">Join Us!</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link>Contact Us</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;