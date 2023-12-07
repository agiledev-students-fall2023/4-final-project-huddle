import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
import './Login.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const Login = props => {

  let navigate = useNavigate()
  const [info, setInfo] = useState({
    username: '',
    pw: '',
    
  });
  const [error, setError] = useState("")
  if (localStorage.getItem("token")){
    return(<>
    <h1>You are logged in! Log out to use log in again.</h1>
    </>)
  }
  function handleUsernameChange(e) {
    setInfo({
      ...info,
      username: e.target.value
    });
  }

  function handlePasswordChange(e) {
    setInfo({
      ...info,
      pw: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("username", info.username);
    axios
    .post(`${process.env.REACT_APP_BACKEND}/auth/login`, {
      ...info
    })
    .then(response => {
      // success

      console.log(`Received server response: ${JSON.stringify(response.data)}`)
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));
      const jwtToken = localStorage.getItem("token");
      axios
      .get(`${process.env.REACT_APP_BACKEND}/protected/`, {
        headers: { Authorization: `JWT ${jwtToken}` }, // pass the token, if any, to the server
      })
      .then(res => {
        console.log(res.data) // store the response data
        navigate("/profile");
      })
      .catch(err => {
        console.log(
          "The server rejected the request for this protected resource... we probably do not have a valid JWT token."
        )
        // setIsLoggedIn(false)  update this state variable, so the component re-renders
      })
      
      
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
    <>
      <h1 className='login_header'>Login</h1>
      {error && <div className="loginError">
          Incorrect Username or Password!
        
        </div>} 
      <form onSubmit={handleSubmit}>
        <div> 
          <input type='text' name='username' placeholder='username' id="name_field" value={info.username} 
        onChange={handleUsernameChange} className='infobox'/><br /><br />
        </div> 
        <div> 
          <input type='text' name='pw' value={info.pw} 
        onChange={handlePasswordChange} placeholder='Password' className='infobox'/><br /><br />
        </div>
        <div>
          <input type='submit' value="Login" className='Lbutton'/> 
        </div>

      </form>

    
      {/* <p>
        <Link to="/home"><button className='button'>Login</button></Link>
      </p> */}
      <p>
        <Link to="/createaccount">
          <button className='Lbutton'>Create Account</button></Link>
      </p>

    </>
  )
}

// make this component available to be imported into any other file
export default Login