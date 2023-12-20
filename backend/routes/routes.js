const { Router } = require('express');
const authController = require('../controllers/authController');
const orderController = require('../controllers/orderController');
const authMiddleware  = require('../middleware/authMiddleware');

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.post('/addorder', authMiddleware.requireAuth, orderController.addOrder);
router.get('/getorders', authMiddleware.requireAuth, orderController.getOrders);


module.exports = router;