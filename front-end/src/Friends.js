import React from "react"
import "./Friends.css"
// import { Link } from 'react-router-dom'

const Friends = props => {
  return (
    <div className="Friends">
      <h1 style={{ textAlign: 'center'}}>Your Friends</h1>

      <section className="main-content">
        {/* <img alt="welcome!" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" /> */}
        <p>
          
          <FriendCard />
          <FriendCard />
          <FriendCard />

          <button style={{ marginTop: '10px' }}>Add a New Friend</button>


        </p>
      </section>
      
    </div>
  )
}

function FriendCard() {
  return (
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
          <div>
              <label>Name:</label>
              <span style={{ marginLeft: '10px' }}></span>
          </div>

          <div>
              <label>Sport Names:</label>
              <span style={{ marginLeft: '10px' }}></span>
          </div>

          <div>
              <label>Location:</label>
              <span style={{ marginLeft: '10px' }}> </span>
          </div>
          
          <div>
              <label>Contacts:</label>
              <span style={{ marginLeft: '10px' }}></span>
          </div>

          <button style={{ marginTop: '10px' }}><a href={"./Profile"}>See Details</a></button>

          <button style={{ marginTop: '10px' }}><a href={"./Lobby"}>Invite</a></button>
          {/* <button className="plus-icon"><a href={"./Lobby"}>+</a></button> */}
      </div>
  );
}

export default Friends