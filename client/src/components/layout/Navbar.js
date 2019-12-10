import React from "react";
import { Link } from "react-router-dom";

export default ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className={icon || "fas fa-id-card-alt"} />{" "}
          {title || "Contact Keeper"}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
