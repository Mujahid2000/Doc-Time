import React from 'react';
import Banner from './Banner';
import Care from './Care';
import AboutUs from './AboutUs';
import Service from './Service';
import Testimonial from './Testimonial';
import Faq from './Faq';
import Appointment from './Appointment';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Care/>
            <AboutUs/>
            <Service/>
            <Testimonial/>
           <Faq/>
           <Appointment/>
        </div>
    );
};

export default Home;