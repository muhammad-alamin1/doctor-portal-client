import React from "react";

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
      <tbody></tbody>
    </table>
  );
};

export default AppointmentShortList;
