const express = require('express');
const router = express.Router();
const { submitSuggestion, 
        getAllSuggestions, 
        updateSuggestionStatus,
        getFilteredSuggestions } = require('../controllers/suggestionController');
const verifyToken = require('../middleware/authMiddleware');



router.post('/', submitSuggestion);
router.get('/', getAllSuggestions);
router.get('/admin/filter', verifyToken, getFilteredSuggestions);

router.put('/:id/status', verifyToken, updateSuggestionStatus);
module.exports = router;
