import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories,setCategories] =useState([]);
    useEffect(()=>{
        fetch('https://diploma-engineering-server.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        
    },[])
    return (
        <div>
          {
            categories.map(category=><p key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>)
          }
        </div>
    );
};

export default LeftSide;