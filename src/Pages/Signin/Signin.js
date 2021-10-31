import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Signin = () => {
    const { signinUsingGoogle, auth} = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        else {
            registerNewUser(email, password);
        }
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                
                window.location.reload()
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    
    return (
        <div>
            <h1 className="fw-bold my-3">Please Register</h1>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <div className="mx-auto text-center">
                            <form onSubmit={handleRegistration}>
                                <div className="row mb-3">
                                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                                    </div>
                                </div>
                                
                                    <div className="row mb-3 text-danger">{error}</div>
                                <button type="submit" className="btn btn-warning">
                                    Register
                                </button>
                                

                            </form>
                            <br />
                            <p>=====Or Sign in With Google=====</p>
                            <Button  onSubmit={signinUsingGoogle}>Sign In With Google</Button>
                            <br />
                            <br />
                            <Link to='/login'><p>Already have an account</p></Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signin;