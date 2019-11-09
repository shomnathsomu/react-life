import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return(
            <Container>
                <Jumbotron>
                    <h2>Welcome to codeLife</h2>
                    <p>This is how to build a website with React, React-router and React-bootstrap.</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsstyle="primary">About</Button>
                </Link>
            </Container>
        );
    }
}