import { postsTypes as types } from './posts-action-types';
import { IPostsState } from './posts-interfaces';

const initialState: IPostsState = {
  posts: [],
  postById: {},
  postsLoading: false,
  postByIdLoading: false,
  postsError: false,
  postByIdError: false,
};

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_RECENT_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsLoading: false,
      };
    case types.GET_POST_BY_ID:
      return {
        ...state,
        postById: action.payload,
        postByIdLoading: false,
      };
    case types.RECENT_POSTS_ERROR:
      return {
        ...state,
        postsError: true,
        postsLoading: false,
      };
    case types.POST_BY_ID_ERROR:
      return {
        ...state,
        postByIdError: true,
        postByIdLoading: false,
      };
    case types.SET_LOADING_POSTS:
      return {
        ...state,
        postsLoading: true,
      };
    case types.SET_LOADING_POST_BY_ID:
      return {
        ...state,
        postByIdLoading: true,
      };
    default:
      return state;
  }
};

export default postsReducer;