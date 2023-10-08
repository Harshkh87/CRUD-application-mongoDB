const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
// const userModel = require("./models")

const app = express();

app.use(express.json());
app.use(Router);

// connect mongodb 
mongoose.connect('mongodb+srv://firstname:lastname@cluster0.dsaf313.mongodb.net/harsh?retryWrites=true&w=majority'
//   {
//     useNewUrlParser: true,  
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
);

// check the connection 
const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});

