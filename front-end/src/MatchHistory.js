import React from "react"
import "./MatchHistory.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
  
const MatchHistory = props => {

    const [matchHistory, setMatchHistory] = useState([]);
    useEffect(() => {
      const fetchMatchHistory = async () => {
        try {
          const response = await axios.get("http://localhost:3000/matchHistory");
          const matchHistoryData = response.data;
          setMatchHistory(matchHistoryData);
        } catch (error) {
          const errMsg = JSON.stringify(error, null, 2);
          console.log(errMsg);
        }
      };
  
      fetchMatchHistory();
    }, []);
    
    const divStyle = {
        border: '2px solid red',
    };

    return (
        <><div className="MatchHistory">
            <h1 style={{ textAlign: 'center'}}>Your Match History</h1>

            <section className="main-content">
                {matchHistory.map((match) => (
                <MatchCard key={match.id} match={match} />
                ))}
                {/* <img alt="welcome!" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" /> */}
                {/* <p>
                    
                    <MatchCard matchHistory={matchHistory}/>
                    <MatchCard matchHistory={matchHistory}/>
                    <MatchCard matchHistory={matchHistory}/>
                </p> */}
            </section>


        </div>    
        </>
    )
}

function MatchCard({ match }) {
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
        <label>Teams:</label>
        <span style={{ marginLeft: '10px' }}>{match.team1} vs {match.team2}</span>
      </div>

      <div>
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

      <button style={{ marginTop: '10px' }}><a href={`./Match/${match.id}`}>See Details</a></button>
    </div>
  );
}

export default MatchCard;


export default MatchHistory