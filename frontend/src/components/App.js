import React, { Component } from 'react';
import '../App.css';
import TopNavigation from './TopNavigation';
import PostsList from './PostsList';

class App extends Component {
  render() {
    return (
            <div className="container">
              <TopNavigation/>
              <PostsList/>
            </div>
            );
          }
        }

export default App;
