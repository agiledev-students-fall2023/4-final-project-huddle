import React from 'react';
import "./AboutUs.css"
import huddlelogo from './icons/huddlelogo.png';



class AboutUs extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>About Us</h2>
                {/* <div className='pic'><img src={'https://picsum.photos/120'} /></div> */}

                <div className='pic'>
                    <img src={huddlelogo} alt='huddle logo'/></div>
                {/* process.env.PUBLIC_URL + '/bball.jpeg' */}
                <div>
                    <p> 
                    Welcome to Huddle, the innovative web-app that bridges the gap between sports enthusiasts and the perfect game. Whether you're a seasoned player or just stepping into the world of sports, Huddle is here to connect you with teammates and practice partners across a variety of sports. Our mission is to solve the all-too-common problem of not having enough members for a game of basketball, volleyball, soccer, tennis, and more. Huddle is more than just a platform; it's a community that brings people together, allowing users to find or create pick-up games effortlessly.
                    </p>

                    <p>
                    Huddle is designed for everyone who has a passion for sports. Whether you're a multi-sport athlete or devoted to a single sport, our app caters to all levels of experience and interest. Beginners seeking to learn and grow in a new sport will find Huddle particularly beneficial, as it connects them with players of all skill levels. It's not just about playing a game; it's about improving, learning, and enjoying your favorite pastime. Every athlete, novice, or sports enthusiast will discover something valuable in Huddle. Join us, and elevate your game!
                    </p>
                    
                </div> 
            </div>
        );
    }
}

export default AboutUs;
