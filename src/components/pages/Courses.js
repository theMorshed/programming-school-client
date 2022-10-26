import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../sections/SingleCourse';
import Sidebar from '../sections/Sidebar';

const Courses = () => {        
    const courses = useLoaderData();
    return (
        <div className='flex my-10'>
            <div className='w-3/12'>
                <Sidebar></Sidebar>
            </div>
            <div className='w-9/12'>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        courses.map(course => <SingleCourse
                            key={course.id}
                            course={course}
                        ></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;