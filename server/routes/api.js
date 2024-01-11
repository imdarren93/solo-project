const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/', apiController.getData, (req, res) => {
    
    return res.status(200)
});

module.exports = router;