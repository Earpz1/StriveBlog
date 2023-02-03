import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './styles.css'
import { useState, useEffect } from 'react'

const NavBar = (props) => {
  const [cartItems, setcartItems] = useState('')
  const [cartLength, setcartLength] = useState('')

  const getCartData = async () => {
    const options = {
      method: 'GET',
    }
    const fetchURL = 'http://localhost:3001/cart/63caba35c8228de3317851c6'

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        const items = await response.json()
        setcartLength(items.products.length)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getCartData()
  }, [])

  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            className="blog-navbar-brand"
            alt="logo"
            src="https://www.freepnglogos.com/uploads/shopee-logo/logo-shopee-png-images-download-shopee-1.png"
          />
        </Navbar.Brand>
        <div className="d-flex">
          <a href="/cart/63caba35c8228de3317851c6">
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
