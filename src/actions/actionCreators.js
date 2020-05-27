import * as actions from './constants';

export const getPosts = () => ({
  type: actions.GET_POSTS
})

export const getPostsSuccess = text => ({
  type: actions.GET_POSTS_SUCCESS,
  payload: text
})

export const getPostsFailure = () => ({
  type: actions.GET_POSTS_FAILURE
})

export const fetchPosts = () => async dispatch => {
  dispatch(getPosts())
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data)
    dispatch(getPostsSuccess(data))
   
  } catch(error) {
    dispatch(getPostsFailure())
  }
}