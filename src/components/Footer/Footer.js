import React from 'react';

const footerStyle = {
    backgroundColor: "brown",
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
            Hello
        </div>
    );
};

export default Footer;