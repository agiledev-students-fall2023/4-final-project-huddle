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
    function handlemaxPlayersChange(e) {
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post("http://localhost:3000/protected/creategame", info)
        .then(response => {
          // Handle success
          console.log("Success!")
        //   navigate("/profile");
        })
        .catch(err => {
          // Handle error
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
        <h1 className='CreateAccountHeader'>Create Account</h1>
        <form onSubmit={handleSubmit}>

          <div className='SportnameInput'> <input type='text' name='sportname' value={info.sportName} 
          onChange={handleSportChange} placeholder='Sportname' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>
          
          <div className='MaxPlayerInput'> <input type='number' name='pw' value={info.maxPlayers} 
          onChange={handlemaxPlayersChange} placeholder='maxPlayers' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>
  
          <div className='TimeInput'> <input type='date' name='time' value={info.creationTime} 
          onChange={handleTimeChange} placeholder='Time' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>
  
          <div className='LocationInput'> <input type='text' name='location' value={info.location} 
          onChange={handleLocationChange} placeholder='Location' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>
          
          <div className='dateAndTimeInput'> <input type='text' name='dateAndTime' value={info.dateAndTime} 
          onChange={handleDateChange} placeholder='dateAndTime' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>
          
          
          
          
          
          <div><input type='submit' onChange={handleSubmit} value="Create Game" style={{ width: '380px', height: '30px'}}/> </div>
        </form>
  
      </div>
    )
  }

// class NewGameForm extends React.Component {
//     state = {
//         location: '',
//         time: '',
//         sport: '',
//         numberOfPlayers: 0
//     };

//     handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3000/createGame', this.state)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     }

//     render() {
//         return (
//             <div className="new-game-container">
//                 <h2 className="form-title">New Game</h2>
//                 <form action = "/createGame" className="game-form">
//                     <div className="form-group">
//                         <label>Location: </label>
//                         <input
//                             name="location"
//                             type="text"
//                             className="form-control"
//                             value={this.state.location}
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Date: </label>
//                         <input
//                             name="date"
//                             type="date"
//                             className="form-control"
//                             value={this.state.date}
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Time: </label>
//                         <input
//                             name="time"
//                             type="time"
//                             className="form-control"
//                             value={this.state.time}
//                             onChange={this.handleChange}
//                             min="00:00"
//                             max="12:59"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Sport: </label>
//                         <select 
//                             name="sport"
//                             className="form-control"
//                             value={this.state.sport}
//                             onChange={this.handleChange}>
//                             <option value="">Select Sport</option>
//                             <option value="Volleyball">Volleyball</option>
//                             <option value="Basketball">Basketball</option>
//                             <option value="Soccer">Soccer</option>
//                             <option value="Tennis">Tennis</option>
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label># of Players: </label>
//                         <input
//                             name="maxPlayers"
//                             type="number"
//                             className="form-control"
//                             value={this.state.numberOfPlayers}
//                             onChange={this.handleChange}
//                         />
//                     </div>
                    
//                     <button type="submit" onClick={this.handleSubmit} className="submit-btn">Create Game</button>
//                 </form>
//             </div>
//         );
//     }
// }

export default NewGameForm;
