import './bookingCard.css';
import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking , date}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    // Open Modal
    function openModal() {
        setIsOpen(true);
    }

    // Close Modal
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title " style={{ color: '#1CC7C1' }}>{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p className="text-secondary">{booking.totalSpace} spaces available</p>
                    <button onClick={openModal} className=" text-white btn-brand text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;