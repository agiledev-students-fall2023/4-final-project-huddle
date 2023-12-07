import React from "react"
import "./ViewProfile.css"
import "./EditProfile.css"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";


const EditProfile = props => {
  const jwtToken = localStorage.getItem("token");
  let navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn]= useState(jwtToken && true);
  const [profile, setProfile] = useState([]);
  const [username, setUsername]= useState();
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation]= useState(profile.location);
  const [file, setFile] = useState();
  useEffect( () => {
    const fetchProfile = async () => {
      axios
        .get(`${process.env.REACT_APP_BACKEND}/protected/profile`,
        {headers: { Authorization: `JWT ${jwtToken}` },
    })
        .then(response => {
          // axios bundles up all response data in response.data property
          const profile = response.data;
          setProfile(profile);
          setBio(profile.bio);
          setLocation(profile.location);
          setUsername(profile.name);
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
  const handleChange = event =>{
    setBio(event.target.value);
  };
  const handleChangeLocation = event =>{
    setLocation(event.target.value);
  };
  const handleFileChange = event =>{
    setFile(event.target.files[0]);
  }
  const handleUpload = (event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bio', bio);
    formData.append('location', location);
    formData.append('username',username);
    axios
    .post(`${process.env.REACT_APP_BACKEND}/editprofile`, formData)
    .then(res=>{
        console.log(res);
        navigate("/profile");
        
      })
    .catch(err=>{
          console.log(err);
      })
       
  }

  return (
    <div className="EditProfile">
      <section className="main-content">
        <form action="/editprofile" method="POST" encType="multipart/form-data">
            <img alt="profpic" src={profile.img!==undefined ? profile.img: ("/defaultProfile.png")}  length = "175" width = "175"/>
            <input type="file" onChange={handleFileChange} />
            <label for="bio">Bio: </label>
            <input type="text" id="bio" name="bio" onChange={handleChange} value= {bio}></input>
            <label for="location">Location: </label>
            <input type="text" id="location" name="location" onChange={handleChangeLocation} value = {location}></input>
            <input type="submit" onClick={handleUpload}value="Save"/>
        </form>

        </section>
    </div>
  )
}


export default EditProfile