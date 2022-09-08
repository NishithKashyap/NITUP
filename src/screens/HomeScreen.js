import React from 'react';
import { Container } from 'react-bootstrap'

import Carousel from '../components/Carousel';
import About from '../components/About';
import { TextAnimation } from '../components/TextAnimation';
import { HorizontalScroll } from '../components/HorizontalScroll';
import Products from '../components/Products'

export default function HomeScreen() {
    return (
        <div style={{marginTop: '4vh'}}>
            <Carousel />  
            <Products />
            <About />
            <TextAnimation />
            <HorizontalScroll />
            <TextAnimation />
            <img src={require('../images/images.webp')} style={{width: '100%'}}></img>
        </div> 
    );
}