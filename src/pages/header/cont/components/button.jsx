import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      
      <a href={props.to}>{props.text}</a>
    </button>
  );
};

export default Button;
