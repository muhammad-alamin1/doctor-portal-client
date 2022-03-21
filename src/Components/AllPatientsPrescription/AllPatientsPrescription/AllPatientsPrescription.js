import React, { useEffect, useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import AllPatientsPrescriptionDataTable from "../AllPatientsPrescriptionDataTable/AllPatientsPrescriptionDataTable";

const AllPatientsPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/prescription")
      .then((response) => response.json())
      .then((data) => {
        setPrescriptions(data.prescriptions);
        console.log(data.prescriptions);
      });
  }, []);
  document.title = "Dashboard";
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <h5 style={{ color: "#1CC7C1" }} className="m-3">
          All prescriptions information
        </h5>
        <AllPatientsPrescriptionDataTable prescriptions={prescriptions} />
      </div>
    </div>
  );
};

export default AllPatientsPrescription;
