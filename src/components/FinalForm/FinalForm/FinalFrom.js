// import necessary file
import React, { useState } from 'react';
import './finalForm.css'
import From from '../From/From';
import Departure from '../Departure/Departure';
import TravelClassPassenger from '../TravelClassPassenger/TravelClassPassenger';
import VoucherCode from '../VoucherCode/VoucherCode';
import BookingModal from '../BookingModal/BookingModal';

// create final from component
const FinalFrom = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('')
    const [departure, setDeparture] = useState(0);
    const [backdate, setBackdate] = useState(0);
    const [travelClass, setTravelClass] = useState('premium');
    const [voucher, setVoucher] = useState(0);
    const [bookingModal, setBookingModal] = useState();
    const [trip, setTrip] = useState(true);

    const handleInput = () => {
        const result = { from, to, departure, backdate, travelClass, voucher }
        setBookingModal(result);
    }
    return (
        <section className="final-form-area">
            <div className="container form-container">
                <div className="section-title text-center">
                    <h2 className='pb-4'>Flight Deals With our Country</h2>
                </div>

                <div className="oneway-or-return mb-4">
                    <div class="form-check form-check-inline">
                        <input onClick={() => setTrip(false)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">One Way</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input onClick={() => setTrip(true)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Return Trip</label>
                    </div>

                </div>


                <div className="row">
                    {/* From */}
                    <div className="col-md-4">
                        <div className="from">
                            <From inputValue={setFrom} label={'From'}></From>
                        </div>
                    </div>
                    {/* To */}
                    <div className="col-md-4">
                        <div className="from">
                            <From inputValue={setTo} label={'To'}></From>
                        </div>
                    </div>
                    {/* Departure and Return are same component */}
                    <div className="col-md-2">
                        <div className="from">
                            <Departure inputDate={setDeparture} label={'Departure'}></Departure>
                        </div>
                    </div>
                    <div className="col-md-2">
                        {trip && <div className="from">
                            <Departure inputDate={setBackdate} label={'Return'}></Departure>
                        </div>}
                    </div>
                    {/* Travel Class and Passengers  */}
                    <div className="col-md-4 mt-4">
                        <div className="from">
                            <label className='mb-2'>Travel Class Or Passenger</label>
                            <TravelClassPassenger setTravelClass={setTravelClass} travelClass={travelClass}></TravelClassPassenger>
                        </div>
                    </div>
                    {/* Voucher and Event Code  */}
                    <div className="col-md-4 mt-4">
                        <div className="from">
                            <VoucherCode setVoucher={setVoucher} label={'Voucher Or Event Code'}></VoucherCode>
                        </div>
                    </div>
                    {/* Book Now Button  */}
                    <div className="col-md-4 mt-5 pt-1">
                        <div className="from form-btn">
                            <button onClick={handleInput} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book Now</button>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            {/* Booking Modal  */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <BookingModal bookingModal={bookingModal}></BookingModal>
            </div>
        </section>
    );
};

export default FinalFrom;