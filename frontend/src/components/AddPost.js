import React, { Component } from 'react';
import { Panel, Button, FormGroup, FormControl, ControlLabel, InputGroup} from 'react-bootstrap';
import { connect } from 'react-redux';


class PostComments extends Component {


    
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



                            <Button>Submit</Button>
                            
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
           // voteForPost: (postId,voteUp) => dispatch(voteForPost(postId,voteUp))
          }
        }


export default connect(mapStateToProps,mapDispatchToProps)(PostComments);
