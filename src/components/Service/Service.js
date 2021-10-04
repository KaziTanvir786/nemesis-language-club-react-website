import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, thumbnail, description, instructor, ratings, fees, totalEnrolled } = props.service;
    // const history = useHistory();
    // const url = `/friend/${id}`;
    // const handleFriendClick = () => {
    //     history.push(`/friend/${id}`)
    // }
    const imgStyle = {
        height: '200px'
    };
    return (
        <Col>
            <Card className="card">
                <Card.Img style={imgStyle} variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text >
                        <p style={{ color: 'salmon' }}>Programme Instructor: {instructor}</p>
                        <p>Average Ratings: <span style={{ color: 'goldenrod', fontSize: '20px' }}>{ratings}</span>/5</p>
                        {description}
                        <h4>We charge: $<span style={{ color: 'salmon' }}>{fees}</span></h4>
                        <p>Total <span style={{ color: 'firebrick', fontSize: '26px' }}>{totalEnrolled}</span> people have enrolled</p>
                        <Button>Enroll Now</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;