import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import { connect } from 'react-redux';
import {loadCategories/*,setActiveCategory*/} from '../actions';
import {fetchCategoriesAPI} from '../utils/api.js';

class TopNavigation extends Component {
  
  componentDidMount(){ 
  
    //Set Active category if user used browser address bar
    //this.props.setActiveCategory(this.props.match.params.category);
   
    fetchCategoriesAPI().then(categories => {
      this.props.loadCategories(categories);
    });
  }

  render() {
        const { categories } = this.props;
        return (
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <Link to="/">Readable</Link>
                    </Navbar.Brand>
                  </Navbar.Header>
                  <Nav>
                    {categories.map((category) => (
                    <LinkContainer to={`/${category.name}`} key={category.name}>
                      <NavItem className="nav-link">{category.name}</NavItem>
                    </LinkContainer> 
                    ))
                    }
                  </Nav>
                </Navbar>
                );
              }
            }

      const mapStateToProps = (state) => ({
          categories:state.categories
         // selectedCategory:state.selectedCategory
          })
          
      const mapDispatchToProps = (dispatch) => {
          return{
            loadCategories: (categories) => dispatch(loadCategories(categories))
            //setActiveCategory: (selectedCategory) => dispatch(setActiveCategory(selectedCategory))
            }
          }

export default connect(mapStateToProps,mapDispatchToProps)(TopNavigation);

/*
    const mapStateToProps = (state) => ({
        selectedCategory:state.selectedCategory
        })
        
    const mapDispatchToProps = (dispatch) => {
        return{
            setActiveCategory: (selectedCategory) => dispatch(setActiveCategory(selectedCategory))
          }
        }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
*/








