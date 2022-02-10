const { Router } = require('express');
const UserController = require('../controllers/user-controller');
const TaskController = require('../controllers/task-controller');
const authentication = require('../middlewares/authentication')
const API_ROUTES = require('./api/index')

const router = Router();

router.get(API_ROUTES.USER, UserController.getAllUser);
router.get(API_ROUTES.USER_BY_ID, UserController.getUserById);
router.post(API_ROUTES.REGISTER, UserController.addUser);
router.post(API_ROUTES.LOGIN, UserController.login);

router.use(authentication);
router.get(API_ROUTES.TASK, TaskController.getAllTask);
router.post(API_ROUTES.TASK, TaskController.addTask);


module.exports = router;

