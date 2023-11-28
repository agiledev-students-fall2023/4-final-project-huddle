import React from 'react';
import "./Search.css"


class SearchScreen extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Search</h2>

                {/* Search Bar */}
                <div className="search-bar" style={{ height: '50px', textAlign: 'center', marginBottom: '20px', borderRadius: '10px' }}>
                    <input type="text" placeholder="Username" />
                    <button>Enter</button>
                </div>

                {/* User List */}
                <div className="user-list" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    {[1, 2, 3, 4, 5].map((user, index) => (
                        <div className="user" key={index}>
                            <div className="avatar"></div>
                            <div className="details">
                                <span>Name</span>
                                <span>Location</span>
                                <span>Tier</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SearchScreen;
