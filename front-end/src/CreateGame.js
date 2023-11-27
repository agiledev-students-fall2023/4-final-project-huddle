import React from 'react';
import "./CreateGame.css"

class NewGameForm extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>New Game</h2>
                
                <div className="form-group">
                    <label>Tier: </label>
                    <select className="form-control">
                        <option>Select Tier</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label>Location: </label>
                    <select className="form-control">
                        <option>Select Location</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Time: </label>
                    <select className="form-control">
                        <option>Select Time</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Sport: </label>
                    <select className="form-control">
                        <option>Select Sport</option>
                    </select>
                </div>
                <div className="form-group">
                    <label># of Players: </label>
                    <select className="form-control">
                        <option>Select Number of Players</option>
                    </select>
                </div>
                <button className="btn btn-primary"><a href={"./Lobby"}>Create Game</a></button>
            </div>
        );
    }
}

export default NewGameForm;
