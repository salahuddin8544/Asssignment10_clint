import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../AllCourses/AllCourses';

const Category = () => {
    const categoryCourse = useLoaderData()
    console.log(categoryCourse);
    return (
        <div>
            {
                categoryCourse.map(course=> <AllCourses
                    key={course.id}
                    course={course}
                ></AllCourses>)
            }
        </div>
    );
};

export default Category;