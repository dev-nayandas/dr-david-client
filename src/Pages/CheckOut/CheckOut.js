import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {servicesId} = useParams()
    return (
        <div>
            <h1>This is CheckOutpage</h1>
        </div>
    );
};

export default CheckOut;