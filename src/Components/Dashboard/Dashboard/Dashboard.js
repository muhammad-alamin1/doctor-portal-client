import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../../Shared/Navbar/Navbar';

// style
const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);


    const handleDateChange = date => {
        // console.log(date)
        setSelectedDate(date);


    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(response => response.json())
            .then(data => {
                setAppointments(data)
            })
    }, [selectedDate])
    document.title = 'Dashboard';
    return (
        <section >

            <div style={containerStyle} className=" row  ">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                    <div className="col-md-5  ">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments} date={selectedDate} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;