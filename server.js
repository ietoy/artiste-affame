const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



//adding mongoose
const mongoose = require("mongoose");
//connecting goose, naming our database /library is our db name
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artistdefamme", { useNewUrlParser: true });
//creating db variable
var db = mongoose.connection;
//=>seeders gets run manually with node index.js in the seeder directory
//=>move to model folder to follow db track







// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}





// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("DB created and connected succesfully")
  });
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
