import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../AllCourses/AllCourses';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            {
                courses.map(course=> <AllCourses key={course.id} 
                    course={course}
                >
                   
                </AllCourses>)
            }
        </div>
    );
};

export default Home;