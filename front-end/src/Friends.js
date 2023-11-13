
import React from "react"
import "./Friends.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const Friends = props => {

  const [friend, setFriend] = useState([]);
  useEffect(() => {
    const fetchFriend = async () => {
      axios
        .get("http://localhost:3000/friends")
        .then(response => {
          // axios bundles up all response data in response.data property
          const friend = response.data;
          setFriend(friend);
        })
        .catch(err => {
          const errMsg = JSON.stringify(err, null, 2);// convert error object to a string so we can simply dump it to the screen
          console.log(errMsg);
        })
    }
    fetchFriend();
  }, []);


  return (
    <div className="Friends">
      <h1 style={{ textAlign: 'center'}}>Your Friends</h1>

      <section className="main-content">
        {/* <img alt="welcome!" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" /> */}
        <p>
          {/* {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))} */}
          <FriendCard  friend = {friend} />
          <FriendCard  friend = {friend} />
          <FriendCard  friend = {friend} />
          {/* <FriendCard />
          <FriendCard /> */}



          

          <button style={{ marginTop: '10px' }}>Add a New Friend</button>


        </p>
      </section>
      
    </div>
  )
}

function FriendCard({friend}) {
  return (
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
          <div>
              <label>Name: {friend.name}</label>
              <span style={{ marginLeft: '10px' }}></span>
          </div>

          <div>
              <label>Sport Names:</label>
              <span style={{ marginLeft: '10px' }}></span>
          </div>

          <div>
              <label>Location: {friend.location}</label>
              <span style={{ marginLeft: '10px' }}> </span>
          </div>
          
          <div>
              <label>Contacts: {friend.contact}</label>
              <span style={{ marginLeft: '10px' }}></span>
          </div>

          <button style={{ marginTop: '10px' }}><a href={"./Profile"}>See Details</a></button>

          <button style={{ marginTop: '10px' }}><a href={"./Lobby"}>Invite</a></button>
          {/* <button className="plus-icon"><a href={"./Lobby"}>+</a></button> */}
      </div>
  );
}

export default Friends