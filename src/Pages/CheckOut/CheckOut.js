import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {servicesId} = useParams()
    return (
        <div>
            <h1 className='text-primary text-center mt-2'>This is CheckOutpage</h1>
        </div>
    );
};

export default CheckOut;