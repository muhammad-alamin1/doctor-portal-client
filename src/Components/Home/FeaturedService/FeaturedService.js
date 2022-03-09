import './featuredServices.css';
import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="featured-service my-5 ">
            <div className="row  ">
                <div className="col-md-5 featured-img">
                    <img className="img-fluid" src={featured} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h1>Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="text-secondary my-5">The name was no accident. At Pinnacle Pediatric Clinic (formerly Pediatric Arts Clinic), it’s our mission to make sure each and every one of our patients has the tools and resources at their disposal to scale the summit of their personal health potential. Since 2006, Dr. Raghib has dedicated himself to making sure every child he treats leaves our office feeling more like a part of the Pinnacle family instead of just another number on an insurance form. It’s why he takes the time to listen to what each child is saying when he treats them, and why he talks directly to the patient, not simply around them to the parent. Your child is your number one priority, and at Pinnacle Pediatric Clinic, they’re ours too. For us it’s simple. Addressing a symptom is only one part of a much larger whole.
                        Dr. Raghib believes strongly in treating the child, the person, not just a body part or specific condition. It’s a large part of the reason he founded Pinnacle Pediatric Clinic in the first place, to create a whole-of-care environment where the time restraints larger medical facilities can face in the course of their patient treatment would take a back seat to spending every necessary minute with the patient in order to ensure they receive the highest level of care possible. That attention to detail is the foundation of the care your family receives at Pinnacle Pediatric Clinic. It’s important that when your family leaves our office, they’re not only on their way to feeling better, but they also feel good about the attention to care they received.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;