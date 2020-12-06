import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Layout from 'components/Layout';
import ShowReduxState from 'components/ShowReduxState';
import { useEffect } from 'react';
import { getRecentPosts } from 'states/posts/postsActions';

const Button = styled.button`
  color: #222;
  padding: 10px 20px;
  border: none;
  background-color: cyan;
`;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecentPosts());
  }, []);

  return (
    <Layout>
      <Button>Button</Button>
      <ShowReduxState />
    </Layout>
  );
};
export default Home;
