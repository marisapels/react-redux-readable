import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPostAPI} from '../utils/api.js';
import {loadPosts} from '../actions';
import PostsListItem from './PostsListItem';
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
                 {posts.map((postItem) => (
                          <PostsListItem key={postItem.id} postItemId={postItem.id}  />
                      ))}
            </Jumbotron>
            );
          }
        }



        const mapStateToProps = (state) => ({
            posts:state.posts
            })
            
        const mapDispatchToProps = (dispatch) => {
            return{
              loadPosts: (posts) => dispatch(loadPosts(posts))/*,
              sortPosts: (postsSortBy) => dispatch(sortPosts(postsSortBy))
              */
              }
            }
        

export default connect(mapStateToProps,mapDispatchToProps)(PostDetails);
