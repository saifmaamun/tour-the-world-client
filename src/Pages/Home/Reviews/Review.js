import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Tours = () => {
    return (
        <div className="mt-5 py-5">
            <h1 className="mb-3 fw-bold text-start ps-5">User Review</h1>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <Card className="border-0 bg-warning" style={{ width: '18rem' }}>
                            <Card.Img className="rounded-circle w-50 mx-auto shadow-lg my-3" variant="top" src="https://randomuser.me/api/portraits/men/79.jpg" />
                            <Card.Body>
                                <Card.Title>Kirk White</Card.Title>
                                <Card.Text>
                                    I used this platform as traveler and in both ways, this is one of the best platform ever.People here are customer centric and always go beyond KRA to help in every manner.Very good organisation
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="border-0 bg-warning" style={{ width: '18rem' }}>
                            <Card.Img className="rounded-circle w-50 mx-auto shadow-lg my-3" variant="top" src="https://randomuser.me/api/portraits/men/62.jpg" />
                            <Card.Body>
                                <Card.Title>Laurie Simpson</Card.Title>
                                <Card.Text>
                                    "Tour The World" is very nice platform to book your travel destination. what a lovely place it is on the face of the earth. It was a blissful and refreshing vacation for us which brought us closer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="border-0 bg-warning" style={{ width: '18rem' }}>
                            <Card.Img className="rounded-circle w-50 mx-auto shadow-lg my-3" variant="top" src="https://randomuser.me/api/portraits/women/19.jpg" />
                            <Card.Body>
                                <Card.Title>Riley Wells</Card.Title>
                                <Card.Text>
                                    Booked 6N/7Days Sikkim tour Package. well organised by Team Holidays Crowd. Hotel, Cab, Sightseeings, Food are amazing. Looking forward to book next trip With Holidays Crowd.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Tours;