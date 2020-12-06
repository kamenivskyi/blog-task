import axios from 'axios-instance'
import { postsTypes } from './posts-action-types'

export const getRecentPosts = () => async (dispatch: any) => {
  try {
    dispatch(setLoadingPosts());

    const res = await axios.get('/posts');

    dispatch({ type: postsTypes.GET_RECENT_POSTS, payload: res.data })
  } catch (error) {
    dispatch({ type: postsTypes.RECENT_POSTS_ERROR })
  }
}

export const getPostById = (id: number) => async (dispatch: any) => {
  try {
    dispatch(setLoadingPostById());

    const res = await axios.get(`/posts${id}`)
    
    dispatch({ type: postsTypes.GET_POST_BY_ID, payload: res.data })
  } catch (error) {
    dispatch({ type: postsTypes.POST_BY_ID_ERROR })
  }
}

const setLoadingPosts = () => ({ type: postsTypes.SET_LOADING_POSTS });
const setLoadingPostById = () => ({ type: postsTypes.SET_LOADING_POST_BY_ID });
