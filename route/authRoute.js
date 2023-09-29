const express = require('express');
const { registerUser, loginUser, getAllUsers, getUserById, deleteUserById, updateUserById } = require('../controller/userController');
const {authMiddleware } = require('../middleware/authmiddleware');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get-all-users',authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = {router};