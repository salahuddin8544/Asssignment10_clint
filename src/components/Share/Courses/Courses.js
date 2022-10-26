import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useReactToPrint } from 'react-to-print';
const Courses = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content:()=>componentRef.current,
      documentTitle:'emp-data',
      onAfterPrint:()=>alert('print success')
    })
    const Allcourses = useLoaderData()
    console.log(Allcourses);
    const {name,description,photoURL,id} = Allcourses;
    return (
      <Card ref={componentRef} className='mt-4 mb-4'>
      <Card.Img variant="top" />
      <Card.Body>
      <Card.Title className='d-flex justify-content-between'><h3>{name}</h3> <Button onClick={handlePrint}>Download</Button> </Card.Title>
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