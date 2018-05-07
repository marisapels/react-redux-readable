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
                            <FormGroup>
                            <ControlLabel>Add comment:</ControlLabel>
                                <InputGroup>
                                <FormControl type="text" />
                                <InputGroup.Button>
                                    <Button>Submit</Button>
                                </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
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
