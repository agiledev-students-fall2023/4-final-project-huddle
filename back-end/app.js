// import and instantiate express
const express = require("express"); // CommonJS import style!
const cors = require('cors');
const path = require("path");
const axios = require("axios");
const app = express(); // instantiate an Express object

const mongoose = require("mongoose")
const dotenv = require("dotenv")

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

const User = require("./models/User.js")

const sampleGames = [
    { sportName: 'Basketball', numberOfPeople: 10, tierLevel: 3, locationName: 'Central Gym', time: '2023-11-20T12:00:00Z' },
    { sportName: 'Football', numberOfPeople: 22, tierLevel: 2, locationName: 'Stadium West', time: '2023-11-20T15:00:00Z' },
    { sportName: 'Volleyball', numberOfPeople: 12, tierLevel: 4, locationName: 'North Beach Courts', time: '2023-11-21T10:00:00Z' },
    { sportName: 'Baseball', numberOfPeople: 18, tierLevel: 1, locationName: 'Downtown Field', time: '2023-11-22T16:00:00Z' },
    { sportName: 'Soccer', numberOfPeople: 22, tierLevel: 5, locationName: 'East Park Stadium', time: '2023-11-23T14:00:00Z' },
    { sportName: 'Tennis', numberOfPeople: 2, tierLevel: 3, locationName: 'Riverfront Courts', time: '2023-11-24T09:00:00Z' }
  ];
  
db()  
app.use(cors());
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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:7002");
  next();
});



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


app.get('/profile', async (req, res) => {
    
    res.json({
        name: "John Smith",
        img: "https://picsum.photos/150?page=home",
        location: "New York ",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus.",
        comments: [{user: "@User1 ", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Elementum nisi quis eleifend quam adipiscing."},{user: "@User2", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],
        sports: [{sport: "Sport 1", ranking: "Ranking", skills: [{skill: "Skill 1", rating: 4},{skill: "Skill 2",rating: 5},{skill: "Skill 3", rating: 5}], record: {wins: 10, loss: 10}} , 
        {sport: "Sport 2", ranking: "Ranking", skills: [{skill: "Skill 1", rating: 2},{skill: "Skill 2",rating: 2},{skill: "Skill 3", rating: 4}], record: {wins: 10, loss: 10}}, 
        {sport: "Sport 3", ranking: "Ranking", skills: [{skill: "Skill 1", rating: 3},{skill: "Skill 2",rating: 1},{skill: "Skill 3", rating: 2}], record: {wins: 10, loss: 10}}],
        success:true

    });
  });


app.get('/friends', async (req, res) => {

    res.json({
        name: "Account Name",
        location: "??? Town",
        contact: "123-456-7890",
            
    });
});

app.get('/matchHistory', async (req, res) => {

    res.json({
        player: "xx player",
        location: "??? Town",
        time: "xx-xx-xxxx",
            
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

app.post('/createaccount', (req, res)=> {
  console.log(req.body)
  res.json({success:true})
})


app.get('/gamesHappeningSoon/:sport', (req, res) => {
    const { sport } = req.params;
    // will later fetch this data from a database
    const games = gamesData[sport] || [];
    
    // sending the games data back to the client
    res.json(games);
  });


app.get("/messages", (req, res) => {
    // res.send("messages!");
    res.json({
        from: "person A",
        text: "hey! hows..."

        // message1: "Hey",
        // message2: "want to play bball?",
        // message3: "sure what time works?",
        // message4: "I get off work at 5",   
        // message5: "my friend wants to join... can you find another player for a 2 on 2?",           
    });
});


app.get("/chat", (req, res) => {
    // res.send("messages!");
    res.json({
        person: "person A",
        sentmsg: ["Hey",
        "want to play bball?", 
        "sure what time works?", 
        "I get off work at 5",
        "my friend wants to join... can you find another player for a 2 on 2?"], 
        rcvdmsg: []
        
        
    });
});



// export the express app we created to make it available to other modules
module.exports = app
