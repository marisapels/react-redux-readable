import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';
import { connect } from 'react-redux';


import {fetchCommentsAPI} from '../utils/api.js';

class PostComments extends Component {

    state = {
        comments: []
      }

      componentDidMount(){
        fetchCommentsAPI(this.props.postItemId).then(res => this.setState ( { comments: res}));
      }
    
  render() {
      //const postId = this.props.postItemId;
   

      
      
        console.log(this.state.comments);

    return (
            <Panel>
                <Panel.Body>
                    {
                        this.state.comments.map((comment) => (

                          <div key={comment.id}>
                          {comment.body}
                          </div>
                        ))}
                </Panel.Body>
            </Panel>
            );
          }
        }



    function mapStateToProps(state, ownProps) {

        return {
            
            //postItem:state.posts.find(p => p.id === ownProps.postItemId)
        };
      }


const mapDispatchToProps = (dispatch) => {
        return{
           // voteForPost: (postId,voteUp) => dispatch(voteForPost(postId,voteUp))
          }
        }


export default connect(mapStateToProps,mapDispatchToProps)(PostComments);
