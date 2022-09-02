import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';

const ServicePreview = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='container mt-5'>
            <h3 className='text-center ft-bold mt-5'>My Coaching Services</h3>
            <div className='row mt-2 g-4'>
                {
                    services.slice(0,3).map(service => <SingleService
                        key={service.id}
                        service={service}
                    
                    ></SingleService>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services' className='btn btn-md bg-dark text-white'>
                    Load More... <i className="bi bi-send-check text-white"></i></Link>
            </div>
        </div>
    );
};

export default ServicePreview;