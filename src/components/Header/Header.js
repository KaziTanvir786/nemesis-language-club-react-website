import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const headerStyle = {
    position: 'sticky',
    left: '0',
    top: '0',
    width: '100%',
    zIndex: '1'
};

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "brown"
    };
    const normalStyle = {
        textDecoration: 'none',
        color: 'whitesmoke'
    };
    const navTitleStyle = {
        marginLeft: '20px'
    }
    const navItemStyle = {
        marginRight: '20px'
    }
    const smallTextStyle = {
        fontSize: '14px'
    }
    const userIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <div style={headerStyle}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand style={navTitleStyle} href="#home"><strong>NEMESIS</strong> <small style={smallTextStyle}>Language School</small></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={navItemStyle} className="ms-auto">
                        <Nav.Link><NavLink style={normalStyle} activeStyle={activeStyle} to="/home">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink style={normalStyle} activeStyle={activeStyle} to="/services">Services</NavLink></Nav.Link>
                        <Nav.Link><NavLink style={normalStyle} activeStyle={activeStyle} to="/about">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink style={normalStyle} activeStyle={activeStyle} to="/other">Other</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;