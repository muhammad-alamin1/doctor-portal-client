import React from "react";

const Doctor = ({ doctors }) => {
  return (
    <>
      {doctors.map((doctor, index) => (
        <div className="card col-md-4" style={{ marginBottom: "100px" }}>
          <div className="card-header d-flex  align-items-center">
            <img
              style={{ width: "250px" }}
              className="img-fluid"
              src={`https://life-care-server1.herokuapp.com/uploads/${doctor.images}`}
              alt={doctor.name}
            />
          </div>
          <div className="card-body">
            <h4 className="" style={{ color: "#1CC7C1" }}>
              {doctor.name}
            </h4>
            <p className="m-0">E-mail : {doctor.email}</p>
            <p>Phone : {doctor.phone}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Doctor;
