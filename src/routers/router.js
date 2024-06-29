const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const postController = require('../controllers/PostController');

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.readUser);
router.patch('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users', userController.getAllUsers);
// Post routes
router.post('/posts', postController.createPost);
router.get('/posts/:id', postController.readPost);
router.patch('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);
router.get('/posts', postController.createPost);
module.exports = router;
