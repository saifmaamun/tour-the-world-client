import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Destination = ({ destination }) => {
    console.log(destination)
    const {name, description, img, _id } = destination;
    return (
        <div>
            <Container>
                <Row className="mt-5 py-5 border border-warning">
                    <Col className="" xs={12} md={4}>
                        <img className="w-100" src={img} alt="" />
                    </Col>
                    <Col xs={6} md={8}>
                        <div className="text-start">
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <Link to={`/destinationDetails/${_id}`}>
                            <Button className="btn btn-warning">Details</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;