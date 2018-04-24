import React, { Component } from 'react';
import {Panel, Button, NavDropdown, MenuItem, ButtonGroup, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ListPanel extends Component {
  render() {
    return (

        <Panel>
        <Panel.Body>
      Sort by: <ButtonGroup>
                    <Button bsStyle="primary" bsSize="xsmall" disabled>Newest</Button>
                    <Button bsSize="xsmall">Score</Button>
               </ButtonGroup> 
               <Nav pullRight>
                  <Button bsStyle="success" bsSize="xsmall">Add new post</Button>
              </Nav>
        </Panel.Body>
        </Panel>

            );
          }
        }

export default ListPanel;
