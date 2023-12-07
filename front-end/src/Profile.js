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
  const [matches, setMatches] = useState([]);
  const [comments, setComments] = useState([]);
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
          setMatches(profile.games);
          setComments(profile.comments);
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
            <p className="bio-info">
              <span className="label">Name:</span> {profile.name}
            </p>
            <p className="bio-info">
              <span className="label">Location:</span> {profile.location}
            </p>
            {/* <p className="bio-info">Name: {profile.name}</p>
            <p className="bio-info">Location: {profile.location}</p>
            <p className="bio-info">Bio:{profile.bio}</p> */}
            <p className="bio-info">
              <span className="label">Bio:</span> {profile.bio}
            </p>
          </div>
        </div>
        {/* <button onClick={() => navigate("/editprofile")}>Edit Profile</button> */}
        <button onClick={() => navigate("/editprofile")} className="editbutton">
          Edit Profile
        </button>
        <div className="comments">
          <h2>Profile Comments</h2>
          {comments.length>0?profile.comments.map(comment=>(
            <div className="comment">
              <p>{comment}</p>
            </div>
 
          )):(
            <div>No Comments Yet</div>
          )}
        
        </div>


        <div className="record">
          <h2>Record</h2>
          {matches.length>0? matches.map(match=>(
            <div className="match">
              <div>Sport: {match.sportName}</div>
              <div>Location: {match.location}</div>
              <div>Date and Time: {match.dateAndTime}</div>
              <div>Winner: {match.winner}</div>
            
            </div>
          )):(
            <div>No Match History</div>
          )}
        </div>
          

        </section>
    
    </div>
    ) : (<Navigate to="/login" />
    )}
    </>
  )
 

}

export default Profile