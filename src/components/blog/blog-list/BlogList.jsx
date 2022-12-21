import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogItem from '../blog-item/BlogItem'
import { useEffect } from 'react'
import { useState } from 'react'

const BlogList = (props) => {
  const [posts, setPosts] = useState('')
  const [postsLoaded, setPostsLoaded] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const options = {
      method: 'GET',
    }
    const fetchURL = 'http://localhost:3001/posts/'

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)
      if (response.ok) {
        console.log('Edit was successful')
        setPosts(await response.json())
        setPostsLoaded(true)
      }
    } catch (error) {}
  }

  return (
    <>
      {postsLoaded && (
        <Row>
          {posts.map((post) => (
            <Col
              md={4}
              style={{
                marginBottom: 50,
              }}
            >
              <BlogItem key={post.title} {...post} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default BlogList
