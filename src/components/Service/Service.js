import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { id, name, thumbnail, description, instructor, rating, fees } = props.service;
    // const history = useHistory();
    // const url = `/friend/${id}`;
    // const handleFriendClick = () => {
    //     history.push(`/friend/${id}`)
    // }
    const imgStyle = {
        height: '250px'
    };
    return (
        <Col>
            <Card>
                <Card.Img style={imgStyle} variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text >
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;