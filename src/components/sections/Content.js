import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../assets/banner-bg.jpg';

const Content = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: `url("${Banner}")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Programming</h1>
                    <p className="mb-5">If You want to Learn Programming with US then you can choose your favorite topics from below and start learning after few of clicks..</p>
                    <Link to='/courses'><button className="btn btn-primary">Our Popular Courses</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Content;