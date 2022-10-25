import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../sections/SingleCourse';

const Courses = () => {        
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-5 py-10'>
            {
                courses.map(course => <SingleCourse
                    key={course.id}
                    course={course}
                ></SingleCourse>)
            }            
        </div>
    );
};

export default Courses;