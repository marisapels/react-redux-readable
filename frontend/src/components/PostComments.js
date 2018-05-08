import React, { Component } from 'react';
import { 
    Panel, Glyphicon, ButtonGroup, Button, FormGroup, FormControl, 
    ControlLabel, InputGroup, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';


import {fetchCommentsAPI} from '../utils/api.js';

class PostComments extends Component {

    state = {
        comments: [],
        show:false
      }

      componentDidMount(){
        fetchCommentsAPI(this.props.postItemId).then(res => this.setState ( { comments: res}));
      }



      handleShow(id,body) {
        this.setState({ show: true });
      }
    
      handleHide() {
        this.setState({ show: false });
      }
    
  render() {
      //const postId = this.props.postItemId;

        
      
      
       // console.log(this.state.comments);

    return (

            <div>
            <Modal  
            show={this.state.show}
            onHide={this.handleHide}>
                <form>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">
                            Edit comment - postItem.title
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                                        
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl type="text"  defaultValue='postItem.title'/>
                        </FormGroup>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Cancel</Button>
                        <Button onClick={this.handleHide} bsStyle="success">Save changes</Button>
                    </Modal.Footer>
                </form>
            </Modal>
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
            </div>
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
