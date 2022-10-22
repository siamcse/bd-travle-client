import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BookingForm = ({hotel}) => {
    const [value, setValue] = React.useState < Dayjs | null > (dayjs('2022-04-07'));
    const {name} = hotel;
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DatePicker
                                        disableFuture
                                        label="Responsive"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Destination</span>
                                </label>
                                <input type="text" placeholder={name} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;