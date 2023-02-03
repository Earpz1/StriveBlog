import React from 'react'
import { Container } from 'react-bootstrap'
import BlogList from '../../components/blog/blog-list/BlogList'
import './styles.css'
import { getStoreData } from '../../fetches'
import { useQuery } from 'react-query'

const Home = (props) => {
  const storeData = useQuery(['storeData'], getStoreData)

  return (
    <>
      {!storeData.isLoading && (
        <Container fluid="sm">
          <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
          <BlogList />
        </Container>
      )}
    </>
  )
}

export default Home
