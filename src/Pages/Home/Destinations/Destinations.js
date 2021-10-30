import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    },[])
    return (
        <div>
            <Container>
                <Row>
                    <Col className="" xs={10} md={10}>
                        {
                            destinations.map(destination => <Destination
                            destination={destination}
                            ></Destination>)
                        }
                    </Col>
                    <Col xs={2} md={2}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destinations;