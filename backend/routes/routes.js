const { Router } = require('express');
const authController = require('../controllers/authController');
const orderController = require('../controllers/orderController');
const authmiddleware  = require('../middleware/authmiddleware');

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.post('/addorder', authmiddleware.requireAuth, orderController.addOrder);
router.get('/getorders', authmiddleware.requireAuth, orderController.getOrders);


module.exports = router;