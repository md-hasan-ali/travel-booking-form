import React from 'react';

const VoucherCode = ({ setVoucher, label }) => {
    const handleVoucherCode = (e) => {
        setVoucher(e.target.value);
    }
    return (
        <div>
            <div className='form-area'>
                <label>{label}</label>
                <input type='text' onChange={handleVoucherCode} placeholder='Enter Code' />
            </div >
        </div>
    );
};

export default VoucherCode;