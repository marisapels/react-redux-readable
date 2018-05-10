import {
  LOAD_CATEGORIES,
  LOAD_POSTS,
  SORT_POSTS,
  VOTE_FOR_POST,
  CHANGE_COMMENT_COUNT,
  ADD_POST,
  DELETE_POST,
  EDIT_POST
  } from '../actions';

function categories(state = {categories: [], posts: [],postsSortBy:"timestamp"}, action) {
   let posts = state.posts;

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
      if (action.voteUp){
        posts.find(p => p.id === action.postId).voteScore ++
      }else{
        posts.find(p => p.id === action.postId).voteScore --
      } 
      return {
        ...state,
        posts
    }

      case CHANGE_COMMENT_COUNT:
      posts.find(p => p.id === action.postId).commentCount += action.coif;
      return {
        ...state,
        posts
    }

      case ADD_POST:
      posts.push(action.post);
      return {
        ...state,
        posts
    }

    case DELETE_POST:
      posts.find(p => p.id === action.postId).deleted = true;
      return {
        ...state,
        posts
      }

    case EDIT_POST:
      posts.find(p => p.id === action.postId).title = action.title;
      posts.find(p => p.id === action.postId).body = action.body;
      return {
        ...state,
        posts
      }
    default:
      return state;
    }    
}

  export  default categories;