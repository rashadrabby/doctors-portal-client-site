import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            _id: 2,
            img: cavity,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            _id: 3,
            img: whitening,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        }
    ];
    return (
        <div className='my-28 px-12'>
            <div className='text-center'>
                <h3 className='text-cyan-500 text-xl font-bold uppercase'>Our Services</h3>
                <h3 className='text-4xl p-4'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 content-center lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)

                }
            </div>
        </div>
    );
};

export default Services;