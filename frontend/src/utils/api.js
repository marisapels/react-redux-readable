const myApiHost = "http://localhost:3001";
const headers = {headers: { 'Authorization': 'whatever-you-want' }};


export function fetchCategoriesAPI () {
    return fetch(`${myApiHost}/categories`,headers)
      .then(res => res.json())
      .then(cat => cat.categories)
  }

export function fetchAllPostsAPI () {
  return fetch(`${myApiHost}/posts`,headers)
  .then(res => res.json())
} 

export function fetchPostAPI (id) {
  return fetch(`${myApiHost}/posts/${id}`,headers)
  .then(res => res.json())
  .then(res => [res])
} 



export function fetchCommentsAPI (id) {
  return fetch(`${myApiHost}/posts/${id}/comments`,headers)
  .then(res => res.json())
 
} 

export function voteForPostApi (postId,voteUp) {
  const option = voteUp ? "upVote" : "downVote";
  return fetch(`${myApiHost}/posts/${postId}`,{
  method: 'POST',
  headers: { 'Authorization': 'whatever-you-want','Content-Type': 'application/json' },
  body: JSON.stringify({ option })
}).then(res => res.json())
}

export function voteForCommentApi (commentId,voteUp) {
  const option = voteUp ? "upVote" : "downVote";
  return fetch(`${myApiHost}/comments/${commentId}`,{
  method: 'POST',
  headers: { 'Authorization': 'whatever-you-want','Content-Type': 'application/json' },
  body: JSON.stringify({ option })
}).then(res => res.json())  
}

export function addCommentApi (comment) {
 
  return fetch(`${myApiHost}/comments`,{
  method: 'POST',
  headers: { 'Authorization': 'whatever-you-want','Content-Type': 'application/json' },
  body: JSON.stringify(comment)
}).then(res => res.json())
}

export function deleteCommentApi (commentId) {
  return fetch(`${myApiHost}/comments/${commentId}`,{
  method: 'DELETE',
  headers: { 'Authorization': 'whatever-you-want','Content-Type': 'application/json' }
}).then(res => res.json())
}

export function editCommentApi (commentId,comment) {
  return fetch(`${myApiHost}/comments/${commentId}`,{
  method: 'PUT',
  headers: { 'Authorization': 'whatever-you-want','Content-Type': 'application/json' },
  body: JSON.stringify(comment)
}).then(res => res.json())  
}