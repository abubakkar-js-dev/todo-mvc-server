const Todo = require('../../models/todos/todo.models');

const todoController = {
    getAllTodos: async(req,res)=>{
        try{
            const todos = await Todo.find();
        res.send(todos);
        }catch(err){
            res.status(500).send({error: err.message});
        }
    },
    getTodoById: async(req,res)=>{
        try{
            const id = req.params.id;
            // const filter = {_id:id};
            const todo = await Todo.findById(id);
            res.send(todo);
        }catch(err){
            res.status(500).send({error: err.message});
        }
    },
    addTodo: async(req,res)=>{
        try{
            const newTodo = new Todo(req.body);
            await newTodo.save();
            res.status(201).send({success: true});
        }catch(err){
            res.status(500).send({error: err.message});
        }
    }
}


module.exports = todoController;