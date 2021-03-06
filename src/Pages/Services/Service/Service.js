import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CheckOut from '../../CheckOut/CheckOut';
import './Service.css'

const Service = ({ service }) => {
  const { name, img, id, price, description } = service;
  const nevigate = useNavigate()
  const nevigateToServiceDetails = id =>{
      nevigate(`/services/${id}`)
  }
  return (
    <CardGroup className='w-25'>

      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{price}</small><br></br>
          <Button onClick={()=> nevigateToServiceDetails(id) } href="">Book Me</Button>
        </Card.Footer>
      </Card>
    </CardGroup>


    // <div className=''>
    //   <img src={img}></img>
    //   <h2>{name}</h2>
    //   <h4>{price}</h4>
    //   <p><small>{description}</small></p>
    //   <button>Book Me</button>
    // </div>

  );
};

export default Service;