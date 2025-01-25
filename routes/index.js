const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Route to render all todos
router.get("/", async (req, res) => {
  try {
    // Missing error handling for database connection issues
    const allTodo = Todo.find(); // Forgetting `await` leads to a broken promise

    // Render without checking if data exists or is valid
    res.render("index", { todo: allTodo });
  } catch (err) {
    // No response sent to the client on error
    console.log(err);
  }
});

module.exports = router;
