//import React, { useState } from "react"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home.js"
import Profile from "./Profile.js"
import ViewProfile from "./ViewProfile.js"
import EditProfile from "./EditProfile.js"
import Friends from "./Friends.js"
import MatchHistory from "./MatchHistory.js"
import Search from "./Search.js"
import Lobby from "./Lobby.js"
import GamesHappeningSoon from "./GamesHappeningSoon.js"
import CreateGame from "./CreateGame.js"
import Match from "./Match.js"
import HamburgerMenu from './HamburgerMenu';
import Logout from "./Logout.js"



import Settings from './Settings'
import Login from './Login'
import CreateAccount from './CreateAccount'
import Play from './Play.js';
import AboutUs from './AboutUs.js';
import Messages from "./Messages.js"
import Chat from "./Chat.js"
import NewMessage from "./NewMessage.js"

import "./App.css"

// set up routes so different URL routes load up different main components
const App = props => {
  //const [user, setUser] = useState({}) // a state variable that stores the logged-in user, if any
  // axios.defaults.withCredentials = true;
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

          {/* a route to the other profile  screen */}
          <Route path="/viewprofile" element={<ViewProfile/>} />

           {/* a route to the edit profile  screen */}
           <Route path="/editprofile" element={<EditProfile/>} />

          {/* a route to the friends screen */}
          <Route path="/friends" element={<Friends/>} />

          {/* a route to the login screen*/}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* a route to the create account screen*/}
          <Route path="/createaccount" element={<CreateAccount />} />

          {/* a route to the settings screen*/}
          <Route path="/settings" element={<Settings />} />

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

          {/* a route to the match screen */}
          <Route path="/aboutUs" element={<AboutUs/>} />

          {/* a route to the match screen */}
          <Route path="/play" element={<Play/>} />

          {/* a route to the messages screen */}
          <Route path="/messages" element={<Messages/>} />

          {/* a route to the messages screen */}
          <Route path="/chat" element={<Chat/>} />
          
          {/* a route to the compose new message screen */}
          <Route path="/newmessage" element={<NewMessage/>} />

          

        </Routes>

      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App