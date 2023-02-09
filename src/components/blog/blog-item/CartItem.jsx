import React from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'
import './styles.css'
import { getCartData } from '../../../fetches'
import { useQuery } from 'react-query'
import { useState } from 'react'

const CartItem = (props) => {
  const { refetch } = useQuery(['cartData'], getCartData)
  const { product } = props
  const [loading, setLoading] = useState(false)

  const removeFromCart = async (productID) => {
    const options = {
      method: 'DELETE',
    }
    const fetchURL = `https://strive-mongo-production.up.railway.app/cart/Dan/${productID}`

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        setLoading(true)
        setTimeout(() => {
          refetch()
          setLoading(false)
        }, 700)
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
        {loading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : (
          <Button
            className="bg-danger"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </Button>
        )}
      </Card.Footer>
    </Card>
  )
}

export default CartItem
