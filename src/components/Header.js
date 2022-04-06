import React from 'react'
import {Container,Nav} from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import {NavLink} from './Elements'

const Header = () => {
    return (
        <React.Fragment>
           
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Real Estate</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/projects">Projects</NavLink>
                            <NavLink to="/projects">About</NavLink>
                            <NavLink to="/projects">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header