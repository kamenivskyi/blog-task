import axios from 'axios-instance'
import { postsTypes } from './posts-action-types'
import {
  AppThunk,
  PostsLoadingAction,
  PostByIdLoadingAction,
  PostByIdErrorAction,
  PostsErrorAction,
} from './posts-interfaces'

export const getRecentPosts = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setLoadingPosts())

    const res = await axios.get('/posts')

    dispatch({ type: postsTypes.GET_RECENT_POSTS, payload: res.data })
  } catch (error) {
    dispatch(setPostsError())
  }
}

export const getPostById = (id: number | string | any): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setLoadingPostById())

    const res = await axios.get(`/posts/${id}`)

    dispatch({ type: postsTypes.GET_POST_BY_ID, payload: res.data })
  } catch (error) {
    dispatch(setPostByIdError())
  }
}

const setLoadingPosts = (): PostsLoadingAction => ({ type: postsTypes.SET_LOADING_POSTS })
const setLoadingPostById = (): PostByIdLoadingAction => ({
  type: postsTypes.SET_LOADING_POST_BY_ID,
})
const setPostByIdError = (): PostByIdErrorAction => ({ type: postsTypes.POST_BY_ID_ERROR })
const setPostsError = (): PostsErrorAction => ({ type: postsTypes.RECENT_POSTS_ERROR })
