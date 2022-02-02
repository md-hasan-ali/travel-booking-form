// import necessary file 
import React from 'react';

// Departure Component 
const Departure = ({ inputDate, label }) => {
    const handleDateChange = (e) => {
        inputDate(e.target.value);
    }
    return (
        <div>
            <label>{label}</label>
            <input onChange={handleDateChange} placeholder='select dates' type='date' />
        </div>
    );
};

export default Departure;