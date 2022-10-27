import React, { useState } from 'react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { setUser, signIn, googleLogin, githubLogin, error, setError, passwordReset } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    }

    const handleEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }

    const handleResetPassword = () => {
        if (!email) {
            toast.error('Please write your email address in email field.');
            return;
        }
        passwordReset(email)
            .then(result => {
                toast.success('Password Reset email sent successfully.');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero my-10 py-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">If you already have an account then login here and enjoy your learing with us.. Happy Learning!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={handleEmail} type="text" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label mt-4">
                                    <Link to='/register' className="label-text-alt link link-hover">Don't Have an account? Register here</Link>
                                </label>
                                <label className="label" onClick={handleResetPassword}>
                                    <a className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error ?
                                    <p className='text-red-500 font-semibold'>{error}</p>
                                    :
                                    ''
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='mt-4'>
                            <button onClick={handleGoogleLogin} className="btn btn-xs btn-primary btn-outline"><FaGoogle className="mr-2"></FaGoogle>Login with Google</button>
                            <button onClick={handleGithubLogin} className="ml-2 btn btn-xs btn-primary btn-outline"><FaGithub className="mr-2"></FaGithub>Github Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;