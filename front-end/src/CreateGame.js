import React from 'react';
import "./CreateGame.css"

class NewGameForm extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>New Game</h2>
                
                <div className="form-group">
                    <label>Tier</label>
                    <select className="form-control">
                        {/* Options can be added here */}
                        <option>Select Tier</option>
                    </select>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Location</label>
                    <select className="form-control">
                        {/* Options can be added here */}
                        <option>Select Location</option>
                    </select>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Time</label>
                    <select className="form-control">
                        {/* Options can be added here */}
                        <option>Select Time</option>
                    </select>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Sport</label>
                    <select className="form-control">
                        {/* Options can be added here */}
                        <option>Select Sport</option>
                    </select>
                </div>
                <br></br>
                <div className="form-group">
                    <label># of Players</label>
                    <select className="form-control">
                        {/* Options can be added here */}
                        <option>Select Number of Players</option>
                    </select>
                </div>
                <br></br>
                <button className="btn btn-primary"><a href={"./Lobby"}>Create Game</a></button>
            </div>
        );
    }
}

export default NewGameForm;
