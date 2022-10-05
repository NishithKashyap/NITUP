import React from 'react';
import About from '../../components/Home/About';
import { TextAnimation } from '../../components/Home/TextAnimation';
import { HorizontalScroll } from '../../components/Home/HorizontalScroll';
import Categories from '../../components/Home/Categories'
import Banner from '../../components/Home/Banner'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div style={{marginTop: '4vh'}}>
            <Banner />
            <Categories />
            <About />
            <TextAnimation />
            <HorizontalScroll />
            <TextAnimation />
            <img alt="text cloud" src={require('../../images/images.webp')} className={styles.textCloudImage} />
        </div> 
    );
}