import React, { Component } from 'react';
import NavBar from "./NavBar";
import SideBar from "./SideBar";

// Declare your Component here
class MainContainer extends Component{
  render(){
    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                <SideBar highlight={this.props.sidebar} />
                    <div className=" col-sm-9 col-sm-offset-3 col-md-11 col-md-offset-1 main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

// export the component by name
export default MainContainer; 