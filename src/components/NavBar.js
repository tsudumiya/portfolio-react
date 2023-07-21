import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BsGithub } from 'react-icons/bs';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <Navbar.Text>SITE TITLE</Navbar.Text>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/tsudumiya?tab=repositories" target="_blank">
                                <IconContext.Provider value={{ color: '#fff', size: '1.6em' }}>
                                    <BsGithub />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </span>
                    <Nav className="ms-auto">
                        <Nav.Link href="#top" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                            <span>Top</span>
                            <span>Top</span>
                        </Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'usedlanguage' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('usedlanguage')}>
                            <span>Skills</span>
                            <span>Skills</span>
                        </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'repository' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('repository')}>
                            <span>Projects</span>
                            <span>Projects</span>
                        </Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                            <span>Contact</span>
                            <span>Contact</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
