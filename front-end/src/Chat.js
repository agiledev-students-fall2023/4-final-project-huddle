import React, { useState, useEffect } from "react"
import "./Chat.css"
import { Link } from "react-router-dom";
import axios from "axios"


const Chat = (props) => {

    const [chat, setChat] = useState({
        person: '', 
        sentmsg: [], 
        rcvdmsg: []
    }); 
    useEffect(() => {
        const fetchChat = () => {
            axios
                .get("http://localhost:3000/chat")
                .then(response => {
                    const chat = response.data
                    setChat(chat)
        });

        }
        fetchChat();
    }, [])


    return (
        <div className="Chat">
            <h3>Chat with {chat.person} </h3>
            {chat.sentmsg.map((message, index) => (
                 
                <Recieved key={index} message={message} />
            ))}
            {chat.rcvdmsg.map((message, index) => (
                <div className="Sent">
                <><Sent key={index} message={message} /></>
                </div>
            ))}
            

            {/* <Recieved chat={chat}/>
            <Sent chat={chat}/> 
            <Recieved chat={chat}/> */}
             <Textbox /> 
        </div>



    );
}

function Textbox(){
    return(
        <div className="textbox">
            <input type="text" placeholder="Type your message..."/>
            <button>></button>
            
            {/* <textarea className = "textbox"></textarea> */}
        </div>
        
    )
}
  
function Sent({ message }){
    return(
        <div className="Sent">
            <div className="messagetext">
                {/* <p>lorum ipsum</p> */}
                <p>{message}</p>

            </div>
            <img className = "profpic" alt="welcome!" src="https://picsum.photos/200?page=home" />

        </div>
    ); 

}

function Recieved({ message }){
    return(
        <div className="Recieved">
            <img className = "profpic" alt="welcome!" src="https://picsum.photos/200?page=home" />

            <div className="messagetext">
            <p>{message}</p>
            </div>

        </div>
    );
}

export default Chat