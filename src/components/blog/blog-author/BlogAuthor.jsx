import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import './styles.css'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { getCartData } from '../../../fetches'

const BlogAuthor = (props) => {
  const cartData = useQuery(['cartData'], getCartData)

  const [alreadyInCart, setInCart] = useState(false)

  const addToCart = async (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    }
    const fetchURL = `http://localhost:3001/cart/Dan/${id}`

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)
      if (response.ok) {
        cartData.refetch()
        console.log(`${id} Added to cart!`)
        setInCart(true)
      }
    } catch (error) {}
  }

  return (
    <Row>
      <Col className="d-flex justify-content-between">
        <h6 className="pt-2">£{props.price}</h6>

        {!alreadyInCart && (
          <Button onClick={() => addToCart(props.id)}>Add to cart</Button>
        )}

        {alreadyInCart && `Added to cart!`}
      </Col>
    </Row>
  )
}

export default BlogAuthor
