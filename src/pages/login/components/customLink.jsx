import React from "react";
import { Link } from "react-router-dom";


const CustomLink = (props) => (
  <div className={props.className}>
    {props.mainText}{" "}
    <Link to={props.to}>{props.text}</Link>
  </div>
);

export default CustomLink;
