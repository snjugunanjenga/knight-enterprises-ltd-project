const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const paymentController = require('../controllers/paymentController');

router.post('/mpesa', auth, paymentController.initiatePayment);

module.exports = router;