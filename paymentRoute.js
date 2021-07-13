const express = require('express');
const {donate, paymentCallBack, getPayment} = require('./paymentControler');
const router = express.Router();

router.get('/donate', donate);
router.post('/payment/callback', paymentCallBack);
router.get('/payments/:paymentId', getPayment);


module.exports = router;