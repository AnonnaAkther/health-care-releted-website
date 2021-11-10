import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SpecialDoctors from '../SpecialDoctors/SpecialDoctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialDoctors></SpecialDoctors>
            <Services></Services>
        </div>
    );
};

export default Home;