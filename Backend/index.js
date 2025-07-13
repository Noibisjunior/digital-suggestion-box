const app = require('./app');
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`
    Connected to PostgreSQL database, 
    Server running on http://localhost:${PORT}`);
});
