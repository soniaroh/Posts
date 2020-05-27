import * as actions from '../actions/constants';

export const initialState = {
  posts: [],
  hasErrors: false,
  loading: false
}

export default function postsReducer (state = initialState, action) {
  switch(action.type) {
    case(actions.GET_POSTS):
    return {
      ...state,
      loading: true
    }
    case(actions.GET_POSTS_SUCCESS): 
    return {
      posts: action.payload,
      hasErrors: false,
      loading: false
    }

    case(actions.GET_POSTS_FAILURE):
    return {
      ...state,
      loading: false,
      hasErrors: false
    }
    default: return state
  }
}
