import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ hotel }) => {
    const { name } = hotel;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className='flex gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <div>
                                    <DatePicker className='text-black border-2 p-2 rounded-lg' selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <DatePicker
                                    className='text-black border-2 p-2 rounded-lg'
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                />
                            </div>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" placeholder="Dhaka" className="text-black border-2 p-2 rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input value={name} type="text" placeholder={name} className="text-black border-2 p-2 rounded-lg" />
                        </div>
                        
                        <div className="mt-6">
                            <Link to='/allhotel'><button className="btn btn-primary">Start Booking</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;