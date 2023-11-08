// import and instantiate express
const express = require("express"); // CommonJS import style!
const cors = require('cors')
const app = express(); // instantiate an Express object
// we will put some server logic here later...
// export the express app we created to make it available to other modules
app.use(cors());
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

module.exports = app;