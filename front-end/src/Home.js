import React from "react"
// import logo from './logo.svg';
import "./Home.css"

const Home = props => {
  return (
    <div className="Home">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img alt="welcome!" src="https://picsum.photos/200?page=home" />
        <p>
          This is home.
          
        </p>
      </section>
    </div>
  )
}

export default Home