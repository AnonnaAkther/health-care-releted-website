import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>ID: {serviceId}</h2>
        </div>
    );
};

export default Detail;