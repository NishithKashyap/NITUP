import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap';

export default function HomeCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className='w-100 d-block'
                    src={require('../../images/1.jpg')}
                    alt='...'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='w-100 d-block'
                    src={require('../../images/2.jpg')}
                    alt='...'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='w-100 d-block'
                    src={require('../../images/3.jpg')}
                    alt='...'
                />
            </Carousel.Item>
        </Carousel>
    );
}