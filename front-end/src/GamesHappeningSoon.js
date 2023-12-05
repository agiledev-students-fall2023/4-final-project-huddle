import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./GamesHappeningSoon.css";

function GamesHappeningSoon() {
    const [games, setGames] = useState(useRef([]));
    // const location = useLocation();
    // const { sport } = location.state || {};

    // useEffect(() => {
    //     if (sport) {
    //         axios.get(`/sampleGames/${sport}`)
    //             .then(response => {
    //                 setGames(response.data);
    //                 console.log(games);
    //             })
    //             .catch(error => {
    //                 console.error('There was an error fetching the games:', error);
    //             });
    //     }
    // }, [sport]);
    
    const sport =[];
    useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    axios
      .get(`http://localhost:3000/protected/gamesHappeningSoon`, {
        headers: { Authorization: `JWT ${jwtToken}` }, // pass the token, if any, to the server
      })
      .then(res => {
        console.log(`token sent: ${jwtToken}`)
        console.log(res.data) // store the response data
        setGames(res.data);
        console.log(games.current[0])
      })
      .catch(err => {
        console.log(`token sent: ${jwtToken}`)
        console.log(
            
          "The server rejected the request for this protected resource... we probably do not have a valid JWT token."
        )
        // setIsLoggedIn(false)  update this state variable, so the component re-renders
      })},[])

    return (
        <div style={{ padding: '20px' }}>
            <header style={{ marginBottom: '20px' }}>
                {/* placeholder*/}
            </header>

            <section>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Games Happening Soon for {'All Sports'} 
                    {/* {sport || 'All Sports'}  */}
                </h2>

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
                        sport={game.sport}
                        playersNeeded={game.playersNeeded}
                        location={game.location}
                        time={game.time}
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

function GameCard({ sport, playersNeeded, location, time }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
            <div>
                <label>Sport:</label>
                <span style={{ marginLeft: '10px' }}>{sport}</span>
            </div>
            <div>
                <label># Players needed:</label>
                <span style={{ marginLeft: '10px' }}>{playersNeeded}</span>
            </div>
            <div>
                <label>Location:</label>
                <span style={{ marginLeft: '10px' }}>{location}</span>
            </div>
            <div>
                <label>Time:</label>
                <span style={{ marginLeft: '10px' }}>{time}</span>
            </div>
            <button style={{ marginTop: '10px' }}><a href={"./Lobby"}>Join Game</a></button>
        </div>
    );
}

export default GamesHappeningSoon;
