import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://life-care-server1.herokuapp.com/review`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
        console.log(data.reviews);
      });
  }, []);
  return (
    <section className="testimonials-section my-5">
      <div className="container">
        <h3 className="text-uppercase " style={{ color: "#1CC7C1" }}>
          Testimonial
        </h3>
        <h4 className="mt-2 mb-5">
          What's Our Patients <br /> Says
        </h4>
        <div className="row" id="testimonials">
          {reviews.map((testimonial) => (
            <Testimonial key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
