import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "#212529",
    position: 'fixed',
    textAlign: 'center',
    padding: '20px',
    left: '0',
    bottom: '0',
    height: '50px',
    width: '100%'
};

const Footer = () => {
    return (
        <div style={footerStyle}>
            <small style={{ color: 'white' }}>All rights reserved to Nemesis Education, 2020 Ⓒ</small>
        </div>
    );
};

export default Footer;