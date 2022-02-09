const { Router } = require('express');
const UserController = require('../controllers/user-controller');
const API_ROUTES = require('./api/index')

const router = Router();

router.get(API_ROUTES.USER, UserController.getAllUser);
router.get(API_ROUTES.USER_BY_ID, UserController.getUserById);
router.post(API_ROUTES.REGISTER, UserController.addUser);
router.post(API_ROUTES.LOGIN, UserController.login);


module.exports = router;

