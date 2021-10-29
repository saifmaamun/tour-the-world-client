import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo/flight.png'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <>
                <Navbar className="fw-bold" collapseOnSelect expand="sm" bg="primary" variant="dark">
                    <Container>

                        <Navbar.Brand as={HashLink} to="/home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block me-2 align-top"
                            />
                            Tour The World</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-auto">
                                <Nav.Link as={HashLink} to="/home">Home</Nav.Link >
                                <Nav.Link as={HashLink} to="/destinations">Destinations</Nav.Link >
                                <Nav.Link as={HashLink} to="/tours">Tours</Nav.Link >
                                <Nav.Link as={HashLink} to="/managetrips">Manage Trips</Nav.Link>
                                <Nav.Link as={HashLink} to="/mytrips">My Trips</Nav.Link>
                            </Nav>
                            <Nav className="me">
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                                <Nav.Link as={HashLink} to="/signin">Register</Nav.Link>
                            </Nav>
                            {user?.email && <Navbar.Text>
                                Signed in as:<span className=" px-1 text-dark fw-bold"> {user.displayName}</span>
                            </Navbar.Text>}
                            {user?.email && <Button onClick={logout}>Logout</Button>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;