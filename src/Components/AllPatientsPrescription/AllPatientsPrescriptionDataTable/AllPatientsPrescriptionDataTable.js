import React from "react";

const AllPatientsPrescriptionDataTable = ({ prescriptions }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Date</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Doctor</th>
          <th>Prescription</th>
        </tr>
      </thead>
      {prescriptions.map((prescription, index) => (
        <tbody>
          <tr>
            <td>{index + 1}</td>
            <td>{prescription.createdAt}</td>
            <td>{prescription.name}</td>
            <td>{prescription.email}</td>
            <td>{prescription.doctor}</td>
            <td>
              <a
                href={`http://localhost:5000/uploads/${prescription.file}`}
                target="_blank"
                className="btn btn-outline-success"
              >
                View
              </a>
            </td>
          </tr>
          <br />
        </tbody>
      ))}
    </table>
  );
};

export default AllPatientsPrescriptionDataTable;
