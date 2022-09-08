import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
  } from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <MDBCarousel showControls fade style={{margin:0, display: 'inline-block'}}>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={require('../images/1.jpg')}
                alt='...'
                style={{height: '60%',flex: 1,width: null}}
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={require('../images/2.jpg')}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={require('../images/3.jpg')}
                alt='...'
            />
        </MDBCarousel>
    );
}