const pool = require('./DB');

(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Connected successfully at:', result.rows[0].now);
    process.exit(0);
  } catch (err) {
    console.error('Connection failed:', err.message);
    process.exit(1);
  }
})();
