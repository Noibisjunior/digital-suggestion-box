const pool = require('../DB');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.registerAdmin = async (req, res) => {
  const { username, password, registration_key } = req.body;

  if (registration_key !== process.env.ADMIN_REGISTRATION_KEY) {
    return res.status(403).json({ error: 'Unauthorized: Invalid registration key' });
  }

  try {
    const hashed = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (username, password, is_admin) VALUES ($1, $2, true) RETURNING *`,
      [username, hashed]
    );

    res.status(201).json({ message: 'Admin registered successfully', user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
};


exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(`SELECT * FROM users WHERE username = $1`, [username]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign(
      { userId: user.id, is_admin: user.is_admin },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

res.cookie('token', token, {
  httpOnly: true,
  secure: false,             
  sameSite: 'lax',       
  maxAge: 2 * 60 * 60 * 1000
});

res.json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
};
