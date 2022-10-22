import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingForm from './BookingForm';

const Booking = () => {
    const hotel = useLoaderData();
    const {name,details} = hotel;
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url("${hotel?.img}")` }}>
            <div className='grid grid-cols-2 mt-40'>
                <div className='text-white ml-32'>
                    <h1 className='text-7xl'>{name}</h1>
                    <p>{details}</p>
                </div>
                <div className='text-white'>
                    {
                        <BookingForm hotel={hotel}></BookingForm>
                    }
                </div>
            </div>
        </div>
    );
};

export default Booking;