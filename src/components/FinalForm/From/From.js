// import necessary file 
import React from 'react';
import './from.css'

// create from component
const From = ({ setFrom, label }) => {
    const handleOnchange = (e) => {
        setFrom(e.target.value);
    }
    return (
        <div className='form-area'>
            <label>{label}</label>
            <div className='location'>
                <input type='text' onChange={handleOnchange} placeholder='Select departure' /><i className="fas fa-map-marker"></i>
            </div>
        </div >
    );
};
export default From;