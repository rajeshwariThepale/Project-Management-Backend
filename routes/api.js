const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');
const ProjectController = require('../controller/projectController');
const authController = require('../middleware/auth');

//user login
router.post('/register', UserController.registerUser);
router.post('/login', authController,UserController.userLogin);

//project routes

router.post('/projects', ProjectController.addProject);
router.get('/projects', ProjectController.getProjects);
// router.get('/projects/:id', ProjectController.getProjectById);
router.put('/projects/:id', ProjectController.updateProjectStatus);
router.delete('/projects/:id', ProjectController.deleteProjectById);

module.exports = router;