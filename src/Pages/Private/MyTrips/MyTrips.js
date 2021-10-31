import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyTrips = () => {
    const {user}=useAuth();
    const [bookedItems, setBookedItems] = useState([])
    useEffect(() => {
        // fetch('http://localhost:5000/booked')
        fetch('https://rocky-bastion-46955.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => {
                const added = data.filter(items => items.userEmail===user.email)
                console.log(added)
                setBookedItems(added)
            })
    }, []);

    const handleDelete = id => {
        console.log(id)
        const url = `https://rocky-bastion-46955.herokuapp.com/booked/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = bookedItems.filter(bookedItem => bookedItem._id !== id)
                    setBookedItems(remaining)
                }
            })
    }
    return (
        <div>
            <h1>My trip</h1>

            {
                bookedItems.map(bookedItem => <div
                    key={bookedItem._id}>
                    <Container>
                        <Row className="mt-5 py-5 border border-warning">
                            <Col sm={12} md={8}>
                                <div className="text-start">
                                    <h1>Destination: {bookedItem.placeName}</h1>
                                <h5>User Name: {bookedItem.userName}</h5>
                                <h5>User Email: {bookedItem.userEmail}</h5>
                                <h5>Cost: ${bookedItem.cost}/Per Person  ||  for 1 week</h5>
                                </div>
                                <Col className="" sm={12} md={4}>
                                    <button onClick={() => handleDelete(bookedItem._id)}>Remove</button>
                            </Col>
                            </Col>
                        </Row>
                    </Container>
                </div>)
            }
        </div>
    );
};

// user?.email === bookedItem.userEmail &&
export default MyTrips;