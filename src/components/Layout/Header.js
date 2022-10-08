import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand="md">
            <Container fluid>
                <Navbar.Brand href="/">NITUP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto mb-2 mb-lg-0">
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#cart">Cart</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title="Products" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">T-shirts</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Oversized T-shirts</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Posters</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#community">NIT CLUB</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;