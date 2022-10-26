import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CheckOut = () => {
    const checkout = useLoaderData()
    const{photoURL,name,Price}= checkout;
    return (
        <div className='mt-2'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photoURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Price {Price}</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CheckOut;