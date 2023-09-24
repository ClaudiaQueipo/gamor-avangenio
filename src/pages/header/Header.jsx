import Switch from "./switch/Switch";
import './header.css'
import Nav from "./nav/Nav";
import Logo from "./logo/Logo";
import Cont from "./cont/Cont";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuBtn from "./menuBtn/MenuBtn";


function Header({ onChangeTheme }){
    const [themeText, setThemeText] = useState("Tema claro");

  const handleThemeChange = (isDarkTheme) => {
    if (isDarkTheme) {
      onChangeTheme(isDarkTheme);
    } else {
      onChangeTheme(isDarkTheme);
    }
  };
    return(
        <header>
            <div className="header-container">
                <Nav></Nav>
                <Logo></Logo>
                <Cont onChangeTheme={handleThemeChange}></Cont>
                <MenuBtn></MenuBtn>
            </div>
        </header>
    );
}

export default Header;