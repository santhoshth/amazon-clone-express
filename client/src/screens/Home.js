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
                <CarouselSlider products={products.filter(p => p.category === "smartphones")} />
                <CarouselSlider products={products.filter(p => p.category === "books")} />
                <CarouselSlider products={products.filter(p => p.category === "gadgets")} />
                <CarouselSlider products={products.filter(p => p.category === "others")} />
            </>}
        </>
    )
}

export default Home;