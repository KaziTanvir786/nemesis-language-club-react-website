import React from 'react';
import { NavLink } from 'react-router-dom';
import './MiddleItems.css'

const MiddleItems = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <div>
            <div className="middle-container">
                <NavLink activeStyle={activeStyle} to="/home/english"><div className="middle-card"><h1>English</h1></div></NavLink>
                <NavLink activeStyle={activeStyle} to="/home/japanese"><div className="middle-card"><h1>Japanese</h1></div></NavLink>
                <NavLink activeStyle={activeStyle} to="/home/french"><div className="middle-card"><h1>French</h1></div></NavLink>
                <NavLink activeStyle={activeStyle} to="/home/german"><div className="middle-card"><h1>German</h1></div></NavLink>
            </div>
        </div>
    );
};

export default MiddleItems;