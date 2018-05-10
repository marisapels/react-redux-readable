import React, { Component } from 'react';
import { Panel, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addPost} from '../actions';
import ReactDOM from 'react-dom';


class PostComments extends Component {

handleAddPost = (e) => {
    const uuidv4 = require('uuid/v4');
    const timestamp = Math.floor(Date.now() / 1000);
    const post = {
        id:uuidv4(),
        timestamp:timestamp,
        title:ReactDOM.findDOMNode(this.inputTitle).value,
        body:ReactDOM.findDOMNode(this.inputBody).value,
        author:'webUser',
        category:ReactDOM.findDOMNode(this.inputCategory).value,
        voteScore:0,
        deleted:false,
        commentCount:0
    }

    this.props.addPost(post);
    this.props.history.push(`/posts/${post.id}`);
}
    
  render() {

    const { categories } = this.props;
    return (
            <Panel>
                <Panel.Heading>New Post</Panel.Heading>
                <Panel.Body>
                          <form>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Category</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" ref={(input) => this.inputCategory = input}>
                                {categories.map((category) => (
                                    <option key={category.name} value={category.name}>{category.name}</option> 
                                    ))
                                }
                            </FormControl>
                            </FormGroup>
                            
                            <FormGroup>
                                <ControlLabel>Title</ControlLabel>
                                <FormControl type="text"  ref={(input) => this.inputTitle = input} />
                            </FormGroup>

                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Body</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="textarea" ref={(input) => this.inputBody = input} />
                            </FormGroup>

                            <Button onClick={this.handleAddPost}>Submit</Button>                  
                        </form>
                </Panel.Body>
            </Panel>
            );
          }
        }



    function mapStateToProps(state, ownProps) {

        return {
            categories:state.categories
            //postItem:state.posts.find(p => p.id === ownProps.postItemId)
        };
      }


const mapDispatchToProps = (dispatch) => {
        return{
             addPost: (post) => dispatch(addPost(post))
          }
        }


export default connect(mapStateToProps,mapDispatchToProps)(PostComments);
