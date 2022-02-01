import React from 'react';

const To = (props) => {
    const { setTo } = props;

    const handleOnchange = (e) => {
        setTo(e.target.value);
    }
    return (
        <div>
            <label>To</label>
            <input onChange={handleOnchange} placeholder='Select Destination' />
        </div>
    );
};

export default To;