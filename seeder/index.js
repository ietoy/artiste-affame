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
    name: "Van Gogh's Ear",
    description: "Freshly sliced...",
    icon: "fas fa-deaf left",
    cost: 7,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582649638/Inventory/vincent-van-goghs-ear-prints_czxnun.jpg"
  },
  // {
  //   name: "Monet's Water lilly",
  //   description: "Breathtaking",
  //   icon: "fas fa-paint-brush left",
  //   cost: 100,
  //   src: "./images/lilies.jpg"
  // },
  {
    name: "Hotel Room",
    description: "Nutritious & Delicious!",
    icon: "fas fas fa-cheese left",
    cost: 20,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586435/Inventory/hotelroom_bskdcs.jpg"
  },
  {
    name: "Beer",
    description: "A round, for sharing or indulging",
    icon: "fas fa-wine-bottle left",
    cost: 5,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586366/Inventory/beer_vevway.jpg"
  },
  {
    name: "A cigarette",
    description: "Ease the creativity block",
    icon: "fas fa-paint-brush left",
    cost: 3,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586398/Inventory/smoke_v57is1.jpg"
  },
  {
    name: "Circus Tickets",
    description: "The circus is in town!",
    icon: "fas fas fa-coins left",
    cost: 20,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586374/Inventory/circustickets_ij3nqz.jpg"
  },
  {
    name: "Box of Chocolates",
    description: "A gift, or a treat!",
    icon: "fas fa-wine-bottle left",
    cost: 5,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586373/Inventory/heart_rgfddr.jpg"
  },
  {
    name: "A Car",
    description: "A classic VW bug",
    icon: "fas fa-wine-bottle left",
    cost: 5,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586372/Inventory/car_rd0jyx.jpg"
  },
  {
    name: "Absinthe",
    description: "Hang with the green fairy!",
    icon: "fas fa-wine-bottle left",
    cost: 5,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586371/Inventory/absinthe_ydp2v3.jpg"
  },
  {
    name: "Penthouse",
    description: "A penthouse with an art studio inside",
    icon: "fas fa-wine-bottle left",
    cost: 500,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586368/Inventory/gothamtower_mkrkfu.jpg"
  },
  {
    name: "Chair",
    description: "A rickety old chair from the Goodwill",
    icon: "fas fa-wine-bottle left",
    cost: 5,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586366/Inventory/chair_lbo7fp.jpg"
  },
    {
    name: "Cat",
    description: "A feline friend",
    icon: "fas fa-wine-bottle left",
    cost: 10,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586360/Inventory/cat_gkdcz0.jpg"
  },{
    name: "Piano Lessons",
    description: "Diversify your portfolio!",
    icon: "fas fa-wine-bottle left",
    cost: 10,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586360/Inventory/renoir_piano_lesson_ketk72.jpg"
  },
  {
    name: "Therapist",
    description: "For the crippling depression!",
    icon: "fas fa-wine-bottle left",
    cost: 20,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586354/Inventory/professional_opininon_i979wf.jpg"
  }, 
  {
    name: "Tickets to the theatre",
    description: "Midsummer's Night Dream at your local cinema",
    icon: "fas fa-wine-bottle left",
    cost: 10,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586354/Inventory/theatre_n6outd.jpg"
  },
   {
    name: "Chicken",
    description: "Winner winner chicken dinner",
    icon: "fas fa-wine-bottle left",
    cost: 5,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586354/Inventory/chickendinner_lhmnuw.jpg"
  },   
  {
    name: "Groceries",
    description: "Local and organic",
    icon: "fas fa-wine-bottle left",
    cost: 10,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586354/Inventory/groceries_rc6juc.jpg"
  },
  {
    name: "Fruits",
    description: "For painting or for snacking!",
    icon: "fas fa-wine-bottle left",
    cost: 10,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586401/Inventory/apples-pears-lemons-and-grapes-1887.jpg_Large_awednt.jpg"
  },
  {
    name: "Tithe",
    description: "Pray for inspiration",
    icon: "fas fa-wine-bottle left",
    cost: 3,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586355/Inventory/first-communion_r1gjfw.jpg"
  },
  {
    name: "Retire",
    description: "Retire the brush",
    icon: "fas fa-wine-bottle left",
    cost: 1000,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586354/Inventory/vacation_home_kyn5gi.jpg"
  },
  {
    name: "Poppies",
    description: "A gift or inspiration",
    icon: "fas fa-wine-bottle left",
    cost: 2,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586405/Inventory/229_Vase_with_Poppies_Cornflowers_Peonies_and_Chrysanthemums_pg1hmc.jpg"
  },
  {
    name: "Animal Art",
    description: "A gift or inspiration",
    icon: "fas fa-wine-bottle left",
    cost: 15,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586371/Inventory/georgia_mitdrm.jpg"
  },{
    name: "Tribute to Georgia",
    description: "Inspiration",
    icon: "fas fa-wine-bottle left",
    cost: 10,
    src: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582586373/Inventory/GeorgiaOkeeffe_RedCanna_1924_cb1zpt.jpg"
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

db.Item.create(itemSeed)
  .then(data => {
    console.log("eggs", data)
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// db.Painting.create(paintingSeed)
// .then(data => {
// console.log("eggs",data)
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });

