import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#!">NITUP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto" navbarScroll>
                        <Nav.Link href="#!">Home</Nav.Link>
                        <Nav.Link href="#!">Cart</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#!">Shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#!">T-shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#!">Oversized T-shirts</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#!">Posters</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#!">KNIT CLUB</Nav.Link>
                        <Nav.Link href="#!">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;