// import necessary file
import React, { useState } from 'react';
import './finalForm.css'
import From from '../From/From';

// create final from component
const FinalFrom = () => {
    const [departure, setDeparture] = useState('');
    console.log(departure);
    return (
        <section className="final-form-area">
            <div className="container form-container">
                <div className="section-title text-center">
                    <h2 className='pb-4'>Flight Deals With our Country</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="from">
                            <From setDeparture={setDeparture}></From>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalFrom;