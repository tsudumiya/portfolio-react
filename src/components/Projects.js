import React, { useRef, useState, useEffect } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

const Repository = () => {
    const projects1 = [
        {
            title: 'Dummy1',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Dummy2Dummy2Dummy2',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Dummy3',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Dummy4',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Dummy5',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
    ];
    const projects2 = [
        {
            title: 'Dummy6',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Dummy7',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Dummy8',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Dummy9',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab title 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab title 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className="mx-0">
                                        {projects1.map((project, index) => {
                                            return <ProjectCard key={index} {...project} />;
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects2.map((project, index) => {
                                            return <ProjectCard key={index} {...project} />;
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Repository;
