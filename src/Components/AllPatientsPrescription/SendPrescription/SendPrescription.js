import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sendpres.css";

const SendPrescription = () => {
  const [allPatients, setAppointments] = useState([]);
  const [info, setInfo] = useState([]);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  // patient info
  useEffect(() => {
    fetch("https://life-care-server1.herokuapp.com/addAppointment")
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data.allAppointments);
      });
  }, []);

  // all doctor
  useEffect(() => {
    fetch(`https://life-care-server1.herokuapp.com/doctor/all`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.allDoctors);
      });
  }, []);

  // handle click
  const handleClick = (name, mail) => {
    setName(name);
    setMail(mail);
  };

  document.title = "Send Prescription";
  return (
    <div className="row">
      <Link to="/dashboard">
        <span>Back to dashboard</span>
      </Link>
      <h4 style={{ color: "#1CC7C1", textAlign: "center" }} className="m-3">
        Send patient prescriptions
      </h4>
      <div className="col-md-4">
        <h6 style={{ textAlign: "center" }} className="m-3">
          Patients information
        </h6>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Save DB</th>
            </tr>
          </thead>
          {allPatients.map((patient, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>
                  <a href={`mailto:${patient.email}`}>{patient.email}</a>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleClick(patient.name, patient.email)}
                  >
                    Go
                  </button>
                </td>
              </tr>
              <br />
            </tbody>
          ))}
        </table>
      </div>
      <div className="col-md-8">
        <h6 style={{ textAlign: "center" }} className="m-3">
          Prescription information save to database
        </h6>
        <div id="send-prescription" className="py-3">
          <form
            method="POST"
            action="https://life-care-server1.herokuapp.com/prescription"
            enctype="multipart/form-data"
          >
            <input
              type="name"
              value={name}
              name="name"
              className="form-control"
              placeholder="name"
              required
            />
            <br />
            <input
              type="email"
              value={mail}
              name="email"
              className="form-control"
              placeholder="email"
              required
            />
            <br />
            <span>Select doctor </span>
            <select name="doctor">
              {info.map((doc) => (
                <option value={doc.name}>{doc.name}</option>
              ))}
            </select>{" "}
            <br />
            <br />
            <input
              type="file"
              name="file"
              accept="images/*"
              className=""
              required
            />{" "}
            <span>Upload prescription</span>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendPrescription;