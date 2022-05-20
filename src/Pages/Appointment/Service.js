import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-xl font-bold">{name}</h2>

                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slot Available</span>
                }</p>

                <p className='py-1'>{slots.length} {slots.length > 1 ? "Space's" : "Space"} Available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        htmlFor="booking-modal" className="btn uppercase text-white font-bold float-left  bg-gradient-to-r from-cyan-500 to-blue-500">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;