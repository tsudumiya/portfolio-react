import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Hello I'm Tsudumiya", 'Welcome to my Portfolio'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="intro" id="top">
            <Container fluid className="d-flex justify-content-center align-items-center">
                <Row className="justify-content-center">
                    <Col xs={12} md={6} xl={7} className="px-0">
                        <div style={{ display: 'flex' }}>
                            <div className="d-flex justify-content-center align-items-center" style={{ flexGrow: 1, width: '100%' }}>
                                <h1>
                                    <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                                        <span className="wrap">{text}</span>
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <a className="scroll-down" href="#skills">
                <span>Scroll Down</span>
            </a>
        </section>
    );
};

export default Intro;
