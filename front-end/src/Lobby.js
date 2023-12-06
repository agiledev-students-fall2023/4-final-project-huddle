import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./Lobby.css";

function Lobby() {
    const [team1, setTeam1] = useState([]);
    const location = useLocation();
    const { gameId } = location.state || {};

    useEffect(() => {
        const jwtToken = localStorage.getItem("token");
        if (gameId) {
            axios.get(`http://localhost:3000/games/${gameId}`, {
                headers: { Authorization: `Bearer ${jwtToken}` }
            })
            .then(response => {
                setTeam1(response.data.team1);
            })
            .catch(error => {
                console.error('Error fetching game details:', error);
            });
        }
    }, [gameId]);

    return (
        <div className="container" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>Lobby 1</h2>
            <div className="player-list" style={{ textAlign: 'center', marginBottom: '20px' }}>
                {team1.map((player, index) => (
                    <div className="player" key={index}>
                        <div className="avatar"></div>
                        <div className="details">
                            <span>{player.name}</span>
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
