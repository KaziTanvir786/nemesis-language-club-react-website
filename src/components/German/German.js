import React from 'react';
import { Alert } from 'react-bootstrap';

const German = () => {
    // german details styles
    const alertStyle = {
        margin: '40px 20px 0px 20px',
        height: '140px'
    }
    return (
        // german details
        <Alert style={alertStyle} variant="success">
            <div style={{ fontSize: '20px' }}>
                The best place in Europe for travel, study, treatment and more. The German language is a little tricky and tougher to pronounce. So <span style={{ color: 'salmon' }}>NEMESIS Language School</span> offering many hands on courses and training to make your german better. Enroll today for your needing language development course today.
            </div>
        </Alert>
    );
};

export default German;