import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Layout from 'components/layout';
import { getPostById } from 'states/posts/posts-actions';
import { PageTitle } from 'styles/styled-globals';

const PostPage = () => {
  const { postById, postByIdError } = useSelector(({ posts }) => posts);
  const dispatch = useDispatch();
  const { postId } = useRouter().query;

  useEffect(() => {
    dispatch(getPostById(postId));
  }, [postId]);

  const { title, body } = postById;
  
  return (
    <Layout>
      {postByIdError && <p>The error has gone! Maybe the post does not exist!</p>}
      <PageTitle>{title}</PageTitle>
      <p>{body}</p>
    </Layout>
  );
};

export default PostPage;
