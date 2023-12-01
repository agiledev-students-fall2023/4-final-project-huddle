import React from "react"
import "./ViewProfile.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const EditProfile = props => {
  const [profile, setProfile] = useState([]);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation]= useState(profile.location);
  useEffect( () => {
    const fetchProfile = async () => {
      axios
        .get("http://localhost:3000/profile")
        .then(response => {
          // axios bundles up all response data in response.data property
          const Profile = response.data;
          setProfile(Profile);
          setBio(Profile.bio);
          setLocation(Profile.location);
        })
        .catch(err => {
          const errMsg = JSON.stringify(err, null, 2);// convert error object to a string so we can simply dump it to the screen
          console.log(errMsg);
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

  return (
    <div className="EditProfile">
      <section className="main-content">
        <form action="/editprofile" method="POST" encType="multipart/form-data">
            <img alt="welcome!" src={profile.img} length = "75" width = "75"/>
            <input name="my_files" type="file" multiple />
            <label for="bio">Bio: </label>
            <input type="text" id="bio" name="bio" onChange={handleChange} value= {bio}></input>
            <label for="location">Location: </label>
            <input type="text" id="location" name="location" onChange={handleChangeLocation} value = {location}></input>
            <input type="submit" value="Save"/>
        </form>

        </section>
    </div>
  )
}


export default EditProfile