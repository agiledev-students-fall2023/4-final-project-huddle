import React, { useState, useEffect } from 'react'
import "./Play.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { GiBasketballBasket } from "react-icons/gi";
import huddlelogo from './icons/huddlelogo.png';

const sports = [
  { name: 'Basketball', icon: process.env.PUBLIC_URL + '/bball.jpeg' },
  { name: 'Soccer', icon: process.env.PUBLIC_URL + '/soccer.jpeg' },
  { name: 'Tennis', icon: process.env.PUBLIC_URL + '/tennis.jpeg' },
  { name: 'Volleyball', icon: process.env.PUBLIC_URL + '/volleyball.jpeg' },
];


const Play = () => {
    // const [selectedSport, setSelectedSport] = useState(null);
    const navigate = useNavigate();

    const handleJoinGame = (sportName) => {
        navigate('/GamesHappeningSoon', { state: { sport: sportName } });
    };

    const renderSportCell = (sport, index) => {
        // const isSelected = selectedSport === sport.name;
        return (
      <div 
          key={index}
          className='sportcard'
          onClick={() => handleJoinGame(sport.name)}
        
      >
         <img className={'sportpic'}
            src={sport.icon} 
            alt={sport.name} />

          {/* <img src={sport.icon} alt={sport.name} style={{ width: '50px', height: '50px' }} /> */}
          <span>{sport.name}</span>
      </div>
         );
     };

    return (
        <div className='play'>
            <h2>Choose a Sport</h2>
                {sports.map(renderSportCell)}
                {/* <GiBasketballBasket /> **bball icon*/} 

                
                {/* <button className='mbutton' onClick={handleJoinGame}>Join a Game</button> */}
                {/* <button onClick={handleJoinGame} style={{ marginRight: '20px' }}>Join a Game</button> */}

        </div>
    );
}

export default Play;
