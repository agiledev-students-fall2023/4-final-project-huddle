import React from 'react';
import "./Lobby.css"

class Lobby extends React.Component {
    render() {
        return (
            <div className="container" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2>Lobby 1</h2>

                {/* Players List */}
                <div className="player-list" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    {[1, 2, 3].map((player, index) => (
                        <div className="player" key={index}>
                            <div className="avatar"></div>
                            <div className="details">
                                <span>Name </span>
                                <span>Location</span>    
                            </div>
                        </div>
                    ))}
                    <div className="add-player">
                        <button className="plus-icon"><a href={"./Friends"}>+</a></button>
                    </div>
                </div>

                {/* Invited List */}
                <div className="invited-list">
                    <h3>Invited</h3>
                    {['Name 1', 'Name 2', 'Name 3', 'Name 4'].map((name, index) => (
                        <div className="invited-name" key={index}>
                            <span>✔</span> {name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Lobby;
