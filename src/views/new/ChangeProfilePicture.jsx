import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const ChangeProfilePicture = (props) => {
  const [isFilePicked, setisFilePicked] = useState(false)
  const [fileSelected, setfileSelected] = useState()
  const [newAvatar, setnewAvatar] = useState(false)

  const handleChange = (e) => {
    setfileSelected(e.target.files[0])
    setisFilePicked(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = `http://localhost:3001/authors/igt8ajclbz5xqwo/uploadAvatar`
    const formData = new FormData()
    formData.append('avatar', fileSelected)
    const config = {
      method: 'POST',
      headers: {
        'content-Type': 'multipart/form-data',
      },
    }
    axios.post(url, formData, config).then((response) => {
      console.log(response.data)
      window.location.reload()
    })
  }

  return (
    <>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group
          controlId="blog-form"
          className="mt-3"
          onSubmit={handleSubmit}
        >
          <Form.File id="custom-file" custom onChange={handleChange} />
          {isFilePicked && (
            <Button
              type="submit"
              variant="dark"
              style={{
                marginLeft: '1em',
              }}
            >
              Submit
            </Button>
          )}
        </Form.Group>
      </Form>
    </>
  )
}

export default ChangeProfilePicture
