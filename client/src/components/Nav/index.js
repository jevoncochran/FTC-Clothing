import React, { useState } from "react";
import "./Nav.scss";
import ftcLogoBlack from "../../assets/images/nav/ftc-logo-black.png";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Nav = (props) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="nav">
      <div className="nav-logo-div">
        <NavLink to="/">
          <img
            className="nav-logo"
            src={ftcLogoBlack}
            alt="For the Culture Clothing logo"
          />
        </NavLink>
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
        <div
          className="nav-actions-search-div"
          style={{ border: searchActive ? "1px solid black" : "none" }}
        >
          <div className="nav-action-icon">
            <IoCloseSharp
              style={{
                borderRight: searchActive ? "1px solid black" : "none",
                height: "100%",
                display: searchActive ? "block" : "none",
              }}
              onClick={() => setSearchActive(false)}
            />
          </div>
          <input
            className="nav-actions-search-input"
            type="text"
            name="search_query"
            placeholder="Enter query here"
            style={{ display: searchActive ? "block" : "none" }}
          />
          <div
            className="nav-action-icon"
            style={{
              //   border: "1px dashed black",
              //   width: "80%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            onClick={() => setSearchActive(true)}
          >
            <AiOutlineSearch
              style={{
                // border: "1px dashed black",
                height: "100%",
                borderLeft: searchActive ? "1px solid black" : "none",
              }}
            />
          </div>
        </div>

        <div className="nav-action-icon">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Nav;
