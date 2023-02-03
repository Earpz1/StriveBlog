import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartItem from '../../components/blog/blog-item/CartItem'
import './styles.css'
import { getCartData } from '../../fetches'
import { useQuery } from 'react-query'

const Cart = (props) => {
  const { data, isLoading } = useQuery(['cartData'], getCartData)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    if (data) {
      data.forEach((product) => {
        setPrice((price) => price + product.product.price)
      })
    }
  }, [data])

  return (
    <div className="blog-details-root">
      <Container>
        <h1 className="blog-main-title">Your shopping cart</h1>
        <h2>Total Cost: {price}</h2>
        {!isLoading && (
          <Row>
            {data.map((cart) => (
              <Col
                key={cart.id}
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
