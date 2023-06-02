const signupRouter = require('express').Router();
const { createUser } = require('../controllers/signup');
const { validateRegistration } = require('../middlewares/validation');

signupRouter.post('/', validateRegistration, createUser);

module.exports = signupRouter;
