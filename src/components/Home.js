import React from "react";
import { StyledHome } from "../styles";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <StyledHome>
      {" "}
      <div>
        <h1>
          <s>hana</s>
        </h1>
        <input placeholder="Search" />
      </div>
      <div className="create-button">
        <NavLink to="/create">+</NavLink>
      </div>
    </StyledHome>
  );
};

export default Home;
