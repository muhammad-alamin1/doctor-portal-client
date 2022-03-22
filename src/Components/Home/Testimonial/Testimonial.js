import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./testimonial.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonial = (props) => {
  const { message, name, stars, avatar, createdAt } = props.testimonial;
  return (
    <div className="card col-md-12 mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://life-care-server1.herokuapp.com/uploads/${avatar}`}
            className="img-fluid rounded-start"
            alt={name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{name}</h3> <br />
            <p className="card-text">{message}</p>
            <p className="card-text">
              <small className="text-muted">Review Date : {createdAt}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
