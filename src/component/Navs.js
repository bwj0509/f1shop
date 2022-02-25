import React from 'react';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navs(){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><Link to='/'> <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/320px-Mercedes_AMG_Petronas_F1_Logo.svg.png'></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Introduce</Nav.Link>
                    <Nav.Link href="/product">Product</Nav.Link>
                    <NavDropdown title="Drivers" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Lewis Hamilton</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">George Russell</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
    
}
export default Navs;