import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const check = useLoaderData()
    console.log(check);
    return (
        <div>
            <h2>This is chek</h2>
        </div>
    );
};

export default CheckOut;