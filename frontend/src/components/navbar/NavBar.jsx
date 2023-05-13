import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AddCustomer from "../addModal/AddCustomerDetails.jsx"

const NavBar = () => {


  return (
    <><div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">CustomerApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          
        </Nav>
        
              <AddCustomer/>
         
      </Navbar.Collapse>
    </Navbar>
  </div>
    </>
  )
}

export default NavBar
