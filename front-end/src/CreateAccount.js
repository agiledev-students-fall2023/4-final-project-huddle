import { Link } from 'react-router-dom'
import './CreateAccount.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const CreateAccount = props => {
  return (
    <div className='container'>
      <h1 className='CreateAccountHeader'>Create Account</h1>
      <form>
        <div className='EmailInput' > <input type='text' name='email' placeholder='Email' style={{ width: '388px', height: '50px' }}></input> <br /><br /><br /><br /></div>
        <div className='PasswordInput'> <input type='text' name='pw' placeholder='Password' style={{ width: '388px', height: '50px' }}></input><br /><br /><br /><br /></div>
        <div className='UsernameInput'> <input type='text' name='username' placeholder='Username' style={{ width: '388px', height: '50px' }}></input><br /><br /><br /><br /></div>
        {/*<div className='SubmitButton'><input type='submit' value='Create Account' style={{ width: '388px', height: '50px' }}/></div>*/}
        <button className="btn btn-primary"><a href={"./Play"}>Create Account</a></button>
      </form>

    </div>
  )
}

// make this component available to be imported into any other file
export default CreateAccount