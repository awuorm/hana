import React, { useState } from 'react';
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import {StyledApp} from "./styles";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ReactNotification from "react-notifications-component";
import PrivateRoute from "../src/utils/PrivateRoute";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";


function App(props) {
  console.log(props);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  });
  return (
    <StyledApp>
      <ReactNotification />
      <Route exact path="/" component={LandingPage}/>
      <PrivateRoute path="/home" component={Home}/>
      <Route path="/register" render={props => (
          <Register
            {...props}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        )}/>
      <Route path="/login" render={props => (
          <Login
            {...props}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        )}/>
    </StyledApp>
  );
}

export default connect(state => state, actionCreators)(App);

