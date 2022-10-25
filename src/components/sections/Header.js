import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import People from '../../assets/people.jpeg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div>
            <div className="navbar bg-base-100 py-6">
                <div className="navbar-start">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Programming School</Link>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                            
                        </ul>
                    </div>
                    {
                        user ?
                            <div>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                            </div>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </div>            
        </div>
    );
};

export default Header;