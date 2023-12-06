
import React, { useContext } from "react"
import "./Friends.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { UserType } from "./UserContext";
import { FaSearch } from "react-icons/fa";


const Friends = props => {
  //  const {userId, setUserId} = useContext(UserType)
  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    const fetchFriend = async () => {
      try {
        const response = await axios.get("http://localhost:3000/friends")
        const friendsData = response.data.users;
        setFriends(friendsData);
      } catch (error) {
        const errMsg = JSON.stringify(error, null, 2);
        console.log(errMsg);
      }
    }
    fetchFriend();
  }, []);
  // const Friends = props => {

  //   const [friend, setFriend] = useState([]);
  //   useEffect(() => {
  //     const fetchFriend = async () => {
  //       axios
  //         .get("http://localhost:3000/friends")
  //         .then(response => {
  //           // axios bundles up all response data in response.data property
  //           const friend = response.data;
  //           setFriend(friend);
  //         })
  //         .catch(err => {
  //           const errMsg = JSON.stringify(err, null, 2);// convert error object to a string so we can simply dump it to the screen
  //           console.log(errMsg);
  //         })
  //     }
  //     fetchFriend();
  //   }, []);

  return (
    <div className="Friends">
           <button className="searchbutton"><a href={"./Search"}> <FaSearch /></a></button>

     <div className="header">

        <h1 >Your Friends</h1>
         

     </div>


      
      <button style={{ marginTop: '10px', padding: '5px', margin: '5px', backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', fontWeight:'bold'}}><a href={"./Search"}>Add New Friend</a></button>


      <section className="main-content">
        <div>
          {friends.map((friend) => (
            <FriendCard key={friend.name} friend={friend} />
          ))}
        </div>
        
      </section>
      
    </div>
  )
}

function FriendCard({friend}) {
  return (
      <div className="FriendCard">
        <img className="profpic" alt="profpic!" src="https://picsum.photos/200?page=home" />
        <div className="username">
          <div> {friend.name}
                {/* <span style={{ marginLeft: '10px' }}></span> */}
            </div>

            <div className="location">
                <label> <FaLocationDot /> {friend.location}</label>
                {/* <span style={{ marginLeft: '10px' }}> </span> */}
            </div>
            
            {/* <div>
                {/* <label>Contacts: {friend.contact}</label> */}
                {/* <span style={{ marginLeft: '10px' }}></span> */}
            {/* </div> */} 
          </div>

          {/* <div className="mbutton">
            See Details
          </div> */}

          {/* <mbutton>See Details</mbutton> */}
            

          <button style={{ marginLeft: '0px', marginTop: '10px', padding: '5px', margin: '5px', backgroundColor: 'white', borderRadius: '10px', border: 'solid' }}><a href={"./Profile"}>See Details</a></button>

          <button style={{ marginLeft: '0px', marginTop: '10px', padding: '5px', margin: '5px', backgroundColor: 'white', borderRadius: '10px', border: 'solid' }}><a href={"./Lobby"}>Invite</a></button>
          {/* <button className="plus-icon"><a href={"./Lobby"}>+</a></button> */}
      </div>
  );
}

export default Friends