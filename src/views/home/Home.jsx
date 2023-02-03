import React from 'react'
import { Container } from 'react-bootstrap'
import BlogList from '../../components/blog/blog-list/BlogList'
import './styles.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = (props) => {
  const [user, setuser] = useState()
  const [isloaded, setisloaded] = useState(false)
  const getUser = async () => {
    const options = {
      method: 'GET',
    }
    const fetchURL = `http://localhost:3001/products`

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        setuser(await response.json())
        setisloaded(true)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      {isloaded && (
        <Container fluid="sm">
          <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
          <BlogList user={user} />
        </Container>
      )}
    </>
  )
}

export default Home
