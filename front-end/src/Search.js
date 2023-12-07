import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Search.css";

const { loggedInUsername } = ''

class SearchScreen extends React.Component {
    state = {
        searchInput: '',
        users: [],
        searchPerformed: false,
        sendingRequest: false,
        loggedInUsername: '' // Add this state to store the logged-in username
    };

    componentDidMount() {
        // Retrieve the logged-in user's username when the component mounts
        const loggedInUsername = localStorage.getItem('loggedInUsername'); // Replace 'loggedInUsername' with the actual key you used
        this.setState({ loggedInUsername });
    }

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

    sendFriendRequest = async (receiverUsername) => {
        this.setState({ sendingRequest: true });
        try {
            const { loggedInUsername } = localStorage.getItem('username');
            await axios.post('http://localhost:3000/sendFriendRequest', { senderId: loggedInUsername, receiverId: receiverUsername });
            alert("Friend request sent successfully.");
        } catch (error) {
            console.error('Error sending friend request:', error);
            alert("Failed to send friend request.");
        } finally {
            this.setState({ sendingRequest: false });
        }
    };

    acceptFriendRequest = async (requestUsername) => {
      try {
        await axios.post('http://localhost:3000/acceptFriendRequest', { userId: loggedInUsername, requestId: requestUsername });
        console.log('Friend request accepted.');
      } catch (error) {
        console.error('Error accepting friend request:', error);
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
                                    <img src={user.profilePicture!==undefined ? user.profilePicture: ("/defaultProfile.png")} alt="Avatar" />
                                </div>
                                <div className="details">
                                    <Link to={`/viewprofile/${user.username}`}> <span className="username">{user.username}</span></Link>
                                    <span className="location">{user.location}</span>
                                    <button 
                                        onClick={() => this.sendFriendRequest(user.username)}
                                        disabled={this.state.sendingRequest}
                                    >
                                        Send Friend Request
                                    </button>
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