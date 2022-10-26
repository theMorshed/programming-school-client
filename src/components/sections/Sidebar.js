import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ courses }) => {   
    console.log(courses);
    return (
        <div>
            <div className="courses">
                <h2 className='text-3xl underline underline-offset-1'>Courses</h2>
                <div>
                    {
                        courses?.map(course => <Link key={course.id} to={`/course/${course.id}`}><p className='text-xl my-2 cursor-pointer hover:text-primary hover:underline'>{course?.title}</p></Link>)
                    }
                </div>
            </div>
            <div className="category">
                <h2 className='text-3xl underline underline-offset-1'>Instructor</h2>
                <div>
                    {                        
                        courses?.map(course => <p key={course.id} className='text-xl my-2 cursor-pointer hover:text-primary hover:underline'>{course?.author?.name}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;