//dependencies
let mongoose = require("mongoose");
// getting our books model
let db = require("../models");

//connecting to our db that we named in our server file
mongoose.connect("mongodb://localhost/artistdefamme", {
  useNewUrlParser: true,
  useFindAndModify: false
});
//seed variable to be sent
let userSeed = [
  {
    username: "killer",
    email: "killer@gmail.com",
    password: "cheese",
    avatarSRC: "https://www.holland.com/upload_mm/3/d/9/68950_fullimage_vangogh-portert-1360.jpg"
  },
  {
    username: "dancer",
    email: "dancer@gmail.com",
    password: "dancing",
    avatarSRC: "https://i.pinimg.com/originals/0d/0b/c4/0d0bc480cade30769a2d6c720b674110.gif"
  }
]

let itemSeed = [
  {
    name: "Van gogh's ear",
    description: "Freshly sliced...",
    icon: "fas fa-deaf left",
    cost: 42,
    src: "./images/ear.jpg"
  },
  {
    name: "Monet's Water lilly",
    description: "Breathtaking",
    icon: "fas fa-paint-brush left",
    cost: 100,
    src: "./images/lilies.jpg"
  },
  {
    name: "Cheese",
    description: "Nutritious & Delicious!",
    icon: "fas fas fa-cheese left",
    cost: 2,
    src: "./images/cheese.jpg"
  },
  {
    name: "Wine",
    description: "Treat Yo Self!",
    icon: "fas fa-wine-bottle left",
    cost: 5,
    src: "./images/wine.jpg"
  },
  {
    name: "Paints",
    description: "You might need these...",
    icon: "fas fa-paint-brush left",
    cost: 1,
    src: "./images/paints.jpg"
  },
  {
    name: "Poker Chips",
    description: "Try your luck!",
    icon: "fas fas fa-coins left",
    cost: 5,
    src: "./images/chips.png"
  }
]

let paintingSeed = [
  {
    paintingName: "my room",
    likes: 0,
    value: 0,
    src: "https://cdn.shopify.com/s/files/1/0932/1794/files/vincent-s-bedroom-in-arles-1889-1_large.jpg?539810606191337315"

  },
  {
    paintingName: "waterlillies",
    likes: 0,
    value: 0,
    src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-water-lily-pond-by-monet-claude-monet.jpg"

  }
]
//adding our seed variable to our books collection/library db
//  db.User.create(userSeed)
//   .then(data => {
//   console.log("eggs",data)
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// db.Item.create(itemSeed)
//   .then(data => {
//     console.log("eggs", data)
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.Painting.create(paintingSeed)
.then(data => {
console.log("eggs",data)
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
>>>>>>> master
