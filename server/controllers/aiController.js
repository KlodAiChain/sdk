const { processAI } = require('../services/aiService');

exports.analyzeData = async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'No data provided' });
    }

    const result = await processAI(data);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

