// This is from https://github.com/nyu-software-engineering/data-storage-example-app
const express = require("express"); // CommonJS import style!
const passport = require("passport");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const User = require("../models/User");
const Game = require("../models/Game.js");

// a method that constains code to handle routes related to protected content that requires login to access
const protectedContentRoutes = () => {
  // create a new router that we can customize
  const router = express.Router();

  // a route that is protected... only authenticated users can access it.
  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
      // our jwt passport config will send error responses to unauthenticated users will
      // so we only need to worry about sending data to properly authenticated users!

      res.json({
        success: true,
        user: {
          id: req.user.id,
          username: req.user.username,
        },
        message:
          "Congratulations: you have accessed this route because you have a valid JWT token!",
      });
      next();
    }
  );
  router.get("/profile",passport.authenticate("jwt", {session:false}), async (req,res,next)=>{
    const theUser = await User.findOne({username: req.user.username});
    res.json({
      img: theUser.profilePicture,
      name: theUser.username,
      location: theUser.location,
      bio: theUser.bio,
      comments: theUser.comments,
      success:true
    });
    


  }
  );

  router.post("/creategame", async (req, res, next) => {
    console.log(`Incoming signup data: ${JSON.stringify(req.body, null, 0)}`)
    // grab the username and password from the POST body
    const team1 = [];
    const team2=[];
    const sportName = req.body.sportName; 
    const maxPlayers = req.body.maxPlayers;

    const location = req.body.location;
    let inProgress = true;
    const creationTime = req.body.creationTime;
    const dateAndTime = req.body.dateAndTime;
    const isFull = false;
    const winner = '';
    // res.send([username,password])


    // try to create a new user
    try {
      const game = await new Game({ team1, team2, sportName, maxPlayers, location, inProgress, creationTime, dateAndTime,isFull, winner}).save();
      // user saved successfully... send a success response
      console.error(`New game: ${game}`);
       // generate a signed token
      res.json({
        success: true,
        message: "Game saved successfully.",

      }); // send the token to the client to store
      next();
    } catch (err) {
      // error saving user to database... send an error response 
      console.error(`Failed to save game: ${err}`);
      res.status(500).json({
        success: false,
        message: "Error saving game to database.",
        error: err,
      });
      next();
    }
  });

  router.get("/friends",passport.authenticate("jwt", {session:false}), async (req,res,next)=>{
    console.log("we in here");
    console.log(req.user.username);
    const theUser = await User.findOne({username: req.user.username});
    let friendsDatas =[];
    const friendsIDs = theUser.friends;
    
    if(friendsIDs.length >0){
      for(let i =0; i<friendsIDs.length;i++){
        const singleFriend = await User.findOne({username : friendsIDs[i]});
        friendsDatas.push(singleFriend);
      }
      console.log(friendsDatas);
      res.json({
        friends: friendsDatas,
        success:true
      });
    }
    else{
      res.json({
        friends:[],
        success:true
      })
    }
    
  

  }
  );

  return router;

};

// export the function that contains code to handle cookie-related routes
module.exports = protectedContentRoutes;
