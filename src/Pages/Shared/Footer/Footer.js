import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark">
        <div className="bg-dark text-warning fw-bold mt-5 py-5">
            <Container>
                <Row>
                    <Col className="text-start" xs={12} md={4}>
                        <h4>Brand USA</h4>
                        <h4>Contact Us</h4>
                        <h4>About Us</h4>
                        <h4>Terms And Police</h4>
                        <h4>Tradings</h4>
                    </Col>
                    <Col className="text-start" xs={12} md={4}>
                        <h4>House # 4</h4>
                        <h4>Road # 21</h4>
                        <h4>Sector # 7</h4>
                        <h4>Uttara Model Town</h4>
                    </Col>
                    <Col className="text-start"  xs={12} md={4}>
                        <h4>Phone: 02 8956517/8919659/8963298</h4>
                        <h4>Mobile: 01711 070369/01819 2</h4>
                        <h4>Fax: 02 8919659</h4>
                        <h4>Email: b726r6jms4@temporary-mail.net</h4>
                   
                    </Col>
                </Row>
            </Container>
        </div>
            <p className="text-light text-center">PrivacyPolicies.com © 2002 - 2031 All rights reserved</p>
                    </div>
    );
};

export default Footer;