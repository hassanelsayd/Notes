import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link style={{ textDecoration: "none" }} to="/" className="brand-name">
          Notes <span></span>
        </Link>
        <div className="options">
          <Link to="/done">
            <button>
              {" "}
              <i className="fa-solid fa-check"></i>
            </button>
          </Link>
          <Link to="/fav">
            <button>
              {" "}
              <i className="fa-solid fa-heart"></i>
            </button>
          </Link>

          <Link to="/create-note">
            <button>Create Note</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
