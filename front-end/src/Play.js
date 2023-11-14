import { useState, useEffect } from 'react'
import "./Play.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const sports = [
  { name: 'Basketball', icon: '/icons/basketball.png' },
  { name: 'Soccer', icon: '/icons/soccer.png' },
  { name: 'Tennis', icon: '/icons/tennis.png' },
  { name: 'Volleyball', icon: '/icons/volleyball.png' },
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
          onClick={() => setSelectedSport(sport.name)}
          style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'gray',
              border: selectedSport === sport.name ? '2px solid red' : 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
          }}
      >
          <img src={sport.icon} alt={sport.name} style={{ width: '50px', height: '50px' }} />
          <span>{sport.name}</span>
      </div>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <h2>Choose a Sport</h2>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
                {sports.map(renderSportCell)}
            </div>
            <div style={{ marginTop: '40px' }}>
                <button onClick={handleJoinGame} style={{ marginRight: '20px' }}>Join a Game</button>
                <button onClick={() => navigate('/CreateGame')}>Create a Game</button>
            </div>
        </div>
    );
}

export default Play;
