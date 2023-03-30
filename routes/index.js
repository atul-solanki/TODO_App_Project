const express = require('express'); //import express
const router = express.Router(); //import router
const toDoController = require('../controllers/to_do_controller'); //import controller

console.log('router is loaded');

//route for home page
router.get('/', toDoController.home);

// route to add new item to list
router.post('/new-task',toDoController.addTodo);

// route to delete item from list
router.post('/delete_task',toDoController.deleteTodo)

module.exports = router;