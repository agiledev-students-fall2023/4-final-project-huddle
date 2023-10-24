import React from "react"
import "./Friends.css"
// import { Link } from 'react-router-dom'

const Friends = props => {
  return (
    <div className="Friends">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img alt="welcome!" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
        <p>
          This is your friends.
          
        </p>
      </section>
      
    </div>
  )
}

export default Friends