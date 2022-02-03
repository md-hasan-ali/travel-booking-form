// import necessary file 
import React from 'react';
import './bookingModal.css'

// Booking Modal Component 
const BookingModal = ({ bookingModal }) => {
    const handleBookingConfirm = (bookingInfo) => {
        alert('Booking Successfully Completed...');
        return;
    }
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Flight Booking Modal</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <label className='pb-1'>From</label>
                        <input type="text" defaultValue={bookingModal?.from} readOnly />

                        <label className='pb-1'>To</label>
                        <input type="text" defaultValue={bookingModal?.to} readOnly />

                        <label className='pb-1'>Departure Date</label>
                        <input type="text" defaultValue={bookingModal?.departure} readOnly />

                        <label className='pb-1'>Return Date</label>
                        <input type="text" defaultValue={bookingModal?.backdate} readOnly />

                        <label className='pb-1'>Travel Class</label>
                        <input type="text" defaultValue={bookingModal?.travelClass} readOnly />

                        <label className='pb-1'>Voucher / Event code</label>
                        <input type="text" defaultValue={bookingModal?.voucher} readOnly />
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button onClick={() => handleBookingConfirm(bookingModal)} type="button" className="btn btn-primary">Booking Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;