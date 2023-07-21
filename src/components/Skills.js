import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// ダミーイメージ
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import meter4 from '../assets/img/meter4.svg';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    const devided = 5;
    const target = '.skill-bx';

    useEffect(() => {
        const getScrollTop = () => {
            return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop, window.scrollY);
        };

        const setBackgroundPosition = () => {
            const scrollTop = getScrollTop();
            const position = scrollTop / devided;
            if (position) {
                document.querySelectorAll(target).forEach((element) => {
                    element.style.backgroundPosition = 'center top -' + position + 'px';
                });
            }
        };

        // スクロールイベントのリスナーを追加
        document.addEventListener('scroll', setBackgroundPosition);

        // コンポーネントのアンマウント時にリスナーをクリーンアップ
        return () => {
            document.removeEventListener('scroll', setBackgroundPosition);
        };
    }, []);

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>skill1</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>skill2</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>skill3</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>skill4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
