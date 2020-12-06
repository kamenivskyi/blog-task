import { postsTypes } from './postsActionTypes'
import { IPostsState } from './postsInterfaces'

const initialState: IPostsState = {
  posts: [],
  postById: {},
  postsError: false,
  postByIdError: false,
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case postsTypes.GET_RECENT_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case postsTypes.GET_POST_BY_ID:
      return {
        ...state,
        postById: action.payload,
      }
    case postsTypes.RECENT_POSTS_ERROR:
      return {
        ...state,
        postsError: true,
      }
    case postsTypes.POST_BY_ID_ERROR:
      return {
        ...state,
        postByIdError: true,
      }
    default:
      return state
  }
}
