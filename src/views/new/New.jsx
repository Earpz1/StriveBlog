import React, { useCallback, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './styles.css'
const NewBlogPost = (props) => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Category 1')
  const handleChange = useCallback((value) => {
    setText(value)
  })

  const handleSelect = useCallback((value) => {
    setCategory(value.target.value)
    console.log(category)
  })

  const handleTitle = useCallback((value) => {
    setTitle(value.target.value)
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      category: category,
      title: title,
      cover: 'https://picsum.photos/100/100',
      readTime: {
        value: 2,
        unit: 'minute',
      },
      author: {
        name: 'Daniel Earp',
        avatar: 'https://ui-avatars.com/api/?name=Daniel+Earp',
      },
      content: text,
      createdAt: new Date().toDateString(),
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const fetchURL = `http://localhost:3001/posts`

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)

      if (response.ok) {
        console.log('Post was successful: ', response)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container className="new-blog-container">
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" placeholder="Title" onChange={handleTitle} />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select" onChange={handleSelect}>
            <option>Category1</option>
            <option>Category2</option>
            <option>Category3</option>
            <option>Category4</option>
            <option>Category5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
          <ReactQuill
            value={text}
            onChange={handleChange}
            className="new-blog-content"
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: '1em',
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default NewBlogPost
