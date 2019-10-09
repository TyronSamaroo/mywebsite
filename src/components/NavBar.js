import React, { Component} from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

export const NavBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Tyron Samaroo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Bio</Nav.Link>
      <Nav.Link href="#pricing">Projects</Nav.Link>
      <NavDropdown title="About Me" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Interest</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Social</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)