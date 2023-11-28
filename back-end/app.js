// import and instantiate express
const express = require("express"); // CommonJS import style!
const cors = require('cors');
const path = require("path");
const axios = require("axios");
const app = express(); // instantiate an Express object

const mongoose = require("mongoose")
const dotenv = require("dotenv");
const User = require("./models/user");
const Game = require("./models/game");
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

app.get("/", (req, res) => {
    res.send("Hello!");
});


app.get('/profile', async (req, res) => {
  const theUser = await User.findOne({username: "yhunter"});
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

  app.get('/otherprofile', async (req, res) => {
    const otheUser = await User.findOne({username: "yhunter"});
    console.log(theUser);
    res.json({
    img: otheUser.profilePicture,
    name: otheUser.username,
    location: otheUser.location,
    bio: otheUser.bio,
    comments: otheUser.comments,
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
        "sure what time works?", 
        "my friend wants to join... can you find another player for a 2 on 2?"], 
        rcvdmsg: ["want to play bball?", 
        "I get off work at 5"]
        
        
    });
});



// export the express app we created to make it available to other modules
module.exports = app
