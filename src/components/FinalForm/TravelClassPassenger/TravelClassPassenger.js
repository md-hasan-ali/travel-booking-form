import { useState } from 'react';
import './Travelclass.css'

const TravelClassPassenger = ({ setTravelClass, travelClass }) => {
    const [adultincrease, setAdultIncrease] = useState(1);
    const [youngAdultIncrease, setYoungAdultIncrease] = useState(1);
    const [childIncrease, setChildIncrease] = useState(0);
    const [infantIncrease, setInfantIncrease] = useState(0);

    const handleAdultIncrease = () => {
        setAdultIncrease(adultincrease + 1);
    }
    const handleAdultDecrese = () => {
        setAdultIncrease(adultincrease - 1);
    }
    const handleYoungAdultIncrease = () => {
        setYoungAdultIncrease(youngAdultIncrease + 1);
    }
    const handleYoungAdultDecrese = () => {
        setYoungAdultIncrease(youngAdultIncrease - 1);
    }
    const handleChildIncrease = () => {
        setChildIncrease(childIncrease + 1);
    }
    const handleChildDecrese = () => {
        setChildIncrease(childIncrease - 1);
    }
    const handleInfantIncrease = () => {
        setInfantIncrease(infantIncrease + 1);
    }

    const handleInfantDecrese = () => {
        setInfantIncrease(infantIncrease - 1);
    }
    const handleSelectValue = (e) => {
        setTravelClass(e.target.value)
        setTravelClass(adultincrease + youngAdultIncrease + childIncrease);
    }
    return (
        <div className='travel-class'>
            <div className="btn-group w-100">
                <button className="btn btn-lg dropdown-toggle mb-2" type="button" data-bs-toggle="dropdown">
                    {adultincrease + youngAdultIncrease + childIncrease} Passenger, {travelClass} <i className="fas fa-chevron-down"></i>
                </button>
                <ul className="dropdown-menu">
                    <li> Select Class</li>
                    <li className='text-center'>
                        <select className='w-100 p-2 select-class' onChange={handleSelectValue} aria-label="Default select example">
                            <option selected>Premium</option>
                            <option value="Economy">Economy</option>
                            <option value="Upper Class">Upper Class</option>
                        </select>
                    </li>

                    <li className='my-4'>Passengers</li>
                    <li className="adult d-flex justify-content-around mb-3">
                        <div>
                            <h5>Adult</h5>
                            <p>Age 16 and over y</p>
                        </div>
                        <div className='increase-decrease-list'>
                            <p className='text-danger' onClick={handleAdultDecrese}>-</p>
                            <p>{adultincrease}</p>
                            <p className='text-danger' onClick={handleAdultIncrease}>+</p>
                        </div>
                    </li>

                    <li className="young-adult d-flex justify-content-around mb-3">
                        <div>
                            <h5>Young Adult</h5>
                            <p>Age 12 - 15 years</p>
                        </div>
                        <div className='increase-decrease-list'>
                            <p className='text-danger' onClick={handleYoungAdultDecrese}>-</p>
                            <p>{youngAdultIncrease}</p>
                            <p className='text-danger' onClick={handleYoungAdultIncrease}>+</p>
                        </div>
                    </li>

                    <li className="child d-flex justify-content-around mb-3">
                        <div>
                            <h5>Little Child</h5>
                            <p>Age 2 - 11 years</p>
                        </div>
                        <div className='increase-decrease-list'>
                            <p className='text-danger' onClick={handleChildDecrese}>-</p>
                            <p>{childIncrease}</p>
                            <p className='text-danger' onClick={handleChildIncrease}>+</p>
                        </div>
                    </li>

                    <li className="adult d-flex justify-content-around mb-5">
                        <div>
                            <h5>Infant</h5>
                            <p>age: Up to 2 yours</p>
                        </div>
                        <div className='increase-decrease-list'>
                            <p className='text-danger' onClick={handleInfantDecrese}>-</p>
                            <p>{infantIncrease}</p>
                            <p className='text-danger' onClick={handleInfantIncrease}>+</p>
                        </div>
                    </li>
                    <button className='btn mb-5 text-center'>Done</button>
                </ul>
            </div>
        </div >
    );
};

export default TravelClassPassenger;