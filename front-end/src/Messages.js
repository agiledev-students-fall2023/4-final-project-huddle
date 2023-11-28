import React, { useState, useEffect } from "react"
import "./Messages.css"
import { Link } from "react-router-dom";
import axios from "axios"
// import { response } from "../../back-end/app";
import { LuMessageSquarePlus } from "react-icons/lu";



const Messages = (props) => {

    const [message, setMessage] = useState([])
    useEffect(() => {
        const fetchMessage = () => {
            axios
                .get("http://localhost:3000/messages")
                .then(response => {
                    const message = response.data
                    setMessage(message)
        });
        // console.log("working!!")
       
    }

        // console.log(Message)
        // return () => Message
        fetchMessage();
    }, [])

    return (
        <div>
            <div className="header">
                <h2>Messages </h2>
            </div>
            
            {/* <Link to="/chat">
                <h3>New Message </h3>
            </Link> */}

            {/* const Message = (props) => { */}

            <Link to="/chat">

            {/* <div className="Message">
                <img className="profpic" alt="welcome!" src="https://picsum.photos/200?page=home" />
                <div className="messagetext">
                    <h3>THIS IS THE SINGLE ONE</h3>
                    <p>{message.from}</p>
                    <p>{message.text}</p>
                </div>
            </div> */}
            </Link>

            <NewMessage />


            {/* <Message message = {message}/> */}

            <Message message={message}/>
            <Message message={message}/>
            {/* <Message />
            <Message />
            <Message /> */}
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