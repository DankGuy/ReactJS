import React from 'react';
import './ClockDisplay.css';

const ClockDisplay = (props) => {
    return (
        <div className='clockdisplay-container'>
            <h1>Date: {props.date}</h1>
            <h1>Time: {props.time}</h1>
        </div>
    );
}

export default ClockDisplay;