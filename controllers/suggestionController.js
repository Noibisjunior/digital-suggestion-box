const pool = require('../DB');

exports.submitSuggestion = async (req, res) => {
  const { title, description, category, is_anonymous, user_id } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO suggestions (title, description, category, is_anonymous, user_id)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, description, category, is_anonymous ?? true, user_id || null]
    );

    res.status(201).json({ message: 'Suggestion submitted', suggestion: result.rows[0] });
  } catch (error) {
    console.error('Error submitting suggestion:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllSuggestions = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM suggestions ORDER BY submitted_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
