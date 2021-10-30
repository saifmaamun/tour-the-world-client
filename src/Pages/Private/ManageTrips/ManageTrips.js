import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageTrips = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch('https://rocky-bastion-46955.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);

    const handleDelete = id => {
        const url = `https://rocky-bastion-46955.herokuapp.com/destinations/${id}`
        fetch(url, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = destinations.filter(destination => destination._id !== id)
                    setDestinations(remaining)
                }
        })
    }
    return (
        <div>
            <h1>from manage trip</h1>
            
            {
                destinations.map(destination => <div>
                    <Container>
                        <Row className="mt-5 py-5 border border-warning">
                            <Col className="" xs={12} md={4}>
                                <img className="w-100" src={destination.img} alt="" />
                            </Col>
                            <Col xs={6} md={8}>
                                <div className="text-start">
                                    <h1>{destination.name}</h1>
                                    <p>{destination.description}</p>
                                </div>
                            <button onClick={()=>handleDelete(destination._id)}>Remove</button>
                            </Col>
                        </Row>
                    </Container>
                </div>)
            }
        </div>
    );
};

export default ManageTrips;