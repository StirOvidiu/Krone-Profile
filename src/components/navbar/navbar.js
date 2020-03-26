import React from "react";
import { Route, Link } from "react-router-dom";
import "./navbar.css";

const Nav = () => (
  <div className="navbar">
    <div className="nav-logo">
      <h1>Logo</h1>
    </div>
    <div className="nav-list">
      <ul>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <li className="li-list">Acasă</li>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/desprenoi"
        >
          <li className="li-list">Despre Noi</li>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/contact">
          <li className="li-list">Contact</li>
        </Link>
      </ul>
    </div>
  </div>
);

export default Nav;
