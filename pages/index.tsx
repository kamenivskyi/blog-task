import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from 'components/list';
import Layout from 'components/layout';
import Loader from 'components/loader';
import { getRecentPosts } from 'states/posts/posts-actions';

interface IRootState {
  posts: any,
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  
  const selectPosts = (state: IRootState) => state.posts;
  const { posts, postsLoading } = useSelector(selectPosts);

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
