import React, { Component } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

export default class Navigation extends Component {
    render () {
        return (
            <Navbar default collapseOnSelect  bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand to="/">Code Life</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="d-inline p-2 text-white" to="/">
                                Home
                            </NavLink>
                            <NavLink className="d-inline p-2 text-white" to="/about">
                                About
                            </NavLink>
                            <NavLink className="d-inline p-2 text-white" to="/news">
                                News
                            </NavLink>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}