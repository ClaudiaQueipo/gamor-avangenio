import "./App.css";
import Header from "./pages/header/Header";
import Login from "./pages/login/login";
import Presentation from "./pages/presentation/Presentation";
import Trending from "./pages/TrendingCategories/Trending";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Register from "./pages/register/Register";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [themeText, setThemeText] = useState("Tema claro");

  const handleThemeChange = (isDarkTheme) => {
    if (isDarkTheme) {
      setThemeText("Tema oscuro");
      onChangeTheme(isDarkTheme);
    } else {
      setThemeText("Tema claro");
      onChangeTheme(isDarkTheme);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header onChangeTheme={handleThemeChange}></Header>
                <Presentation themeText={themeText}></Presentation>
                <Trending></Trending>
              </>
            }
          ></Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export { App, supabase };
