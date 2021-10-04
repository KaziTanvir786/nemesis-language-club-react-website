import React from 'react';
import { Alert } from 'react-bootstrap';

const French = () => {
    const alertStyle = {
        margin: '40px 20px 0px 20px',
        height: '140px'
    }
    return (
        <Alert style={alertStyle} variant="success">
            <div style={{ fontSize: '20px' }}>
                Art, Music, Architechture, Cosmetics and so many things there are to recognize France. Many of us are trying to make a better career, better job, better education or other purposes to visit france. So we are offering the French courses, in so many criterias to make yours fluency better than today. Enroll now to aieve your goal.
            </div>
        </Alert>
    );
};

export default French;