import React from "react"
import "./Match.css"
// import { Link } from 'react-router-dom'

const sports = [
  { name: 'Basketball', icon: process.env.PUBLIC_URL + '/bball.jpeg' },
  { name: 'Soccer', icon: process.env.PUBLIC_URL + '/soccer.jpeg' },
  { name: 'Tennis', icon: process.env.PUBLIC_URL + '/tennis.jpeg' },
  { name: 'Volleyball', icon: process.env.PUBLIC_URL + '/volleyball.jpeg' },
];

const Match = props => {
  return (
    <div className="Match">
      {/* <h1>  Match</h1> */}
      <section className="main-content">
        <img className="pic" alt="sport pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
        <p>
          <div className="header">
            Match Details
          </div>
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
      <div>
      {/* <div className="cardheader"> */}

       {/* <h3>Match Details</h3>  */}
          <div className="cardtext">
              <label>Sport: </label>
              <span >Baseball Game </span>
          </div>

          <div className="cardtext">
              <label>Team: </label>
              <span > team Huddle </span>
          </div>



          <div className="team">
              <label>  </label>
              <div > soph </div>
              <div > john </div>
          </div>


         

          <div className="cardtext">
            <label>
              Date: 12/3 
            </label>
            
              <label> | Time: </label>
              <span >4:40</span>
              <span >
                
              </span>
          </div>



          <div className="cardtext">
              <label>Tier: </label>
              <span > Beginner </span>
          </div>

          <div className="cardtext">
              <label>Location: </label>
              <span > 10012 </span>
          </div>

          {/* <button style={{ marginTop: '10px' }}><a href={"./Match"}>See Details</a></button> */}
      </div>
  );
}

export default Match