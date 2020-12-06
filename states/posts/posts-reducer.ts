import { postsTypes } from './posts-action-types'
import { IPostsState } from './posts-interfaces'

const initialState: IPostsState = {
  posts: [],
  postById: {},
  postsLoading: false,
  postByIdLoading: false,
  postsError: false,
  postByIdError: false,
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case postsTypes.GET_RECENT_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsLoading: false,
      }
    case postsTypes.GET_POST_BY_ID:
      return {
        ...state,
        postById: action.payload,
        postByIdLoading: false,
      }
    case postsTypes.RECENT_POSTS_ERROR:
      return {
        ...state,
        postsError: true,
        postsLoading: false,
      }
    case postsTypes.POST_BY_ID_ERROR:
      return {
        ...state,
        postByIdError: true,
        postByIdLoading: false,
      }
    case postsTypes.SET_LOADING_POSTS:
      return {
        ...state,
        postsLoading: true,
      }
    case postsTypes.SET_LOADING_POST_BY_ID:
      return {
        ...state,
        postByIdLoading: true,
      }
    default:
      return state
  }
}
