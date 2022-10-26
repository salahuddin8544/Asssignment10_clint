import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Courses = () => {
    const Allcourses = useLoaderData()
    console.log(Allcourses);
    const {name,description,photoURL,id} = Allcourses;
    return (
      <Card>
      <Card.Img variant="top" />
      <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link to={`/category/${id}`}>
          </Link>
      </Card.Body>
  </Card>
    );
};

export default Courses;