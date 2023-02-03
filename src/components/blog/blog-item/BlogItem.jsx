import React from 'react'
import { Card } from 'react-bootstrap'
import BlogAuthor from '../blog-author/BlogAuthor'
import './styles.css'
const BlogItem = (props) => {
  const { name, id, price, imageURL } = props
  return (
    <Card className="blog-card">
      <Card.Img variant="top" src={imageURL} className="blog-cover" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <BlogAuthor price={price} id={id} />
      </Card.Footer>
    </Card>
  )
}

export default BlogItem
