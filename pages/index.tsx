import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from 'components/list';
import Layout from 'components/layout';
import Loader from 'components/loader';
import { getRecentPosts } from 'states/posts/posts-actions';

const Home = () => {
  const dispatch = useDispatch();

  const { posts, postsLoading } = useSelector(({ posts }) => posts);

  useEffect(() => {
    dispatch(getRecentPosts());
  }, []);

  return (
    <Layout>
      {postsLoading && <Loader />}
      {posts && <List items={posts} />}  
    </Layout>
  );
};
export default Home;
