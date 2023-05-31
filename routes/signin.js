const signinRouter = require('express').Router();
const { login } = require('../controllers/signin');
const { validateLogin } = require('../middlewares/validation');

signinRouter.post('/', validateLogin, login);

module.exports = signinRouter;
