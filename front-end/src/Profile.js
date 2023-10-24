import React from "react"
import "./Profile.css"

const Profile = props => {
  return (
    <div className="Profile">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img alt="welcome!" src="https://picsum.photos/200?page=home" />
        <p>
          This is the profile
          
        </p>
      </section>
    </div>
  )
}

export default Profile