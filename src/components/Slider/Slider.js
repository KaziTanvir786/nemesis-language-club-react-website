import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    const carouselStyle = {
        height: '500px',
        width: '1000px'
    };
    // data fetch for slider 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        // slider section 
        <Carousel style={carouselStyle}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={services[0]?.thumbnail}
                    alt="First slide"
                />
                <Carousel.Caption className="carouselText">
                    <h3>{services[0]?.name}</h3>
                    <p>Instructor: <span style={{ color: 'salmon' }}> {services[0]?.instructor}</span></p>
                    <p>{services[0]?.description}</p>
                    <h4 style={{ color: 'goldenrod' }}>Fees: ${services[0]?.fees}</h4>
                    <Button>Enroll now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={services[1]?.thumbnail}
                    alt="First slide"
                />
                <Carousel.Caption className="carouselText">
                    <h3>{services[1]?.name}</h3>
                    <p>Instructor: <span style={{ color: 'salmon' }}> {services[1]?.instructor}</span></p>
                    <p>{services[1]?.description}</p>
                    <h4 style={{ color: 'goldenrod' }}>Fees: ${services[1]?.fees}</h4>
                    <Button>Enroll now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={services[3]?.thumbnail}
                    alt="First slide"
                />
                <Carousel.Caption className="carouselText">
                    <h3>{services[3]?.name}</h3>
                    <p>Instructor: <span style={{ color: 'salmon' }}> {services[3]?.instructor}</span></p>
                    <p>{services[3]?.description}</p>
                    <h4 style={{ color: 'goldenrod' }}>Fees: ${services[3]?.fees}</h4>
                    <Button>Enroll now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={services[5]?.thumbnail}
                    alt="First slide"
                />
                <Carousel.Caption className="carouselText">
                    <h3>{services[5]?.name}</h3>
                    <p>Instructor: <span style={{ color: 'salmon' }}> {services[5]?.instructor}</span></p>
                    <p>{services[5]?.description}</p>
                    <h4 style={{ color: 'goldenrod' }}>Fees: ${services[5]?.fees}</h4>
                    <Button>Enroll now</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;