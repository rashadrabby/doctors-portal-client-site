import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';


const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-10'>

            <InfoCard
                cardTitle="Opening Hours"
                cardBody="Lorem Ipsum is simply dummy text of the pri"
                bgclassName="bg-gradient-to-r from-cyan-500 to-blue-500"
                img={clock} 
                />

            <InfoCard
                cardTitle="Visit our location"
                cardBody="Brooklyn, NY 10036, United States"
                bgclassName="bg-gray-800"
                img={marker}
                 />

            <InfoCard
                cardTitle="Contact us now"
                cardBody="+000 123 456789"
                bgclassName="bg-gradient-to-r from-cyan-500 to-blue-500"
                img={phone} 
                />
        </div>
    );
};

export default Info;