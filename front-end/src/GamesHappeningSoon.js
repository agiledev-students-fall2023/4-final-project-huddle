import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./GamesHappeningSoon.css";


function GamesHappeningSoon() {
    const jwtToken = localStorage.getItem("token");
    const [games, setGames] = useState(useRef([]));
    const location = useLocation();
    const { sport } = location.state || {};
    const [user,setUser] = useState();
    const [error, setError] = useState('')

const handleJoinGame = (gameId) => {
    const jwtToken = localStorage.getItem("token");
    axios.post(`${process.env.REACT_APP_BACKEND}/games/join/${gameId}`, {username:user} )
    .then(response => {
        navigate('/Lobby', { state: { gameId: gameId } });
    })
    .catch(error => {
        setError(error.response.data);
        console.error('Error joining game:', error.response.data);
    });
};

    
    const navigate = useNavigate();

    useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_BACKEND}/protected/profile`,
        {headers: { Authorization: `JWT ${jwtToken}` },
    }) 
        .then(response => {
          // axios bundles up all response data in response.data property
          const profile = response.data;
          console.log(profile);
          setUser(profile.name); 
        })
        .catch(err => {
          console.log(
            "The server rejected the request for this protected resource... we probably do not have a valid JWT token."
          )
        })

    axios
      .get(`${process.env.REACT_APP_BACKEND}/protected/gamesHappeningSoon`, {
        headers: { Authorization: `JWT ${jwtToken}` }, // pass the token, if any, to the server
      })
      .then(res => {
        console.log(`token sent: ${jwtToken}`)
        console.log(res.data) // store the response data
        // setGames(res.data);
        console.log(games.current[0])
        const gamesWithFormattedDate = res.data.map(game => ({
            ...game,
            date: new Date(game.dateAndTime).toLocaleDateString(),
            time: new Date(game.dateAndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }));
          setGames(gamesWithFormattedDate);
      })
      .catch(err => {
        console.log(`token sent: ${jwtToken}`)
        console.log(
            
          "The server rejected the request for this protected resource... we probably do not have a valid JWT token."
        )
        // setIsLoggedIn(false)  update this state variable, so the component re-renders
      })},[])
      
      useEffect(() => {
        if (sport) {
            axios.get(`${process.env.REACT_APP_BACKEND}/games/${encodeURIComponent(sport)}`)
                .then(res => {
                    
                    const gamesWithFormattedDate = res.data.map(game => ({
                        ...game,
                        date: new Date(game.dateAndTime).toLocaleDateString(),
                        time: new Date(game.dateAndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      }));
                      setGames(gamesWithFormattedDate);
                })
                .catch(error => {
                    console.error('Error fetching games:', error);
                });
        } 
    }, [sport]);

    return (
        <div style={{ padding: '20px' }}>
            <header style={{ marginBottom: '20px' }}>
                {/* placeholder*/}
            </header>

            <section>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Games Happening Soon for {sport || 'All Sports'}
                </h2>
                {error && <h1 className="error-message" style={{color:'red'}}>{error}</h1>}

                <button className='gbutton' onClick={() => navigate('/CreateGame')}>Create a Game</button>


                {/* {games.current.map((game, index) => (
                    <GameCard
                        key={index}
                        sport={game.sport}
                        playersNeeded={game.playersNeeded}
                        tier={game.tier}
                        location={game.location}
                        time={game.time}
                    />
                ))} */}
                <div>
                {games.length > 0 ? (
                games.map((game, index) => (
                    <GameCard 
                        key={index}
                        id={game._id}
                        sportName={game.sportName}
                        maxPlayers={game.maxPlayers}
                        location={game.location}
                        time={game.time}
                        onJoinGame={handleJoinGame}
                    />
                ))
                    ) : (
                <p>Loading games...</p> // Display a loading message or similar
                        )}
                </div>
            </section>
        </div>
    );
}

function GameCard({ id, sportName, maxPlayers, location, time, onJoinGame }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }} className="GameCard">
            <div>
                <label>Game ID:</label>
                <span style={{ marginLeft: '10px' }}>{id}</span>
            </div>
            <div>
                <label>Sport:</label>
                <span style={{ marginLeft: '10px' }}>{sportName}</span>
            </div>
            <div>
                <label>Max # of Players:</label>
                <span style={{ marginLeft: '10px' }}>{maxPlayers}</span>
            </div>
            <div>
                <label>Location:</label>
                <span style={{ marginLeft: '10px' }}>{location}</span>
            </div>
            <div>
                <label>Time:</label>
                <span style={{ marginLeft: '10px' }}>{time}</span>
            </div>
            <button style={{ marginTop: '10px' }} onClick={() => onJoinGame(id)}>Join Game</button>
        </div>
    );
}

export default GamesHappeningSoon;
