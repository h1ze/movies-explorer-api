const signoutRouter = require('express').Router();
const { signoutUser } = require('../controllers/signout');

signoutRouter.post('/', signoutUser);

module.exports = signoutRouter;
