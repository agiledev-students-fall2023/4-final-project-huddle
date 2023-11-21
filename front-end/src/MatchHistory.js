import React from "react"
import "./MatchHistory.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const MatchHistory = props => {

    const [matchHistory, setMatchHistory] = useState([]);
    useEffect(() => {
    const fetchMatchHistory = async () => {
        axios
        .get("http://localhost:3000/friends")
        .then(response => {
            // axios bundles up all response data in response.data property
            const matchHistory = response.data;
            setMatchHistory(matchHistory);
        })
        .catch(err => {
            const errMsg = JSON.stringify(err, null, 2);// convert error object to a string so we can simply dump it to the screen
            console.log(errMsg);
        })
    }
    fetchMatchHistory();
    }, []);
    
    const divStyle = {
        border: '2px solid red',
    };

    return (
        <><div className="MatchHistory">
            <h1 style={{ textAlign: 'center'}}>Your Match History</h1>

            <section className="main-content">
                {/* <img alt="welcome!" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" /> */}
                <p>
                    
                    <MatchCard matchHistory={matchHistory}/>
                    <MatchCard matchHistory={matchHistory}/>
                    <MatchCard matchHistory={matchHistory}/>
                </p>
            </section>


        </div>    
        </>
    )
}

function MatchCard({matchHistory}) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' , borderRadius: '10px', background: 'white'}}>
            <div>
                <label>Sport:</label>
                <span style={{ marginLeft: '10px' }}>Sport Name</span>
            </div>

            <div>
                <label>Players: {matchHistory.player}</label>
                <span style={{ marginLeft: '10px' }}>#</span>
            </div>

            <div>
                <label>Tier:</label>
                <span style={{ marginLeft: '10px' }}> </span>
            </div>

            <div>
                <label>Location: {matchHistory.location}</label>
                <span style={{ marginLeft: '10px' }}> </span>
            </div>

            <div>
                <label>Time: {matchHistory.time}</label>
                <span style={{ marginLeft: '10px' }}>00:00</span>
            </div>

            <button style={{ marginTop: '10px' }}><a href={"./Match"}>See Details</a></button>
        </div>
    );
}

export default MatchHistory