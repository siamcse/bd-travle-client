import React from 'react';
import { Link } from 'react-router-dom';

const BookingForm = ({ hotel }) => {
    const { name } = hotel;
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" placeholder="Dhaka" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" placeholder={name} className="input input-bordered" />
                        </div>
                        <div className='flex gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <input type="text" placeholder='dhaka' className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <input type="text" placeholder={name} className="input input-bordered" />
                            </div>
                            
                        </div>
                        <div className="form-control mt-6">
                            <Link to='/allhotel'><button className="btn btn-primary">Start Booking</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;