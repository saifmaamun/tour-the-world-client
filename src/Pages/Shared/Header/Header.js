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
                <Navbar className="" collapseOnSelect expand="md" bg="warning" variant="dark">
                    <Container>

                        <Navbar.Brand as={HashLink} to="/home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block me-2 align-top"
                            />
                            <span className=" px-1 text-dark fw-bold">Tour The World</span></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-auto">
                                <Nav.Link as={HashLink} to="/home" className=" px-1 text-dark fw-bold">Home</Nav.Link >
                                {/* <Nav.Link as={HashLink} to="/destinations" className=" px-1 text-dark fw-bold">Destinations</Nav.Link > */}
                                <Nav.Link as={HashLink} to="/managetrips" className=" px-1 text-dark fw-bold">Manage Trips</Nav.Link>
                                <Nav.Link as={HashLink} to="/mytrips" className=" px-1 text-dark fw-bold">My Trips</Nav.Link>
                            </Nav>
                            <Nav className="me">
                                <Nav.Link as={HashLink} to="/adddestination" className=" px-1 text-dark fw-bold">Add Destination</Nav.Link>
                                <Nav.Link as={HashLink} to="/login" className=" px-1 text-dark fw-bold">Login</Nav.Link>
                                <Nav.Link as={HashLink} to="/signin" className=" px-1 text-dark fw-bold">Register</Nav.Link>
                            </Nav>
                            {user?.email && <Navbar.Text className=" px-1 text-primary fw-bold">
                                Signed in as:<span className=" px-1 text-primary fw-bold"> {user.displayName}</span>
                            </Navbar.Text>}
                            {user?.email && <Button className="bg-warning text-danger fw-bold border-0" onClick={logout}>Logout</Button>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;