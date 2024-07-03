import React from 'react';
import Banner from './Banner';
import Care from './Care';
import AboutUs from './AboutUs';
import Service from './Service';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Care/>
            <AboutUs/>
            <Service/>
            <Testimonial/>
           
        </div>
    );
};

export default Home;