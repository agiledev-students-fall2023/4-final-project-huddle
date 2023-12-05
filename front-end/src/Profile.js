import React from "react"
import "./Profile.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom"


const Profile = props => {
  const jwtToken = localStorage.getItem("token"); // gets the token
  const [isLoggedIn, setIsLoggedIn] = useState(jwtToken && true); //sets the state of being logged in
  const [profile, setProfile] = useState([]);//this is where the profile data will be stored
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      axios
        .get("http://localhost:3000/protected/profile",
        {headers: { Authorization: `JWT ${jwtToken}` },
    })
        .then(response => {
          // axios bundles up all response data in response.data property
          const profile = response.data;
          
          console.log("img is" + profile.img);
          setProfile(profile);
        })
        .catch(err => {
          console.log(
            "The server rejected the request for this protected resource... we probably do not have a valid JWT token."
          )
          setIsLoggedIn(false);
        })
    }
    fetchProfile();
  }, []);
  return (
    <>
    {isLoggedIn ? (
      <div className="Profile">
      
      <section className="main-content">
        <div className="biofull">
          <img alt="welcome!" src={profile.img!==undefined ? profile.img: ("/defaultProfile.png")} length = "75" width = "75"/>

          <div className="bio">
            <p>Name: {profile.name}</p>
            <p>Location: {profile.location}</p>
            <p>Bio:{profile.bio}</p>
          </div>
        </div>
        <button onClick={() => navigate("/editprofile")}>Edit Profile</button>

        <div className="comments">
          <h2>Profile Comments</h2>
          {profile.comments?.map(comment=>(
            <div className="comment">
              <h3>user</h3>
              <p>{comment}</p>
            </div>
 
          ))}
        
        </div>


        <div className="record">
          <h2>Record</h2>
          

          <div className="match">
          <p id = "history">Total Record: Wins : Losses </p>
            <p>Game 1 : Ending Score W/L: Points: Points</p>
            <p>Location : City</p>
            <p>Players : Lorem ipsum dolor sit amet, consectetur adipiscing elt</p>
          </div>
        </div>

        </section>
    
    </div>
    ) : (<Navigate to="/login" />
    )}
    </>
  )
 

}

export default Profile