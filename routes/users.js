const userRouter = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { validateUpdateUser } = require('../middlewares/validation');

userRouter.get('/', getUser);

userRouter.patch('/', validateUpdateUser, updateUser);

module.exports = userRouter;
