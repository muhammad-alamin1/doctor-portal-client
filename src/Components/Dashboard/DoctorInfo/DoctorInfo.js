import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const DoctorInfo = ({ prescriptions }) => {
    return (
        <>
            <Sidebar />
            <table className="table table-borderless" style={{ marginLeft: '120px' }}>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Join Date</th>
                        <th className="btn btn-outline-primary">View Image</th>
                    </tr>
                </thead>

            </table>
        </>

    );
};

export default DoctorInfo;