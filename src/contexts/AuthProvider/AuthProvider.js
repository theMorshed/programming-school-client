import React from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../config/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = { displayName: "Morshed" };
    const authInfo = { user };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;