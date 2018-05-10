import React, { Component } from 'react';
import { Panel,DropdownButton,MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { sortPosts } from '../actions';


class ListPanel extends Component {

  render() {
    const postsSortBy = this.props.postsSortBy;
    const sortPosts = this.props.sortPosts;
    return (
      <div>
            <Panel>
              <Panel.Body>
                        <DropdownButton
                          bsSize="xsmall"
                          title={"Sort By: " + postsSortBy}
                          id="dropdown-size-extra-small"
                          onSelect={function(evt){sortPosts(evt)}}
                        >
                            <MenuItem eventKey="timestamp">timestamp</MenuItem>
                            <MenuItem eventKey="voteScore">vote score</MenuItem>
                        </DropdownButton>

              </Panel.Body>
            </Panel>



</div>
            );
          }
        }

      const mapStateToProps = (state) => ({
          postsSortBy:state.postsSortBy
          })
          
      const mapDispatchToProps = (dispatch) => {
          return{
            sortPosts: (postsSortBy) => dispatch(sortPosts(postsSortBy))
            }
          }

export default connect(mapStateToProps,mapDispatchToProps)(ListPanel);

