const Score = require("../models/Leaderboard");

exports.getTopScores = async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(100);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addScore = async (req, res) => {
  console.log(req.body);

  const { username, score } = req.body;
  const newScore = new Score({ username, score });
  console.log(newScore);

  try {
    await newScore.save();
    res.status(201).json(newScore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
