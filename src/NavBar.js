import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFillBagFill } from 'react-icons/bs';
import { RxPerson } from 'react-icons/rx';
import Slick from './Slick'
import { NavLink } from 'react-router-dom';



const NavBar = () => {

  return (
    <>
      <Slick />
      <Navbar expand="md" className='shadow py-3'>
        <Container>
          <NavLink to="/"><img src='images/Logo/Greats-Logo-Black-300x300.png' /></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navlinks justify-content-end ms-2">
                <NavLink to="/Man">Man</NavLink>
                <NavLink to="/Women">Women</NavLink>
                <NavLink to="/NewArrivals">New Arrivals</NavLink>
                <NavLink to="/Sale">Sale</NavLink>
                <NavLink to="/Ourstory">Our Story</NavLink>
                <NavLink to="/ContactUS">Contact US</NavLink>
                <hr></hr>
                <NavLink to="/Login" className='d-md-none d-block icone-small'>Account</NavLink>
                <NavLink to="/Cart" className='d-md-none d-block icone-small'>Cart</NavLink>
            </Nav>
          </Navbar.Collapse>
          <NavLink to="/Login" className='icone me-3 d-none d-md-block'><RxPerson /></NavLink>
          <NavLink to="/Cart" className='icone d-none d-md-block'><BsFillBagFill /></NavLink>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar