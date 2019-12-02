import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="btn">
            <div className="btn-container">Home</div>
          </Link>
        </li>

        <li>
          <Link to="/group-view" className="btn">
            <div className="btn-container">Create Group</div>
          </Link>
        </li>

        <li>
          <Link to="/free-canvas" className="btn">
            <div className="btn-container">Free Doodle</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
