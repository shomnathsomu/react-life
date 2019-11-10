import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render () {
        return (
            <Navbar default collapseOnSelect bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/about">
                            About
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/news">
                            News
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}