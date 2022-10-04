import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">NITUP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 justify-content-end"
                        style={{ maxHeight: '100px', width: "100%" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Cart</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">T-shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Oversized T-shirts</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Posters</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} href="#">KNIT CLUB</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav>
                    
                    {/* <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="my-2"
                        aria-label="Search"
                        style={{alignItems: 'center', justifyContent: 'center'}}
                        />
                        <Button variant="success" className="my-2" style={{borderRadius: 20}}>Search</Button>{' '}
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

/* <Navbar className="color-nav" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
        <Container> 
            <Navbar.Brand href="#home">
                KNITUP
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>

                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Cart</Nav.Link>

                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">T-shirts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Posters</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Key Chains</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Latest items</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link eventKey={2} href="#">KNIT CLUB</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Container>
        </Navbar> */