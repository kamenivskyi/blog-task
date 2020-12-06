import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import List from 'components/List'
import Layout from 'components/layout'
import Loader from 'components/loader'
import { getRecentPosts } from 'states/posts/posts-actions'
import { postsListEmptyMessage } from 'utils/config'

interface IRootState {
  posts: any
}

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const selectPosts = (state: IRootState) => state.posts
  const { posts, postsLoading, postsError } = useSelector(selectPosts)

  useEffect(() => {
    dispatch(getRecentPosts())
  }, [])

  return (
    <Layout>
      {postsLoading ? (
        <Loader />
      ) : posts.length > 0 ? (
        <List items={posts} />
      ) : (
        <p>{postsListEmptyMessage}</p>
      )}
      {postsError && <p>Error has gone</p>}
    </Layout>
  )
}
export default Home
