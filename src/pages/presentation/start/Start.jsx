import "./start.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Circles from "./circles/Circles";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../../App";

function Start() {
  const [username, setUsername] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  function handleAuthStateChange(event, session) {
    if (event === "SIGNED_IN") {
      const { user } = session;
      setUsername(user.email.replace(/^(.*)@.*$/, "$1"));
      // navigate("/");
    }
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      handleAuthStateChange
    );
  }, [navigate]);

  return (
    <div className="start-container">
      <div className="start-title-div">
        <h2 className="start-title">start</h2>
        <span className="start-title">streaming</span>
        <h2 className="start-title">games</h2>
        <h2 className="start-title">differently</h2>
        <Circles></Circles>
      </div>
      <div className="start-p-div">
        <p className="start-text">
          gamor now has <span className="stream-party">stream party</span>{" "}
          platform
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 400"
        >
          <path
            d="M206.7264404296875,192.82510375976562C218.9835408528646,188.93870544433594,251.42001342773438,174.28997294108072,280.26904296875,169.5067138671875C309.1180725097656,164.72345479329428,347.83257548014325,164.57397969563803,379.82061767578125,164.12554931640625C411.80865987141925,163.67711893717447,441.85350545247394,166.0687484741211,472.1972961425781,166.81613159179688C502.5410868326823,167.56351470947266,546.9356842041016,168.31089528401694,561.8833618164062,168.60984802246094"
            fill="none"
            strokeWidth="25"
            stroke=""
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient
              id="SvgjsLinearGradient1001"
              gradientTransform="rotate(0, 0.5, 0.5)"
            >
              <stop offset="0"></stop>
              <stop offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="start-btns">
        {username == null ? (
          <div>
            <button className="start-create-account">
              <a href="/register">Create Account</a>
            </button>
            <button className="sign-in">
              <Link to="/login">Sign In</Link>
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Start;
