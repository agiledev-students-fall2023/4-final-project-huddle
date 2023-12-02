const express = require("express"); // CommonJS import style!
const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/User");
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

  return router;

};

// export the function that contains code to handle cookie-related routes
module.exports = protectedContentRoutes;
