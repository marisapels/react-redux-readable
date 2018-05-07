import React, { Component } from 'react';
import { Panel, Glyphicon, ButtonGroup, Button, FormGroup, FormControl, ControlLabel, InputGroup} from 'react-bootstrap';
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

        
      
      
       // console.log(this.state.comments);

    return (
            <Panel>
                
                <Panel.Body>

                      

                    {
                        this.state.comments.map((c) => (

                          <div key={c.id}>
                           <b>{c.author}</b> 
                           
                           <div className="pull-right"><Glyphicon glyph="thumbs-up" /> <b>{c.voteScore}</b> <Glyphicon glyph="thumbs-down" /> </div>
                           <br/>{c.body}
                           <br/>
                           <ButtonGroup>
                                    <Button bsSize="xsmall">Edit</Button>
                                    <Button bsStyle="danger" bsSize="xsmall">Delete</Button>
                            </ButtonGroup> 
                           <hr/>
                          </div>
                          
                        ))}
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
