import React, { useState } from 'react';
import './switch.css'

function Switch({ onChangeTheme }){
    const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (isDarkTheme) {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      onChangeTheme(!isDarkTheme);
      
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      onChangeTheme(!isDarkTheme);
    }
    
  };
    return(
        <input
            type="checkbox"
            className="theme-checkbox"
            onChange={toggleTheme}
            checked={isDarkTheme}
        />
        
    );
}

export default Switch;
