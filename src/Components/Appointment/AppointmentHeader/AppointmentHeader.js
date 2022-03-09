import React from 'react';
import chair from '../../../images/chari.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center" id="header-main">
            <div className="col-md-4 offset-1">
                <h1> Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;