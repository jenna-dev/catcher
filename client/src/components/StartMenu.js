import React from "react";
import { Link } from "react-router-dom";
import "./StartMenu.css";

const StartMenu = () => {
  return (
    <div className="start-menu d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="title mb-4">Welcome to the Catch Game!</h1>
      <div className="button-container d-flex flex-column gap-4">
        <Link to="/game" className="btn btn-primary btn-lg">
          Start Game
        </Link>
        <Link to="/leaderboard" className="btn btn-secondary btn-lg">
          Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default StartMenu;
