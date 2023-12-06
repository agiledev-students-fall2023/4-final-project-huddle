import React from 'react';
import axios from 'axios';
import "./CreateGame.css";

class NewGameForm extends React.Component {
    state = {
        location: '',
        time: '',
        sport: '',
        numberOfPlayers: 0
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/createGame', this.state)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <div className="new-game-container">
                <h2 className="form-title">New Game</h2>
                <form action = "/createGame" className="game-form">
                    <div className="form-group">
                        <label>Location: </label>
                        <input
                            name="location"
                            type="text"
                            className="form-control"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input
                            name="date"
                            type="date"
                            className="form-control"
                            value={this.state.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Time: </label>
                        <input
                            name="time"
                            type="time"
                            className="form-control"
                            value={this.state.time}
                            onChange={this.handleChange}
                            min="00:00"
                            max="12:59"
                        />
                    </div>
                    <div className="form-group">
                        <label>Sport: </label>
                        <select 
                            name="sport"
                            className="form-control"
                            value={this.state.sport}
                            onChange={this.handleChange}>
                            <option value="">Select Sport</option>
                            <option value="Volleyball">Volleyball</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Soccer">Soccer</option>
                            <option value="Tennis">Tennis</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label># of Players: </label>
                        <input
                            name="numberOfPlayers"
                            type="number"
                            className="form-control"
                            value={this.state.numberOfPlayers}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <button type="submit" onClick={this.handleSubmit} className="submit-btn">Create Game</button>
                </form>
            </div>
        );
    }
}

export default NewGameForm;
