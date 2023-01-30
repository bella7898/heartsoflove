import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";
import img from './assets/Hearts_1.png'

function Footer() {
  return (
    <footer>
      <div class="left">
      <img src={img} alt="Hearts Of Love Logo"></img>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/join">Join Us!</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/shop">Shop</Link>
      </div>
      <div>
      <p class="copyright">© Hearts of Love 2022</p>
      </div>
    </footer>
  );
}

export default Footer;