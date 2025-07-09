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

// Update suggestion status and comment (Admin only)
exports.updateSuggestionStatus = async (req, res) => {
  const { id } = req.params;
  const { status, admin_comment } = req.body;

  if (!req.user || !req.user.is_admin) {
    return res.status(403).json({ error: 'Admin access only' });
  }

  try {
    const result = await pool.query(
      `UPDATE suggestions
       SET status = $1, admin_comment = $2
       WHERE id = $3
       RETURNING *`,
      [status, admin_comment || null, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Suggestion not found' });
    }

    res.status(200).json({
      message: 'Suggestion status updated successfully',
      suggestion: result.rows[0]
    });
  } catch (err) {
    console.error('Error updating suggestion status:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getFilteredSuggestions = async (req, res) => {
  if (!req.user || !req.user.is_admin) {
    return res.status(403).json({ error: 'Admin access only' });
  }

  const { status, category, start_date, end_date } = req.query;

  let baseQuery = 'SELECT * FROM suggestions WHERE 1=1';
  const values = [];
  let i = 1;

  if (status) {
    baseQuery += ` AND status = $${i++}`;
    values.push(status);
  }

  if (category) {
    baseQuery += ` AND category = $${i++}`;
    values.push(category);
  }

  if (start_date && end_date) {
    baseQuery += ` AND submitted_at BETWEEN $${i++} AND $${i++}`;
    values.push(start_date, end_date);
  }

  baseQuery += ' ORDER BY submitted_at DESC';

  try {
    const result = await pool.query(baseQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error filtering suggestions:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
