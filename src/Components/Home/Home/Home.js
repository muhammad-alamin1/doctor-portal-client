import React from 'react';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Doctors></Doctors>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;