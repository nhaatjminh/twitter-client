import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { getGoogleAuth } from "../../utils/googleAuth";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

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
      <h2>HLS Streaming</h2>
      <MediaPlayer
        title="Sprite Fight"
        src="http://localhost:5000/static/video-hls/3afbe6ce-9eb6-4571-a058-485a8a9f89b5/master.m3u8"
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
      <video controls width={600}>
        <source
          src="http://localhost:5000/static/video-stream/6d6928106463d7a227383ef00.mp4"
          type="video/mp4"
        />
      </video>
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
