// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object


app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data


// we will put some server logic here later...
app.get("/", (req, res) => {
    res.send("HELLO!");
});

app.get("/messages", (req, res) => {
    // res.send("messages!");
    res.json({
        message1: "Hey",
        message2: "want to play bball?",
        message3: "sure what time works?",
        message4: "I get off work at 5",   
        message5: "my friend wants to join... can you find another player for a 2 on 2?",           
    });
});



// export the express app we created to make it available to other modules
module.exports = app