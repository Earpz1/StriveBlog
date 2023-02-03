import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'

const NavBar = (props) => {
  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img className="blog-navbar-brand" alt="logo" src="/logo.png" />
        </Navbar.Brand>
        <div className="d-flex">
          <a href="/cart/Dan">
            <Button className="blog-navbar-add-button bg-dark" size="md">
              View Cart
            </Button>
          </a>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar
