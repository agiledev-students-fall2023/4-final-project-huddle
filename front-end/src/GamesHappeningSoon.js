import React from 'react';
import "./GamesHappeningSoon.css"

function App() {
    return (
        <div style={{ padding: '20px' }}>
            <header style={{ marginBottom: '20px' }}>
                {/* Placeholder for the top part of the wireframe */}
            </header>

            <section>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Games Happening Soon</h2>

                <GameCard />
                <GameCard />
                <GameCard />
            </section>
        </div>
    );
}

function GameCard() {
    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
            <div>
                <label>Sport:</label>
                <span style={{ marginLeft: '10px' }}>Sport Name</span>
            </div>
            <div>
                <label># Players needed:</label>
                <span style={{ marginLeft: '10px' }}>Number</span>
            </div>
            <div>
                <label>Tier:</label>
                <span style={{ marginLeft: '10px' }}>Tier Level</span>
            </div>
            <div>
                <label>Location:</label>
                <span style={{ marginLeft: '10px' }}>Location Name</span>
            </div>
            <div>
                <label>Time:</label>
                <span style={{ marginLeft: '10px' }}>00:00 PM</span>
            </div>
            <button style={{ marginTop: '10px' }}><a href={"./Lobby"}>Join Game</a></button>
        </div>
    );
}

export default App;
