import "./CreateGame.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import React, { useState } from 'react'

const NewGameForm = props => {

    let navigate = useNavigate()
    const [info, setInfo] = useState({
      sportName: '',
      maxPlayers: 1,

      location: '',
      creationTime: '',
      dateAndTime: '',

      
    });
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");

    
    // Handle change for the date and time
    const handleDateAndTimeChange = (event) => {
      setInfo({ ...info, dateAndTime: event.target.value });
    };
  
    const handleInputChange = (e) => {
      setInfo({
        ...info,
        [e.target.name]: e.target.value 
      });
    };
  
    function handleSportChange(e) {
      setInfo({
        ...info,
        sportName: e.target.value
      });
    }
    function handleMaxPlayersChange(e) {
      setInfo({
        ...info,
        maxPlayers: e.target.value
      });
    }
  
    function handleLocationChange(e) {
      setInfo({
        ...info,
        location: e.target.value
      });
    }
    function handleTimeChange(e) {
      setInfo({
        ...info,
        creationTime: e.target.value
      });
    }
    function handleDateChange(e) {
      setInfo({
        ...info,
        dateAndTime: e.target.value
      });
    }
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [location, setLocation]= useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Create the object with the current creation time
      const submissionInfo = {
        ...info,
        creationTime: new Date().toISOString(), // Set creation time to the current time
      };
    
      axios.post(`${process.env.REACT_APP_BACKEND}/protected/creategame`, submissionInfo)
        .then(response => {
          // Handle success
          console.log("Game created successfully", response);
          navigate("/gamesHappeningSoon");
        })
        .catch(err => {
          // Handle error
          console.error("Error creating game:", err);
          setError("Error creating game!");
        });
    };
    
    // const handleSubmit = (e) => {
    //   const user = {
    //     name:name, 
    //     password:password, 
    //     email: email
        
        
    //   }
    //   //zaken|
    //   e.preventDefault();
    //   axios
    //   .post("http://localhost:3000/auth/createaccount",user)
    //   .then((response) => {
    //     console.log(response)
    //     setName("");
    //     setEmail("");
    //     setPassword("");
  
    //     // success
    //     console.log(`Received server response: ${JSON.stringify(response.data)}`)
    //     console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`);
    //     setResponse(response.data);
    //     //set Cookies
      
    //     navigate("/login");
    //   })
      // .catch(err => {
      //   // failure
      //   console.log(`Received server error: ${err}`)
      //   setError(
      //     "error creating account!"
      //   )
      //   console.log("error cerating acocunt ", error)
      // })
  // }



  
  return (
    <div className='container'>
      <h1 className='CreateAccountHeader'>Create a Game</h1>
      <form onSubmit={handleSubmit}>
  
        <div className="form-group">
          <label>Sport name: </label>
          <input 
            type='text' 
            name='sportname' 
            className="form-control" 
            value={info.sportName} 
            onChange={handleSportChange} 
            placeholder='Sport Name'
          />
        </div>
        
        <div className="form-group">
          <label>Max Players: </label>
          <input 
            type='number' 
            name='maxPlayers' 
            className="form-control" 
            value={info.maxPlayers} 
            onChange={handleMaxPlayersChange} 
            placeholder='Max Players'
          />
        </div>
  
        <div className="form-group">
          <label>Date and Time: </label>
          <input 
            type='datetime-local' 
            name='dateAndTime' 
            className="form-control" 
            value={info.dateAndTime} 
            onChange={handleDateAndTimeChange}
          />
        </div>
  
        {/* <div className='TimeInput'>
          <label>Creation Time: </label>
          <input 
            type='date' 
            name='time' 
            className="form-control" 
            value={info.creationTime} 
            onChange={handleTimeChange} 
            placeholder='Time'
          />
        </div> */}
  
        <div className="form-group">
          <label>Location: </label>
          <input 
            type='text' 
            name='location' 
            className="form-control" 
            value={info.location} 
            onChange={handleLocationChange} 
            placeholder='Location'
          />
        </div>
        
        <div className="form-group">
          <input 
            type='submit' 
            className="form-control" 
            value="Create Game"
          />
        </div>
      </form>
    </div>
  )  
};

export default NewGameForm;
