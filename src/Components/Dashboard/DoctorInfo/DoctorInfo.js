import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./doctorinfo.css";

const DoctorInfo = () => {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState("");
    const [update, setUpdate] = useState({});
    const [id, setId] = useState("");

    // all doctor
    useEffect(() => {
        fetch(`http://localhost:5000/doctor/all`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.allDoctors);
                setInfo(data.allDoctors);
            });
    }, []);

    // delete doctor
    const deleteDoctor = async (id) => {
        await fetch(`http://localhost:5000/doctor/delete/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
            },
        })
            .then((success) => {
                setError("Doctor delete successfully");
            })
            .catch((error) => {
                setError("Doctor delete failed");
            });
    };

    // update doctor
    const updateDoctor = async (id) => {
        setId(id);
        await fetch(`http://localhost:5000/doctor/single/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUpdate(data.doctor);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    useEffect(() => {
        updateDoctor();
    }, [])

    // handle change
    const handleChange = event => {
        setUpdate(event.target.value);
    }

    return (
        <>
            <Sidebar />
            <table className="table table-borderless" style={{ marginLeft: "150px" }}>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Join Date</th>
                        <th> Image </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((doc, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{doc.name}</td>
                            <td>{doc.email}</td>
                            <td>{doc.phone}</td>
                            <td>{doc.department}</td>
                            <td>{doc.date}</td>
                            <td>
                                <a
                                    href={`http://localhost:5000/uploads/${doc.images}`}
                                    target="_blank"
                                >
                                    View
                                </a>
                            </td>
                            <td>
                                <button
                                    onClick={() => updateDoctor(doc._id)}
                                    className="btn btn-primary me-2"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => deleteDoctor(doc._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {error && <p className="error">{error}</p>}
            <div id="updateForm">
                <hr />
                <h3 className="my-4">Update doctor information</h3>
                <form action={`http://localhost:5000/doctor/update/${id}`} method="POST">
                    <div class="form-group">
                        <label for="name">Updated Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            name="name"
                            placeholder="Updated name"
                            value={update.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="email">Updated Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            name="email"
                            placeholder="Updated email"
                            value={update.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="phone">Updated Phone</label>
                        <input
                            type="text"
                            id="phone"
                            className="form-control"
                            name="phone"
                            placeholder="Updated phone"
                            value={update.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="department">Update Department</label>
                        <input
                            type="text"
                            id="department"
                            className="form-control"
                            name="department"
                            placeholder="Update department"
                            value={update.department}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <input type="submit" value="Update" className="btn btn-outline-success" />
                </form>
            </div>
        </>
    );
};

export default DoctorInfo;
