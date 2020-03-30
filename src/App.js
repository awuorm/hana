import React from 'react';
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import {StyledApp} from "./styles";

function App() {
  return (
    <StyledApp>
      <Route path="/" component={LandingPage}/>
    </StyledApp>
  );
}

export default App;
