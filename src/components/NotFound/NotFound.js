import React from 'react';
// not found component styels
const errorStyle = {
    color: "Red"
}
const divStyle = {
    marginTop: '200px'
}
const NotFound = () => {
    return (
        // not found component
        <div style={divStyle}>
            <h1 style={errorStyle}>404 | Not Found</h1>
            <p>This page you are trying to route in not present in this website. Please recheck your url.</p>
        </div>
    );
};

export default NotFound;