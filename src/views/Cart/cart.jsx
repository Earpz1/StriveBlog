import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartItem from '../../components/blog/blog-item/CartItem'
import './styles.css'
import { getCartData } from '../../fetches'
import { useQuery } from 'react-query'

const Cart = (props) => {
  const { data, isLoading } = useQuery(['cartData'], getCartData)
  console.log(data)
  return (
    <div className="blog-details-root">
      <Container>
        <h1 className="blog-main-title">Your shopping cart</h1>
        {!isLoading && (
          <>
            <Row>
              {data.cart.map((cart) => (
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
          </>
        )}
      </Container>
    </div>
  )
}

export default Cart
