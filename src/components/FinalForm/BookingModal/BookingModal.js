// import necessary file 
import React from 'react';
import './bookingModal.css'

// Booking Modal Component 
const BookingModal = ({ bookingModal }) => {
    return (
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Flight Booking Modal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <label>From</label>
                        <input type="text" defaultValue={bookingModal?.from} readOnly />

                        <label>To</label>
                        <input type="text" defaultValue={bookingModal?.to} readOnly />

                        <label>Departure Date</label>
                        <input type="text" defaultValue={bookingModal?.departure} readOnly />

                        <label>Return Date</label>
                        <input type="text" defaultValue={bookingModal?.backdate} readOnly />

                        <label>Travel Class</label>
                        <input type="text" defaultValue={bookingModal?.travelClass} readOnly />

                        <label>Voucher / Event code</label>
                        <input type="text" defaultValue={bookingModal?.voucher} readOnly />
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Booking Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;