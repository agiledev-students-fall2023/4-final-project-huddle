import React from "react"
import "./ViewProfile.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const ViewProfile = props => {
  const jwtToken = localStorage.getItem("token"); // gets the token
  const { slug } = useParams();
  const [profile, setProfile] = useState([]);
  const [comment, setComment] = useState();
  const [thisUser, setThisUser] = useState();
  const [matches, setMatches] = useState([]);
  const [comments, setComments] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      axios
        .get(`${process.env.REACT_APP_BACKEND}/viewprofile/${slug}`)
        .then(response => {
          // axios bundles up all response data in response.data property
          const Profile = response.data;
          console.log(Profile)
          setProfile(Profile);
          setMatches(Profile.games);
          setComments(Profile.comments);
        })
        .catch(err => {
          const errMsg = JSON.stringify(err, null, 2);// convert error object to a string so we can simply dump it to the screen
          console.log(errMsg);
        })
      
        axios
        .get(`${process.env.REACT_APP_BACKEND}/protected/profile`,
        {headers: { Authorization: `JWT ${jwtToken}` },})
        .then(response => {
          // axios bundles up all response data in response.data property
          const thisUserProfile = response.data;
          setThisUser(thisUserProfile.name);
        })
        .catch(err => {
          const errMsg = JSON.stringify(err, null, 2);// convert error object to a string so we can simply dump it to the screen
          console.log(errMsg);
        })
    }
    fetchProfile();
  }, []);

  const handleChange = event =>{
    setComment(event.target.value);
  };

  const handleComment = event=>{
    event.preventDefault();

    if(jwtToken){
      axios
    .post(`${process.env.REACT_APP_BACKEND}/comment/${slug}`,{comment: comment, main: thisUser})
    .then(res=>{
      console.log(res);
      
    })
    .catch(err=>{
        console.log(err);
    })
    window.location.reload(true);
    }
    else{
      //redirecto to login
    }

    
    
  };


  return (
    <div className="OtherProfile">
      
      <section className="main-content">
        <div className="biofull">
          <img alt="welcome!"  src={profile.img!==undefined ? profile.img: ("/defaultProfile.png")} length = "75" width = "75"/>
          <div className="bio">
            <p>Name: {profile.name}</p>
            <p>Location: {profile.location}</p>
            <p>Bio:{profile.bio}</p>
          </div>

        </div>

        <div className="comments">
          <h2>Profile Comments</h2>
          {comments.length>0?comments.map(c=>(
            <div className="comment">
              <p>{c}</p>
            </div>
 
          )):(
            <div>No Comments Yet</div>
          )}
        </div>
        
        <div className="Commentform">
          <form action = "/commentprofile" method = "Post">
            <textarea name="comment" id="comment" placeholder = "Say something" onChange={handleChange} style={{width: "100%"}}>

            </textarea>
            <input type="submit" value="Add comment"onClick={handleComment}></input>

          </form>
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