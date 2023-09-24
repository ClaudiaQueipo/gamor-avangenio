import "./cont.css";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Switch from "../switch/Switch";
import Button from "./components/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../App";

function Cont({ onChangeTheme }) {
  const [themeText, setThemeText] = useState("Tema claro");
  const [username, setUsername] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  function handleAuthStateChange(event, session) {
    console.log(event);
    if (session) {
      const { user } = session;
      setUsername(user.email.replace(/^(.*)@.*$/, "$1"));
    }
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      handleAuthStateChange
    );
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      setUsername(null);
      return;
    }
  };

  const handleThemeChange = (isDarkTheme) => {
    onChangeTheme(isDarkTheme);
  };

  return (
    <div className="cont-container">
      {username !== null ? (
        <div className="div-btn-cont">
          <a className="sign-in">
            <b>{username}</b>
          </a>
          <Button
            onClick={handleLogout}
            className="create-account"
            text="Log out"
          ></Button>
        </div>
      ) : (
        <div className="div-btn-cont">
          <Button className="sign-in" to="/login" text="Sign In" />
          <Button
            className="create-account"
            to="/register"
            text="Create account"
          />
        </div>
      )}

      <Switch onChangeTheme={handleThemeChange} />
    </div>
  );
}

export default Cont;
