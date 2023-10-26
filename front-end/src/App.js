//import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home.js"
import Profile from "./Profile.js"
import Friends from "./Friends.js"
import MatchHistory from "./MatchHistory.js"
import Search from "./Search.js"
import Lobby from "./Lobby.js"
import GamesHappeningSoon from "./GamesHappeningSoon.js"
import CreateGame from "./CreateGame.js"
import Match from "./Match.js"
import HamburgerMenu from './HamburgerMenu';
import "./App.css"

// set up routes so different URL routes load up different main components
const App = props => {
  //const [user, setUser] = useState({}) // a state variable that stores the logged-in user, if any

  return (
    
    <div className="container">
      <div className="App">
      <HamburgerMenu />
      </div>
      <Router>
        {/* pass the setter function that can be called if the user successfully logs in from the login screen */}
        <Routes>
          {/* a route to the home screen */}
          <Route path="/" element={<Home />} />

          {/* a route to the about us screen */}
          <Route path="/profile" element={<Profile/>} />

          {/* a route to the friends screen */}
          <Route path="/friends" element={<Friends/>} />

          {/* a route to the match history screen */}
          <Route path="/matchHistory" element={<MatchHistory/>} />

          {/* a route to the match history screen */}
          <Route path="/search" element={<Search/>} />

          {/* a route to the match history screen */}
          <Route path="/lobby" element={<Lobby/>} />          

          {/* a route to the match history screen */}
          <Route path="/gamesHappeningSoon" element={<GamesHappeningSoon/>} />

          {/* a route to the match history screen */}
          <Route path="/createGame" element={<CreateGame/>} />
          {/* a route to the match screen */}
          <Route path="/match" element={<Match/>} />


        </Routes>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App