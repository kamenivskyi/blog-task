export interface IPostItem {
  title: string
  body: string
  id: number
};

export interface IPostsState {
  posts: IPostItem[]
  postById: object
  postsLoading: boolean
  postByIdLoading: boolean
  postsError: boolean
  postByIdError: boolean
};
