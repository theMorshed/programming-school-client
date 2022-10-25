import React from 'react';
import Banner from '../../assets/banner-bg.jpg';

const Content = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: `url("${Banner}")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Programming</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Content;