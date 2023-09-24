import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../login/login.css";

import Input from "../login/components/input";
import Button from "../login/components/button";
import CustomLink from "../login/components/customLink";
import { Link } from "react-router-dom";
import { supabase } from "../../App";

const Register = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  async function handleSubmit(event) {
    event.preventDefault();

    const username = form.current.username.value;
    const password = form.current.password.value;
    const passwordConfirm = form.current.passwordConfirm.value;

    if (password !== passwordConfirm) {
      setErrorMsg("Passwords doesn't match");
      return;
    }

    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(username, password);

      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      } else {
        setErrorMsg(error.message);
      }
    } catch (error) {
      setErrorMsg(error.message);

      setLoading(false);

      setTimeout(() => {
        window.location.reload()
        setMsg("");
        setErrorMsg("");
      }, 3000);
      return;
    }

    setLoading(false);

    setTimeout(() => {
      window.location.reload()
      setMsg("");
      setErrorMsg("");
    }, 3000);
  }

  return (
    <>
      <div className="logo-cont">
        <Link to="/" className="logo">
          <h1>Gamor</h1>
        </Link>
      </div>
      <div className="content">
        <header>Signup</header>

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

          <Input
            divClassName="field space"
            spanClassName="pass"
            name="passwordConfirm"
            type="password"
            placeholder="Confirm password"
          />
          <br />
          <div>
            <h5>{errorMsg !== "" ? errorMsg : ""}</h5>
          </div>
          <Button className="submit-btn btn-login" text="REGISTER" />
          <br />
        </form>
        <CustomLink
          className="signup"
          to="/login"
          mainText="Have an account?"
          text="Sign In Now"
        />
      </div>
    </>
  );
};

export default Register;
