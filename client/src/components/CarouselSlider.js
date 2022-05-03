import '../styles/CarouselSlider.css';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import Carousel from 'react-multi-carousel';
import Product from './Product';

function CarouselSlider({ products }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const device = "mobile";

    return (
        <div className="carousel">

            <Carousel
                deviceType={device}
                responsive={responsive}
                autoPlaySpeed={1000000}
                autoPlay={device !== "mobile" ? true : false}
            >
                {
                    products.map(product => {
                        return (
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            />
                        );
                    })
                }

            </Carousel>
        </div>
    )
}

export default CarouselSlider