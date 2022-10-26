import React from 'react';
import { Image } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const AllCourses = ({course}) => {
    const {name,description,photoURL,id} = course
    return (
        <Card className="text-center mb-2 mt-4">
        <Card.Body>
          <Card.Title><h3>{name}</h3></Card.Title>
          <Image className='w-100'
          src={photoURL}
          >
          </Image>
          <Card.Text>
          {
                        description.length > 250 ?
                            <p>{description.slice(0, 100) + '...'} <Link to={`/course/${id}`}>Read More</Link> </p>
                            :
                            <p>{description}</p>
                    }
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default AllCourses;