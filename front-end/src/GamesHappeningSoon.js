import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./GamesHappeningSoon.css";

function GamesHappeningSoon() {
    const [games, setGames] = useState([]);
    const location = useLocation();
    const { sport } = location.state || {};

    useEffect(() => {
        if (sport) {
            axios.get(`/sampleGames/${sport}`)
                .then(response => {
                    setGames(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the games:', error);
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

                {games.map((game, index) => (
                    <GameCard
                        key={index}
                        sport={game.sport}
                        playersNeeded={game.playersNeeded}
                        tier={game.tier}
                        location={game.location}
                        time={game.time}
                    />
                ))}
            </section>
        </div>
    );
}

function GameCard({ sport, playersNeeded, tier, location, time }) {
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
                <label>Tier:</label>
                <span style={{ marginLeft: '10px' }}>{tier}</span>
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
