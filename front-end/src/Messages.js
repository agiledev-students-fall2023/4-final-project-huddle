import React from "react"
import "./Messages.css"
import { Link } from "react-router-dom";
import axios from "axios"

function Messages(){
    return (
        <div>
            <h2>Messages </h2>
            {/* <Link to="/chat">
                <h3>New Message </h3>
            </Link> */}



            <NewMessage />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>

    );
}

function NewMessage(){
    return (
        <div>
            <Link to="/NewMessage">
                <h3>New Message </h3>
            </Link>
        </div>
    )
}

function Message(){
    return(
        <Link to="/chat">

            <div className="Message">
                <img className="profpic" alt="welcome!" src="https://picsum.photos/200?page=home" />
                <div className="messagetext">
                    <h3>Name</h3>
                    <p>lorum ipsum</p>
                </div>
            </div>
        </Link>

    );
}

export default Messages