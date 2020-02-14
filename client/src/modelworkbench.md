// THIS FILE IS FOR mongoDB MODEL SCRATCHWORK
// COPY THESE OVER TO REAL FILES ONCE WE KNOW WHAT WE'RE DOING

// PAINTING
// the paintings table will have all painting objects of all users in the game
{
    _id: mongodbid,
    paintingName: "",
    painter: <foreignKeyToUserObj>,
    likes: 0,
    value: (likes times something for sale value),
    src: (link or info about the images location),
    timestamp: (date & time painting created),
    galleryPostTime: (date & time painting added to the gallery),
    endShowTime: (date & time painting to be removed from gallery, sold, and user obj updated),
    galleryShowing: Boolean, turns to true when entered, can gain likes, turns to false once showing time is up
}

// USER
{
    _id: mongodbid,
    username: "",
    inventory: [
        this will hold all consumable and collectable items a user has. each item will be an object with a name, a type property, and an ammount
    ],
    portfolio: [
        this will hold all of the ids of paintings created by this user. All of a users paintings can be seen here by looking at the paintings table
    ],
    hungry: boolean,
    sleepy: boolean,
    coins: integer, starts at 0,
    avatar: img or link to avatar image
}

// GALLERY
{
    instead of its own table, may be better to just look at the paintings document and return only with the "showing" value of true, instead of making a separate document
}

