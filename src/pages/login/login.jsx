import React, { useRef, useEffect, useState } from "react";
import "./login.css";
import "../presentation/platform/chosePlatform/Search/search.css";

import googleIcon from "../../assets/google-logo.webp";
import { supabase } from "../../App";
import { Link, useNavigate } from "react-router-dom";

import Input from "./components/input";
import Button from "./components/button";
import CustomLink from "./components/customLink";

const Login = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const username = form.current.username.value;
    const password = form.current.password.value;

    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });

      if (error && !data) {
        setErrorMsg(error.message);
      }
    } catch (error) {
      setErrorMsg(error.message);

      setLoading(false);

      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }

    setLoading(false);

    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
    navigate('/')
  }

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <>
      <div className="logo-cont">
        <Link to="/" className="logo">
          <h1>Gamor</h1>
        </Link>
      </div>
      <div className="content">
        <header>Sign In</header>

        <form ref={form} onSubmit={handleSubmit}>
          <Input
            divClassName="field"
            spanClassName="user"
            name="username"
            type="text"
            placeholder="Username or Email"
          />

          <Input
            divClassName="field space"
            spanClassName="pass"
            name="password"
            type="password"
            placeholder="Password"
          />
          <br />
          <Button
            className="submit-btn btn-login"
            // onSubmit={handleSubmit}
            text="LOGIN"
          />
          <br />
          <div>
            <h5>{errorMsg !== "" ? errorMsg : ""}</h5>
          </div>
          <br />
          <Button
            className="submit-btn btn-login"
            iconClassName="icon"
            onClick={signInWithGoogle}
            icon={googleIcon}
            text="Sign in with google"
          />
        </form>

        <CustomLink className="signup" href="#" text="Forgot Password?" />
        <CustomLink
          className="signup"
          to="/register"
          mainText="Don't have account?"
          text="Signup Now"
        />
      </div>
    </>
  );
};

export default Login;
