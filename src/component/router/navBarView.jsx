import '../router/navBar.css';
import logo from "../../assets/logo-white.svg";
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
function NavBarView() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navbar  className={`custom-collapse ${isOpen ? 'custom-navbar-open' : ''}`} onToggle={() => setOpen(!isOpen)} expand="lg">
        <Container fluid className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/" className=" custom-margin-right " >
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center ">
            <Nav className="align-items-center text-center">
              <Nav.Link as={NavLink} to="/Artikel" className="text-white mx-3 fw-bold">Artikel</Nav.Link>
              <Nav.Link as={NavLink} to="/Quiz" className="text-white mx-3 fw-bold">Quiz & Test</Nav.Link>
              <Nav.Link as={NavLink} to="/About" className="text-white mx-3 fw-bolder">Tentang</Nav.Link>
            </Nav>
            <Nav.Link as={NavLink} to="/login" className="btn-login mx-2">
              Masuk
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBarView;
