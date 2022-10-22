import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = { name: 'siam' }
    const [hotels, setHotel] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotel(data))
    }, [])

    const authInfo = { user, hotels };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;