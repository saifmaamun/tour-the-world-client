import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const [booking, setBooking] = useState({})
    const { name, description, img, cost } = booking;

    const { id } = useParams();

    const history = useHistory()

    const { user } = useAuth();
    const { displayName, email } = user;

    
    const onSubmit = data => {
        axios.post('https://rocky-bastion-46955.herokuapp.com/booked', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    history.push('/mytrips')
                }
            })
            };
    
    
    
    useEffect(() => {
        fetch(`https://rocky-bastion-46955.herokuapp.com/destinationDetails/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [booking])
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            placeName: name,
            userName: displayName,
            userEmail: email,
            cost: cost
        }
    });
    return (
        <div>
            <div>
                <Container className="my-5">
                    <Row>
                        <Col sm={7}>
                            <Container className="bg-warning rounded">
                                <Row>
                                    <div className="bg-dark mt-2 rounded">
                                        <img className=" w-50 mx-auto my-3 rounded" src={img} alt="" />
                                        </div>
                                    <div className="pt-3">
                                        <h1 >{name}</h1>
                                        <p>{description}</p>
                                        <br />
                                        <div className="bg-dark m-2 p-2"><span className="fs-5 text-light fw-bold">Cost: ${cost}/per person  ||   For: 1 week</span>
                                            </div>
                                        </div>
                                </Row>
                            </Container>
                        </Col>
                        <Col sm={5}>
                            <div className="book-trip">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={name} {...register("placeName", { required: true })} placeholder={name} />
                                    <input defaultValue={displayName} {...register("userName", { required: true })} placeholder={displayName} />
                                    <input defaultValue={email} {...register("userEmail", { required: true })} placeholder={email} />
                                    <input defaultValue={cost} type="number" {...register("cost", { required: true })} placeholder={cost} />
                                    <button className="btn btn-dark px-5"type="submit">Book Now</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Booking;