import React, { useState } from 'react';
import "./Play.css"


const Play = () => {
    const [selectedSport, setSelectedSport] = useState(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <h2>Choose a Sport</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                {[...Array(2)].map((_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', gap: '20px' }}>
                        {[...Array(2)].map((_, colIndex) => {
                            const index = rowIndex * 2 + colIndex;
                            return (
                                <div 
                                    key={index}
                                    onClick={() => setSelectedSport(index)}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'gray',
                                        border: selectedSport === index ? '2px solid red' : 'none',
                                        cursor: 'pointer'
                                    }}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '40px' }}>
                <button style={{ marginRight: '20px' }}><a href={"./GamesHappeningSoon"}>Join a Game</a></button>
                <button><a href={"./CreateGame"}>Create a Game</a></button>
            </div>
        </div>
    );
}

export default Play;
