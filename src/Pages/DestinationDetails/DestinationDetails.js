import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DestinationDetails = () => {
    const { id } = useParams();
    const [destination, setDestination] = useState({})
    const { name, description, thumbnail, img, cost, _id } = destination;
    useEffect(() => {
        fetch(`https://rocky-bastion-46955.herokuapp.com/destinationDetails/${id}`)
        .then(res => res.json())
            .then(data => setDestination(data))
    },[])
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={thumbnail}
                            alt={name}
                        />
                        <Carousel.Caption>
                            <h3>{name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Container className="my-5 py-5 bg-warning rounded">
                    <Row>
                        <Col sm={4}>
                            <img className=" w-100 h-75 mt-3 rounded" src={img} alt="" />
                        </Col>
                        <Col className="text-start" sm={8}>
                            <h1 >{name}</h1>
                            <p>{description}</p>
                            <br />
                            <br />
                            <br />
                            <h5>Cost: ${cost}/per person</h5>
                            <h5> For: 1 week</h5>
                            <Link to={`/booking/${_id}`}>
                            <button className="btn btn-dark px-5 fw-bold">Book</button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default DestinationDetails;