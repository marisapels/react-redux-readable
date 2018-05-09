import {
  LOAD_CATEGORIES,
  LOAD_POSTS,
  SORT_POSTS,
  VOTE_FOR_POST
  } from '../actions';

function categories(state = {categories: [], posts: [],postsSortBy:"timestamp"}, action) {
    switch (action.type) {
      case LOAD_CATEGORIES:
        return {
              ...state,
              categories: action.categories
              }
              
      case LOAD_POSTS:
        return {
              ...state,
              posts: action.posts
              }

      case SORT_POSTS:
        return {
              ...state,
              postsSortBy: action.postsSortBy
              }

      case VOTE_FOR_POST:
      let posts = state.posts;
        if (action.voteUp){
          posts.find(p => p.id === action.postId).voteScore ++
        }else{
          posts.find(p => p.id === action.postId).voteScore --
        } 

        return {
              ...state,
              posts
        }
      default:
        return state;
    }
  }

  export  default categories;