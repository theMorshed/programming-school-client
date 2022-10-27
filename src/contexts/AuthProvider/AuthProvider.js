import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../config/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createUser,
        setUser,
        updateUserProfile,
        signIn,
        googleLogin,
        githubLogin,
        loading,
        setLoading,
        logOut,
        error,
        setError,
        passwordReset,
        theme,
        setTheme
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;