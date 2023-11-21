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
    email: '',
    pw: '',
    
  });
  const [error, setError] = useState("")

  function handleEmailChange(e) {
    setInfo({
      ...info,
      email: e.target.value
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
    axios
    .post("http://localhost:3000/login", {
      ...info
    })
    .then(response => {
      // success

      console.log(`Received server response: ${JSON.stringify(response.data)}`)
      if (response.data.success ===true)
        {navigate("/home");}
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
      <form onSubmit={handleSubmit}>
        <div> 
          <input type='text' name='email' placeholder='Email' id="name_field" value={info.email} 
        onChange={handleEmailChange} className='infobox'/><br /><br />
        </div> 
        <div> 
          <input type='text' name='pw' value={info.pw} 
        onChange={handlePasswordChange} placeholder='Password' className='infobox'/><br /><br />
        </div>
        {/* <div>
          <input type='submit' value="Login" className='button'/> 
        </div> */}

      </form>

    
      <p>
        <Link to="/home"><button className='button'>Login</button></Link>
      </p>
      <p>
        <Link to="/createaccount"><button className='button'>Create Account</button></Link>
      </p>

    </>
  )
}

// make this component available to be imported into any other file
export default Login
