import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'

import './CreateAccount.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const CreateAccount = props => {

  let navigate = useNavigate()
  const [info, setInfo] = useState({
    email: '',
    pw: '',
    username:'',
    games:[],
    location: '',
    win: 0,
    loss: 0,
    friends:[],
    bio:''
    
  });
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  function handleEmailChange(e) {
    setInfo({
      ...info,
      email: e.target.value
    });
  }
  function handleBioChange(e) {
    setInfo({
      ...info,
      bio: e.target.value
    });
  }

  function handlePasswordChange(e) {
    setInfo({
      ...info,
      pw: e.target.value
    });
  }
  function handleUsernameChange(e) {
    setInfo({
      ...info,
      username: e.target.value
    });
  }
  function handleLocationChange(e) {
    setInfo({
      ...info,
      location: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
    .post("http://localhost:3000/auth/signup", {
      ...info
    })
    .then(response => {
      // success
      console.log(`Received server response: ${JSON.stringify(response.data)}`)
      console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`);
      setResponse(response.data);
      //set Cookies
    
      navigate("/login");
    })
    .catch(err => {
      // failure
      console.log(`Received server error: ${err}`)
      setError(
        "This form doesn't actually work, sorry.  There is no back-end for this example app in which to save the data. Pop open your web browser's Javascript Console to see the error trying to connect to a non-existent back-end."
      )
    })
}
  return (
    <div className='container'>
      <h1 className='CreateAccountHeader'>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className='UsernameInput'> <input type='text' name='username' value={info.username} 
        onChange={handleUsernameChange} placeholder='Username' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>
        
        <div className='PasswordInput'> <input type='text' name='pw' value={info.pw} 
        onChange={handlePasswordChange} placeholder='Password' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>

        <div className='BioInput'> <input type='text' name='bio' value={info.bio} 
        onChange={handleBioChange} placeholder='Bio' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>

        <div className='LocationInput'> <input type='text' name='location' value={info.location} 
        onChange={handleLocationChange} placeholder='Location' style={{ width: '380px', height: '50px' }}></input><br /><br /><br /><br /></div>
        <div><input type='submit' onChange={handleSubmit} value="Login" style={{ width: '380px', height: '30px'}}/> </div>
      </form>

    </div>
  )
}

// make this component available to be imported into any other file
export default CreateAccount