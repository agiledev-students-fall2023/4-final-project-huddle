import React from "react"
import "./Chat.css"

function Chat(){
    return (
        <div>
            <h3>Chat with Person X </h3>
            <Recieved />
            <Sent /> 
            <Textbox /> 
        </div>
    );
}

function Textbox(){
    return(
        <div className="text">
            <textarea className = "textbox"></textarea>
        </div>
        
    )
}
  
function Sent(){
    return(
        <div className="Sent">
            <div className="messagetext">
                <p>lorum ipsum</p>
            </div>
            <img className = "profpic" alt="welcome!" src="https://picsum.photos/200?page=home" />

        </div>
    );
}

function Recieved(){
    return(
        <div className="Recieved">
            <img className = "profpic" alt="welcome!" src="https://picsum.photos/200?page=home" />

            <div className="messagetext">
                <p>lorum ipsum</p>
            </div>

        </div>
    );
}

export default Chat