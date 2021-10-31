import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Review from '../Reviews/Review';
import Destinations from '../Destinations/Destinations';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;

