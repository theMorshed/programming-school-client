import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Sidebar from './Sidebar';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, image_url, details, id, price } = course;
    return (
        <div className='flex py-10'>
            <div className="w-full text-left">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={image_url} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details}</p>
                        <p>Price: ${price}</p>
                        <div className="card-actions">
                            <Link to={`/checkout/${id}`}>
                                <button className="btn btn-primary">Get Premium Access</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default CourseDetails;