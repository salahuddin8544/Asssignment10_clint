import React from 'react';
import { Image } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const AllCourses = ({course}) => {
    const {name,description,photoURL,id} = course
    return (
        <Card className="text-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
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
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default AllCourses;