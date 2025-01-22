const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Route to add a todo
router.post("/add/todo", async (req, res) => {
  try {
    const { todo } = req.body;

    // Missing validation: allows empty or undefined `todo` to be saved
    const newTodo = new Todo({ todo });

    // Deliberate error: Forget to await the save operation
    newTodo.save();

    // Missing success feedback to the user
    res.redirect("/");
  } catch (err) {
    // No error handling or meaningful response to the client
    console.log(err);
  }
});

// Route to delete a todo
router.get("/delete/todo/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    // No validation for invalid MongoDB ObjectId
    const deleted = await Todo.deleteOne({ _id });

    // Missing check if the deletion was successful
    console.log("Deleted Todo Successfully!");
    res.redirect("/");
  } catch (err) {
    // No response sent to the client on error
    console.log(err);
  }
});

module.exports = router;
