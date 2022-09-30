import React from 'react';
import Carousel from '../components/Home/Carousel';
import About from '../components/Home/About';
import { TextAnimation } from '../components/Home/TextAnimation';
import { HorizontalScroll } from '../components/Home/HorizontalScroll';
import Products from '../components/Home/Products'

export default function Home() {
    return (
        <div style={{marginTop: '4vh'}}>
            <Carousel />  
            <Products />
            <About />
            <TextAnimation />
            <HorizontalScroll />
            <TextAnimation />
            <img alt="text cloud" src={require('../images/images.webp')} style={{width: '100%'}}></img>
        </div> 
    );
}