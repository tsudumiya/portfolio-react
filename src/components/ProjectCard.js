import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col xs={6} md={4} className="card-item">
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <a href="">preview →</a>
                </div>
            </div>
        </Col>
    );
};
