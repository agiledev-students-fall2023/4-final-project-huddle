import React from "react"
import "./MatchHistory.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, Navigate } from 'react-router-dom'
  
const MatchHistory = props => {
    const jwtToken = localStorage.getItem("token"); // gets the token
    const [matchHistory, setMatchHistory] = useState([]);
    useEffect(() => {
      const fetchMatchHistory = async () => {
        try {
          const response = await axios.get("http://localhost:3000/protected/matchHistory",{headers: { Authorization: `JWT ${jwtToken}` },
        });
          const matchHistoryData = response.data.matches;
          setMatchHistory(matchHistoryData);
        } catch (error) {
          const errMsg = JSON.stringify(error, null, 2);
          console.log(errMsg);
        }
      };
      fetchMatchHistory();
    }, []);
    

    return (
        <><div className="MatchHistory">
            <h1 style={{ textAlign: 'center'}}>Your Match History</h1>

            <section className="main-content">

                {matchHistory.length>0? matchHistory.map((match) => (
                    
                    <MatchCard key={match.dateAndTime} match={match} />
                )): <div className="noMatches">No Matches at This Time...</div>}

                {/* <MatchCard key={match.id} match={match} /> */}

                
                {/* {Array.isArray(matchHistory) && matchHistory.length > 0 ? ( */}
                {/* {matchHistory.map((match) => (
                    <MatchCard key={match.id} match={match} />
                ))} */}
             
            </section>


        </div>    
        </>
    )
}

function MatchCard({ match }) {
    console.log(match);
    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px', borderRadius: '10px', background: 'white' }}>
        <div>
            <label>Sport:</label>
            <span style={{ marginLeft: '10px' }}>{match.sportName}</span>
        </div>

        <div>
            <label>Location:</label>
            <span style={{ marginLeft: '10px' }}>{match.location}</span>
        </div>

        <div>
            <label>In Progress:</label>
            <span style={{ marginLeft: '10px' }}>{match.inProgress ? 'Yes' : 'No'}</span>
        </div>

        <div>
            <br />
            <label>Teams:</label>
            <br />
            <span style={{ marginLeft: '10px' }}>{match.team1.join(', ')} <br />vs<br /> {match.team2.join(' ')}</span>
        </div>

        <div>
            <br />
            <label>Date and Time:</label>
            <span style={{ marginLeft: '10px' }}>{match.dateAndTime}</span>
        </div>

        <div>
            <label>Is Full:</label>
            <span style={{ marginLeft: '10px' }}>{match.isFull ? 'Yes' : 'No'}</span>
        </div>

        <div> 
            <label>Winner:</label>
            <span style={{ marginLeft: '10px' }}>{match.winner || 'Not decided yet'}</span>
        </div>

        <button style={{ marginTop: '10px' }}>
            <Link to={`/editmatch/${match._id}`}>Edit Match</Link>
        </button>

        {/* <button style={{ marginTop: '10px' }}>
            <Link to={`./Match/${match.id}`}>See Details</Link>
            
        </button> */}
        </div>
    );
}



export default MatchHistory;