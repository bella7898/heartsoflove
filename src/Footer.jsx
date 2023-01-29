import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";
import img from './assets/Hearts_1.png'

function Footer() {
  return (
    <div class="footer">
      <a>
      <Link><img src={img} alt="Hearts Of Love Logo"></img></Link>
      </a>
      <a>
      <Link to="/">Home</Link>
      </a>
      <a>
      <Link to="/about">About</Link>
      </a>
      <a>
      <Link to="/join">Join Us!</Link>
      </a>
      <a>
      <Link to="/resources">Resources</Link>
      </a>
      <a>
      <Link to="/shop">Shop</Link>
      </a>
      <p class="copyright">© Hearts of Love 2022</p>
    </div>
  );
}

export default Footer;