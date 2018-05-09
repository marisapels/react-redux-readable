import React, { Component } from 'react';
import { Panel, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addPost} from '../actions';


class PostComments extends Component {

handleAddPost(){
console.log("aaa")
}
    
  render() {


    return (
            <Panel>
              
                <Panel.Heading>New Post</Panel.Heading>

                      

                <Panel.Body>
                          <form>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Category</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">react</option>
                                <option value="other">...</option>
                            </FormControl>
                            </FormGroup>
                            
                            <FormGroup>
                                <ControlLabel>Title</ControlLabel>
                                <FormControl type="text" />
                            </FormGroup>

                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Body</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="textarea" />
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
            
            //postItem:state.posts.find(p => p.id === ownProps.postItemId)
        };
      }


const mapDispatchToProps = (dispatch) => {
        return{
             addPost: (post) => dispatch(addPost(post))
          }
        }


export default connect(mapStateToProps,mapDispatchToProps)(PostComments);
