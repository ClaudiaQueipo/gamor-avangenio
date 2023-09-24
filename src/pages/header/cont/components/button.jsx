import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <Link to={props.to}>{props.text}</Link>
    </button>
  );
};

export default Button;
