export interface IPostItem  {
  title: string
  body: string
  id: number
}

export interface IPostsState  {
  posts: IPostItem[]
  postById: object
  postsError: boolean
  postByIdError: boolean
}