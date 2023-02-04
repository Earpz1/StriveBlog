import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import BlogItem from '../blog-item/BlogItem'
import { useEffect } from 'react'
import { useState } from 'react'

const BlogList = (props) => {
  const [posts, setPosts] = useState('')
  const [postsLoaded, setPostsLoaded] = useState(false)
  const [display, setdisplay] = useState(6)
  const [filter, setFilter] = useState('')
  const [sortPrice, setsortPrice] = useState('asc')
  const user = props.user

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [display, sortPrice])

  useEffect(() => {
    getFilterData()
  }, [filter])

  const loadMore = () => {
    setdisplay(display + 3)
  }

  const sortBy = (filter) => {
    setFilter(filter)
  }

  const orderPrice = () => {
    if (sortPrice === 'asc') {
      setsortPrice('desc')
    } else {
      setsortPrice('asc')
    }
  }

  const getFilterData = async () => {
    const options = {
      method: 'GET',
    }

    const fetchURL = `http://localhost:3001/products/filter/${filter}`

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        setPosts(await response.json())
        setPostsLoaded(true)
      }
    } catch (error) {}
  }

  const getData = async () => {
    const options = {
      method: 'GET',
    }

    const fetchURL = `http://localhost:3001/products/?limit=6&price=${sortPrice}`

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
            Filter:{' '}
            <Button
              onClick={() => {
                sortBy('PS5')
              }}
            >
              PS5
            </Button>{' '}
            <Button
              onClick={() => {
                sortBy('Xbox one')
              }}
            >
              Xbox One
            </Button>{' '}
            <Button
              onClick={() => {
                orderPrice()
              }}
            >
              Sort Prices
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
