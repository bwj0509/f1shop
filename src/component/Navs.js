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
                    <Nav.Link to><Link to="/introduce" className='navcolor'>INTRODUCE</Link></Nav.Link>
                    <Nav.Link><Link to="/product" className='navcolor'>PRODUCT</Link></Nav.Link>
                    <NavDropdown title="LEWIS HAMILTON" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><img src='../lewis.jpg'></img></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Lewis Hamilton</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="GEORGE RUSSELL" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><img src='../george.jpg'></img></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">George Russell</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link><Link to="/cart" className='navcolor'>Cart</Link></Nav.Link>
                    <Nav.Link href="/signup"><Link to="/signup" className='navcolor'>Sign up</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
    
}
export default Navs;