import React, { Component } from 'react';
import PostsListItem from './PostsListItem';
import {Jumbotron} from 'react-bootstrap';
import ListPanel from './ListPanel';
class PostsList extends Component {
  render() {
    return (
            <div className="w-75">
            <Jumbotron>
                <ListPanel/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
             </Jumbotron>
             </div>
            );
          }
        }

export default PostsList;