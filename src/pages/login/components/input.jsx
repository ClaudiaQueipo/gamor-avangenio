import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const styles = {
    paddingTop : "10px",
    paddingBottom : "10px",
  }

  return (
    <div className="input-login-container">
      <div
        className={`${props.divClassName} ${isFocused ? "field-focused" : ""}`}
      >
        
        <input
          name={props.name}
          type={props.type}
          required
          placeholder={props.placeholder}
          defaultValue=""
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles}
        />
        <div className="input-icon">
            {props.spanClassName === "user"? <FaUser></FaUser>:<FaLock></FaLock>}
        </div>
        
      </div>
    </div>
  );
};

export default Input;
