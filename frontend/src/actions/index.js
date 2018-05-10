import {voteForPostApi, addPostApi,deletePostApi,editPostApi} from '../utils/api.js';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_POSTS = 'LOAD_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const VOTE_FOR_POST = 'VOTE_FOR_POST';
export const VOTE_FOR_COMMENT = 'VOTE_FOR_COMMENT';
export const CHANGE_COMMENT_COUNT = 'CHANGE_COMMENT_COUNT';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
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
    addPostApi(post);
    return { 
        type: ADD_POST, 
        post
    }
  }
  
  export function deletePost(postId) {
    deletePostApi(postId);
    
    return { 
        type: DELETE_POST, 
        postId
    }
  }

    export function editPost(postId,title,body) {
        editPostApi(postId, {'title':title,'body':body});
        
        return { 
            type: EDIT_POST, 
            postId, title, body
        }
  }






  

