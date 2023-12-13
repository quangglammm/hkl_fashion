const express = require('express');
const orderController = require('../app/controllers/orderController.js');
const router = express.Router();

router.post('/create', orderController.StoreOrder);
router.get('/:id/order-detail', orderController.ShowOderDetailByOrder);
router.get('/order-detail/:id', orderController.GetOrderDetail);
router.post('/order-detail', orderController.StoreOrderDetail);


router.get('/discount', orderController.ShowDiscount);
module.exports = router;
