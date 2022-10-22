import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GoogleMap from '../GoogleMap/GoogleMap';

const AllHotel = () => {
    return (
        <div className='hero min-h-screen'>
            <div className='grid grid-cols-2'>
                <div>
                    <h2 className='text-3xl'>hotel is coming soon</h2>
                </div>
                <div>
                    {
                        <GoogleMap></GoogleMap>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllHotel;