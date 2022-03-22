import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import "./doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`https://life-care-server1.herokuapp.com/doctor/all`)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data.allDoctors);
      });
  }, []);
  
  return (
    <section id="doctors-section">
      <div className="container">
        <div className="">
          <h3 style={{ color: "#1CC7C1" }} className="text-uppercase">
            Our Doctors
          </h3>
        </div>
        <div className="row">
          <Doctor doctors={doctors} />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
