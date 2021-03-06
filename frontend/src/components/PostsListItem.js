import React, { Component } from 'react';
import { 
    Panel, ButtonGroup, Button, Glyphicon, Media, 
    Badge, Modal, FormGroup,ControlLabel, FormControl 
    } from 'react-bootstrap';
import { connect } from 'react-redux';
import { voteForPost,deletePost, editPost } from '../actions';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class PostsListItem extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      handleHide() {
        this.setState({ show: false });
      }

     handleEditPost= (e) =>  {
        console.log(ReactDOM.findDOMNode(this.inputEditTitle).value);
        this.props.editPost(
            this.props.postItemId,
            ReactDOM.findDOMNode(this.inputEditTitle).value,
            ReactDOM.findDOMNode(this.inputEditBody).value);
        this.setState({ show: false });
     }

  render() {

      const postId = this.props.postItemId;
      const postItem = this.props.postItem;
      const voteForPost = this.props.voteForPost;
      const singlePost = this.props.singlePost;
      const deletePost = this.props.deletePost;
    return (
        <div>
        <Modal  
          show={this.state.show}
          onHide={this.handleHide}>
        <form>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
                Edit post - {postItem.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                            
                            <FormGroup>
                                <ControlLabel>Title</ControlLabel>
                                <FormControl type="text"  defaultValue={postItem.title}  ref={(input) => this.inputEditTitle = input}/>
                            </FormGroup>

                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Body</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="textarea" defaultValue={postItem.body} ref={(input) => this.inputEditBody = input}/>
                            </FormGroup>
        </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Cancel</Button>
            <Button onClick={this.handleEditPost} bsStyle="success">Save changes</Button>
          </Modal.Footer>
          </form>
          </Modal>

            <Panel>
                <Panel.Body>
                    <Media>
                        <Media.Left>
                            <ButtonGroup vertical>
                                <Button onClick={function(){voteForPost(postId,true)}}><Glyphicon glyph="chevron-up" /></Button>
                                <Button disabled>{this.props.postItem.voteScore} </Button>
                                <Button onClick={function(){voteForPost(postId,false)}}><Glyphicon glyph="chevron-down" /></Button>
                            </ButtonGroup>
                        </Media.Left>
                        <Media.Body>
                        <Media.Heading>
                        { !singlePost || postItem.title }
                        { singlePost || <Link to={`/${postItem.category}/${postItem.id}`}>{postItem.title}</Link> } 
                        &nbsp;<Badge><Glyphicon glyph="comment" /> {postItem.commentCount} </Badge>
                        </Media.Heading>
                        <p>{postItem.author} </p>     
                        <ButtonGroup>
                                    <Button bsSize="xsmall" onClick={this.handleShow}>Edit</Button>
                                    <Button bsStyle="danger" bsSize="xsmall" onClick={function(){deletePost(postId)}}>Delete</Button>
                                </ButtonGroup> 
                        </Media.Body>
                        
                    </Media>
                    { !singlePost || postItem.body } 
                </Panel.Body>
            </Panel>
            </div>
            );
          }
        }





    function mapStateToProps(state, ownProps) {
        //console.log("mapping");
        //console.log(state.posts);
        return {
            
            postItem:state.posts.find(p => p.id === ownProps.postItemId),

            //need to add it here for score to change when using postItem.voteScore
            voteScore:state.posts.find(p => p.id === ownProps.postItemId).voteScore,
            commentCount:state.posts.find(p => p.id === ownProps.postItemId).commentCount,
            
        };
      }


const mapDispatchToProps = (dispatch) => {
        return{
            voteForPost: (postId,voteUp) => dispatch(voteForPost(postId,voteUp)),
            deletePost: (postId) => dispatch(deletePost(postId)),
            editPost: (postId,title,body) => dispatch(editPost(postId,title,body))
          }
        }


export default connect(mapStateToProps,mapDispatchToProps)(PostsListItem);
