import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import List from 'components/List';
import Layout from 'components/Layout';
import ShowReduxState from 'components/ShowReduxState';
import { getRecentPosts } from 'states/posts/postsActions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecentPosts());
  }, []);

  return (
    <Layout>
      <List />
      <ShowReduxState />
    </Layout>
  );
};
export default Home;
