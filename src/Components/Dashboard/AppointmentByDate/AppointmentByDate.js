import React, { useState } from "react";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentByDate = ({ appointments, date }) => {
  console.log(appointments);
  return (
    <div>
      <div className="row my-3">
        <div className="col-md-6">
          <h3 style={{ color: "#1CC7C1" }}>
            Appointments: {appointments.length}
          </h3>
        </div>
        <div className="col-md-6">
          <small>{date.toDateString()}</small>
        </div>
      </div>
      {appointments.length ? (
        <AppointmentShortList appointments={appointments} />
      ) : (
        <div className="p-5">
          <h4 className="lead text-center">No Appointments for this Date</h4>
        </div>
      )}
    </div>
  );
};

export default AppointmentByDate;
