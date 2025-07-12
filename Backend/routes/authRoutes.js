const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/register', registerAdmin); 
router.post('/login', loginAdmin);       

router.get('/check', verifyToken, (req, res) => {
  res.json({ is_admin: req.user?.is_admin });
});

module.exports = router;
