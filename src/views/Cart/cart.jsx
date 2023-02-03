import React, { useEffect, useState } from 'react'
import { Container, Image, Button, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import CartItem from '../../components/blog/blog-item/CartItem'
import './styles.css'

const Cart = (props) => {
  const [cartData, setcartData] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setuser] = useState()
  const [isloaded, setisloaded] = useState(true)
  const params = useParams()
  const navigate = useNavigate()

  const getCartData = async () => {
    const options = {
      method: 'GET',
    }
    const fetchURL = 'http://localhost:3001/cart/63caba35c8228de3317851c6'

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        const data = await response.json()
        setcartData(data.products)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getCartData()
  }, [])

  return (
    <div className="blog-details-root">
      <Container>
        <h1 className="blog-main-title">Your shopping cart</h1>

        <Row>
          {cartData.map((post) => (
            <Col
              md={4}
              style={{
                marginBottom: 50,
              }}
            >
              <CartItem user={user} key={post.title} {...post} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Cart
