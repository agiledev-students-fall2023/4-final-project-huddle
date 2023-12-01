import { Link } from 'react-router-dom'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Home = props => {
  return (
    <>
      <h1 className='header'>Home</h1>
      <p>
      <Link to="/play"><button className="hbutton">Games</button></Link><br /><br /><br /><br />
      </p>
      <p>
        <Link to="/login"><button className="hbutton">Login</button></Link><br /><br /><br /><br />
      </p>
      <p>
      <Link to="/createaccount"><button className="hbutton">Create Account</button></Link><br /><br /><br /><br />
      </p>
      <p>
      <Link to="/settings"><button className="hbutton">Settings</button></Link><br /><br /><br /><br />
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default Home
