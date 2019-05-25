import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/js/src/collapse.js";







export default class CustomNavbar extends Component {
    render () {
        return (
            <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Gamile Mustapha</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
  <Nav className='floatRight'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                    <Nav.Link href='/about'></Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

            </div>
        )
    }

}

