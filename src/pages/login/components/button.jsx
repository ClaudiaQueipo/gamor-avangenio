import React from "react";

const Button = (props) => (
  <button
    className={props.className}
    onClick={props.onClick}
    onSubmit={props.onSubmit}
  >
    {props.iconClassName ? (
      <img className={props.iconClassName} src={props.icon} alt="icon" />
    ) : null}
    <span className="text-button-in">{props.text}</span>
  </button>
);

export default Button;
