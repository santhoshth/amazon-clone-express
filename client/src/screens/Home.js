import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import CarouselSlider from '../components/CarouselSlider';
import '../styles/Home.css';
import { listProduct } from '../redux/actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './../components/Loading';
import Error from './../components/Error';
import { useParams } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const { keyword } = useParams();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct(keyword));
    }, [dispatch, keyword]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error error={error} />
            ) : (
                <>
                    {products ? <>
                        <Slider />
                        <CarouselSlider products={products.filter(p => p.category === "smartphones")} />
                        <CarouselSlider products={products.filter(p => p.category === "books")} />
                        <CarouselSlider products={products.filter(p => p.category === "gadgets")} />
                        <CarouselSlider products={products.filter(p => p.category === "others")} />
                    </> : null}
                </>
            )}
        </>
    )
}

export default Home;