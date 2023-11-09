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
        name: "Account Name",
        img: "https://picsum.photos/150?page=home",
        location: "Home Town",
        bio: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus. Elit ullamcorper dignissim cras tincidunt lobortis.",
           
    });
  });

app.post('/login', (req, res)=> {
  console.log(req.body)
  res.json({})
})

app.post('/createaccount', (req, res)=> {
  console.log(req.body)
  res.json({})
})

module.exports = app;