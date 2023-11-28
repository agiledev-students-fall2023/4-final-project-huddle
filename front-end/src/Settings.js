import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './Settings.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Settings = props => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);}
  return (
    <>

    <br /><br /><br />
      <form>
      <div>Setting 1: 
      <select className='settingBar' value={selectedOption} onChange={handleSelectChange} >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      <div><input type='submit' ></input><br /><br /><br /><br /></div>
      </form>
      <form>
      <div>Setting 2: 
      <select className='settingBar' value={selectedOption} onChange={handleSelectChange} >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      <div><input type='submit'  ></input><br /><br /><br /><br /></div>
      </form>
      <form>
      <div>Setting 3: 
      <select className='settingBar' value={selectedOption} onChange={handleSelectChange} >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      <div><input type='submit' ></input><br /><br /><br /><br /></div>
      </form>
      <form>
      <div>Setting 4: 
      <select className='settingBar' value={selectedOption} onChange={handleSelectChange} >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      <div><input type='submit' ></input><br /><br /><br /><br /></div>
      </form>
    </>
  )
}

// make this component available to be imported into any other file
export default Settings
