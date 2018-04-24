import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class TopNavigation extends Component {
  render() {
    return (

            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Readable</Link>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavItem eventKey={1} href="/cat1">
                  Cat 1
                </NavItem>
                <NavItem eventKey={2} href="/cat2">
                  Cat 2
                </NavItem>
                <NavItem eventKey={1} href="/cat3">
                  Cat 3
                </NavItem>
                <NavItem eventKey={2} href="/cat4">
                  Cat 4
                </NavItem>
              </Nav>

            </Navbar>


            );
          }
        }

export default TopNavigation;
