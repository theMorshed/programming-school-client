import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [17, 12]
};

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, image_url, details, id, price } = course;
    return (
        <div className='flex py-10'>
            <div className="w-full text-left">
                <div>
                    <ReactToPdf targetRef={ref} options={options} filename="course.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary ml-6">Generate Pdf</button>}
                    </ReactToPdf>
                </div>
                <div ref={ref} className="card w-full bg-base-100 shadow-xl">
                    <h2 className='text-3xl text-primary font-semibold py-5 text-center'>{title}</h2>
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