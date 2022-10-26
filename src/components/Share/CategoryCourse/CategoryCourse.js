import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCourse = ({course}) => {
    const courses = useLoaderData()
    console.log(courses.length);
    return (
        <div>
            
        </div>
    );
};

export default CategoryCourse;