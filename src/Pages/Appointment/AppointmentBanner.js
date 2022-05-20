import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div style={{ background: `url(${bg})` }} className="hero min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div className='bg-white rounded-xl mx-12'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;