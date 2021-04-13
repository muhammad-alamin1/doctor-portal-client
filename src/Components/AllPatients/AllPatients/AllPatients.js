import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllPatientsAppointmentDataTable from '../AllPatientsAppointmentDataTable/AllPatientsAppointmentDataTable';

const AllPatients = () => {

    const [allPatients, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(response => response.json())
            .then(data => {
                setAppointments(data);
                // console.log(data);
            })
    }, [])
    document.title = 'Dashboard';
    return (
        <div className=" row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10" >
                <h5 className="m-3" style={{ color: '#1CC7C1' }}>All Patients</h5>
                <AllPatientsAppointmentDataTable allPatients={allPatients} />
            </div>
        </div>
    );
};

export default AllPatients;