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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    
                </div> 
            </div>
        );
    }
}

export default AboutUs;
