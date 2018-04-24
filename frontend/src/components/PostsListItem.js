import React, { Component } from 'react';
import {Panel, ButtonGroup, Button, Glyphicon, Media, Badge} from 'react-bootstrap';

class PostsListItem extends Component {
  render() {
    return (
            <Panel>
                <Panel.Body>
                    <Media>
                        <Media.Left>
                            <ButtonGroup vertical>
                                <Button><Glyphicon glyph="chevron-up" /></Button>
                                <Button disabled>153</Button>
                                <Button><Glyphicon glyph="chevron-down" /></Button>
                            </ButtonGroup>
                        </Media.Left>
                        <Media.Body>
                        <Media.Heading>
                            Title my Title title title <Badge><Glyphicon glyph="comment" /> 42</Badge>
                        </Media.Heading>
                        <p>Autoer</p>     
                        <ButtonGroup>
                                    <Button bsSize="xsmall">Edit</Button>
                                    <Button bsStyle="danger" bsSize="xsmall">Delete</Button>
                                </ButtonGroup> 
                        </Media.Body>
                    </Media>
                </Panel.Body>
            </Panel>
            );
          }
        }

export default PostsListItem;