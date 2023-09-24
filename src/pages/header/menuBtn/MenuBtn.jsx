import "./menuBtn.css";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Switch from "../switch/Switch";
function MenuBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="menu">
      <div className="menu-container">
        <button
          className={`menu-button ${isOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
        {isOpen && (
          <div className="menu-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#Streams">Streams</a>
            </li>
            <li>
              <a href="#Party">Party</a>
            </li>
            <li>
              <a href="#Premium">Premium</a>
            </li>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuBtn;
