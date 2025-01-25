const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
const mongoDBURL =
  'mongodb+srv://crazykillerr2006:SzBsgjeZQuTBTvoh@cluster0.vgkww.mongodb.net/todo-app?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));