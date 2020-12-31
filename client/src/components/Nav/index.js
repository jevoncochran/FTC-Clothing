import React from "react";
import "./Nav.scss";
import ftcLogoBlack from "../../assets/images/nav/ftc-logo-black.png";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-logo-div">
        <img
          className="nav-logo"
          src={ftcLogoBlack}
          alt="For the Culture Clothing logo"
        />
      </div>
      <div className="nav-pages-div">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/shop">
          Shop
        </NavLink>
        <NavLink className="nav-link" to="/designers">
          Designers
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="nav-actions-div">
        <div className="nav-action-icon">
          <AiOutlineShoppingCart />
        </div>
        <div className="nav-action-icon">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Nav;
