import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default function Review() {
  return (
    <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h4 style={{ color: '#1CC7C1' }} className="m-4">Review</h4>
                <form action="http://localhost:5000/dashboard/review" method="POST" enctype="multipart/form-data" >
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" className="form-control" name="name" placeholder="name" required />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" placeholder="message" name="message"></textarea>
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="stars">Stars</label>
                        <input type="number" id="stars" className="form-control" name="stars" placeholder="stars" required />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="avatar">Chose avatar</label>
                        <input type="file" id="avatar" name="avatar" className="form-control" required />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-brand">Submit</button>
                </form>
            </div>
        </div>
  )
}
