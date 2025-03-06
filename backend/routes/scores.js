const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

// Save quiz score
router.post('/save', async (req, res) => {
  try {
    console.log('Received score save request:', req.body);
    const { unit, subUnit, score, totalQuestions, username } = req.body;
    
    const newScore = new Score({
      username: username || 'Guest', // Use provided username or 'Guest' as default
      unit,
      subUnit,
      score,
      totalQuestions
    });

    console.log('Attempting to save score:', newScore);
    await newScore.save();
    console.log('Score saved successfully');
    res.status(201).json({ message: 'Score saved successfully', score: newScore });
  } catch (error) {
    console.error('Detailed error saving score:', error);
    res.status(500).json({ message: 'Error saving score', error: error.message });
  }
});

// Get user's scores
router.get('/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    console.log('Fetching scores for username:', username);
    const scores = await Score.find({ username });
    console.log('Found scores:', scores);
    res.json(scores);
  } catch (error) {
    console.error('Error fetching scores:', error);
    res.status(500).json({ message: 'Error fetching scores', error: error.message });
  }
});

module.exports = router; 