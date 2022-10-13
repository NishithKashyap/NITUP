import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
	return (
		<Navbar bg='dark' variant='dark' fixed='top'>
			<Container fluid>
				<Navbar.Brand className='ml-2 p-1' href='/'>
					NITUP
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav className='ms-auto' navbarScroll>
						<Nav.Item>
							<a className='nav-link' href='/'>
								Home
							</a>
						</Nav.Item>
						<Nav.Item>
							<a className='nav-link' href='#cart'>
								Cart
							</a>
						</Nav.Item>
						<NavDropdown
							title='Products'
							id='navbarScrollingDropdown'
						>
							<NavDropdown.Item href='#shirts'>
								Shirts
							</NavDropdown.Item>
							<NavDropdown.Item href='#tshirts'>
								T-shirts
							</NavDropdown.Item>
							<NavDropdown.Item href='#ovtshirts'>
								Oversized T-shirts
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#posters'>
								Posters
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Item>
							<a className='nav-link' href='#community'>
								KNIT CLUB
							</a>
						</Nav.Item>
						<Nav.Item>
							<a className='nav-link' href='#about'>
								About
							</a>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
