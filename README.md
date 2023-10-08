# CRUD-application-mongoDB

# Step 1 - Installing Mongoose on a Node.js environment

$ npm install express mongoose --save

# Step 2 – Creating the connection

Create a new file index.js to start our Express.js server. Load mongoose and express by adding the following code to index.js.
Then connect to a local MongoDB instance using the mongoose.connect() function.

# Step 3 - To create a connection to MongoDB Atlas, follow the next steps.

- Open your Cluster tab in MongoDb Atlas and click CONNECT.
- Select Connect your application and choose Node.js for the driver.
- Copy the connection string. And paste into index.js File.

  Then, set the app to listen to port 3000.

# Step 4 – Creating the schema into models.js file.

  see the code on index.js file.

# Step 5 – Creating the CRUD operation endpoint into routes.js File.
  
  see the code on index.js file.
