import React from 'react';
import { Carousel } from 'react-bootstrap';




const Banner = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 b-size"
            src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Your Best Partner"
          />
          <Carousel.Caption>
            <h3>I Care your family</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="I Care your family"
          />
      
          <Carousel.Caption>
            <h3>Your Best Partner</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Book Me For Better Health"
          />
      
          <Carousel.Caption>
            <h3>Book Me For Better Health</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;