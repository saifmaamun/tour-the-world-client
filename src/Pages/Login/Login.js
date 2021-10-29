import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Login = () => {
    // sign in method
    const { signinUsingGoogle, handleUserLogin,error} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        handleUserLogin(email, password);
    };


    return (
        <div>
            <div>
                <h1 className="fw-bolder mt-2">Please Login</h1>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="my-2 px-2 w-25 border-2 rounded fs-5 fw-bold" {...register("example")}  placeholder="email" /> <br />
                    <input className="my-2 px-2 w-25 border-2 rounded fs-5 fw-bold" {...register("exampleRequired", { required: true })} placeholder="password" /> <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <button type="submit">Login</button>
                </form> */}
                <Container>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <div className="mt-5 pt-5">
                                <input onBlur={hanldeEmail} className="w-100 py-3 rounded border-info" type="email" name="" placeholder="Email" />
                                <br />
                                <br />
                                <input onBlur={hanldePassword} className="w-100 py-3 rounded border-info" type="password" name="" placeholder="Password" />
                                <br />
                                <div className="row mb-3 text-danger">{error}</div>
                                <br />
                                <div className="text-center">
                                    <Button onClick={handleLogin} className="my-3">Log In</Button>
                                    <br />
                                    <p>=====Or Sign in With Google=====</p>
                                    <Button onClick={signinUsingGoogle}>Sign In With Google</Button>
                                    <br />
                                    <br />
                                    <Link to='/signin'><p>New User?</p></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;