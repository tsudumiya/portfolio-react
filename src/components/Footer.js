import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="footer-logo">
                        {/* <img src={logo} alt="Logo" /> */}
                        SITE TITLE
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            {/* <a href="#">
                                <img src={navIcon1} alt="Icon" />
                            </a> */}
                            <a href="https://github.com/tsudumiya?tab=repositories" target="_blank">
                                <IconContext.Provider value={{ color: '#fff', size: '1.6em' }}>
                                    <BsGithub />
                                </IconContext.Provider>
                            </a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
