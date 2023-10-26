import React from "react"
import "./MatchHistory.css"
// import { Link } from 'react-router-dom'

const MatchHistory = props => {

    const divStyle = {
        border: '2px solid red',
    };

    return (
        <><div className="MatchHistory">
            <h1 style={{ textAlign: 'center'}}>Your Match History</h1>

            <section className="main-content">
                {/* <img alt="welcome!" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" /> */}
                <p>
                    
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                </p>
            </section>


        </div>    
        </>
    )
}

function MatchCard() {
    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
            <div>
                <label>Sport:</label>
                <span style={{ marginLeft: '10px' }}>Sport Name</span>
            </div>

            <div>
                <label>Players:</label>
                <span style={{ marginLeft: '10px' }}>#</span>
            </div>

            <div>
                <label>Tier:</label>
                <span style={{ marginLeft: '10px' }}> </span>
            </div>

            <div>
                <label>Location:</label>
                <span style={{ marginLeft: '10px' }}> </span>
            </div>

            <div>
                <label>Time:</label>
                <span style={{ marginLeft: '10px' }}>00:00</span>
            </div>

            <button style={{ marginTop: '10px' }}><a href={"./Match"}>See Details</a></button>
        </div>
    );
}

export default MatchHistory