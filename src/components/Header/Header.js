import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../assets/EH.png";

import './Header.css';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar"
    >
      <Container fluid className="headerContainer">
        <Navbar.Brand href="/etta-portfolio">
          <Image src={logo} width="150" height="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navBar" id="responsive-navbar-nav">
          <Nav className="headerNav mx-3">
            <Link to="/about" className="link mx-3">
              About
            </Link>
            <Link to="/projects" className="link mx-3">
              Projects
            </Link>
            <Link to="/resume" className="link mx-3">
              Resume
            </Link>
            <Link to="/contact" className="link mx-3">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
