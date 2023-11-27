import React, { useState, useEffect } from 'react'
import "./Play.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const sports = [
  { name: 'Basketball', icon: 'https://picsum.photos/200' },
  { name: 'Soccer', icon: 'https://picsum.photos/100' },
  { name: 'Tennis', icon: 'https://picsum.photos/300' },
  { name: 'Volleyball', icon: 'https://picsum.photos/400' },
];

const Play = () => {
    const [selectedSport, setSelectedSport] = useState(null);
    const navigate = useNavigate();

    const handleJoinGame = () => {
        navigate('/GamesHappeningSoon', { state: { sport: selectedSport } });
    };

    const renderSportCell = (sport, index) => (
      <div 
          key={index}
          className='sportcard'
          onClick={() => setSelectedSport(sport.name)}
      >
          <img src={sport.icon} alt={sport.name} style={{ width: '50px', height: '50px' }} />
          <span>{sport.name}</span>
      </div>
    );

    return (
        <div className='play'>
            <h2>Choose a Sport</h2>
                {sports.map(renderSportCell)}

                
                <button className='mbutton' onClick={handleJoinGame}>Join a Game</button>
                {/* <button onClick={handleJoinGame} style={{ marginRight: '20px' }}>Join a Game</button> */}

                <button className='mbutton' onClick={() => navigate('/CreateGame')}>Create a Game</button>
        </div>
    );
}

export default Play;
