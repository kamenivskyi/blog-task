import { useState } from 'react'

import axios from 'axios-instance'
import { AddPostFormStyled } from './add-post-form.styles'
import { Button, InputStyled } from 'styles/styled-globals'

interface IAddPostFormState {
  title: string
  body: string
}

const AddPostForm: React.FC = () => {
  const [state, setState] = useState<IAddPostFormState>({ title: '', body: '' })

  const handleChange = (field: string) => ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [field]: target.value,
    })
  }

  const onClickAddNewPost = (e: React.FormEvent) => {
    e.preventDefault()

    const { title, body } = state

    if (title.trim() && body.trim()) {
      handleAddNewPost()
    } else {
      alert('You need to fill in all the fields!')
    }
  }

  const handleAddNewPost = async () => {
    const req = await axios.post('/posts', state)

    if (req.status === 201) {
      setState({ title: '', body: '' })
      alert('New post successfuly added!')
    } else {
      alert('Something went wrong!')
    }
  }

  const { title, body } = state

  return (
    <AddPostFormStyled onSubmit={onClickAddNewPost}>
      <InputStyled type="text" placeholder="Title" value={title} onChange={handleChange('title')} />
      <InputStyled type="text" placeholder="Body" value={body} onChange={handleChange('body')} />
      <Button>add new post</Button>
    </AddPostFormStyled>
  )
}

export default AddPostForm
