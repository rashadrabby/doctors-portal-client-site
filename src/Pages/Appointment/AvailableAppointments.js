import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('https://obscure-shore-90672.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <div className='text-center py-12'>
                <h4 className='text-cyan-500'>Available Services on {format(date, 'PP')} </h4>
                <h6>Please select a service.</h6>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            />}
        </div>
    );
};

export default AvailableAppointments;