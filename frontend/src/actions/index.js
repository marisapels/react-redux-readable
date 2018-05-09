import {voteForPostApi} from '../utils/api.js';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_POSTS = 'LOAD_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const VOTE_FOR_POST = 'VOTE_FOR_POST';
export const VOTE_FOR_COMMENT = 'VOTE_FOR_COMMENT';
export const CHANGE_COMMENT_COUNT = 'CHANGE_COMMENT_COUNT';
export const ADD_POST = 'ADD_POST';
//export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export const loadCategories = categories => ({
    type: LOAD_CATEGORIES, 
    categories
})

export const loadPosts = posts => ({
    type: LOAD_POSTS, 
    posts
})

export const sortPosts = postsSortBy => ({
    type: SORT_POSTS, 
    postsSortBy
})

export function voteForPost(postId,voteUp) {
    voteForPostApi(postId,voteUp);
    return { 
        type: VOTE_FOR_POST, 
        postId,voteUp    
    }
  }

  export function changeCommentCount(postId,coif) {
    return { 
        type: CHANGE_COMMENT_COUNT, 
        postId,coif    
    }
  }

  export function addPost(post) {
    return { 
        type: CHANGE_COMMENT_COUNT, 
        post
    }
  }
  

//  export function voteForComment(commentId,voteUp) {
    //voteForCommentApi(postId,voteUp);
//    return { 
//        type: VOTE_FOR_COMMENT, 
//        commentId,voteUp    
//    }
//  }
//export const setActiveCategory = category => ({
//    type: SET_ACTIVE_CATEGORY, 
//    category
//})




  

