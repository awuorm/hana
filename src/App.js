import React from 'react';
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import {StyledApp} from "./styles";
import Home from './components/Home';

function App() {
  return (
    <StyledApp>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
    </StyledApp>
  );
}

export default App;
