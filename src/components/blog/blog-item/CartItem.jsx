import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './styles.css'
import { getCartData } from '../../../fetches'
import { useQuery } from 'react-query'

const CartItem = (props) => {
  const { refetch } = useQuery(['cartData'], getCartData)
  const { product } = props

  const removeFromCart = async (productID) => {
    const options = {
      method: 'DELETE',
    }
    const fetchURL = `http://localhost:3001/cart/Dan/${productID}`

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        refetch()
        console.log(`Product Deleted`)
        return
      }
    } catch (error) {}
  }

  return (
    <Card className="blog-card">
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
