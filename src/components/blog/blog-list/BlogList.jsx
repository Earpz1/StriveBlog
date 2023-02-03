import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import BlogItem from '../blog-item/BlogItem'
import { useEffect } from 'react'
import { useState } from 'react'

const BlogList = (props) => {
  const [posts, setPosts] = useState('')
  const [postsLoaded, setPostsLoaded] = useState(false)
  const [display, setdisplay] = useState(3)
  const user = props.user

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [display])

  const loadMore = () => {
    setdisplay(display + 3)
  }

  const sortBy = (filter) => {
    console.log(filter)
  }

  const getData = async () => {
    const options = {
      method: 'GET',
    }
    const fetchURL = `http://localhost:3001/products/?limit=${display}`

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        setPosts(await response.json())
        setPostsLoaded(true)
      }
    } catch (error) {}
  }

  return (
    <>
      {postsLoaded && (
        <Row>
          <Col md={12} className="mb-5">
            Sort by:{' '}
            <Button
              onClick={() => {
                sortBy('name')
              }}
            >
              Name
            </Button>{' '}
            <Button
              onClick={() => {
                sortBy('price')
              }}
            >
              Price
            </Button>
          </Col>
          {posts.map((post) => (
            <Col
              md={4}
              style={{
                marginBottom: 50,
              }}
            >
              <BlogItem user={user} key={post.title} {...post} />
            </Col>
          ))}
          <Button onClick={loadMore}>Load More</Button>
        </Row>
      )}
    </>
  )
}

export default BlogList
