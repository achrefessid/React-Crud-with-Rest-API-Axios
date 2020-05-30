import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
//import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Basic Crud App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/add">Add</Nav.Link>
    {/*<Link to="/add">Add</Link>*/}
    </Nav>
  </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar