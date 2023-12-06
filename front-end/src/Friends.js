
import React, { useContext } from "react"
import "./Friends.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { UserType } from "./UserContext";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom";


const Friends = props => {
  const jwtToken = localStorage.getItem("token");
  //const {userId, setUserId, jwtToken} = useContext(UserType)

  const [isLoggedIn, setIsLoggedIn] = useState(jwtToken && true)

  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    const fetchFriend = async () => {
      axios
      .get("http://localhost:3000/protected/friends",
      {headers: { Authorization: `JWT ${jwtToken}` },
  })

      .then(response => {
        // const friendsData = response.data.users;
        const friendsData = response.data.friends;
        setFriends(friendsData);
        console.log(friendsData);
      })
      .catch(error => {
        const errMsg = JSON.stringify(error, null, 2);
        console.log(errMsg);
      })


      // try {
      //   const response = await axios.get("http://localhost:3000/friends")
      //   const friendsData = response.data.users;
      //   setFriends(friendsData);
      // } catch (error) {
      //   const errMsg = JSON.stringify(error, null, 2);
      //   console.log(errMsg);
      // }
    }
    fetchFriend();
  }, []);


  return (
    <>
    {isLoggedIn ? (
      <div className="Friends">
         <h1 >Your Friends</h1>
        <button className="searchbutton"><a href={"./Search"}> <FaSearch /></a></button>
        <button style={{ marginTop: '10px', padding: '5px', margin: '5px', backgroundColor: 'lightpink', borderRadius: '10px', border: 'solid'  }}><a href={"./Search"}>Add New Friend</a></button>


        <section className="main-content">
          <div>
            {friends.length>0?friends.map((friend) => (
              <FriendCard key={friend.name} friend={friend} />
            )): <div className="noFriends">{"nothing to see here:("}</div>}
          </div>

          
          
        </section>
        
      </div>
    ) : (<Navigate to="/login" />
    )}
    </>
  )
}

function FriendCard({friend}) {
  return (
      <div className="FriendCard">
        <img className="profpic" alt="profpic!" src={friend.profilePicture || "/defaultProfile.png"} />
        <div className="friendDetails">
          <div>Name: {friend.username}
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
            

          <button style={{ marginLeft: '0px', marginTop: '10px', padding: '5px', margin: '5px', backgroundColor: 'pink', borderRadius: '10px', border: 'solid' }}><Link to={`/viewprofile/${friend.username}`}>See Details</Link></button>

          <button style={{ marginLeft: '0px', marginTop: '10px', padding: '5px', margin: '5px', backgroundColor: 'pink', borderRadius: '10px', border: 'solid' }}><a href={"/Lobby"}>Invite</a></button>
          {/* <button className="plus-icon"><a href={"./Lobby"}>+</a></button> */}
      </div>
  );
}

export default Friends