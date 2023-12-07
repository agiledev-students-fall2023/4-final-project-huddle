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
            <div>Location of Game: {game.location}</div>
            <div className="player-list" style={{ textAlign: 'center', marginBottom: '20px' }}>
                {team1?.map((player, index) => (
                    <div className="player" key={index}>
                        <div className="avatar"></div>
                        <div className="details">
                            <span>{player.username}</span>
                            <span>{player.location}</span>
                        </div>
                    </div>
                ))}
                <div className="add-player">
                    <button className="plus-icon">+</button>
                </div>
            </div>
        </div>
    );
}

export default Lobby;
