import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import './styles.css'

const BlogAuthor = (props) => {
  const user = props.user
  return (
    <Row>
      <Col xs={2}>
        <Image className="blog-author" src={user.avatar} roundedCircle />
      </Col>
      <Col>
        <div>by</div>
        <h6>
          {user.name} {user.surname}
        </h6>
      </Col>
    </Row>
  )
}

export default BlogAuthor
