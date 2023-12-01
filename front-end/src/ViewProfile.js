import React from "react"
import "./ViewProfile.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const ViewProfile = props => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      axios
        .get("http://localhost:3000/viewprofile")
        .then(response => {
          // axios bundles up all response data in response.data property
          const Profile = response.data;
          setProfile(Profile);
        })
        .catch(err => {
          const errMsg = JSON.stringify(err, null, 2);// convert error object to a string so we can simply dump it to the screen
          console.log(errMsg);
        })
    }
    fetchProfile();
  }, []);


  return (
    <div className="OtherProfile">
      
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
        <div className="Commentform">
          <form action = "viewprofile" method = "Post">
            <textarea name="comments" id="comments" style={{width: "100%"}}>

            </textarea>
            <input type="submit" value="Add comment"></input>

          </form>
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


function addComment(){
    return (
        <div>
            <Link to="/NewMessage">
                {/* <h3>props.NewMessage </h3> */}
                <h3>Add a comment about this user </h3>
            </Link>
        </div>
    )
}

export default ViewProfile