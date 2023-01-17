import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import BlogAuthor from '../../components/blog/blog-author/BlogAuthor'
import BlogLike from '../../components/likes/BlogLike'
import './styles.css'

const Blog = (props) => {
  const [blog, setBlog] = useState()
  const [loading, setLoading] = useState(true)
  const [user, setuser] = useState()
  const [isloaded, setisloaded] = useState(true)
  const params = useParams()
  const navigate = useNavigate()

  const getUser = async () => {
    const options = {
      method: 'GET',
    }
    const fetchURL = `https://striveblog-be-production.up.railway.app/authors/igt8ajclbz5xqwo`

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

  const getBlog = async () => {
    const options = {
      method: 'GET',
    }
    const fetchURL = `https://strive-mongo-production.up.railway.app/posts/${params.id}`

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)
      if (response.ok) {
        console.log('Edit was successful')
        setBlog(await response.json())
        setLoading(false)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getUser()
    getBlog()
  }, [])

  if (loading && isloaded) {
    return <div>loading</div>
  } else {
    return (
      <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={blog.cover} fluid />
          <h1 className="blog-details-title">{blog.title}</h1>

          <div className="blog-details-container">
            <div className="blog-details-author">
              <BlogAuthor user={user} />
            </div>
            <div className="blog-details-info">
              <div>{blog.createdAt}</div>
              <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div>
              <div
                style={{
                  marginTop: 20,
                }}
              >
                <BlogLike defaultLikes={['123']} onChange={console.log} />
                <a
                  href={
                    'https://striveblog-be-production.up.railway.app/files/pdf/post/' +
                    params.id
                  }
                >
                  Export as PDF
                </a>
              </div>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          ></div>
        </Container>
      </div>
    )
  }
}

export default Blog
