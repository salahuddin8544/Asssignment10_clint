import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Courses = () => {
    const Allcourses = useLoaderData()
    console.log(Allcourses);
    const {name,description,photoURL,id} = Allcourses;
    return (
      <Card className='mt-4 mb-4'>
      <Card.Img variant="top" />
      <Card.Body>
      <Card.Title><h3>{name}</h3></Card.Title>
      <Image className='w-100'
          src={photoURL}
          >
          </Image>
          <Card.Text>
            <p>{description}</p>
          </Card.Text>
          <Link to={`/checkout/${id}`}>Checkout</Link>
      </Card.Body>
     
  </Card>
    );
};

export default Courses;