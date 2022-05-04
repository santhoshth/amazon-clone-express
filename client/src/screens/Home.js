import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import CarouselSlider from '../components/CarouselSlider';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("/api/products");
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            {products && <>
                <Slider />
                <CarouselSlider products={products.smartphones} />
                <CarouselSlider products={products.books} />
                <CarouselSlider products={products.gadgets} />
                <CarouselSlider products={products.others} />
            </>}
        </>
    )
}

export default Home;