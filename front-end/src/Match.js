import React from "react"
import "./Match.css"
// import { Link } from 'react-router-dom'

const Match = props => {
  return (
    <div className="MatchHistory">
      <h1>  Match</h1>
      <section className="main-content">
        {/* <img alt="welcome!" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" /> */}
        <p>
          
          <div className="MatchCard">
            <MatchCard />
            
          </div>
        </p>

      </section>
      
    </div>
  )
}

function MatchCard() {
  return (
      <div >
       <h3>Match Details</h3> 
          <div>
              <label>Sport: </label>
              <span >Sport Name</span>
          </div>

          <div>
              <label>Players: </label>
              <span >#</span>
          </div>

          <div>
              <label>Tier: </label>
              <span > </span>
          </div>

          <div>
              <label>Location: </label>
              <span > </span>
          </div>

          <div>
              <label>Time: </label>
              <span >00:00</span>
          </div>

          {/* <button style={{ marginTop: '10px' }}><a href={"./Match"}>See Details</a></button> */}
      </div>
  );
}

export default Match