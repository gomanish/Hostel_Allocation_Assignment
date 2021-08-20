import React from 'react';

function Booked(props){
    return(
        <div className="container">
            <h1>Welcome {props.children} </h1>
            <p>Your Room details as follows: </p>
            <p>Hostel No.</p>
            <p>Room No.</p>

        </div>
    ) 
}

export default Booked;