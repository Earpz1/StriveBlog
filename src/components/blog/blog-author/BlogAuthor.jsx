import React from 'react'
import { Col, Row, Button, Spinner } from 'react-bootstrap'
import './styles.css'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { getCartData } from '../../../fetches'

const BlogAuthor = (props) => {
  const cartData = useQuery(['cartData'], getCartData)

  const [alreadyInCart, setInCart] = useState(false)
  const [loading, setLoading] = useState(false)

  const addToCart = async (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    }
    const fetchURL = `https://strive-mongo-production.up.railway.app/cart/Dan/${id}`

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)
      if (response.ok) {
        cartData.refetch()
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setInCart(true)
        }, 1500)
      }
    } catch (error) {}
  }

  return (
    <Row>
      <Col className="d-flex justify-content-between">
        <h6 className="pt-2">£{props.price}</h6>

        {!alreadyInCart && !loading && (
          <Button onClick={() => addToCart(props.id)}>Add to cart</Button>
        )}
        {loading && <Spinner animation="border" role="status"></Spinner>}
        {alreadyInCart && `Added to cart!`}
      </Col>
    </Row>
  )
}

export default BlogAuthor
