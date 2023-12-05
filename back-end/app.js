// import and instantiate express
const express = require("express"); // CommonJS import style!
const cors = require('cors');
const path = require("path");
const axios = require("axios");
const app = express(); // instantiate an Express object
const { v4: uuidv4 } = require('uuid'); // Import UUID

const mongoose = require("mongoose")
const dotenv = require("dotenv");
const User = require("./models/User");
const Game = require("./models/Game");
const { match } = require("assert");
const Message = require("./models/message");
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL
console.log(MONGODB_URL)
const db = async () => {
  try {
    const con = await mongoose.connect(MONGODB_URL)
    console.log(`MONGODB connected: ${con.connection.host}`)
  } catch (error) {
    console.error (error)
  }
}

// we will put some server logic here later...
// export the express app we created to make it available to other modules


const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const cookieParser = require("cookie-parser") // middleware useful for parsing cookies in requests
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env

// the following are used for authentication with JSON Web Tokens
const jwt = require("jsonwebtoken")
const passport = require("passport")

// use this JWT strategy within passport for authentication handling
const jwtStrategy = require("./config/jwt-config.js") // import setup options for using JWT in passport
passport.use(jwtStrategy)

// tell express to use passport middleware
app.use(passport.initialize())


// mongoose models for MongoDB data manipulation


  
db()  
// app.use(cors());

app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data
app.use(morgan("dev", { skip: (req, res) => process.env.NODE_ENV === "test" })) // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request

app.use(cookieParser()) // useful middleware for dealing with cookies

// the following cors setup is important when working with cookies on your local machine
app.use(cors({ origin: process.env.FRONT_END_DOMAIN, credentials: true })) // allow incoming requests only from a "trusted" host

// to keep this file neat, we put the logic for the various routes into specialized routing files
const authenticationRoutes = require("./routes/authentication-routes.js")
const cookieRoutes = require("./routes/cookie-routes.js")
const protectedContentRoutes = require("./routes/protected-content-routes.js")

// use the specialized routing files

app.use("/auth", authenticationRoutes()) // all requests for /auth/* will be handled by the authenticationRoutes router
app.use("/cookie", cookieRoutes()) // all requests for /cookie/* will be handled by the cookieRoutes router
app.use("/protected", protectedContentRoutes()) // all requests for /protected/* will be handled by the protectedRoutes router




const getuser = () => {
  // create a new router that we can customize
  const router = express.Router();
  
  router.get('/', async function getuser(req, res, next){
    try {
      
      const oneuser = await User.findOne().exec();
      // check if user was found
      if (!oneuser) {
        console.error(`User not found.`);
        next();
      }
      else{
        console.log(oneuser)
        next();
      }
  }
  catch (err) {
    // check error
    console.error(`Error looking up user: ${err}`);
  
    next();
  }
  }
  ) 
  return router;
}




app.use('/', getuser())
app.get("/", (req, res) => {
    res.send("Hello!");
    
  getuser(req,res);
});
 


app.post('/auth/createaccount', async (req, res)=> {
  const {username, pw: password, location} = req.body;

  if (!username || !password || !location) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  //create the new user thats about to register 
  const newUser = new User({username, password, location})

  try {
    await newUser.save();
    res.status(200).json({ message: "Account created successfully!" });
  } catch (err) {
    console.error("Error creating account", err);
    return res.status(500).json({ message: "Error creating account" });
  }

  
})


app.get('/profile', async (req, res) => {
  // const theUser = await User.findOne({username: "yhunter"});
  const theUser = await User.findOne({_id: "65653a973fad11a425c9a76f"});

  console.log(theUser);
  res.json({
    img: theUser.profilePicture,
    name: theUser.username,
    location: theUser.location,
    bio: theUser.bio,
    comments: theUser.comments,
    success:true
  });
});

app.post('/editprofile', async(req, res)=>{

});

  app.get('/viewprofile', async (req, res) => {
    
    const theUser = await User.findOne({username: "ihunt"});
   console.log(theUser);
   res.json({
    img: theUser.profilePicture,
    name: theUser.username,
    location: theUser.location,
    bio: theUser.bio,
    comments: theUser.comments,
    success:true
  });
  });


app.get('/friends', async (req, res) => {
  const allUsers = await User.find();
  res.json({
    users: allUsers.map(user => ({
      img: user.profilePicture,
      name: user.username,
      location: user.location,
    })),
    success: true
  });
});



app.get('/matchHistory', async (req, res) => {
  const allMatches = await Game.find();
  res.json({
    matches: allMatches.map(match => ({
      sportName: match.sportName,
      location: match.location,
      inProgress: match.inProgress,
      team1: match.team1,
      team2: match.team2,
      dateAndTime: match.dateAndTime,
      isFull: match.isFull,
      winner: match.winner
    })),
    success: true
  });
});

app.post('/login', (req, res)=> {
    const [email, password] = ['abc','123'];
  console.log(req.body);
  if (email == req.body.email && password == req.body.pw){
    res.json({success:true})
  }
  else{res.json({success:false})}
})



app.get('/gamesHappeningSoon/:sport', (req, res) => {
    const { sport } = req.params;
    // will later fetch this data from a database
    const games = gamesData[sport] || [];
    
    // sending the games data back to the client
    res.json(games);
  });
app.get('/protected/gamesHappeningSoon', async (req, res) => {
    const all = await Game.find();
    
    
    // sending the games data back to the client
    res.send(all);
  });

app.get('/search', async (req, res) => {
    try {
        const username = req.query.username;
        const users = await User.find({ username: new RegExp(username, 'i') });
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/createGame', (req, res) => {
  const newGame = new Game({
      ...req.body,
      id: uuidv4(), // Generate a unique ID for the game
      // Default values for other fields are set by the schema
  });

  newGame.save()
      .then(game => res.json(game))
      .catch(err => res.status(400).json('Error: ' + err));
});

axios.post('http://localhost:7002/createGame', this.state)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

app.get("/messages", async (req, res) => {

  // const singlemessage = await Message.findOne({_id : "6566008dcbd6e0752876b6ab"})
  // console.log(singlemessage.body); 
  // console.log(singlemessage);
    res.json({
        from: "person A",
        text: "hey! hows..."
 
    });
});

// app.get('/viewprofile', async (req, res) => {
    
//   const theUser = await User.findOne({username: "ihunt"});
//  console.log(theUser);
//  res.json({
//   img: theUser.profilePicture,
//   name: theUser.username,
//   location: theUser.location,
//   bio: theUser.bio,
//   comments: theUser.comments,
//   success:true
// });
// });


app.get("/chat", async (req, res) => {
  //  const singlemessage = await Message.findOne({_id : "6566008dcbd6e0752876b6ab"})
  //  console.log(singlemessage.body); 
  //  console.log(singlemessage);

  //  res.json({
  //       _id: "6566008dcbd6e0752876b6ab", 
  //       time: Timestamp({ t: 0, i: 0 }),
  //       body: " this is a test chat message"
  //     });
  
  // res.send("messages!");

    res.json({
        person: "person A",
        sentmsg: ["Hey",
        "sure what time works?", 
        "my friend wants to join... can you find another player for a 2 on 2?"], 
        rcvdmsg: ["want to play bball?", 
        "I get off work at 5"]
        
        
    });
});


// export the express app we created to make it available to other modules
module.exports = app
