import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyTrips = () => {
    const {user}=useAuth();
    const [bookedItems, setBookedItems] = useState([])
    useEffect(() => {
        fetch('https://rocky-bastion-46955.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => {
                const added = data.filter(items => items.userEmail===user.email)
                console.log(added)
                setBookedItems(added)
            })
    }, []);
    // function modal (line) {
    //     <div class="modal-dialog modal-sm">line</div>
    // }

    const handleDelete = id => {
        console.log(id)
        const url = `https://rocky-bastion-46955.herokuapp.com/booked/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('this will be deleted')
                    const remaining = bookedItems.filter(bookedItem => bookedItem._id !== id)
                    setBookedItems(remaining)
                }
            })
    }
    return (
        <div>
            <h1>{user.displayName}'s trip</h1>
            <Container>
                {
                    bookedItems.map(bookedItem => <div
                        key={bookedItem._id}>
                        <Row className="m-5 bg-warning p-3 rounded">
                            <Col md={8}>
                                <div className="text-start">
                                    <h1>Destination: {bookedItem.placeName}</h1>
                                    <h5>User Name: {bookedItem.userName}</h5>
                                    <h5>User Email: {bookedItem.userEmail}</h5>
                                    <h5>Cost: ${bookedItem.cost}/Per Person  ||  for 1 week</h5>
                                </div>
                            </Col>
                            <Col className="text-center mt-5 pt-3" md={4}>
                                <button className="btn btn-dark fw-bold" onClick={() => handleDelete(bookedItem._id)}>Remove</button>
                            </Col>
                        </Row>
                    </div>)
                }
            </Container>
        </div>
    );
};

// user?.email === bookedItem.userEmail &&
export default MyTrips;