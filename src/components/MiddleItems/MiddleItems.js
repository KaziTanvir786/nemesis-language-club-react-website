import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MiddleItems.css'

const MiddleItems = () => {
    return (
        <div>
            <div className="middle-container">
                <NavLink to="/home/english"><Button className="middle-button english"><h1>English</h1></Button></NavLink>
                <NavLink to="/home/japanese"><Button className="middle-button japanese"><h1>Japanese</h1></Button></NavLink>
                <NavLink to="/home/french"><Button className="middle-button french"><h1>French</h1></Button></NavLink>
                <NavLink to="/home/german"><Button className="middle-button german"><h1>German</h1></Button></NavLink>
            </div>
        </div>
    );
};

export default MiddleItems;