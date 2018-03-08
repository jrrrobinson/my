import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Declare your Component here
class NavBar extends Component{
  render(){
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">BTI425 - Jacob Robinson - Project Portal</Link>
          </div>
        </div>
        </nav>
    );
  }
}

// export the component by name
export default NavBar; 

