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
      <h1>Home</h1>

      <p>
        <Link to="/login"><button style={{ width: '400px', height: '50px' }}>Login</button></Link><br /><br /><br /><br />
      </p>
      <p>
      <Link to="/createaccount"><button style={{ width: '400px', height: '50px' }}>CreateAccount</button></Link><br /><br /><br /><br />
      </p>
      <p>
      <Link to="/settings"><button style={{ width: '400px', height: '50px' }}>Settings</button></Link><br /><br /><br /><br />
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default Home
