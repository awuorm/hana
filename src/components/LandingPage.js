import React from "react";
import { StyledLandingPage } from "../styles";
import {NavLink} from "react-router-dom";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <h1>
        <s>hana</s>
      </h1>
      <div className="words">
          <p>Different languages have different words for things. 
The word hana means happiness in Arabic, the number
one in Korean, work in Hawaiian, flower in Japanese, 
moon  in Albanian and to lack in Kiswahili.hana is a place where your words can live without you.</p>
 <NavLink className="get-started" to="/home">Get started</NavLink>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
