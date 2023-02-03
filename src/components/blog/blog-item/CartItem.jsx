import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogAuthor from '../blog-author/BlogAuthor'
import './styles.css'
const CartItem = (props) => {
  const {
    name,
    description,
    brand,
    _id,
    price,
    reviews,
    imageURL,
    category,
  } = props
  const user = props.user
  return (
    <Card className="blog-card">
      <Card.Img variant="top" src={imageURL} className="blog-cover" />
      <Card.Body>
        <Card.Title>
          {category} - {name}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button className="bg-danger">Remove from Cart</Button>
      </Card.Footer>
    </Card>
  )
}

export default CartItem
