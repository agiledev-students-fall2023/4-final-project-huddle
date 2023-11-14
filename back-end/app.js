// import and instantiate express
const express = require("express"); // CommonJS import style!
const cors = require('cors');
const path = require("path");
const axios = require("axios");
const app = express(); // instantiate an Express object
// we will put some server logic here later...
// export the express app we created to make it available to other modules
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

module.exports = app;