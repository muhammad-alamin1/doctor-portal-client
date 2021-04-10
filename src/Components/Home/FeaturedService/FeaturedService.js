import './featuredServices.css';
import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="featured-service my-5 ">
            <div className="row  ">
                <div className="col-md-5 featured-img">
                    <img  className="img-fluid" src={featured} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h1>Exceptional Dental <br/> Care, on Your Terms</h1>
                    <p className="text-secondary my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button type="button" className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;