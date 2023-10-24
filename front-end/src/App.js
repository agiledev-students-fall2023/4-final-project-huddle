//import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home.js"
import Profile from "./Profile.js"

import "./App.css"

// set up routes so different URL routes load up different main components
const App = props => {
  //const [user, setUser] = useState({}) // a state variable that stores the logged-in user, if any

  return (
    <div className="container">
      <Router>
        {/* pass the setter function that can be called if the user successfully logs in from the login screen */}
        <Routes>
          {/* a route to the home screen */}
          <Route path="/" element={<Home />} />

          {/* a route to the about us screen */}
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App