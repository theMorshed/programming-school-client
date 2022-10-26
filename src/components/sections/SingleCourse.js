import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { title, image_url, details, id, price } = course;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <img src={image_url} alt="course" />
            </figure>
            <div className="card-body px-5">
                <h2 className="card-title">{title}</h2>
                <p>{details.length > 50 ? details.slice(0, 50) : details}</p>
                <p>Price: ${price}</p>
                <div className="card-actions mt-1">
                    <Link to={`/course/${id}`}>
                        <button className="btn btn-primary px-10">Start Learning</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;