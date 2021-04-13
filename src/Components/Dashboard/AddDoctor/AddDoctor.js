import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    // email & name change
    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    // file change
    const handleFileChange = event => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }

    // Submitted
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);


        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h4 style={{ color: '#1CC7C1' }} className="m-4">Add a Doctor</h4>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="name" />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload a Images</label>
                        <input onChange={handleFileChange} type="file" className="form-control" />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-brand">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;