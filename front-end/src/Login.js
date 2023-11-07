import { Link } from 'react-router-dom'
import './Login.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Login = props => {
  return (
    <>
      <h1 className='login_header'>Login</h1>
      <form>
        <div> <input type='text' name='email' placeholder='Email' style={{ width: '388px', height: '30px' }}/><br /><br /><br /><br /></div> 
        <div> <input type='text' name='pw' placeholder='Password' style={{ width: '388px', height: '30px' }}/><br /><br /><br /><br /></div>
        <div><input type='submit' value="Login" style={{ width: '388px', height: '30px', display: 'none'}}/> </div>

      </form>
      <p>
      <Link to="/play"><button style={{ width: '388px', height: '30px' }}>Login</button></Link>
      </p>
      <p>
      <Link to="/createaccount"><button style={{ width: '388px', height: '30px' }}>CreateAccount</button></Link>
      </p>

    </>
  )
}

// make this component available to be imported into any other file
export default Login
