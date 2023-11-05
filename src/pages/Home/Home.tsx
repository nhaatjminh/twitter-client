import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { getGoogleAuth } from "../../utils/googleAuth";

const url = getGoogleAuth();

export default function Home() {
  const isAuthen = !!localStorage.getItem("access_token");
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        {isAuthen ? (
          <>
          <span>Hello my friend, you are logged in.</span>
          <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to={url}>Login with google</Link>
        )}
      </p>
    </>
  );
}
