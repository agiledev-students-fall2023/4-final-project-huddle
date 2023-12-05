import React from 'react';
import axios from 'axios';
import "./Search.css";

class SearchScreen extends React.Component {
    state = {
        searchInput: '',
        users: [],
        searchPerformed: false
    };

    handleSearchChange = (e) => {
        this.setState({ searchInput: e.target.value });
    };

    handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/search?username=${this.state.searchInput}`);
            this.setState({ users: response.data, searchPerformed: true });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {
        return (
            <div className="container">
                <h2>Search</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Username" onChange={this.handleSearchChange} />
                    <button onClick={this.handleSearch}>Search</button>
                </div>

                <div className="user-list">
                    {this.state.users.length > 0 ? (
                        this.state.users.map((user, index) => (
                            <div className="user" key={index}>
                                <div className="avatar">
                                    <img src={user.profilePicture} alt="Avatar" />
                                </div>
                                <div className="details">
                                    <span className="username">{user.username}</span>
                                    <span className="location">{user.location}</span>
                                    {/* ... */}
                                </div>
                            </div>
                        ))
                    ) : this.state.searchPerformed ? (
                        <div className="no-users-found">No users found!</div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default SearchScreen;
