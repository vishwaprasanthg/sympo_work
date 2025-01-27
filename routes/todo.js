const router = require("express").Router();
const Todo = require("../models/Todo");


router
  .post("/add/todo", (req, res) => {
    const { task } = req.body; 
    const newTodo = new Todo({ todo: task }); 

    
    newTodo
      .save()
      .then(() => {
        console.log("Successfully added todo!"); 
        res.redirect("/todos"); 
      })
      .catch((error) => console.error("Error saving todo:", error)); 
  })

  .get("/delete/todo/:id", (req, res) => {
    const { id } = req.params; 
    Todo.deleteOne({ _id: id }) 
      .then(() => {
        console.log("Deleted todo Successfully!");
        res.redirect("/todos"); 
      })
      .catch((error) => console.error("Error deleting todo:", error)); 
  });

module.exports = router;
