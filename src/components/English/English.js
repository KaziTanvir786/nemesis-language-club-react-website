import React from 'react';
import { Alert, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const English = () => {
    const alertStyle = {
        margin: '40px 20px 0px 20px',
        height: '140px'
    }
    return (
        <Alert style={alertStyle} variant="success">
            <div style={{ fontSize: '20px' }}>
                English is the internatinal language. Not only the native English speakers but also the entire world pushes up this language so far, so anyone in this modern era needs to learn fluent English as soon as possible to make the career broader, and increase the productivity. We <span style={{ color: 'salmon' }}>NEMESIS Language School</span> are offering different kinds of English offline development services, to make your dream come true.
            </div>
        </Alert>
    );
};

export default English;