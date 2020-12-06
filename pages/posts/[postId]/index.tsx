import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import Layout from 'components/layout'
import Loader from 'components/loader'
import { getPostById } from 'states/posts/posts-actions'
import { PageTitle } from 'styles/styled-globals'
import { postPageErrorMessage } from 'utils/config'

const PostPage = () => {
  const { postById, postByIdError, postByIdLoading } = useSelector(({ posts }) => posts)
  const dispatch = useDispatch()
  const { postId } = useRouter().query

  useEffect(() => {
    dispatch(getPostById(postId))
  }, [postId])

  const { title, body } = postById

  return (
    <Layout>
      {postByIdError && <p>{postPageErrorMessage}</p>}
      {postByIdLoading && <Loader />}
      <PageTitle>{title}</PageTitle>
      <p>{body}</p>
    </Layout>
  )
}

export default PostPage
