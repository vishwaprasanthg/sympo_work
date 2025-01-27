const express = require("express");
const mongoose = require("mongoose");

const app = express();


mongoose.connection('mongodb+srv://crazykillerr2006:SzBsgjeZQuTBTvoh@cluster0.vgkww.mongodb.net/books-collection?retryWrites=true&w=majority&appName=Cluster0', {
  useNewParser: true, 
  useUnifiedTopology: true,
});


app.use(express.urlencoded({ extend: true })); 
app.use(express.static("public"));
app.set("view_engine", "ejs"); 


app.use(require("./routes/index"));
app.use(require("./routes/todo_file")); 


app.listen(3000, () => console.log("Server started listening on port: 3000")); 


console.log(undeclaredVariable); 
