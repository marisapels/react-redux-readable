import React, { Component } from 'react';
import '../App.css';
import TopNavigation from './TopNavigation';
import PostsList from './PostsList';
import PostDetails from './PostDetails';
import {  Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
              <div className="container">
                <Switch>
                    <Route exact path="/:category" component={TopNavigation} />
                    <Route component={TopNavigation} />
                </Switch>
                <Switch>
            
                    <Route exact path="/" component={PostsList} />
                    <Route exact path="/:category" component={PostsList} />
                    <Route exact path="/:category/:postId" component={postItemMatched} />
                    
                </Switch>
              </div>
              );
          }
    }

    const postItemMatched = ({ match }) => (
        <PostDetails postItemId={match.params.postId}/>
      );

export default(App);
