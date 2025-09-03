// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../CSS/Header.css';

const Header = () => {
  const name = "Johanne Enama";

  return (
    <header className="header-bg text-white text-center d-flex align-items-center justify-content-center">
      <Navbar bg="transparent" expand="lg" fixed="top">
        <Navbar.Brand href="#home" className="text-white">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <h1 className="typing-animation display-3">
          {name}
        </h1>
        <p className="lead">Web Developer | Data Analyst Apprentice| Coder| Language enthusiast/ Polygot</p>
      </div>
    </header>
  );
};

export default Header;