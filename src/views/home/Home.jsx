import React from 'react'
import { Container } from 'react-bootstrap'
import BlogList from '../../components/blog/blog-list/BlogList'
import ChangeProfilePicture from '../new/ChangeProfilePicture'
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
    const fetchURL = `https://talented-hoodie-dog.cyclic.app/authors/igt8ajclbz5xqwo`

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)
      if (response.ok) {
        console.log('Edit was successful')
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
          <ChangeProfilePicture user={user} />
        </Container>
      )}
    </>
  )
}

export default Home
