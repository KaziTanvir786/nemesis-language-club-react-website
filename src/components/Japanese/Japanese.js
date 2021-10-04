import React from 'react';
import { Alert } from 'react-bootstrap';

const Japanese = () => {
    const alertStyle = {
        margin: '40px 20px 0px 20px',
        height: '140px'
    }
    return (
        <Alert style={alertStyle} variant="success">
            <div style={{ fontSize: '20px' }}>
                In this modern era, Japan has so many credits to make our life easier by inventing new technologies. This country is a trump card for students, technologists and more. To achieve the opportunities, Japanese language fluency is needed. So we are offering the basic JLPT N5 to N2. Besides the language, we care about your visa procedures in Japan.
            </div>
        </Alert>
    );
};

export default Japanese;