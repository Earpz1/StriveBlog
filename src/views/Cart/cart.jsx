import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartItem from '../../components/blog/blog-item/CartItem'
import './styles.css'

const Cart = (props) => {
  const [cartData, setcartData] = useState('')
  const [loading, setLoading] = useState(false)

  const getCartData = async () => {
    const options = {
      method: 'GET',
    }
    const fetchURL = 'http://localhost:3001/cart/Dan'

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        const data = await response.json()
        setcartData(data)
        setTimeout(() => {
          setLoading(true)
        }, 1500)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getCartData()
  }, [loading])

  return (
    <div className="blog-details-root">
      <Container>
        <h1 className="blog-main-title">Your shopping cart</h1>
        <h2>Total Cost: £0</h2>
        {loading && (
          <Row>
            {cartData.map((cart) => (
              <Col
                md={4}
                style={{
                  marginBottom: 50,
                }}
              >
                <CartItem key={cart.id} {...cart} refresh={getCartData} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  )
}

export default Cart
