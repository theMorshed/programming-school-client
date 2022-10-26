import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {

    const location = useLocation();
    const { user } = useContext(AuthContext);
    
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRouter;