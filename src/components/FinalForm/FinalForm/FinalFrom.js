// import necessary file
import React, { useState } from 'react';
import './finalForm.css'
import From from '../From/From';
import Departure from '../Departure/Departure';
import TravelClassPassenger from '../TravelClassPassenger/TravelClassPassenger';

// create final from component
const FinalFrom = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('')
    const [departure, setDeparture] = useState(0);
    const [backdate, setBackdate] = useState(0);

    const handleInput = () => {
        const result = { from, to, departure, backdate }
        console.log(result)
    }
    return (
        <section className="final-form-area">
            <div className="container form-container">
                <div className="section-title text-center">
                    <h2 className='pb-4'>Flight Deals With our Country</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="from">
                            <From inputValue={setFrom} label={'Departure'}></From>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="from">
                            <From inputValue={setTo} label={'To'}></From>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="from">
                            <Departure inputDate={setDeparture} label={'Departure'}></Departure>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="from">
                            <Departure inputDate={setBackdate} label={'Return'}></Departure>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="from">
                            <label>Travel Class Or Passenger</label>
                            <TravelClassPassenger></TravelClassPassenger>
                        </div>
                    </div>
                </div>
                <br />
                <button onClick={handleInput}>click</button>
            </div>
        </section>
    );
};

export default FinalFrom;