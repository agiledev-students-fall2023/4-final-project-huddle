import React from "react"
import "./NewMessage.css"

function NewMessage(){
    return (
        <div>
            <Recipient/>
          
            <Textbox /> 
        </div>
    );
}

function Recipient(){
    return (
        <div className="Recipient">
            <h2>To:  </h2>
            <Textbox2 /> 
            
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

function Textbox2(){
    return(
        <div className="text2">
            <textarea className = "textbox2"></textarea>
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

export default NewMessage