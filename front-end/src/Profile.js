import React from "react"
import "./Profile.css"
import { useState, useEffect } from 'react'
import axios from 'axios'


const Profile = props => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      axios
        .get("http://localhost:3000/profile")
        .then(response => {
          // axios bundles up all response data in response.data property
          const profile = response.data;
          console.log(profile);
          setProfile(profile);
        })
        .catch(err => {
          const errMsg = JSON.stringify(err, null, 2);// convert error object to a string so we can simply dump it to the screen
          console.log(errMsg);
        })
    }
    fetchProfile();
  }, []);


  return (
    <div className="Profile">
      
      <section className="main-content">
        <div className="biofull">
          <img alt="welcome!" src={profile.img} length = "75" width = "75"/>

          <div className="bio">
            <p>Name: {profile.name}</p>
            <p>Location: {profile.location}</p>
            <p>Bio:{profile.bio}</p>
          </div>

        </div>

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
  )
}

export default Profile