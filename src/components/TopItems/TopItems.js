import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import Slider from '../Slider/Slider';

const TopItems = () => {
    const colStyle = {
        backgroundColor: '#212529'
    };
    const registerStyle = {
        width: '300px',
        paddingTop: '70px'
    }
    const buttonStyle = {
        width: '280px'
    }
    // const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    return (
        <div>
            <Row>
                <Col sm={9}>
                    <Slider></Slider>
                </Col>
                <Col style={registerStyle} sm={3}>
                    <h2>Do you want <br /> to join us?</h2>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter your email"
                            aria-label="Enter your email"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <Button style={buttonStyle}> <FontAwesomeIcon icon={['fab', 'google']} /> Submit </Button>
                </Col>
            </Row>
        </div>
    );
};

export default TopItems;