import axios from 'axios'
import { postsTypes } from './postsActionTypes'

export const getRecentPosts = () => async (dispatch: any) => {
  try {
    const res = await axios.get('https://simple-blog-api.crew.red/posts')
    dispatch({ type: postsTypes.GET_RECENT_POSTS, payload: res.data })
  } catch (error) {
    dispatch({ type: postsTypes.RECENT_POSTS_ERROR })
  }
}

export const getPostById = (id: number) => async (dispatch: any) => {
  try {
    const res = await axios.get(`https://simple-blog-api.crew.red/posts${id}`)
    dispatch({ type: postsTypes.GET_POST_BY_ID, payload: res.data })
  } catch (error) {
    dispatch({ type: postsTypes.POST_BY_ID_ERROR })
  }
}