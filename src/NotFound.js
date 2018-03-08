import React, { Component } from 'react';
import MainContainer from './MainContainer';

// Declare your Component here
class NotFound extends Component{
  render(){
    return (
        <div>
            <MainContainer>
            <h2>ERROR - Requested view not found!</h2>
            </MainContainer>
        </div>
      );
  }
}

// export the component by name
export default NotFound;