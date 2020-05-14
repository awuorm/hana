import React from 'react';
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import {StyledApp} from "./styles";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ReactNotification from "react-notifications-component";
import PrivateRoute from "../src/utils/PrivateRoute";

function App() {
  return (
    <StyledApp>
      <ReactNotification />
      <Route exact path="/" component={LandingPage}/>
      <PrivateRoute path="/home" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </StyledApp>
  );
}

export default App;
