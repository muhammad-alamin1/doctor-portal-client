import './Testimonials.css';
import React, { useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    fetch(`http://localhost:5000/dashboard/review`)
        .then((response) => response.json())
        .then(data => {
            setReviews(data.reviews);

        })
    return (
        <section className="testimonials-section my-5" style={{ 'display': 'block' }}>
            <div className="container">
                <h5 className="text-uppercase " style={{ color: '#1CC7C1' }}>Testimonial</h5>
                <h2 className="mt-2 mb-5">What's Our Patients <br /> Says</h2>

                {
                    reviews.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;