import { postsTypes } from './posts-action-types'

import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export interface IPostItem {
  title?: string
  body?: string
  id?: number
}
export interface IPostsState {
  posts: IPostItem[]
  postById: IPostItem
  postsLoading: boolean
  postByIdLoading: boolean
  postsError: boolean
  postByIdError: boolean
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IPostsState,
  unknown,
  Action<string>
>
export interface PostsLoadingAction {
  type: typeof postsTypes.SET_LOADING_POSTS
}

export interface PostByIdLoadingAction {
  type: typeof postsTypes.SET_LOADING_POST_BY_ID
}

export interface PostsErrorAction {
  type: typeof postsTypes.RECENT_POSTS_ERROR
}

export interface PostByIdErrorAction {
  type: typeof postsTypes.POST_BY_ID_ERROR
}
