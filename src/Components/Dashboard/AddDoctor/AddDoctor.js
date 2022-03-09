import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h4 style={{ color: '#1CC7C1' }} className="m-4">Add a Doctor</h4>
                <form action="http://localhost:5000/doctor/upload" method="POST" enctype="multipart/form-data" >
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" className="form-control" name="name" placeholder="name" required />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" id="email" className="form-control" name="email" placeholder="Enter email" required />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" id="phone" className="form-control" name="phone" placeholder="Enter phone" required />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="avatar">Upload a Images</label>
                        <input type="file" id="avatar" name="avatar" className="form-control" required />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-brand">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;