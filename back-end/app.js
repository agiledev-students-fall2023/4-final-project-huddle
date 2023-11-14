// import and instantiate express
const express = require("express"); // CommonJS import style!
const cors = require('cors');
const path = require("path");
const axios = require("axios");
const app = express(); // instantiate an Express object
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
  
  
app.use(cors());
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

app.get("/", (req, res) => {
    res.send("Hello!");
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
  console.log(req.body)
  res.json({success:true})
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
        "my friend wants to join... can you find another player for a 2 on 2?",], 
        rcvdmsg: []
        
        
    });
});



// export the express app we created to make it available to other modules
module.exports = app
