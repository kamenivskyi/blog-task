import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from 'components/list';
import Layout from 'components/layout';
import { getRecentPosts } from 'states/posts/posts-actions';
import { Container } from 'styles/styled-globals';

const Home = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector(({ posts }) => posts);

  useEffect(() => {
    dispatch(getRecentPosts());
  }, []);

  return (
    <Layout>
      <Container>
        <List items={posts} />
      </Container>
    </Layout>
  );
};
export default Home;
