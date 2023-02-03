import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './styles.css'
import { useState } from 'react'
const CartItem = (props) => {
  const { product, imageURL } = props

  const [visible, setVisible] = useState('blog-card')

  const removeFromCart = async (productID) => {
    const options = {
      method: 'DELETE',
    }
    const fetchURL = `http://localhost:3001/cart/Dan/${productID}`

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        console.log(`Product Deleted`)
      }
    } catch (error) {}
  }

  return (
    <Card className={visible}>
      <Card.Img variant="top" src={product.imageURL} className="blog-cover" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button
          className="bg-danger"
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default CartItem
