import React, { useEffect, useState } from 'react';
import Service from './Service/Service';


const Services = () => {
    const [services, setServices] =useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className=''>
            <h1 className='mt-5 text-primary text-center'>My Services</h1>
           <div className='services.container d-flex'>
           {
               services.map(service=><Service
                key={service.id}
                service={service}
               ></Service>)
           }
           </div>
        </div>
    );
};

export default Services;