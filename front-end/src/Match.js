// Match.js

import React from "react";
import { useParams } from 'react-router-dom';

const Match = () => {
    // Get the matchId from the URL
    const { matchId } = useParams();

    // You can use matchId to fetch the details of the specific match from your backend
    // ...

    return (
        <div className="Match">
            <h1>Match Details</h1>
            <section className="main-content">
                {/* Display match details using the fetched data */}
                <MatchCard matchId={matchId} />
            </section>
        </div>
    );
}

function MatchCard({ matchId }) {

    return (
        <div>
            <h3>Match Details</h3>
            {/* Display match details using the fetched data */}
            <div>
                <label>Sport: </label>
                <span>Sport Name</span>
            </div>

            <div>
                <label>Players: </label>
                <span>#</span>
            </div>

            <div>
                <label>Tier: </label>
                <span> </span>
            </div>

            <div>
                <label>Location: </label>
                <span> </span>
            </div>

            <div>
                <label>Time: </label>
                <span>00:00</span>
            </div>
        </div>
    );
}

export default Match;


// import React from "react"
// import "./Match.css"
// // import { Link } from 'react-router-dom'

// const Match = props => {
//   return (
//     <div className="Match">
//       <h1>  Match</h1>
//       <section className="main-content">
//         {/* <img alt="welcome!" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" /> */}
//         <p>
          
//           <div className="MatchCard">
//             <MatchCard />
            
//           </div>
//         </p>

//       </section>
      
//     </div>
//   )
// }

// function MatchCard() {
//   return (
//       <div >
//        <h3>Match Details</h3> 
//           <div>
//               <label>Sport: </label>
//               <span >Sport Name</span>
//           </div>

//           <div>
//               <label>Players: </label>
//               <span >#</span>
//           </div>

//           <div>
//               <label>Tier: </label>
//               <span > </span>
//           </div>

//           <div>
//               <label>Location: </label>
//               <span > </span>
//           </div>

//           <div>
//               <label>Time: </label>
//               <span >00:00</span>
//           </div>

//           {/* <button style={{ marginTop: '10px' }}><a href={"./Match"}>See Details</a></button> */}
//       </div>
//   );
// }

// export default Match