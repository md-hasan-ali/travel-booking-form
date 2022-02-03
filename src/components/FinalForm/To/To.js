import React from 'react';

const To = ({ setTo, label }) => {

    const handleOnchange = (e) => {
        setTo(e.target.value);
    }
    return (
        <div>
            <label>{label}</label>
            <div className="location">
                <input onChange={handleOnchange} placeholder='Select Destination' /><i className="fas fa-map-marker"></i>
            </div>
        </div>
    );
};

export default To;