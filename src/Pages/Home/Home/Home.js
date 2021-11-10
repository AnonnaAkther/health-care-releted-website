import React from 'react';
import Services from '../Services/Services';
import SpecialDoctors from '../SpecialDoctors/SpecialDoctors';

const Home = () => {
    return (
        <div>
            <SpecialDoctors></SpecialDoctors>
            <Services></Services>
        </div>
    );
};

export default Home;