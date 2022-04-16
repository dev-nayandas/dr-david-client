import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = ({service}) => {
    const{name, id ,price,description,img} = service;
    return ( 
        <CardGroup>
  <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardGroup>
    );
};

export default Service;