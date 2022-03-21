import React from "react";
import { Link } from "react-router-dom";

const AllPatientsAppointmentDataTable = ({ allPatients }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-secondary">Sr. No</th>
          <th className="text-secondary">Name</th>
          <th className="text-secondary">Gender</th>
          <th className="text-secondary">Age</th>
          <th className="text-secondary">Weight</th>
          <th className="text-secondary">Phone</th>
          <th className="text-secondary">E-mail</th>
          <th className="text-secondary">Send Prescription</th>
        </tr>
      </thead>
      <tbody>
        {allPatients.map((patient, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{patient.name}</td>
            <td>{patient.gender}</td>
            <td>{patient.age}</td>
            <td>{patient.weight}</td>
            <td>{patient.phone}</td>
            <td>{patient.email}</td>
            <td>
              <Link to="/dashboard/admin/prescription/send">Send</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllPatientsAppointmentDataTable;
