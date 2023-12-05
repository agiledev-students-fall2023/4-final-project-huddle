import React, { useContext, useState, useEffect, Pressable } from "react"
import "./Messages.css"
import { Link } from "react-router-dom";
import axios from "axios"
// import { response } from "../../back-end/app";
import { LuMessageSquarePlus } from "react-icons/lu";
import { UserType } from "./UserContext";



const Messages = (props) => {

    const [friends, setFriends] = useState([]);
    const { userId, setUserId } = useContext(UserType);
    const [message, setMessage] = useState([])
    useEffect(() => {
        const friendsList = async () => {
            try {
              const response = await fetch(
                // `http://localhost:3000/messages/${userId}` 
                //^CHANGE?!?!
                `http://localhost:3000/friends/${userId}` 

              );
              const data = await response.json();
      
              if (response.ok) {
                setFriends(data);
              }
            } catch (error) {
              console.log("error showing the friends", error);
            }
          };
          friendsList();
        }, []);
        //   const fetchMessage = () => {
        //     axios
        //         .get("http://localhost:3000/messages")
        //         .then(response => {
        //             const message = response.data
        //             setMessage(message)
        // });
       
    // }

        // console.log(Message)
        // return () => Message
        // fetchMessage();



      console.log("friends",friends)

    return (
        <div>
            <div className="header">
                <h2>Messages </h2>
            </div>
            <Link to="/chat">
                (friends.map((item, index)) => (
                    {/* <Message key={index} item={item}/> */}
                {/* ))} */}
                {/* <Image source = ({uri:item?.image})/> */}
            </Link>
            <NewMessage />
            <div className="Message">
                {/* Friends.map((item,index) => ( */}

                {/* )) */}
            </div>
            <Message message={message}/>
            <Message message={message}/>

        </div>

    );
}

function NewMessage(){
    return (
        <div>
            <Link to="/NewMessage">
                {/* <h3>props.NewMessage </h3> */}
                <h3>New Message <LuMessageSquarePlus /></h3>
            </Link>
        </div>
    )
}

function Message ({message}) {

    // if (!message){
    //     return null; 
    // }

    return(
        <Link to="/chat">

            <div className="Message">
                <img className="profpic" alt="welcome!" src="https://picsum.photos/200?page=home" />
                <div className="messagetext">
                    {/* <h3>{props.message.from}</h3> */}
                    {/* <p>{Messages.text}</p> */}
                    <p>{message.from}</p>
                    <p>{message.text}</p>
                    
                    {/* <p>lorum ipsum</p> */}
                 {/* <p>{props.message.text}</p> */}
                </div>
            </div>
        </Link>

    );
}

export default Messages