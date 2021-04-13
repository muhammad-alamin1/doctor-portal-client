import React from 'react';

const AllPatientsPrescriptionDataTable = ({ prescriptions }) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Prescription</th>
                </tr>
                
            </thead>
            {
                prescriptions.map((prescription, index) =>
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{prescription.date}</td>
                            <td>{prescription.name}</td>
                            <td>{prescription.phone}</td>
                            <button type="button" className="btn-brand text-white">View</button>
                        </tr>
                        <br/>
                    </tbody>
                )
            }

        </table>
    );
};

export default AllPatientsPrescriptionDataTable;