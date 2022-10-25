import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from './Sidebar';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, image_url, details, id } = course;
    return (
        <div className='flex py-10'>
            <div className="w-9/12">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={image_url} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Checkout Here</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/12">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default CourseDetails;