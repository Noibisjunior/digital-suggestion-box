const express = require('express');
const router = express.Router();
const { submitSuggestion, getAllSuggestions } = require('../controllers/suggestionController');

router.post('/', submitSuggestion);
router.get('/', getAllSuggestions);

module.exports = router;
