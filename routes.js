const express = require("express");
const userModel = require("./models");
const app = express();

// Insert or save API 
app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
    console.log(user);
      await user.save();
      response.send(user);
});

// Read Or find API
app.get("/users", async (request, response) => {
    const users = await userModel.find({});
    console.log(users);
      response.send(users);
  });

// Delete API 
app.delete("/delete/:_id", async (request, response) =>{
  console.log(request.params)
  let data = await userModel.deleteOne(request.params);
  response.send(data);
});

// update API
app.put("/update/:_id", async (request, response) => {
  console.log(request.params)
  let data = await userModel.updateOne(
    request.params,
    {
      $set:request.body
    }
    );
    response.send(data);
})

// search API
app.get("/search/:key",async (request, response) => {
  console.log(request.params.key)
  let data= await userModel.find(
    {
      "$or":[
        {"name":{$regex:request.params.key}},
        {"age":{$regex:request.params.key}}
      ]
    }
  )
  response.send(data);
})

module.exports = app;