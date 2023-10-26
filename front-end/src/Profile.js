import React from "react"
import "./Profile.css"

const Profile = props => {
  return (
    <div className="Profile">
      
      <section className="main-content">
        <div className="biofull">
          <img alt="welcome!" src="https://picsum.photos/150?page=home"/>

          <div className="bio">
            <p>Name: First, Last</p>
            <p>Location: City, State</p>
            <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus. Elit ullamcorper dignissim cras tincidunt lobortis.</p>
          </div>

        </div>

        <div className="comments">
          <h2>Profile Comments</h2>
          <h3>User 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Elementum nisi quis eleifend quam adipiscing.</p>
        </div>

        <div className="userSports">
          <h2>User's Sports</h2>
          <ul>
            <li>Sport 1 : Ranking</li>
            <li>Sport 2 : Ranking</li>
            <li>Sport 3 : Ranking</li>
          </ul>
        </div>

        <div className="ratings">
          <h2>Ratings</h2>
          <div className="sportRating">
            <h3>Sport 1</h3>
            <p>Skill 1: ⭐⭐⭐☆☆</p>
            <p>Skill 2: ⭐⭐⭐⭐☆</p>
            <p>Skill 3: ⭐⭐⭐☆☆</p>
          </div>
          <div className="sportRating">
            <h3>Sport 2</h3>
            <p>Skill 1: ⭐⭐⭐⭐⭐</p>
            <p>Skill 2: ⭐⭐⭐⭐☆</p>
            <p>Skill 3: ⭐☆☆☆☆</p>
          </div>
        </div>
        <div className="record">
          <h2>Record</h2>
          <p id = "history">Total Record: Wins : Losses </p>

          <div className="match">
            
            <p>Game 1 : Ending Score W/L: Points: Points</p>
            <p>Location : City</p>
            <p>Players : Lorem ipsum dolor sit amet, consectetur adipiscing elt</p>
          </div>
        </div>

        </section>
    </div>
  )
}

export default Profile