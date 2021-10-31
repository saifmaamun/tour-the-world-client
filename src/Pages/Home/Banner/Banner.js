import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/banner-img/1.jpg'
import img2 from '../../../images/banner-img/2.jpg'
import img3 from '../../../images/banner-img/3.jpg'

const Banner = () => {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-warning fw-bold">
                        <h1>Enjoy The Beauty of The World </h1>
                        <h3>Enjoy The Beautiful Nature</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ img2 }
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-info fw-bold">
                        <h1>Amuse With Mother Nature</h1>
                        <h3>Go Beyond Horaizon</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ img3 }
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark fw-bold">
                        <h1>Explore With Us</h1>
                        <h3>Explore Every Corner Of The World </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
};

export default Banner;