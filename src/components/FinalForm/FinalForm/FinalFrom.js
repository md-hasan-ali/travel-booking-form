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
                            <label className='mb-2'>Travel Class Or Passenger</label>
                            <TravelClassPassenger setTravelClass={setTravelClass} travelClass={travelClass}></TravelClassPassenger>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="from">
                            <VoucherCode setVoucher={setVoucher} label={'Voucher Or Event Code'}></VoucherCode>
                        </div>
                    </div>

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