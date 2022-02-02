import { useState } from 'react';
import './Travelclass.css'

const TravelClassPassenger = ({ setTravelClass, travelClass }) => {
    const [increase, setIncrease] = useState(1);

    const handleIncrease = () => {
        setIncrease(increase + 1);
    }
    const handleDecrese = () => {
        setIncrease(increase - 1);
    }
    const handleSelectValue = (e) => {
        setTravelClass(e.target.value)
    }
    return (
        <div className='travel-class'>
            <div class="btn-group w-100">
                <button class="btn btn-lg dropdown-toggle mb-2" type="button" data-bs-toggle="dropdown">
                    {increase} Passenger, {travelClass} <i className="fas fa-chevron-down"></i>
                </button>
                <ul class="dropdown-menu">
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
                            <p>Age 16 and over</p>
                        </div>
                        <div className='increase-decrease-list'>
                            <p onClick={handleDecrese}>-</p>
                            <p>0</p>
                            <p onClick={handleIncrease}>+</p>
                        </div>
                    </li>
                    <li className="adult d-flex justify-content-around mb-3">
                        <div>
                            <h5>Young Adult</h5>
                            <p>Age 12 - 15 years</p>
                        </div>
                        <div className='increase-decrease-list'>
                            <p onClick={handleDecrese}>-</p>
                            <p>0</p>
                            <p onClick={handleIncrease}>+</p>
                        </div>
                    </li>
                    <li className="adult d-flex justify-content-around mb-3">
                        <div>
                            <h5>Little Child</h5>
                            <p>Age 2 - 11 years</p>
                        </div>
                        <div className='increase-decrease-list'>
                            <p onClick={handleDecrese}>-</p>
                            <p>0</p>
                            <p onClick={handleIncrease}>+</p>
                        </div>
                    </li>
                    <li className="adult d-flex justify-content-around mb-5">
                        <div>
                            <h5>Infant</h5>
                            <p>age: Up to 2 yours</p>
                        </div>
                        <div className='increase-decrease-list'>
                            <p onClick={handleDecrese}>-</p>
                            <p>0</p>
                            <p onClick={handleIncrease}>+</p>
                        </div>
                    </li>
                    <button className='btn mb-5 text-center'>Done</button>
                </ul>
            </div>
        </div>
    );
};

export default TravelClassPassenger;