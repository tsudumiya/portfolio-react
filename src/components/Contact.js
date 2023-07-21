import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        try {
            let response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(formDetails),
            });

            let result = await response.json();
            setButtonText('Send');
            setFormDetails(formInitialDetails);
            console.log(result);

            if (result.code === 200) {
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col lg={8}>
                        <h2>Contact</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        <form onSubmit={handleSubmit}>
                            <Row className="mx-0">
                                <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                            </Row>
                            <Row className="mx-0">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Row>
                            <Row className="mx-0">
                                <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </Row>
                            <Row className="mx-0">
                                <Col sm={12} className="px-0">
                                    <textarea rows="8" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {status.message && (
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                )}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
