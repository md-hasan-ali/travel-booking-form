// import necessary file 
import React from 'react';

// create from component
const From = ({ inputValue, label }) => {
    const handleOnchange = (e) => {
        inputValue(e.target.value);
    }
    return (
        <div className='form-area'>
            <label>{label}</label>
            <input onChange={handleOnchange} placeholder='Select departure' />
        </div >
    );
};
export default From;