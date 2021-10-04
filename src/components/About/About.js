import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    const aboutDivStyle = {
        textAlign: 'justify',
        padding: '20px'
    }
    const imgStyle = {
        marginTop: '90px',
        width: '420px',
        height: 'auto'
    }
    return (
        <div>
            <Row>
                <Col sm={8}>
                    <div style={aboutDivStyle}>

                        <h1>About Us</h1>
                        <hr />
                        <p style={{ fontSize: '20px' }}>
                            <span style={{ color: 'salmon' }}>NEMESIS Language School</span> is the one of the top ranked Language School in Bangladesh. We are providing our services since 1979. Not only the Language School, but also we are working as a full fledged Language trainer throught the world. We have the most skilled instructors and trainers to train you and make your language learning easier and faster. <br />
                            <span style={{ color: 'salmon' }}>NEMESIS Language Club</span> has achived many awards and without any charge they are working for developing the languages. Four Languages are developing and trained by this academy: English, Japanese, French and German. <br />
                        </p>
                        <h3>Contact Us</h3>
                        <span style={{ fontSize: '18px' }}><strong>Address: </strong> Bashundhara R/A, Block: A, Road: 3</span> <br />
                        <span style={{ fontSize: '18px' }}><strong>Email: </strong> email@nemesis.lang.com</span> <br />
                        <span style={{ fontSize: '18px' }}><strong>Phone: </strong> +880 1728385991</span> <br />
                        <span style={{ fontSize: '18px' }}><strong>Facebook: </strong> facebook.com/nemesis.language.school.bd</span> <br />
                    </div>
                </Col>
                <Col sm={4}>
                    <img style={imgStyle} src="https://cdn.dribbble.com/users/983448/screenshots/3593327/dribble2.gif" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default About;