import React from 'react'
import { Col, Image, Row, Button } from 'react-bootstrap'
import './styles.css'

const BlogAuthor = (props) => {
  const addToCart = async (id) => {
    console.log(`Add item ${id} to the cart`)

    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
    }
    const fetchURL = `http://localhost:3001/cart/63caba35c8228de3317851c6/${id}`

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)
      if (response.ok) {
        console.log(`${id} Added to cart!`)
      }
    } catch (error) {}
  }

  const price = props.price
  return (
    <Row>
      <Col className="d-flex justify-content-between">
        <h6 className="pt-2">£{price}</h6>
        <Button onClick={() => addToCart(props.id)}>Add to cart</Button>
      </Col>
    </Row>
  )
}

export default BlogAuthor
