const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;


//cloudinary
var cloudinary = require('cloudinary').v2;

var api_secret = process.env.CLOUDAPISECRET;
var api_key = process.env.CLOUDAPIKEY;
var cloud_name = process.env.CLOUDNAME;

console.log("\n\n\n\n", api_secret, api_key, cloud_name)

cloudinary.config({ 
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret
});



// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

//connecting goose, naming our database /library is our db name
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artistdefamme", { useNewUrlParser: true });
//creating db variable
var db = mongoose.connection;
//=>seeders gets run manually with node index.js in the seeder directory
//=>move to model folder to follow db track

// Start the API server
app.listen(PORT, function () {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("DB created and connected succesfully")
  });
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

