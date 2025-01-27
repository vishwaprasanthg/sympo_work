const router = require("express").Router()
const Todo = require("../models/Todo");


router.get("/", async(req, res) => {
    const allTodo = Todo.find(); 
    res.render("index", {todo: allTodo})
})


module.exports = router;