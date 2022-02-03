// import necessary file 
import React from 'react';

// Departure Component 
const Departure = ({ inputDate, label, trip }) => {
    const handleDateChange = (e) => {
        inputDate(e.target.value);
    }
    return (
        <div>
            <label>{label}</label>
            {
                trip ? <input onChange={handleDateChange} placeholder='select dates' type='date' disabled />
                    :
                    <input onChange={handleDateChange} placeholder='select dates' type='date' />
            }

        </div>
    );
};

export default Departure;