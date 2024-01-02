import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsEditing(false);
    }
  };

  return (
    <div className="navbar">
      <div className="menu">
        <img
          className="menu_image"
          src="https://cdn1.iconfinder.com/data/icons/button-glyph/64/button_2-31-512.png"
          alt="Menu Image"
        />
        <span>Menu</span>
      </div>
      <img
        className="gamestop_image"
        src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw11250911/images/svg-icons/logo-gs-mono.svg"
        alt="GameStop Image"
      />
      <input
        type="search"
        name="search_b"
        autoComplete="off"
        className="search-bar"
        placeholder={isEditing ? "" : "Search games, consoles & more"}
        onClick={handleClick}
        onBlur={handleBlur}
      ></input>
    </div>
  );
}

export default Nav;
