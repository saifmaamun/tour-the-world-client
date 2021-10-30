import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo/flight.png'
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <>
                <Navbar className="text-light" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>

                        <Navbar.Brand as={HashLink} to="/home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block me-2 align-top"
                            />
                            <span className="rounded px-1 text-light fw-bold">Tour The World</span></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-auto">
                                <Nav.Link as={HashLink} to="/home" className="style rounded px-1 text-light fw-bold">Home</Nav.Link >
                                <Nav.Link as={HashLink} to="/destinations" className="style rounded px-1 text-light fw-bold">Destinations</Nav.Link >
                                {user?.email && <Nav.Link as={HashLink} to="/managetrips" className="style rounded px-1 text-light fw-bold">Manage Trips</Nav.Link>}
                                {user?.email &&<Nav.Link as={HashLink} to="/mytrips" className="style rounded px-1 text-light fw-bold">My Trips</Nav.Link>}
                            </Nav>
                            <Nav className="me">
                                {user?.email && <Nav.Link as={HashLink} to="/adddestination" className="style rounded px-1 text-light fw-bold">Add Destination</Nav.Link>}
                                {!user?.email && <Nav.Link as={HashLink} to="/login" className="style rounded px-1 text-light fw-bold">Login</Nav.Link>}
                                {!user?.email && <Nav.Link as={HashLink} to="/signin" className="style rounded px-1 text-light fw-bold">Register</Nav.Link>}
                            </Nav>
                            {user?.email && <Button className="bg-warning ms-2 text-danger fw-bold border-0" onClick={logout}>Logout</Button>}
                            {user?.email && <Navbar.Text className="px-1 text-primary fw-bold">
                                <span className="px-1 text-primary fw-bold"> {user.displayName}</span>
                            </Navbar.Text>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;