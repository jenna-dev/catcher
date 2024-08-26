import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GameOver = ({ score }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Please enter your username");
      return;
    }

    try {
      await axios.post("http://localhost:5001/api/v1/leaderboard", {
        username,
        score,
      });
      setIsSubmitted(true);
      navigate("/leaderboard");
    } catch (err) {
      setError("Error submitting score. Please try again.");
      console.error(err);
    }
  };

  return isSubmitted ? (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2 className="text-success">Submitting your score...</h2>
      </div>
    </div>
  ) : (
    <div className="container vh-100 my-5">
      <div className="card text-center shadow-lg">
        <div className="card-header bg-danger text-white">
          <h1 className="card-title">Game Over!</h1>
        </div>
        <div className="card-body">
          <p className="card-text">
            Final Score: <strong className="display-4">{score}</strong>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">
                Enter your username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary btn-lg">
              Submit Score
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
