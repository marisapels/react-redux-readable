import React, { Component } from 'react';
import PostsListItem from './PostsListItem';
import {Jumbotron} from 'react-bootstrap';
import ListPanel from './ListPanel';
import {fetchAllPostsAPI} from '../utils/api.js';
import {connect} from 'react-redux';
import {loadPosts} from '../actions';
import sortBy from 'sort-by';


class PostsList extends Component {

    componentDidMount(){ 
      fetchAllPostsAPI().then(posts => {
        this.props.loadPosts(posts.filter((p) => p.deleted !== true));
      });
    }

    render() {
      let { posts } = this.props;
      if (this.props.match.params.category)
          posts = posts.filter((p) => p.category === this.props.match.params.category);
          posts.sort(sortBy(this.props.postsSortBy)).reverse();
      return (  
            <div className="w-75">
                <Jumbotron>
                    <ListPanel/>
                      {posts.map((postItem) => (
                          <PostsListItem key={postItem.id} postItemId={postItem.id}  />
                      ))}
                </Jumbotron>
             </div>
            );
          }
        }

        const mapStateToProps = (state) => ({
          posts:state.posts,
          postsSortBy:state.postsSortBy
          })
          
      const mapDispatchToProps = (dispatch) => {
          return{
            loadPosts: (posts) => dispatch(loadPosts(posts))/*,
            sortPosts: (postsSortBy) => dispatch(sortPosts(postsSortBy))
            */
            }
          }

export default connect(mapStateToProps,mapDispatchToProps)(PostsList);
