import './Testimonials.css';
import React from 'react';
import wilson from '../../../images/willson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';


const testimonialsData = [
    {
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name:'Wilson Harry',
        from : 'California',
        img:wilson
    },
    {
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name:'Ema Gomez',
        from : 'California',
        img:ema
    },
    {
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name:'Aliza Farari',
        from : 'California',
        img:aliza
    },
]

const Testimonials = () => {
    return (
        <section className="testimonials-section my-5">
            <div className="container">
                <h5 className="text-uppercase " style={{ color: '#1CC7C1' }}>Testimonial</h5>
                <h2 className="mt-2 mb-5">What's Our Patients <br/> Says</h2>
            
            {
                testimonialsData.map(testimonial =><Testimonial key={testimonial.name} testimonial={testimonial}/>)
            }
            </div>
        </section>
    );
};

export default Testimonials;