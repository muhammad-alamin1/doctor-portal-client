import React from 'react';

const AppointmentShortList = ({ appointments }) => {
    return (
        <table className="table table-borderLess">
            <thead>
                <tr>
                    <th className="text-secondary">Name</th>
                    <th className="text-secondary">Phone</th>
                    <th className="text-secondary">E-mail</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map(appointment =>
                        <tr>
                            <td>{appointment.name}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;