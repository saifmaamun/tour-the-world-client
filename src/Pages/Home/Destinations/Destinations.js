import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch('https://rocky-bastion-46955.herokuapp.com/destinations')
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
                                key={destination._id}
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