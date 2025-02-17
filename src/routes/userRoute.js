const express = require('express');
const router = express.Router();
const {
    addTodo,
    getAllTodos,
    getTodoById,
} = require('../controllers/todos/todos.controllers');


router.post('/',addTodo)
router.get('/',getAllTodos);
router.get('/:id',getTodoById);


module.exports = router;
