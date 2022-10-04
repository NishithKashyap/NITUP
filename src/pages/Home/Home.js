import React from 'react';
import HomeCarousel from '../../components/Home/HomeCarousel';
import About from '../../components/Home/About';
import { TextAnimation } from '../../components/Home/TextAnimation';
import { HorizontalScroll } from '../../components/Home/HorizontalScroll';
import Products from '../../components/Home/Products'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div style={{marginTop: '4vh'}}>
            <HomeCarousel />  
            <Products />
            <About />
            <TextAnimation />
            <HorizontalScroll />
            <TextAnimation />
            <img alt="text cloud" src={require('../../images/images.webp')} className={styles.textCloudImage} />
        </div> 
    );
}