import React from 'react';
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import {StyledApp} from "./styles";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <StyledApp>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </StyledApp>
  );
}

export default App;
