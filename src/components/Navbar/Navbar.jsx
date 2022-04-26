import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Burger King.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <section className="flex flex-jc-sb navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navlinks close flex">
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
