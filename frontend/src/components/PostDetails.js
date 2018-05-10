import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPostAPI} from '../utils/api.js';
import {loadPosts} from '../actions';
import PostsListItem from './PostsListItem';
import PostComments from './PostComments';
import {Jumbotron} from 'react-bootstrap';

class PostDetails extends Component {
    componentDidMount(){ 
       if (this.props.posts.length===0){
        fetchPostAPI(this.props.postItemId).then(posts => {
          this.props.loadPosts(posts);
        });
      }
      }
  

  render() {

    let { posts } = this.props;
    posts = posts.filter((p) => p.id === this.props.postItemId);
    return (
            <Jumbotron>
              {posts.length>0||"That's 404- not found page ;)"}
                 {posts.map((postItem) => (
                          <div key={postItem.id}>
                          <PostsListItem key={"post"+postItem.id} postItemId={postItem.id} singlePost />
                          <PostComments key={"com"+postItem.id} postItemId={postItem.id}  />
                          </div>
                      ))}
                         
            </Jumbotron>

            );
          }
        }



        const mapStateToProps = (state) => ({
   
            posts:state.posts.filter((p) => p.deleted !== true)
            })
            
        const mapDispatchToProps = (dispatch) => {
            return{
              loadPosts: (posts) => dispatch(loadPosts(posts))/*,
              sortPosts: (postsSortBy) => dispatch(sortPosts(postsSortBy))
              */
              }
            }
        

export default connect(mapStateToProps,mapDispatchToProps)(PostDetails);
