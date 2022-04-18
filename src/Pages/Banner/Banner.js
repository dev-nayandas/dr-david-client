import React from 'react';
import { Carousel } from 'react-bootstrap';




const Banner = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100 b-size img-fluid"
            src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Your Best Partner"
          />
          <Carousel.Caption>
            <h3 className='text-black'>I Care your family</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100"
            src="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="I Care your family"
          />
      
          <Carousel.Caption>
            <h3 className='text-black'>Your Best Partner</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100"
            src="https://images.pexels.com/photos/3779695/pexels-photo-3779695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Book Me For Better Health"
          />
      
          <Carousel.Caption>
            <h3 className='text-black'>Book Me For Better Health</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;