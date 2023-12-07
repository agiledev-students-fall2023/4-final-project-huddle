import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./Lobby.css";

function Lobby() {
    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);
    const [game, setGame] = useState([]);
    const location = useLocation();
    const { gameId } = location.state || {};

    useEffect(() => {
        const jwtToken = localStorage.getItem("token");
        if (gameId) {
            axios.get(`http://localhost:3000/getGame/${gameId}`)
            .then(response => {
                setTeam1(response.data.team1);
                setTeam2(response.data.team2);
                console.log(response.data.team2);
                setGame(response.data.game);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching game details:', error);
            });
        }
    }, [gameId]);

    return (
        <div className="container" style={{ textAlign: 'center', marginBottom: '20px' }}>
            
            <h2>Lobby 1</h2>
            <div className="game-info">Game ID: {game._id}</div>
            <div className="game-info">Location of Game: {game.location}</div>
            <div className="game-info">Date and Time: {game.dateAndTime}</div>
            <div className="player-list" style={{ textAlign: 'center', marginBottom: '20px' }}>
            {team1?.map((player, index) => 
                player ? (
                    <div className="player" key={index}>
                        <div className="avatar"></div>
                        <div className="details">
                            <span>{player.username}</span>
                            <span>{player.location}</span>
                        </div>
                    </div>
                ) : (
                    <div key={index}>&nbsp;</div>  // Renders a blank space for null players
                )
                )}
            </div>
            <div className="player-list" style={{ textAlign: 'center', marginBottom: '20px' }}>
            {team2?.map((player, index) => 
                player ? (
                    <div className="player" key={index}>
                        <div className="avatar"></div>
                        <div className="details">
                            <span>{player.username}</span>
                            <span>{player.location}</span>
                        </div>
                    </div>
                ) : (
                    <div key={index}>&nbsp;</div>  // Renders a blank space for null players
                )
                )}
            </div>

        </div>
    );
}

export default Lobby;
