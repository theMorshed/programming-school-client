import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { title, image_url, details, id } = course;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{ details.length > 50 ? details.slice(0, 50) : details}</p>
                <div className="card-actions">
                    <Link to={`/course/${id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;