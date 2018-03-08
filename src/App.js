import React, { Component } from 'react';
import MainContainer from './MainContainer';
import Overview from "./Overview";
import Projects from "./Projects";
import Teams from "./Teams";
import Employees from "./Employees";
import NotFound from './NotFound';

import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <MainContainer>
        <Switch>
            <Route exact path='/' render={() => (
                <Overview />
            )}/>
            <Route exact path='/projects' render={() => (
                <Projects  />
            )}/>
            <Route exact path='/teams' render={() => (
                <Teams  />
            )}/>
            <Route exact path='/employees' render={() => (
                <Employees  />
            )}/>
            <Route render={() => (
                <NotFound />
            )}/>
        </Switch>
        </MainContainer>
    );
  }
}

export default App;