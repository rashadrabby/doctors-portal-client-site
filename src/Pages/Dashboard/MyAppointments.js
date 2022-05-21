import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth)
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://obscure-shore-90672.herokuapp.com/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])
    return (
        <div>
            <h3 className='pb-4'>My Appointments: {appointments.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a,index)=> <tr key={index}>
                                <th>{index +1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.treatment}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;