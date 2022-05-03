import '../styles/Home.css';
import React from 'react';
import Slider from './../components/Slider';
import products from '../data/Products';
import CarouselSlider from '../components/CarouselSlider';

function Home() {
    return (
        <>
            <Slider />
            <CarouselSlider products={products} />
            <CarouselSlider products={products} />
            <CarouselSlider products={products} />
            <CarouselSlider products={products} />
        </>
    )
}

export default Home;