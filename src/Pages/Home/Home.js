import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Service></Service>
        </div>
    );
};

export default Home;