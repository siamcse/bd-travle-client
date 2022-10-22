import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import MoonLoader from 'react-spinners/MoonLoader';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center items-center min-h-screen'>
            <MoonLoader
                color="#36d7b7"
                size={70}
            />
        </div>;
    }
    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;