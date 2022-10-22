import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const HomeLeftSide = ({ selectedPlace }) => {
    return (
        <div className='ml-32 mr-11'>
            <h2 className='text-white text-8xl'>{selectedPlace?.name}</h2>
            <p className='text-white'>
                {
                    selectedPlace?.details.length>200 ?
                        <>{selectedPlace?.details.slice(0,200) + "..."}</>
                    :
                    selectedPlace?.details
                }
            </p>
            <Link to={`/booking/${selectedPlace?.id}`}><button className='btn btn-secondary mt-4'>Booking</button></Link>
        </div>
    );
};

export default HomeLeftSide;