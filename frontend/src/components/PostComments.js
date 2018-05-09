import React, { Component } from 'react';
import { 
    Panel, Glyphicon, ButtonGroup, Button, FormGroup, FormControl, 
    ControlLabel, InputGroup, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import {changeCommentCount} from '../actions';


import {fetchCommentsAPI, voteForCommentApi, addCommentApi,deleteCommentApi,editCommentApi} from '../utils/api.js';

class PostComments extends Component {

    state = {
        comments: [],
        show:false,
        modalCommentId:0,
        modalCommentBody:""
      }

      componentDidMount(){
        fetchCommentsAPI(this.props.postItemId).then(res => this.setState ( { comments: res}));
      }

      constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleEditComment = this.handleEditComment.bind(this);
    
      }

      handleShow(id,body) {
        this.setState({ show: true,modalCommentId:id,modalCommentBody:body });

       //console.log(id);
      }
    
      handleHide() {
        this.setState({ show: false });
      }
      
      handlePostUp(id,thumbUp){
          let comments = this.state.comments;
          if (thumbUp){
                comments.find(c=>c.id === id).voteScore++;
                }else{
                comments.find(c=>c.id === id).voteScore--;  
                }
          this.setState({ comments });
          voteForCommentApi(id,thumbUp);
      }

      handleAddComment = (e) => {

        const uuidv4 = require('uuid/v4');
        const timestamp = Math.floor(Date.now() / 1000);
        const comment={
                    "author":"webUser",
                    "body":ReactDOM.findDOMNode(this.inputComment).value,
                    "deleted":false,
                    "id":uuidv4(),
                    "parentDeleted": false,
                    "parentId": this.props.postItemId,
                    "timestamp": timestamp,
                    "voteScore": 1
                }
        let comments = this.state.comments;
        comments.push(comment);
        this.props.changeCommentCount(this.props.postItemId,1);
        this.setState({ comments });
        addCommentApi(comment);
    }

    handleDeleteComment(id){
        let comments = this.state.comments;
        const pos = comments.map(function(e) { return e.id; }).indexOf(id);
        comments.splice(pos,1);
      
        this.props.changeCommentCount(this.props.postItemId,-1);
        this.setState({ comments });
        deleteCommentApi(id);
    }


    handleEditComment(){
        let comments = this.state.comments;
        comments.find(c=>c.id === this.state.modalCommentId).body = ReactDOM.findDOMNode(this.editComment).value;
        this.setState({ comments });
        editCommentApi(this.state.modalCommentId,comments.find(c=>c.id === this.state.modalCommentId));
        this.handleHide();
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
                            Edit comment 
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                                        
                        
                            <FormControl type="text"  defaultValue={this.state.modalCommentBody}  ref={(input) => this.editComment = input}/>
                       

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Cancel</Button>
                        <Button onClick={this.handleEditComment} bsStyle="success">Save changes</Button>
                    </Modal.Footer>
                </form>
            </Modal>
            <Panel>
                
                <Panel.Body>
                    {
                        this.state.comments.map((c) => (

                          <div key={c.id}>
                           <b>{c.author}</b> 
                           
                            <div className="pull-right">
                                <Button  bsStyle="link" onClick={() => this.handlePostUp(c.id,true)}><Glyphicon glyph="thumbs-up"  /></Button>
                                    <b>{c.voteScore}</b>
                                <Button bsStyle="link" onClick={() => this.handlePostUp(c.id,false)}><Glyphicon glyph="thumbs-down" /></Button>
                            </div>
                           <br/>{c.body}
                           <br/>
                           <ButtonGroup>
                                    <Button bsSize="xsmall" onClick={() => this.handleShow(c.id,c.body)}>Edit</Button>
                                    <Button bsStyle="danger"  bsSize="xsmall" onClick={() => this.handleDeleteComment(c.id)}>Delete</Button>
                            </ButtonGroup> 
                           <hr/>
                          </div>
                          
                        ))}
                      
                          <form>
                            <FormGroup>
                            <ControlLabel>Add comment:</ControlLabel>
                                <InputGroup>
                                <FormControl type="text" ref={(input) => this.inputComment = input} />
                                <InputGroup.Button>
                                    <Button onClick={this.handleAddComment}>Submit</Button>
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
            postItem:state.posts.find(p => p.id === ownProps.postItemId)
        };
      }


const mapDispatchToProps = (dispatch) => {
        return{
             changeCommentCount: (postId,coif) => dispatch(changeCommentCount(postId,coif))
          }
        }


export default connect(mapStateToProps,mapDispatchToProps)(PostComments);
