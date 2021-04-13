import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllPatientsPrescriptionDataTable from '../AllPatientsPrescriptionDataTable/AllPatientsPrescriptionDataTable';

const AllPatientsPrescription = () => {
    const [prescription , setPrescription] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then((response) => response.json())
            .then((data) => setPrescription(data))
    }, [])
    document.title = 'Dashboard';
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h5 style={{ color: '#1CC7C1' }} className="m-3">All Prescriptions</h5>
                <AllPatientsPrescriptionDataTable prescriptions={prescription} />
            </div>
        </div>
    );
};

export default AllPatientsPrescription;