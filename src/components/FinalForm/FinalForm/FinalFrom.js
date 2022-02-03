// import necessary file
import React, { useState } from 'react';
import './finalForm.css'
import From from '../From/From';
import Departure from '../Departure/Departure';
import TravelClassPassenger from '../TravelClassPassenger/TravelClassPassenger';
import VoucherCode from '../VoucherCode/VoucherCode';
import BookingModal from '../BookingModal/BookingModal';
import To from '../To/To';

// create final from component
const FinalFrom = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('')
    const [departure, setDeparture] = useState(0);
    const [backdate, setBackdate] = useState(0);
    const [travelClass, setTravelClass] = useState('premium');
    const [voucher, setVoucher] = useState(0);
    const [bookingModal, setBookingModal] = useState();
    const [trip, setTrip] = useState(false);

    const handleInput = () => {
        const result = { from, to, departure, backdate, travelClass, voucher }
        setBookingModal(result);
    }
    return (
        <section className="final-form-area">
            <div className="container form-container">
                <div className="section-title text-center">
                    <h2 className='pb-4 text-danger'>Flight Deals With our Country</h2>
                </div>
                <div className="oneway-or-return mb-4">
                    <div className="form-check form-check-inline">
                        <input onClick={() => setTrip(true)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">One Way</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input onClick={() => setTrip(false)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Return Trip</label>
                    </div>
                </div>
                <div className="row">
                    {/* From */}
                    <div className="col-md-4">
                        <div className="from input-design">
                            <From setFrom={setFrom} label={'From'}></From>
                        </div>
                    </div>
                    {/* To */}
                    <div className="col-md-4">
                        <div className="to input-design">
                            <To setTo={setTo} label={'To'}></To>
                        </div>
                    </div>
                    {/* Departure and Return are same component */}
                    <div className="col-md-2">
                        <div className="departure input-design">
                            <Departure inputDate={setDeparture} label={'Departure'}></Departure>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="return input-design">
                            <Departure inputDate={setBackdate} label={'Return'} trip={trip}></Departure>
                        </div>
                    </div>
                    {/* Travel Class and Passengers  */}
                    <div className="col-md-4 mt-5">
                        <div className="travel-class input-design">
                            <label className='mb-2'>Travel Class Or Passenger</label>
                            <TravelClassPassenger setTravelClass={setTravelClass} travelClass={travelClass}></TravelClassPassenger>
                        </div>
                    </div>
                    {/* Voucher and Event Code  */}
                    <div className="col-md-4 mt-5">
                        <div className="voucher input-design">
                            <VoucherCode setVoucher={setVoucher} label={'Voucher Or Event Code'}></VoucherCode>
                        </div>
                    </div>
                    {/* Book Now Button  */}
                    <div className="col-md-4 mt-5">
                        <div className="from form-btn">
                            <label className='pb-2'>Booking Now</label>
                            <button onClick={handleInput} className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book Now</button>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            {/* Booking Modal  */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <BookingModal bookingModal={bookingModal}></BookingModal>
            </div>
        </section>
    );
};

export default FinalFrom;