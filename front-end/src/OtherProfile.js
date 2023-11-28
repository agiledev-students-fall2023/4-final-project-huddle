import React from "react"
import "./OtherProfile.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const OtherProfile = props => {
  const [OtherProfile, setProfile] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      axios
        .get("http://localhost:3000/profile")
        .then(response => {
          // axios bundles up all response data in response.data property
          const OtherProfile = response.data;
          setProfile(OtherProfile);
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
          <img alt="welcome!" src={OtherProfile.img}/>

          <div className="bio">
            <p>Name: {OtherProfile.name}</p>
            <p>Location: {OtherProfile.location}</p>
            <p>Bio:{OtherProfile.bio}</p>
          </div>

        </div>

        <div className="comments">
          <h2>Profile Comments</h2>
          <Link to="/chat"> 
            <p className="addcom">Add a comment about {OtherProfile.name}</p>
          </Link>
          {/* addComment */}
          {/* <button>
             Add a comment about {OtherProfile.name}
          </button> */}
          {OtherProfile.comments?.map(comment=>(
            <div className="comment">
                
              <h3>{comment.user}</h3>
              <p>{comment.comment}</p>
            </div>

          ))}
        
        </div>

        <div className="userSports">
          <h2>User's Sports</h2>
          <ul>
          {OtherProfile.sports?.map(sport=>(
            <li>{sport.sport}::: {sport.ranking}</li>
          ))}
          
          </ul>
        </div>

        <div className="ratings">
          <h2>Ratings</h2>
          <div className="sportRating">
            <h3>Sport 1</h3>
            <p>Skill 1: ⭐⭐⭐☆☆</p>
            <p>Skill 2: ⭐⭐⭐⭐☆</p>
            <p>Skill 3: ⭐⭐⭐☆☆</p>
          </div>
          <div className="sportRating">
            <h3>Sport 2</h3>
            <p>Skill 1: ⭐⭐⭐⭐⭐</p>
            <p>Skill 2: ⭐⭐⭐⭐☆</p>
            <p>Skill 3: ⭐☆☆☆☆</p>
          </div>
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

export default OtherProfile