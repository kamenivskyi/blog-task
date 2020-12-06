import { useState } from 'react';

import axios from 'axios-instance';
import { InputStyled } from './add-post-form.styles';
import { Button } from 'styles/styled-globals';

interface IAddPostFormState {
  title: string
  body: string
};

const AddPostForm = () => {
  const [state, setState] = useState<IAddPostFormState>({ title: '', body: '' });

  const handleChange = (field: string) => 
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [field]: target.value
      })
  };

  const onClickAddNewPost = (e: React.FormEvent) => {
    e.preventDefault();

    const { title, body } = state;
    
    if (title.trim() && body.trim()) {
      handleAddNewPost();
    } else {
      alert('You need to fill in all the fields!');
    }
  };

  const handleAddNewPost = async () => {
    const req = await axios.post('/posts', state);

    if (req.status === 201) {
      alert('New post successfuly added!');
    } else {
      alert('Something went wrong!');
    }
  };


  return (
    <form onSubmit={onClickAddNewPost}>
      <InputStyled type="text" onChange={handleChange('title')} placeholder='Title' />
      <InputStyled type='text' onChange={handleChange('body')} placeholder='Body' />
      <Button>
        add new post
      </Button>
    </form>
  );
};

export default AddPostForm;
